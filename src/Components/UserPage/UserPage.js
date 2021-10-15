import axios from 'axios';
import Home from '../Home/Home'
import { Switch, Route } from 'react-router-dom'
import Project from '../FeaturedProjects/Project'
import { Component, lazy } from 'react'
// import { Link } from 'react-router-dom';
import './UserPage.css'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer';
import { updateUser } from '../../ducks/userReducer'
import Collections from './Collections'
import UserInfo from './UserInfo'
import {app} from '../../base'
import SecurityTest from './SecurityTest'
import MobileLogin from '../MobileLogin/MobileLogin'
import Loading from '../Loading/Loading';

const db = app.firestore()


class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state ={
            items:{},
            user:{},
            showUserInfo:true,
            showCollections:false,
            profilePic:null,
            userName:null,
            isLoading:false
        }
        this.handleCollections = this.handleCollections.bind(this)
        this.hideView = this.hideView.bind(this)
        this.resetView = this.resetView.bind(this)
        this.pleaseLogin = this.pleaeLogin.bind(this)
        this.setIsLoading = this.setIsLoading.bind(this)
        this.deleteFromFirebase = this.deleteFromFirebase.bind(this)
    }

    componentDidMount(){
        axios.get('/api/projects/all').then(res =>
            this.setState({ ...this.state,items:res.data}))    
    }


    setIsLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
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

    deleteFromFirebase(url){
        const storageRef = app.storage().refFromURL(url)
        storageRef.delete().then(function deleted(params) {
            console.log('image deleted')
        }).catch(function (error) {
            console.log('there was an error')
        })
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
        const { showCollections,showUserInfo,items,isLoading } = this.state
        const { isLoggedIn } = this.props.user
        const { photo,auth,name } = this.props.user.user

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
            {isLoading ? <Loading/> : null}
                <div className="portrait">
                    <img className="model-img  profile-photo" 
                    src={photo}
                    alt="photo"/>
                    {/* <svg className="icon-big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> */}

                    <h2 className="name-container" >{this.props.user.user.name}</h2>
                    {/* <input
                    type="file"
                    accept="image/pne,image/jpeg"
                    onChange={e => this.handlePhoto(e)}
                    /> */}
                </div>
                <ul className="menu" >
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
                    <h2 className="name-container" >{this.props.user.user.name}</h2>
                    </div>
                    <ul className="menu" >
                        <li><div onClick={() => this.hideView('showUserInfo')} className="profile-buttons">user info</div></li>
                        <li><div onClick={() => this.hideView('showCollections')} className="profile-buttons">collections</div></li>
                        <li><div className="profile-buttons">groups</div></li>
                        <li><div className="profile-buttons">friends</div></li>
                    </ul>
                </div>

                {showCollections && <Collections username={this.props.user} setIsLoading={this.setIsLoading} />}
                
                {showUserInfo && <UserInfo user={this.props.user} setIsLoading={this.setIsLoading} deleteFromFirebase={this.deleteFromFirebase} />}

            </section>
        </div>)}
        </div>
        )}
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{getProjects,updateUser})(UserPage)

// export default UserPage




/*
userinfo
models/colections
friends
edit
groups
*/