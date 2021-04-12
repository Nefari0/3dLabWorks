
import firebase from 'firebase/app'
import "firebase/storage"
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

export const app = firebase.initializeApp(firebaseConfig);

// -------the code below controls firebase realtime database -----//

var database = firebase.database();

var ref = database.ref('name')

// the code below will push object to realtime database-for testing purposes

// var data = {
//     item1:"stuff",
//     item2:"morestuff"
// }

// ref.push(data)
