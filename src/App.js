
import './App.css';
import firebase from 'firebase'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import FeaturedProjects from './Components/FeaturedProjects/FeaturedProjects'
import UserPage from './Components/UserPage/UserPage'
import GroupPage from './Components/GroupPage/GroupPage'
import About from './Components/About/About'
import routes from './routes'
import { HashRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Explore  from './Components/Explore/Explore'
import AdminPage from './Components/AdminPage/AdminPage';
import MessageBoard from './Components/UserMessages/MessageBoard';
import Dash from './Components/Dash/Dash'
// import Message from './Components/Messages/Message';
import { useState,useEffect } from 'react'
// import BaseBackend from './BaseBackend';
// import EditModel from './Components/UserPage/EditModel' // for testing. will not be rendered in this component
// import FirebaseTest from './Components/FirebaseTest';
// import Three from './Components/Three'
// import ThreeView from './Components/Three'
// import DemoScene from './Components/Three/ThreeView'; // testing react 3

function App() {

  useEffect(() => {
    // -- testing firebase messaging -- //
    //   const messaging = firebase.app().messaging()
    // messaging
    //     .requestPermission()
    //     .then(() => {
    //       return messaging.getToken()
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
      
      // -------------------------------//
  })
  
  return (
    <HashRouter>
    <div className="App">
      {/* <AdminPage /> */}
        {/* <FirebaseTest/> */}
        <Header/>
        {/* <Dash/> */}
        <MessageBoard />
        {/* <Message /> */}
        {/* <EditModel/> */}
        {/* <DemoScenes /> */}
        {routes}
        {/* <GroupPage/> */}

    </div>
    </HashRouter>
  );
}

export default App;
