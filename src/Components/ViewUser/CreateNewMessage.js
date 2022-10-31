import { Component } from 'react'
import './CreateNewMessage.css'
import '../UserMessages/CreateMessage.css'
import '../UserMessages/MessageBoard.css'
// import CreateMessage from '../UserMessages/CreateMessage'
// import MyMessage from '../UserMessages/MyMessage'
import OneMessage from './OneMessage'
import SVG from '../SVG'
import { connect } from 'react-redux'
import { loginUser,registerUser,updateUser } from '../../ducks/userReducer'
import axios from 'axios'
import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket(`ws://127.0.0.1:8000`); // production
// const client = new W3CWebSocket(`ws://165.227.102.189:8000`); // build
const client = new W3CWebSocket(`wss://madmodels3d.com`); // production

class CreateNewMessage extends Component {
    constructor() {
        super()

        this.state = {
            currentConversationId:null,
            newMessages:[],
            text:'',
           
        }
        this.handleText = this.handleText.bind(this)
        this.executeSendMessage = this.executeSendMessage.bind(this)
    }

    componentDidMount() {
        const { currentUserMessage } = this.props
        this.getConnected()
    }

        // --- sockets --- //
    getConnected = async (input) => {

        const { user_id,conversation_id } = this.props
        const { id } = this.props.user.user

       client.onopen = () => {
        console.log('WebSocket Client Connected');
       };
   
         client.onmessage = (message) => {
             
            const dataFromServer = JSON.parse(message.data);
            const { from,to } = dataFromServer
        
            if (dataFromServer.type === 'message' && dataFromServer.conversation_id === conversation_id ) {
                this.props.checkForExistingMessage(id,user_id)
            }
         }
   }

   sendToSockets = (text,conversation_id,toUser) => {
        const { messages,loggedInUser } = this.state
        const { user,photo,id } = this.props.user.user
        client.send(JSON.stringify({
            type:"message",
            conversation_id:conversation_id,
            msg:text,
            to:toUser,
            user:user,
            from:id,
            photo:photo
        }))
    }; 

    handleText(prop,val) {
        this.setState({
            [prop]:val
        })
    }

    executeSendMessage = async () => {
        const { text } = this.state
        const { id,photo } = this.props.user.user
        const to_user = this.props.user_id
        const user_id = id
        const { isLoggedIn } = this.props.user
        const { currentUserMessage } =  this.props
        if (isLoggedIn != false && id != undefined) {
            if (currentUserMessage === null ){
                await axios.post('/api/conversation/new',{user_id,to_user,text}).then(res => {
                this.sendToSockets(text,res.data.conversation_id,to_user)
                })
            } else {
                const conversation_id = currentUserMessage[0].conversation_id
                await axios.post('/api/conversation/user/new',{conversation_id,user_id,text,to_user})
                this.sendToSockets(text,conversation_id,to_user,user_id)
                this.setState({text:''})
            }
        }
    }

    processMessages = () => {
        const { currentUserMessage,user_id } = this.props
        if (currentUserMessage != null) {
            const mappedMessages = currentUserMessage.map(el => {
                return <OneMessage key={el.message_id} loggedInUser={user_id} content={el.content} user_id={el.user_id} photo_url={el.photo_url} user_name={el.user_name} date_created={el.date_created} />
            })
            return(mappedMessages)
        }
    }
    
    render() {
        
        const { user_name } = this.props

        return(<div className='create-message-container'>
                    <h4 className='message-board-title' style={{width:'105%',left:'-5px',textTransform:'none'}} >
                        {user_name}
                        <div style={{position:'absolute',right:'0px',top:'0px'}} onClick={() => this.props.openMessageBox()} >
                            <SVG params={'largeX'} fill={'#fff'} />
                        </div>
                    </h4>
                 
                    <section className="create-message-input" >
                        <textarea className='message-input' style={{width:'250px',marginLeft:'10px',maxHeight:'50px'}} value={this.state.text} name="text" rows="5" cols="50" wrap="soft" onChange={e => this.handleText('text',e.target.value)} > </textarea>
                        <button style={{position:'relative',width:'50px'}} onClick={() => this.executeSendMessage()} >
                            <div><SVG params={'send'} fill={'none'} stroke={'#fff'} style={{position:'absolute',top:'-10',left:'-10'}} /></div>
                        </button>
                        {/* <svg onClick={() => this.executeSendMessage()} xmlns="http://www.w3.org/2000/svg" className="send-message-button" style={{marginRight:'10px',marginLeft:'5px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg> */}
                    </section>

                    <section className='thread-layout'>
                        <div>{this.processMessages()}</div>
                    </section>
        </div>)
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {updateUser})(CreateNewMessage)