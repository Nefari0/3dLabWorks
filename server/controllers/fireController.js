const firebase = require('firebase/app');
const admin = require('firebase-admin');
// const fireController = require('./controllers/fireController');
const firebaseConfig = {
    apiKey: "AIzaSyB6ImzEUWfnyXD6bcpNEN8ktaMSfos8Js0",
    authDomain: "depot-7bb3e.firebaseapp.com",
    projectId: "depot-7bb3e",
    storageBucket: "depot-7bb3e.appspot.com",
    messagingSenderId: "38861699624",
    appId: "1:38861699624:web:b1d9abfce822f3a4d2531d",
    measurementId: "G-DSTFFPFHLD"
  };
//   const app = firebase.initializeApp(firebaseConfig);
//   console.log('this is firebase app', app)
//   const db = app.firestore()
module.exports = {
    fireTestHere: async (req,res) => {
        // const text = 'text from fb controller'
        // const text = app
        // const response = await text[0]
        const response = 'the string to read is...'
        return res.status(200).send(response).catch(err => consols.log(err))
    },

    addFile: async (req,res) => {
        const app = firebase.initializeApp(firebaseConfig);
        // const { id, name, description,firebase_url, firebase_url01} = req.body
        const { imageFile } = req.body
        console.log(req.body) // pending deletion
        const storageRef = await app.storage().ref()
        // console.log('this is fireApp',db) // pending deletion
        const fileRef = await storageRef.child(imagefile.name)
            console.log("send to space function")
            console.log("storageRef items",storageRef)
            console.log("fileRef items",fileRef)
        fileRef.put(file).then(() => {
            console.log('uploaded file')
        })
        const fileUrl = await fileRef.getDownloadURL()
        return res.status(200).send(fileUrl)
        // this.setFileUrl(await fileRef.getDownloadURL()) // this code is used to retrieve file access url. this function can only be used on front end and needs to be adapted to backend
        // console.log('this is file fileRef',fileRef)
        // console.log('this is file storageRef',storageRef.child())
    }
}