
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
// import Three from './Components/Three'

function App() {
  
  return (
    <HashRouter>
    <div className="App">
        <Header/>
        {/* <Three /> */}
        {routes}
        {/* <GroupPage/> */}

    </div>
    </HashRouter>
  );
}

export default App;
