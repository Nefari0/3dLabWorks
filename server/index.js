
require('dotenv').config({ path: __dirname + '/../.env'});
const express = require('express')
const path = require('path')

// require('dotenv').config(); // original
const axios = require('axios')
const session = require('express-session')
const massive = require('massive')
const authController = require('./controllers/authController')
const userController = require('./controllers/userController')
const projectsController = require('./controllers/projectsController');
const deletedDataController = require('./controllers/deletedDataController')
const projectImageController = require('./controllers/projectImageController')
const messageController = require('./controllers/messageController')
const connectionController = require('./controllers/connectionController')
const photoController = require('./controllers/photoController')
// const { projectManagement, auth } = require('firebase-admin');
const { addProject } = require('./controllers/projectsController');
const docsController = require('./controllers/docsController')
const trackingController = require('./controllers/trackingController');
const fireController = require('./controllers/fireController');
const videoController = require('./controllers/videoController');
// const trackingController = require('./controllers/trackingController')
const webSocketServer = require('websocket').server;
const http = require('http');

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();

// --- pending removal --- //
app.use(express.json());
// ------------------------// 

app.use(
    session({
            resave: true,
            saveUninitialized: true,
            secret: SESSION_SECRET,
            cookie: { maxAge: 1000 * 60 * 60 * 24 },
        }),
    )

// track deleted firebase items ... this feature will probably not be used
app.post('/api/firedata', deletedDataController.addUrl) //Post request / body / http://localhost:4000/api/firedata/ / { "user_id":"12","firebase_url":"firebase_url"}
// test firebase backend with endpoints
app.get('/api/firedata/test', fireController.fireTestHere) // tests fireController
app.post('/api/firedata/add', fireController.addFile) // add file to firebase via backend controller

// -- auth end points -- //
app.post('/auth/register',authController.register)
app.post('/auth/password', authController.changePassword)
app.post('/auth/login',authController.login)
app.get('/auth/logout',authController.logout)
app.get('/auth/update/session',authController.userData)
app.post('/auth/browser/login',authController.browserLogin)

// // user end points //
app.get('/api/users/all', userController.getUsers)
app.get('/api/users/:user_id', userController.getUser) //Post request / body / http://localhost:4000/api/users/update/12 / { "photo_url":"new_url" }
app.post('/api/users/update/photo/', userController.updateUserPhoto) // update profile picture
app.post('/api/user/update/background',userController.updateBackgroundPhoto)
app.post('/api/user/update/info/:user_id', userController.updateInfo)

// projects endpoints
app.get('/api/projects/all', projectsController.getAllProjects)
app.get('/api/projects/:user_id', projectsController.getUserProject) //GET request / params / http://localhost:4004/api/projects/12 --- this code works
app.get('/api/projects/id/:model_id', projectsController.getProjectById) // GET request / params / http://localhost:4000/api/projects/id/4 --- this code works
app.post('/api/project/edit/name',projectsController.editProjectName)
app.post('/api/project/update/file', projectsController.updateFile)
app.post('/api/project/post',projectsController.addProject)
app.get('/api/project/join', projectsController.joinProject)
app.get('/api/featured/join', projectsController.getFeatured)
// --- images end points
app.get('/api/project/photos/get/:model_id',projectImageController.getImages)
app.post('/api/project/photos/put',projectImageController.putImage)
app.post('/api/projects/photos/delete/',projectImageController.deletePhoto)
app.post('/api/projects/photos/change/main/',projectImageController.changeMainPhoto)
app.get('/api/photos/albums/:user_id', photoController.getAlbums)
app.get('/api/album/contents/:album_id', photoController.getAlbumPhotos)
app.get('/api/user/photos/get/:user_id', photoController.getAllPhotos)
app.post('/api/photos/add/new', photoController.uploadPhoto)
app.post('/api/photos/delete/', photoController.deletePhotoByUrl)
// ------------------------------- //
// --- likes end points
app.post('/api/project/getLike', projectsController.getLikeById)
app.post('/api/projects/like', projectsController.addLike) //Get request / req.body / http://localhost:4004/api/project/like / {"user_id":"12","model_id":"5"}
app.get('/api/like/update/:model_id', projectsController.updateProjectLikes)
app.get('/api/like/count:id', projectsController.getLikeCount)
// app.post('/api/project/edit/', )
app.delete('/api/project/delete/:model_id', projectsController.deleteProject)
// --- comment end points
app.get('/api/comments/all', projectsController.getComments)
app.post('/api/comments/create', projectsController.createComment)
app.get('/api/comments/id/:model_id', projectsController.getModelComments)
app.delete('/api/comments/user/delete/:comment_id',projectsController.deleteUserComment)
// --- view user / user page
app.get('/api/user/projects/get/:user_id',projectsController.getUserAndProjects)

