
// --- from hosting video --- //
require('dotenv').config({ path: __dirname + '/../.env'}); // for production?
const path = require('path')
// require('dotenv').config(); // original

const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authController = require('./controllers/authController')
const userController = require('./controllers/userController')
const projectsController = require('./controllers/projectsController');
const deletedDataController = require('./controllers/deletedDataController')
const { projectManagement } = require('firebase-admin');
const { addProject } = require('./controllers/projectsController');
// const baseBackend = require('./../src/baseBackend')
// const path = require('path');
// const { default: reducer } = require('../src/ducks/modelsReducer'); // auto added
// const cors = require('cors');
// const { base } = require('./serviceAccounts/base')

//-------- firedtore / firebase -------//
//  i am attempting to move all these code blocks to a seperate module/controller
// const fireApp = require('./serviceAccounts/base') // will probably need to create controller for this

// const admin = require('firebase-admin');
// const firebase = require('firebase/app');
const fireController = require('./controllers/fireController');
// const firebaseConfig = {
//     apiKey: "AIzaSyB6ImzEUWfnyXD6bcpNEN8ktaMSfos8Js0",
//     authDomain: "depot-7bb3e.firebaseapp.com",
//     projectId: "depot-7bb3e",
//     storageBucket: "depot-7bb3e.appspot.com",
//     messagingSenderId: "38861699624",
//     appId: "1:38861699624:web:b1d9abfce822f3a4d2531d",
//     measurementId: "G-DSTFFPFHLD"
//   };
//   const fireApp = firebase.initializeApp(firebaseConfig);
// -------------------------------------------- // 

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();
app.use(express.json());

app.use(
    session({
            resave: true,
            saveUninitialized: false,
            secret: SESSION_SECRET
        }),
    )

// track deleted firebase items ... this feature will probably not be used
app.post('/api/firedata', deletedDataController.addUrl) //Post request / body / http://localhost:4000/api/firedata/ / { "user_id":"12","firebase_url":"firebase_url"}
// test firebase backend with endpoints
app.get('/api/firedata/test', fireController.fireTestHere) // tests fireController
// app.post('/api/firedata/add', fireController.addFile) // add file to firebase via backend controller


// thingiverse endpoints
app.get('/users')

// // auth end points //
app.post('/auth/register',authController.register)
app.post('/auth/password', authController.changePassword)
app.post('/auth/login',authController.login)
app.get('/auth/logout',authController.logout)
// app.post('/auth/update/:user_id',authController.update)

// // user end points //

app.get('/api/users/all', userController.getUsers)
app.get('/api/users/:user_id', userController.getUser) //Post request / body / http://localhost:4000/api/users/update/12 / { "photo_url":"new_url" }
app.post('/api/users/update/:user_id', userController.updateUser)

// projects endpoints

app.get('/api/projects/all', projectsController.getAllProjects)
app.get('/api/projects/:user_id', projectsController.getUserProject) //GET request / params / http://localhost:4004/api/projects/12 --- this code works
app.get('/api/projects/id/:model_id', projectsController.getProjectById) // GET request / params / http://localhost:4000/api/projects/id/4 --- this code works
// app.post('api/projects/user',projectsController.getUserProject)
app.post('/api/project/post',projectsController.addProject)
app.get('/api/project/join', projectsController.joinProject)
app.post('/api/projects/like', projectsController.addLike) //Get request / req.body / http://localhost:4004/api/project/like / {"user_id":"12","model_id":"5"}
app.get('/api/like/:count', projectsController.getLikeCount)
app.get('/api/featured/join', projectsController.getFeatured)
// app.post('/api/project/edit/', )
app.delete('/api/project/delete/:model_id', projectsController.deleteProject)
app.get('/api/comments/all', projectsController.getComments)
app.get('/api/comments/id/:model_id', projectsController.getModelComments)

// // storage access end points //
// app.get('/api/assets/getall')
// app.post('api/asset/upload/add:item_id')
// app.delete('/api/asset/delete/item/:item_id')

// // messaging end points //
// app.get('/api/messages/getall')
// app.post('/api/messages/send')
// app.delete('/api/messages/delete')

// -----server ------
app.use(express.static(__dirname + '/../build'))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
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