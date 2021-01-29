import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import FeaturedProjects from './Components/FeaturedProjects/FeaturedProjects'
import GroupPage from './Components/GroupPage/GroupPage'
import UserPage from './Components/UserPage/UserPage'
import Header from './Components/Header/Header'
import Explore from './Components/Explore/Explore'
import About from './Components/About/About'
import Sites from './Components/SiteLinks/Sites'


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/group" component={GroupPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/about" component={About} />
        <Route path="/sites" component={Sites} />
    </Switch>
)