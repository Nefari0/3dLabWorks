
require('dotenv').config();
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authController = require('./controllers/authController')
const userController = require('./controllers/userController')
const projectsController = require('./controllers/projectsController');
const { projectManagement } = require('firebase-admin');
const { addProject } = require('./controllers/projectsController');
// const cors = require('cors');

//--------firedtore-------//
// const admin = require('firebase-admin');
// const firebase = require('firebase/app');
// const serviceAccount = require('./serviceAccounts/depot-7bb3e-6e66a08bdc56.json');
// const { firestore } = require('firebase-admin');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// let fireStore = admin.firestore();


// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();

// admin.initializeApp();

// const db = admin.firestore();

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

// // auth end points //
app.post('/auth/register',authController.register)
app.post('/auth/login',authController.login)
app.get('/auth/logout',authController.logout)

// // user end points //
app.get('/api/users/all', userController.getUsers)
// app.post('api/users/update/:user_id')

// projects endpoints

app.get('/api/projects/all', projectsController.getAllProjects)
app.get('/api/projects/:user_id', projectsController.getUserProject)
app.get('/api/projects/join', projectsController.getOwnerName)
app.post('/api/project/post',projectsController.addProject)
// app.post('/api/project/edit/', )
app.delete('/api/project/delete/:model_id', projectsController.deleteProject)

// // storage access end points //
// app.get('/api/assets/getall')
// app.post('api/asset/upload/add:item_id')
// app.delete('/api/asset/delete/item/:item_id')

// // messaging end points //
// app.get('/api/messages/getall')
// app.post('/api/messages/send')
// app.delete('/api/messages/delete')

    

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