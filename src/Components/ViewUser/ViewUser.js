import axios from 'axios';
import UserProject from './UserProject'
import Project from '../Project/Project';
import { Component } from 'react'
import '../UserPage/UserPage.css'
import { connect } from 'react-redux'
import { updateUser,remoteLogin } from '../../ducks/userReducer'
import UserInfo from '../UserPage/UserInfo';
import Loading from '../Loading/Loading';
import CreateNewMessage from './CreateNewMessage';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { socketString } from '../WS';
// const client = new W3CWebSocket(`ws://165.227.102.189:8000`); // build
const client = new W3CWebSocket(socketString); // production

class ViewUser extends Component {
    constructor(props) {
        super(props);

        this.state ={
            currentUserMessage:null,
            conversation_id:null,
            items:[],
            user:[],
            showUserInfo:true,
            showCollections:false,
            showAdminPage:false,
            showCreateProject:false,
            showEditUserInto:false,
            profilePic:null,
            userName:null,
            user_id:null,
            isLoading:false,
            setPermission:true,
            openMessageBox:false,
            friendShipInfo:null,
        }
        this.setIsLoading = this.setIsLoading.bind(this)
        this.openMessageBox = this.openMessageBox.bind(this)
        this.checkForExistingMessage = this.checkForExistingMessage.bind(this)
        this.getUserAndProjects = this.getUserAndProjects.bind(this)
    }

    componentDidMount(){
        const { user_id } = this.props.match.params
        this.props.updateUser()
        this.getUserAndProjects(user_id)
        axios.get(`/api/users/${user_id}`).then(res => 
            this.setState({user:res.data})
        )
    }
        
    componentDidUpdate() {
        // --- Clear all logged in user info upon logout --- //
        if(this.props.user.isLoggedIn === false && this.state.conversation_id != null){
            this.setState({
                currentUserMessage:null,
                conversation_id:null,
                friendShipInfo:null,
            })
        }
        // --- Fetch friendship info and messages upon login/mount --- //
        if(this.state.friendShipInfo === null){this.getConnectionStatus()}
    }

    // -- check if loggedin user is already connected to this user -- /
    getConnectionStatus = async () => {
        const { id } = this.props.user.user
        const { isLoggedIn } = this.props.user
        const { user_id } = this.props.match.params
        if(id != undefined && isLoggedIn === true) {
            await axios.post('/api/get/friend/status',{id,user_id}).then(res => this.setState({friendShipInfo:res.data})).catch(err => {console.log('no connection yet',err)})
            this.checkForExistingMessage(id,user_id)
        }
    }

    // --- Check for messages - Fetch if they exist --- //
    checkForExistingMessage = async (id,user_id) => {
        await axios.post('/api/conversation/exists',{id,user_id}).then(res => {
            const { messages, conversation_id } = res.data
            this.setState({
                currentUserMessage:messages,
                conversation_id:conversation_id
            })
        }).catch(err => console.log('there are no conversations yet',err))
    }

    // --- Logged in users can send/recieve messages from this voew --- //
    openMessageBox = () => {
        const { isLoggedIn } = this.props.user
        const { id } = this.props.user.user
        
        if(id != undefined && isLoggedIn === true){
            this.setState({openMessageBox:!this.state.openMessageBox})
        } else {this.props.remoteLogin(true)}
    }

    // --- This is for sending connection requests --- //
    sendConnectInvite = () => {
        const { id } = this.props.user.user
        const { isLoggedIn } = this.props.user
        const { user_id } = this.state.user[0]
        const friend_id = user_id
        const no = false
        this.setState({friendShipInfo:true})
        if(id != undefined && isLoggedIn === true){
            axios.post('/api/friends/add',{id,friend_id,no}).then().catch(err => console.log(err))
            this.sendToSocket()
        } else {this.props.remoteLogin()}
    }

    // --- Realtime connection request updates --- // 
    sendToSocket = () => {
        const { user_id } = this.props.match.params
        const { id,photo,user} = this.props.user.user
        const fromUser = {
            toUser:user_id,
            id:id,
            photo:photo,
            user:user
        }
        client.send(JSON.stringify({type:"new_friend",fromUser}))
    }

    getUserAndProjects(user_id) {
        axios.get(`/api/user/projects/get/${user_id}`).then(res => {
            this.setState({...this.state,items:res.data})
        })
    }

    projectIsLiked(projectId,userLike) {
        try {
            return(userLike.filter(el => el.model_id === projectId)[0].model_id === projectId)
        } catch (error) {}
    }

    setIsLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
    }

    handleFriends(){
        this.setState({isView:'isFriends'})
    }

    render(){
        const { items,isLoading,user,currentUserMessage,conversation_id } = this.state
        const { id } = this.props.user.user
        const { isLoggedIn } = this.props.user
        const { user_id } = this.props.match.params

        const mappedNewMessage = user.map(el => {
            return <CreateNewMessage key={el.user_id} user_id={el.user_id} user_name={el.user_name} conversation_id={conversation_id} currentUserMessage={currentUserMessage} pleaeLogin={this.pleaseLogin} openMessageBox={this.openMessageBox} sendToSocket={this.sendToSocket} checkForExistingMessage={this.checkForExistingMessage} />
        })

        const mappedUserName = user.map(el => {
            return <h4 className="portrait-row" style={{textTransform:'none'}} key={el.user_id} >{el.user_name}</h4>
        })

        const mappedBackground = user.map(el => {
           return <img src={el.background_url} key={el.user_id} className='background-photo' />
        })

        const mappedProfilePhoto = user.map(el => {
            return <img className="profile-photo" src={el.photo_url} key={el.user_id} alt="photo"/>
        })

        const mappedProjects = items.map(el => {
            return <Project key={el.model_id} model_id={el.model_id} data={el} projectIsLiked={this.projectIsLiked} />
        })

    return(
        
        <div className="user-page">

            {this.state.openMessageBox && isLoggedIn ? mappedNewMessage : null}

            {isLoading ? <Loading/> : null}

            <section className="column1">
                {mappedBackground}
                
                <div className="portrait">

                    {mappedProfilePhoto}
                    {mappedUserName}
 
                    <div className='portrait-row'>

                        {/* --- Users cannot message themselves --- */}
                        {parseInt(user_id) === id ? true : <p className='user-buttons' style={{marginTop:'30px',paddingTop:'3px'}} onClick={() => this.openMessageBox()} >Message</p>}
                        
                        
                        {/* --- Connection requests can only be send by logged in users who are not currently connected --- */}
                        {this.props.user.isLoggedIn === true && this.state.friendShipInfo != true ? 
                            <p className='user-buttons' style={{marginTop:'30px',paddingTop:'3px'}} onClick={() => this.sendConnectInvite()} >Connect</p>
                       : null}
                    </div>


                </div>

            </section>

            <section className="column2" >

                <div className='collections'>
                    {mappedProjects}
                </div>

            </section>
        </div>
        
        )}
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{updateUser,remoteLogin})(ViewUser)