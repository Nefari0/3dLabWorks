import axios from 'axios';
import Home from '../Home/Home'
// import CreateProject from './CreateProject';
import { Switch, Route } from 'react-router-dom'
import Project from '../FeaturedProjects/Project'
import { Component, lazy } from 'react'
import { Link } from 'react-router-dom';
// import './UserPage.css'
import '../UserPage/UserPage.css'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer';
import { updateUser } from '../../ducks/userReducer'
// import Collections from '../../Collections'
import Collections from '../UserPage/Collections';
// import UserInfo from './UserInfo'
import UserInfo from '../UserPage/UserInfo';
import {app} from '../../base'
// import SecurityTest from './SecurityTest'
import MobileLogin from '../MobileLogin/MobileLogin'
import Loading from '../Loading/Loading';
import AdminPage from './AdminPage';
// import EditUserInfo from './EditUserInfo';

const ViewUserV2 = (props) => {

    
}

// export default ViewUserV2