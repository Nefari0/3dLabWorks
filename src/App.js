
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
// import EditModel from './Components/UserPage/EditModel' // for testing. will not be rendered in this component
// import FirebaseTest from './Components/FirebaseTest';
// import Three from './Components/Three'
// import ThreeView from './Components/Three'
// import DemoScene from './Components/Three/ThreeView'; // testing react 3

function App() {
  
  return (
    <HashRouter>
    <div className="App">
        {/* <FirebaseTest/> */}
        <Header/>
        {/* <EditModel/> */}
        {/* <DemoScenes /> */}
        {routes}
        {/* <GroupPage/> */}

    </div>
    </HashRouter>
  );
}

export default App;