// --- documents and admin edits ---- //
app.get('/api/documents/all', docsController.getAll)
app.get('/api/documents/about', docsController.getAbout)
app.get('/api/documents/general', docsController.getGeneral)
app.post('/api/docs/post', docsController.editGeneral)
app.post('/api/docs/hide', docsController.hideDoc)
app.get('/api/links/get', docsController.getAllLinks)

// contact admin endpoints
app.get('/api/messages/user', messageController.getUserMessages)
app.post('/api/messages/user/add', messageController.createMessage)
app.post('/api/messages/user/delete',messageController.deleteMessage)

// site messaging system endpoints
app.get('/api/conversations/:user_id',messageController.getConversationByUserId) // gets all user conversations
app.get('/api/conversation/messages/get/:conversation_id',messageController.getConversationMessagesById) // get all user messages in user's conversations
app.post('/api/conversation/new',messageController.createNewConversation)
app.post('/api/conversation/user/new', messageController.sendMessage)
app.post('/api/conversation/exists',messageController.checkExisting)
app.post('/api/messages/read',messageController.markAsRead)

//  ---- user connection endpoints ---- //
app.post('/api/friends/add',connectionController.addFriend)
app.get('/api/friends/:user_id', connectionController.getUserFriends) 
app.get('/api/join/friends/:user_id',connectionController.getFriendInfo)
app.get('/api/get/pending/friends/:user_id', connectionController.getPendingFriends) // unconfirmend requests
app.post('/api/accept/connection',connectionController.confirmRequest)
app.post('/api/remove/connection',connectionController.removeConnection)
app.post('/api/get/friend/status', connectionController.getFriendStatus) // get connection status between two users

// --- Track User / Browser --- //
app.post('/api/track/new/',trackingController.addNewBrowse)
app.post('/api/track/increment/',trackingController.addNewMount)
app.get('/api/track/getall/',trackingController.getAllTraffic)
app.post('/api/track/login/click/',trackingController.loginClicks)
app.post('/api/track/about/click/',trackingController.aboutClicks)
app.post('/api/track/projects/click/',trackingController.projectsClicks)
app.post('/api/tracking/setIsAdmin',trackingController.setIsAdmin) // tracks browsers used in development

// --- Video Endpoints --- //
app.get('/api/videos/get',videoController.getVids)
app.get('/api/videos/featured',videoController.getFeaturedVids)

// --- Memos Endpoints --- //
app.get('/api/memos/get/all',docsController.getAllMemos)
app.post('/api/memo/update',docsController.updateMemo)

// -----server ------
app.use( express.static( __dirname + '/../build'));
app.get('*', (req,res) => {
res.send(path.join(__dirname, '../build/index.html'))
})
// -------------------


// --- websocket for messanger ------------------------ //
const webSocketsServerPort = 8002;

// Spinning the http server and the websocket server.
const server = http.createServer();
server.listen(webSocketsServerPort, () => console.log(`sockets connected on ${webSocketsServerPort}`));
const wsServer = new webSocketServer({
  httpServer: server
});

const clients = {};

// -- This code generates unique userid for everyuser. -- //
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

wsServer.on('request', function(request) {
    var userID = getUniqueID();
    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Recieved Message: ',message.utf8Data);
        }

        for(key in clients) {
            clients[key].sendUTF(message.utf8Data);
        }
    })

    });

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then((dbInstance) => {
    app.set('db',dbInstance);
    console.log('db connected');
    app.listen(SERVER_PORT, () => console.log(`server ready on ${SERVER_PORT}`))
});