
// --- from hosting video --- //
require('dotenv').config({ path: __dirname + '/../.env'}); // for production?
const express = require('express')
const path = require('path')

require('dotenv').config(); // original
const axios = require('axios')
const session = require('express-session')
const massive = require('massive')
const authController = require('./controllers/authController')
const userController = require('./controllers/userController')
const projectsController = require('./controllers/projectsController');
const deletedDataController = require('./controllers/deletedDataController')
const projectImageController = require('./controllers/projectImageController')
const messageController = require('./controllers/messageController')
// const { projectManagement, auth } = require('firebase-admin');
const { addProject } = require('./controllers/projectsController');
const docsController = require('./controllers/docsController')
// const baseBackend = require('./../src/baseBackend')
// const path = require('path');
// const { default: reducer } = require('../src/ducks/modelsReducer'); // auto added
// const cors = require('cors');
// const { base } = require('./serviceAccounts/base')

//-------- firedtore / firebase -------//
//  i am attempting to move all these code blocks to a seperate module/controller
// const fireApp = require('./serviceAccounts/base') // will probably need to create controller for this


// import firebase from 'firebase/app'
const firebase = require('firebase/app')
// import "firebase/storage"
// const admin = require('firebase-admin');
// import baseBackend from './baseBackend'

const firebaseConfig = {
    apiKey: "AIzaSyB6ImzEUWfnyXD6bcpNEN8ktaMSfos8Js0",
    authDomain: "depot-7bb3e.firebaseapp.com",
    projectId: "depot-7bb3e",
    storageBucket: "depot-7bb3e.appspot.com",
    messagingSenderId: "38861699624",
    appId: "1:38861699624:web:b1d9abfce822f3a4d2531d",
    // appId: "1:38861699624:web:88599df2268262afd2531d",
    measurementId: "G-DSTFFPFHLD"
  };
  const fireApp = firebase.initializeApp(firebaseConfig);
  fireFile = async (input) => {
    const storageRef = fireApp.storage().ref()
    const fileRef = storageRef.child(input.name)
    await fileRef.put(input)
    console.log('image loaded')
    return (fileRef)
}

// const admin = require('firebase-admin');
// const firebase = require('firebase/app');
const fireController = require('./controllers/fireController');
// const { applyMiddleware } = require('redux');
// const firebaseConfig = {
//     apiKey: "AIzaSyB6ImzEUWfnyXD6bcpNEN8ktaMSfos8Js0",
//     authDomain: "depot-7bb3e.firebaseapp.com",
//     projectId: "depot-7bb3e",
//     storageBucket: "depot-7bb3e.appspot.com",
//     messagingSenderId: "38861699624",
//     appId: "1:38861699624:web:b1d9abfce822f3a4d2531d",
//     measurementId: "G-DSTFFPFHLD"
//   };
// -------------------------------------------- // 
//   const fireApp = firebase.initializeApp(firebaseConfig);

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
            cookie: { maxAge: 1000 * 60 * 5 },
        }),
    )

// track deleted firebase items ... this feature will probably not be used
app.post('/api/firedata', deletedDataController.addUrl) //Post request / body / http://localhost:4000/api/firedata/ / { "user_id":"12","firebase_url":"firebase_url"}
// test firebase backend with endpoints
app.get('/api/firedata/test', fireController.fireTestHere) // tests fireController
app.post('/api/firedata/add', fireController.addFile) // add file to firebase via backend controller


// thingiverse endpoints
app.get('/users')

// // auth end points //
app.post('/auth/register',authController.register)
app.post('/auth/password', authController.changePassword)
app.post('/auth/login',authController.login)
app.get('/auth/logout',authController.logout)
app.get('/auth/update/session',authController.userData)
app.post('/auth/getInfo',authController.getInfo)
// app.post('./auth/login/merge',authController.loginLike)

// // user end points //

app.get('/api/users/all', userController.getUsers)
app.get('/api/users/:user_id', userController.getUser) //Post request / body / http://localhost:4000/api/users/update/12 / { "photo_url":"new_url" }
app.post('/api/users/update/:user_id', userController.updateUser)
// save session:
// app.post()

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
// --- view user / user page
app.get('/api/user/projects/get/:user_id',projectsController.getUserAndProjects)

// --- documents and admin edits ---- //
app.get('/api/documents/all', docsController.getAll)
app.get('/api/documents/about', docsController.getAbout)
app.get('/api/documents/general', docsController.getGeneral)
// app.post('/api/general/post', docsController.editGeneral)
app.post('/api/docs/post', docsController.editGeneral)
app.post('/api/docs/hide', docsController.hideDoc)
// app.post('/api/about/post', docsController.editAbout)
app.get('/api/links/get', docsController.getAllLinks)

// contact admin endpoints
app.get('/api/messages/user/:user_id', messageController.getUserMessages)
app.post('/api/messages/user/add', messageController.createMessage)
app.post('/api/messages/user/delete',messageController.deleteMessage)

// site messaging system endpoints
app.get('/api/conversations/:user_id',messageController.getConversationByUserId) // gets all user conversations
app.get('/api/conversation/messages/get/:conversation_id',messageController.getConversationMessagesById) // get all user messages in user's conversations
app.post('/api/conversation/new',messageController.createNewConversation)
app.post('/api/conversation/user/new', messageController.sendMessage)
app.post('/api/conversation/exists',messageController.checkExisting)


// // storage access end points //
// app.get('/api/assets/getall')
app.post('api/asset/upload/add',fireFile)
// app.delete('/api/asset/delete/item/:item_id')

// // messaging end points //
// app.get('/api/messages/getall')
// app.post('/api/messages/send')
// app.delete('/api/messages/delete')

// -----server ------
app.use( express.static( __dirname + '/../build'));
app.get('*', (req,res) => {
res.send(path.join(__dirname, '../build/index.html'))
})
// -------------------

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