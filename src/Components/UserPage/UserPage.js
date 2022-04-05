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
import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket(`ws://127.0.0.1:8000`); // production
const client = new W3CWebSocket(`ws://165.227.102.189:8002`); // build

const db = app.firestore()


class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state ={
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
        // this.stateInput = this.stateInput.bind(this)
        // this.openCreate = this.openCreate.bind(this)
    }

    componentDidMount(){
        this.receiveInvite()
        this.setState({currentGame:this.getUniqueID()})
        
        // console.log('is user already here?',this.props.user.user)
        // axios.get('/api/projects/all').then(res =>
            // this.setState({ ...this.state,items:res.data}))
            // axios.get(`/api/friends/${this.props.user.user.id}`).then(res => this.setState({friends:res.data})) 
    }

    componentDidUpdate() {
        const { id } = this.props.user.user
        if(this.state.friends.length < 1 && id != undefined){
            // console.log('here')
            axios.get(`/api/join/friends/${id}`).then(res => this.setState({friends:res.data}))   
        }
        // if(this.state.setPermission === true){
        //     this.setState({...this.state,user:this.props.user.user,setPermission:false})
        // }
        // if(this.state.setPermission === true && id != undefined) {
        //     axios.get(`/api/get/pending/friends/${id}`).then(res2 => this.setState({requests:res2.data})).catch(err => {
        //         this.setState({requests:[]})
        //     })
        // }
        // this.setState({setPermission:false})
    }

    // thisUpdateUser() {
    //     this.props.updateUser()

    // }

    changeGameID = (confirm,val) => {
        if(confirm === true){this.setState({currentGame:val})} else {this.setState({challengeUser:null})}
        
    }

    receiveInvite = () => {
        client.onopen = () => {
        }
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            const { id } = this.props.user.user
            
            // console.log('hit,,,data',dataFromServer)
            if(dataFromServer.type === 'gameInvite' && dataFromServer.gameInformation.to === id) {
                // console.log('connected to invite',id)
                // alert('should be on both')
                this.setState({challengeUser:dataFromServer})
            // if(dataFromServer.type === 'gameIvite') {
                console.log('invite send to server',typeof(dataFromServer.to), typeof(id))
            }
        }
    }

    sendInvite = (gameInformation) => {
        console.log('hit send invite')
        const { id } = this.props.user.user
        
        // var sendInfo = {
        //     "id":id,
        //     "to":to
        // }
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

    // openCreate() {
    //     this.setState({showCreateProject:!this.state.showCreateProject})
    // }

    // openGames() {
    //     this.setState({showGames:!this.state.showGames})
    // }

    // handleDisplayItem(param) {
    //     switch(param) {
    //         case 'showCreateProject':
    //             return(
    //                 this.setState({showCreateProject:!this.state.showCreateProject})
    //             )
    //     }
    // }

    render(){
        const { showCollections,showUserInfo,items,isLoading,showCreateProject,showEditUserInto,showGames,showFriends,friends,requests,challengeUser,currentGame } = this.state
        const { isLoggedIn } = this.props.user
        const { photo,auth,name,is_admin,background_url,user,email,id } = this.props.user.user

        // --- unconfirmed requests from other users ---- //
        // const pendingRequest = friends.filter(el => {
        //     return el.is_accepted === false && el.frien_id === id
        // })
        // const mappedPending = pendingRequest.map(el => {
        //     return <div></div>
        // })

        // --- all accepted requests ---- //
        // const allFriends = friends.filter(el => {
        //     return el.is_accepted === true
        // })
        // const mappedConnections = friends.map(el => {
        //     return <MyConnection key={el.user_id} photo_url={el.photo_url} user_id={el.user_id} user_name={el.user_name} />
        // })

        // const mappedRequests = requests.map(el => {
        //     return <ConnectRequests key={el.user_id} photo_url={el.photo_url} user_name={el.user_name} user_id={el.user_id} my_id={id} removeConnection={this.removeConnection} acceptRequest={this.acceptRequest} />
        // })

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

                {showEditUserInto === true ? <EditUserInfo setIsLoading={this.setIsLoading} resetView={this.resetView} /> : null}

                {showCollections === true ? <Collections username={this.props.user} setIsLoading={this.setIsLoading} photo_url={photo} hideView={this.hideView} showCreateProject={showCreateProject}/> : null} 

                {showFriends === true ? <DisplayFriends id={id} getUserID={this.getUserID} /> : null }

                {/* {showFriends === true ? mappedRequests : null} */}
                {/* {showFriends === true ? mappedConnections : null} */}

            </section>
        </div>
        )}
        </div>
        )}
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{getProjects,updateUser})(UserPage)


/*
userinfo
models/colections
friends
edit
groups
*/