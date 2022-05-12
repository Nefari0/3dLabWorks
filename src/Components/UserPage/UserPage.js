import axios from 'axios';
import Home from '../Home/Home'
// import CreateProject from './CreateProject';
import { Switch, Route } from 'react-router-dom'
import Project from '../FeaturedProjects/Project'
import { Component, lazy } from 'react'
import { Link } from 'react-router-dom';
import './UserPage.css'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer';
import { updateUser } from '../../ducks/userReducer'
import Collections from './Collections'
import UserInfo from './UserInfo'
import {app} from '../../base'
import { addNewModel } from './../../ducks/firebaseReducer'
import SecurityTest from './SecurityTest'
import MobileLogin from '../MobileLogin/MobileLogin'
import Loading from '../Loading/Loading';
import AdminPage from '../AdminPage/AdminPage';
import EditUserInfo from './EditUserInfo';
import Table from './../Games/Table'
import MyConnection from './Friends/MyConnections';
import ConnectRequests from './Friends/ConnectRequests';
import DisplayFriends from './Friends/DisplayFriends';
import GameInvite from './Friends/GameInvite'; // notice to indicate invite to play game
import PhotoAlbum from './PhotoAlbum/PhotoAlbum';
import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket(`ws://127.0.0.1:8000`); // production
const client = new W3CWebSocket(`ws://165.227.102.189:8000`); // build

const db = app.firestore()


class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state ={

            // -- this will change when new photo is added -- //
            currentPhoto:null,

