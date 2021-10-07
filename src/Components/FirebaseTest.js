import React, { Component } from 'react'
import firebase from 'firebase'
import {app} from '../../'
// import App from '../App';
const db = app.firestore()

export default class FirebaseTest extends Component {
    constructor() {
        super();

        this.state = {
            input:""
        }
        var firebaseConfig = {
            // apiKey: "AIzaSyB6ImzEUWfnyXD6bcpNEN8ktaMSfos8Js0",
            // authDomain: "depot-7bb3e.firebaseapp.com",
            // projectId: "depot-7bb3e",
            // storageBucket: "depot-7bb3e.appspot.com",
            // messagingSenderId: "38861699624",
            // appId: "1:38861699624:web:88599df2268262afd2531d",
            // measurementId: "G-NK63ZBN70W"
          };
        //   Initialize Firebase
        //   firebase.initializeApp(firebaseConfig);
        //   firebase.analytics();
        //   var firestore = firebase.firestore();  <---this


        //   const docRef = firestore.doc("")

    }

    handleInput(value) {
        this.setState({input:value})
    }
    render() {


        return(
            <div>
                <h2>this is FirebaseTest</h2>
                <input type="text" onChange={e => this.handleInput(e.target.value)}/><button>save</button>
            </div>
        )
    }
}

// project data below::

// Project name
// 3depot

// Project ID 
// depot-7bb3e

// Project number 
// 38861699624

// Default GCP resource location 
// Not yet selected

// Web API Key
// No Web API Key for this project

// Public settings
// These settings control instances of your project shown to the public

// Public-facing name 
// project-38861699624
