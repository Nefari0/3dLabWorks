import axios from 'axios';
import UserProject from './UserProject'
import { Component } from 'react'
import '../UserPage/UserPage.css'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/userReducer'
import UserInfo from '../UserPage/UserInfo';
import Loading from '../Loading/Loading';
import CreateNewMessage from './CreateNewMessage';
import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket(`ws://127.0.0.1:8000`); // production
const client = new W3CWebSocket(`ws://165.227.102.189:8000`); // build

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
        this.pleaseLogin = this.pleaseLogin.bind(this)
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
            this.setState({
                user:res.data,
            }))
            // this.checkForExistingMessage()
        }
        
        componentDidUpdate() {
            if(this.state.friendShipInfo === null){this.getConnectionStatus()}
    }

// -- check if loggedin user is already connected to this user -- /
    getConnectionStatus = async () => {
        const { id } = this.props.user.user
        // console.log('getting status',id)
        const { isLoggedIn } = this.props.user
        const { user_id } = this.props.match.params
        if(id != undefined && isLoggedIn === true) {
            await axios.post('/api/get/friend/status',{id,user_id}).then(res => this.setState({friendShipInfo:res.data}))
            this.checkForExistingMessage(id,user_id)
        }
    }

    checkForExistingMessage = async (id,user_id) => {
        // await axios.post('/api/conversation/exists',{id,user_id}).then(res => this.setState({currentUserMessage:res.data})).catch(err => console.log('err',err))
        await axios.post('/api/conversation/exists',{id,user_id}).then(res => {
            // console.log(res.data)
            const { messages, conversation_id } = res.data
            this.setState({
                currentUserMessage:messages,
                conversation_id:conversation_id
            })
        })
    }

    openMessageBox = () => {
            const { isLoggedIn } = this.props.user
            const { id } = this.props.user.user
            const { currentUserMessage } = this.state
        
            if(id != undefined && isLoggedIn === true){
            this.setState({openMessageBox:!this.state.openMessageBox})
        } else {this.pleaseLogin()}
    }

    sendConnectInvite = () => {
        // --- this is for sending connection requests --- //
        const { id } = this.props.user.user
        const { isLoggedIn } = this.props.user
        const { user_id } = this.state.user[0]
        const friend_id = user_id
        const no = false
        // console.log('hit invite',id,friend_id)
        this.setState({friendShipInfo:true})
        if(id != undefined && isLoggedIn === true){
            axios.post('/api/friends/add',{id,friend_id,no}).then().catch(err => console.log(err))
            this.sendToSocket()
        } else {this.pleaseLogin()}
    }
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
        // const { user_id } = this.props.match.params
        axios.get(`/api/user/projects/get/${user_id}`).then(res => {
            this.setState({...this.state,items:res.data})
        })
    }
    projectIsLiked(projectId,userLike) {
        try {
            return(userLike.filter(el => el.model_id === projectId)[0].model_id === projectId)
          } catch (error) {
            // console.log('user does not like this project',error);
          }
    }

    setIsLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
    }

    handleFriends(){
        this.setState({isView:'isFriends'})
    }

    pleaseLogin(){
        alert('please log in')
    }

    render(){
        const { items,isLoading,user,currentUserMessage,friendShipInfo,conversation_id } = this.state
        const { id } = this.props.user.user
        const { user_id } = this.props.match.params

        const mappedNewMessage = user.map(el => {
            return <CreateNewMessage key={el.user_id} user_id={el.user_id} user_name={el.user_name} conversation_id={conversation_id} currentUserMessage={currentUserMessage} pleaeLogin={this.pleaseLogin} openMessageBox={this.openMessageBox} sendToSocket={this.sendToSocket} checkForExistingMessage={this.checkForExistingMessage} />
        })

        const mappedUserName = user.map(el => {
            return <h4 className="portrait-row" style={{textTransform:'none'}} key={el.user_id} >{el.user_name}</h4>
        })

        // const mappedUserInfo = user.map(el => {
        //     // return <UserInfo  key={el.user_id} user={el.user_name} name={el.first_name} email={el.email} />
        //     return <UserInfo  key={el.user_id} user={el.user_name} name={el.first_name} email={null} />
        // })

        const mappedBackground = user.map(el => {
           return <img src={el.background_url} key={el.user_id} className='background-photo' />
        })

        const mappedProfilePhoto = user.map(el => {
            return <img className="profile-photo" src={el.photo_url} key={el.user_id} alt="photo"/>
        })

        const mappedProjects = items.map(el => {
            return <UserProject key={el.model_id} model_id={el.model_id} data={el} projectIsLiked={this.projectIsLiked} />
        })

    return(
        <div>
            <div className="user-page">
            {this.state.openMessageBox ? mappedNewMessage : null}
            {isLoading ? <Loading/> : null}
            <section className="column1">
                {mappedBackground}
                <div className="portrait">

                    {mappedProfilePhoto}
                    {mappedUserName}
 
                    <div className='portrait-row'>
                        {parseInt(user_id) === id ? true : <div className='user-buttons' style={{marginTop:'30px'}} onClick={() => this.openMessageBox()} >
                            <p style={{marginTop:'3px'}} >Message</p>
                        </div>}

                        {this.props.user.isLoggedIn === true && this.state.friendShipInfo != true ? 
                        <div className='user-buttons' style={{marginTop:'30px'}} onClick={() => this.sendConnectInvite()} >
                            <p style={{marginTop:'3px'}} >Connect</p>
                        </div>
                       : null}
                    </div>


                </div>

                {/* {mappedUserInfo} */}

            </section>

            <section className="column2" >

                <div className='collections'>
                    {mappedProjects}
                </div>

            </section>
        </div>
        {/* )} */}
        </div>
        )}
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{updateUser})(ViewUser)