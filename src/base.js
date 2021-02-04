
// import { app } from "firebase-admin";
// import * as firebase from "firebase/app"
import firebase from 'firebase/app'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB6ImzEUWfnyXD6bcpNEN8ktaMSfos8Js0",
    authDomain: "depot-7bb3e.firebaseapp.com",
    projectId: "depot-7bb3e",
    storageBucket: "depot-7bb3e.appspot.com",
    messagingSenderId: "38861699624",
    appId: "1:38861699624:web:b1d9abfce822f3a4d2531d",
    measurementId: "G-DSTFFPFHLD"
  };

export const app = firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var ref = database.ref('name')

// the code below will push object to realitime database-for testing purposes

// var data = {
//     item1:"stuff",
//     item2:"morestuff"
// }

// ref.push(data)