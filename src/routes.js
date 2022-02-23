import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
// import FeaturedProjects from './Components/FeaturedProjects/FeaturedProjects'
import GroupPage from './Components/GroupPage/GroupPage'
import UserPage from './Components/UserPage/UserPage'
import Header from './Components/Header/Header'
import Explore from './Components/Explore/Explore'
import About from './Components/About/About'
import Sites from './Components/SiteLinks/Sites'
import Register from './Components/Register/Register'
import ProjectDetail from './Components/FeaturedProjects/ProjectDetail'
import SecurityTest from './Components/UserPage/SecurityTest'
import Agreement from './Components/Register/Agreement'
import AdminPage from './Components/AdminPage/AdminPage'
import Messages from './Components/Messages/Messages'
import ViewUser from './Components/ViewUser/ViewUser'
import MessageBoard from './Components/UserMessages/MessageBoard'
// import ViewUserV2 from './Components/AdminPage/ViewUserV2'


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={Header} /> */}
        {/* <Route path="/home" component={Home} /> */}
        {/* <Route path="/viewuser/:user_id" component={ViewUser} /> */}
        <Route path="/viewuser/:user_id" component={ViewUser} />
        <Route path="/explore" component={Explore} />
        <Route path="/group" component={GroupPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/about" component={About} />
        <Route path="/sites" component={Sites} />
        <Route path="/register" component={Register} />
        <Route path="/projectdetails/:model_id" component={ProjectDetail} />
        <Route path="/securitytest" component={SecurityTest} />
        <Route path="/header" component={Header} />
        <Route path="/agreement" component={Agreement} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/messages/:user_id" component={Messages} />
        <Route path="/usermessages" component={MessageBoard} />
    </Switch>
)