            items:[],
            user:{},
            friends:[],
            requests:[],
            showUserInfo:true,
            showCollections:true,
            showAdminPage:false,
            showCreateProject:false,
            showEditUserInto:false,
            showGames:false,
            showFriends:false,
            profilePic:null,
            userName:null,
            isLoading:false,
            setPermission:true,
            challengeUser:null, // challenge this your to game
            currentGame:null,
        }
        this.handleCollections = this.handleCollections.bind(this)
        this.hideView = this.hideView.bind(this)
        this.resetView = this.resetView.bind(this)
        this.pleaseLogin = this.pleaeLogin.bind(this)
        this.setIsLoading = this.setIsLoading.bind(this)
        this.deleteFromFirebase = this.deleteFromFirebase.bind(this)
        this.getUserID = this.getUserID.bind(this)
        this.receiveInvite = this.receiveInvite.bind(this)
    }

    componentDidMount(){
        this.receiveInvite()
        this.setState({currentGame:this.getUniqueID()})
    }

    componentDidUpdate() {
        const { id,photo } = this.props.user.user
        this.props.updateUser()
        if(this.state.friends.length < 1 && id != undefined){
            axios.get(`/api/join/friends/${id}`).then(res => this.setState({friends:res.data}))   
        }
    }

    changeGameID = (confirm,val) => {
        if(confirm === true){this.setState({currentGame:val})} else {this.setState({challengeUser:null})}
        
    }

    receiveInvite = () => {
        client.onopen = () => {
        }
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            const { id } = this.props.user.user
            
            if(dataFromServer.type === 'gameInvite' && dataFromServer.gameInformation.to === id) {

                this.setState({challengeUser:dataFromServer})

                // console.log('invite send to server',typeof(dataFromServer.to), typeof(id))
            }
        }
    }

    sendInvite = (gameInformation) => {
        console.log('hit send invite')
        const { id } = this.props.user.user
        client.send(JSON.stringify({type: 'gameInvite',gameInformation:gameInformation}))
    }
    
    // --- get user_id from props. this is used to invite other users to join an activity --- //
    getUniqueID = () => {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + '-' + s4();
      };
    getUserID = (to) => {
        console.log('hit "sendUserId')
        const { id,photo } = this.props.user.user
        var { currentGame } = this.state
        // var newChallenge = [...challengeUser]
        // const gameID = this.getUniqueID()
        var gameInformation = {
            to:to,
            from:id,
            isAccepted:false,
            photo:photo,
            gameID:currentGame

        }
        // this.setState({currentGame:gameID})
        this.sendInvite(gameInformation)
    }


    setIsLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
    }

    resetView(){
        this.setState({
            showCollections:true,
            showUserInfo:false,
            showEditUserInto:false,
            showCreateProject:false,
            showGames:false,
            showFriends:false,
        })
    }

    handleCollections(params){
        this.setState({isView:'isCollections'})
        console.log(this.state.isView)
    }
    
    
    hideView(params) {
        this.receiveInvite()
        this.resetView()
        switch (params) {
            case 'showUserInfo':
                this.setState({ showUserInfo : !this.state.showUserInfo })
                break;
            case 'showCollections':
                this.setState({ showCollections : true })
                break;
            case 'showAdminPage':
                this.setState({ showAdminPage : !this.state.showAdminPage})
                break;
            case 'showEditUserInfo':
                this.setState({ showEditUserInto : true})
                break;
            case 'showCreateProject':
                this.setState({showCreateProject : true})
                break;
            case 'showGames':
                this.setState({showGames:true})
                break;
            case 'showFriends':
                this.setState({ showFriends : true, showCollections:false})
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

    handleFriends(){
        this.setState({isView:'isFriends'})
    }

    pleaeLogin(){
        alert('please log in')
    }

    render(){
        const { showCollections,showUserInfo,items,isLoading,showCreateProject,showEditUserInto,showGames,showFriends,friends,requests,challengeUser,currentGame,currentPhoto  } = this.state
        const { isLoggedIn } = this.props.user
        const { photo,auth,name,is_admin,background_url,user,email,id} = this.props.user.user

    return(
        <div>
            {!isLoggedIn ? (<Route path="/" component={Home}/>) : (
            <div className="user-page">
            {isLoading ? <Loading/> : null}
            <section className="column1">
                <img src={background_url} className='background-photo' />
                   {challengeUser === null ? null: <GameInvite challengeUser={challengeUser} changeGameID={this.changeGameID} hideView={this.hideView} /> }
                <div className="portrait">
                    <img className="profile-photo" 
                    src={photo}
                    alt="photo"/>
                    <h2 className="portrait-row" style={{textTransform:'none'}} >{this.props.user.user.user}</h2>
                    <div className='portrait-row' style={{flexWrap:'wrap',justifyContent:'center',width:'300px'}}>
                        <div className='user-buttons' style={{marginTop:'10px'}} onClick={() => this.hideView('showEditUserInfo')}><p style={{marginTop:'5px'}}  >Edit Profile</p></div>
                        <div className='user-buttons' style={{marginTop:'10px'}}  onClick={() => this.hideView('showCreateProject')} ><p style={{marginTop:'5px'}} >Create</p></div>
                        <div className='user-buttons' style={{marginTop:'10px'}}  onClick={() => this.hideView('showGames')} ><p style={{marginTop:'5px'}} >Games</p></div>
                        <div className='user-buttons' style={{marginTop:'10px'}} onClick={() => this.hideView('showFriends')} ><p style={{marginTop:'5px'}} >Friends</p></div>
                        <div className='user-buttons' style={{marginTop:'10px'}} onClick={() => this.hideView('showCollections')} ><p style={{marginTop:'5px'}} >Collections</p></div>
                    </div>
 
                    <div className='portrait-row' >{is_admin ? (<Link to={'/admin'} style={{ textDecoration:'none' }}><p className='go-to-admin'>admin</p></Link>) : null}  </div>

                </div>
                <UserInfo user={user} name={name} email={email} id={id} setIsLoading={this.setIsLoading} deleteFromFirebase={this.deleteFromFirebase} />

            </section>

            <section className="column2">

                {showGames === true ? <Table hideView={this.hideView} challengeUser={challengeUser} client={client} currentGame={currentGame} /> : null}

                {showEditUserInto === true ? <EditUserInfo setIsLoading={this.setIsLoading} resetView={this.resetView} updateUser={this.props.updateUser} /> : null}

                {showCollections === true ? <Collections setIsLoading={this.setIsLoading} photo_url={photo} resetView={this.resetView} showCreateProject={showCreateProject}/> : null} 

                {showFriends === true ? <DisplayFriends id={id} getUserID={this.getUserID} /> : null }
                
                {/* <PhotoAlbum /> */}
            </section>
        </div>
        )}
        </div>
        )}
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{getProjects,updateUser,addNewModel})(UserPage)


/*
userinfo
models/colections
friends
edit
groups
*/