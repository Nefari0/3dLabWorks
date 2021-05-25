const firebase = require('firebase/app');
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
  const app = firebase.initializeApp(firebaseConfig);
//   console.log('this is firebase app', app)
//   const db = app.firestore()
module.exports = {
    fireTestHere: async (req,res) => {
        const text = 'text from fb controller'
        const response = await text
        return res.status(200).send(text)
    }

    // addFile: async (req,res) => {
    //     const { id, name, description,firebase_url, firebase_url01} = req.body
    //     console.log(req.body) // pending deletion
    //     console.log('this is fireApp',db) // pending deletion
    //     const storageRef = await db.storage().ref()
    //     const fileRef = storageRef.child(file.name)
    //         console.log("send to space function")
    //         console.log("storageRef items",storageRef)
    //         console.log("fileRef items",fileRef)
    //     fileRef.put(file).then(() => {
    //         console.log('uploaded file',file)
    //     })
    //     // this.setFileUrl(await fileRef.getDownloadURL()) // this code is used to retrieve file access url. this function can only be used on front end and needs to be adapted to backend
    //     // console.log('this is file fileRef',fileRef)
    //     // console.log('this is file storageRef',storageRef.child())
    // }
}