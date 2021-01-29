import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './ducks/store'
// import * as firebase from 'firebase';

// var Config = {
//   apiKey: "AIzaSyB6ImzEUWfnyXD6bcpNEN8ktaMSfos8Js0",
//   authDomain: "depot-7bb3e.firebaseapp.com",
//   projectId: "depot-7bb3e",
//   storageBucket: "depot-7bb3e.appspot.com",
//   messagingSenderId: "38861699624",
//   appId: "1:38861699624:web:b1d9abfce822f3a4d2531d",
//   measurementId: "G-DSTFFPFHLD"
// };

// firebase.initializeApp(Config)
// firebase.analytics();
// var firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
