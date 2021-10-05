import axios from 'axios';
import Home from '../Home/Home'
import { Switch, Route } from 'react-router-dom'
import Project from '../FeaturedProjects/Project'
import { Component } from 'react'
// import { Link } from 'react-router-dom';
import './UserPage.css'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer';
import Collections from './Collections'
import UserInfo from './UserInfo'
import {app} from '../../base'
import SecurityTest from './SecurityTest'
import MobileLogin from '../MobileLogin/MobileLogin'

const db = app.firestore()


class UserPage extends Component {
    constructor() {
        super();

        this.state ={
            items:{},
            user:{},
            showUserInfo:true,
            showCollections:false
        }
        this.handleCollections = this.handleCollections.bind(this)
        this.hideView = this.hideView.bind(this)
        this.resetView = this.resetView.bind(this)
        this.pleaseLogin = this.pleaeLogin.bind(this)
    }

    componentDidMount(){
        axios.get('/api/projects/all').then(res =>
            this.setState({ ...this.state,items:res.data}))        
    }

    resetView(){
        this.setState({
            showCollections:false,
            showUserInfo:false
        })
    }

    handleCollections(params){
        this.setState({isView:'isCollections'})
        console.log(this.state.isView)
    }
    
    
    hideView(params) {
        this.resetView()
        console.log(params);
        switch (params) {
            case 'showUserInfo':
                this.setState({ showUserInfo : !this.state.showUserInfo })
                break;
            case 'showCollections':
                this.setState({ showCollections : !this.state.showCollections })
                break;
            default:
                break;
        }
    }

    // handleUserInfo(){

    // }

    // handleGroups(){

    // }

    handleFriends(){
        this.setState({isView:'isFriends'})
    }

    pleaeLogin(){
        alert('please log in')
    }

    render(){
        const { showCollections,showUserInfo,items } = this.state
        const { isLoggedIn } = this.props.user
        const { photo,auth } = this.props.user.user

        // const mappedItems = items.map((el,i,all) => {
        //     return <Collections key={el.model_id} />
        // })

        // const { first_name } =this.props.user.user.user
    return(
        <div>
            {/* {!isLoggedIn ? (<div className="blue-screen-of-death">{alert("please log i")}</div>) : ( */}
            {!isLoggedIn ? (<Route path="/" component={Home}/>) : (
        <div className="user-page">
            <div className="column1">
                <div className="portrait">
                <img className="model-img profile-photo" 
                src={photo}
                alt="photo"/>
                {/* <svg className="icon-big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg> */}

                {/* <input */}
                {/* // type="file" */}
                {/* // accept="image/pne,image/jpeg" */}
                {/* // onChange={e => this.handlePhoto(e)} */}
                {/* > */}
                    {/* add photo */}
                {/* </input> */}
                <h2 className="name-container" >{this.props.user.user.name}</h2>
                </div>
                <ul>
                    <li><div onClick={() => this.hideView('showUserInfo')} className="profile-buttons">user info</div></li>
                    <li><div onClick={() => this.hideView('showCollections')} className="profile-buttons">collections</div></li>
                    <li><div className="profile-buttons">groups</div></li>
                    <li><div className="profile-buttons">friends</div></li>
                    {/* <li><div className="profile-buttons">stuff</div></li> */}
                </ul>
            </div>
            <section className="column2">

            <div className="show-user-small">
                <div className="portrait">
                <img className="model-img profile-photo" 
                src={photo}
                alt="photo"/>
                {/* <svg className="icon-big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg> */}

                {/* <input */}
                {/* // type="file" */}
                {/* // accept="image/pne,image/jpeg" */}
                {/* // onChange={e => this.handlePhoto(e)} */}
                {/* > */}
                    {/* add photo */}
                {/* </input> */}
                <h2 className="name-container" >{this.props.user.user.name}</h2>
                </div>
                <ul>
                    <li><div onClick={() => this.hideView('showUserInfo')} className="profile-buttons">user info</div></li>
                    <li><div onClick={() => this.hideView('showCollections')} className="profile-buttons">collections</div></li>
                    <li><div className="profile-buttons">groups</div></li>
                    <li><div className="profile-buttons">friends</div></li>
                    {/* <li><div className="profile-buttons">stuff</div></li> */}
                </ul>
            </div>

                {showCollections && <Collections username={this.props.user}/>}
                
                {showUserInfo && <UserInfo user={this.props.user}/>}

            </section>
        </div>)}
        </div>
        )}
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{getProjects})(UserPage)

// export default UserPage




/*
userinfo
models/colections
friends
edit
groups
*/