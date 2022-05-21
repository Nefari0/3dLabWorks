import { Component } from 'react'
import './CreateNewMessage.css'
import '../UserMessages/CreateMessage.css'
import '../UserMessages/MessageBoard.css'
// import CreateMessage from '../UserMessages/CreateMessage'
// import MyMessage from '../UserMessages/MyMessage'
import OneMessage from './OneMessage'
import { connect } from 'react-redux'
import { loginUser,registerUser,updateUser } from '../../ducks/userReducer'
import axios from 'axios'
import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket(`ws://127.0.0.1:8000`); // production
const client = new W3CWebSocket(`ws://165.227.102.189:8000`); // build

class CreateNewMessage extends Component {
    constructor() {
        super()

        this.state = {
            currentConversationId:null,
            newMessages:[],
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

        const { conversation_id } = this.props

       client.onopen = () => {
        console.log('WebSocket Client Connected');
       };
   
         client.onmessage = (message) => {
             
           const dataFromServer = JSON.parse(message.data);

        //    console.log('got reply',dataFromServer.conversation_id, conversation_id)

         if (dataFromServer.type === 'message' && dataFromServer.conversation_id === conversation_id ) {

           this.setState((State) =>
           ({newMessages:[...this.state.newMessages,
           {
             msg: dataFromServer.msg,
             user:dataFromServer.user
           }]
   
         }))
        //    console.log('is messaged',conversation_id)
         }
         }
   }

    handleText(prop,val) {
        this.setState({
            [prop]:val
        })
    }

    executeSendMessage = async () => {
        const { text } = this.state
        const { id,photo } = this.props.user.user
        const user_id = id
        const { isLoggedIn } = this.props.user
        const { currentUserMessage } =  this.props
        // console.log('here is id',conversation_id)
        if (isLoggedIn != false && id != undefined) {
        if (currentUserMessage === null ){
            await axios.post('/api/conversation/new',{user_id,id,text})
        } else if (id != undefined && isLoggedIn != false){
            const conversation_id = currentUserMessage[0].conversation_id
            await axios.post('/api/conversation/user/new',{conversation_id,user_id,text,id})
            return client.send(JSON.stringify({type: "message",conversation_id:conversation_id,msg:text,to:user_id,photo:photo}))
        }
    }
        // const conversation = await axios.post('/api/conversation/new',{user_id,id,text})
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
        
        const { user_id,user_name } = this.props
        const { loggedInUser,currentUserMessage } = this.props
        const { newMessages } = this.state

        // const mappedNewMessage = newMessages.map(el => {
        //     return <OneMessage key={el.} />
        // })
        
        // const mappedMessage = currentUserMessage.map(el => {
        //     return <OneMessage key={el.message_id} loggedInUser={user_id} content={el.content} user_id={el.user_id} photo_url={el.photo_url} user_name={el.user_name} date_created={el.date_created} />
        // })

        return(<div className='create-message-container'>
                    <h4 className='message-board-title' style={{width:'105%',left:'-5px',textTransform:'none'}} >
                        Send message to {user_name}
                        <svg className="close-message-box" onClick={() => this.props.openMessageBox()} style={{color:'#fff', height:'35px',width:'35px',opacity:'60%',marginTop:'2px',marginBottom:'2px',right:'20px'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </h4>
                 
                    <section className="create-message-input" >
                        <textarea className='message-input' style={{width:'250px',marginLeft:'10px',maxHeight:'50px'}} value={this.state.text} name="text" rows="5" cols="50" wrap="soft" onChange={e => this.handleText('text',e.target.value)} > </textarea>
                    {/* <div className='portrait-row'> */}
                        {/* <div className='user-buttons' style={{marginTop:'30px'}}  ><p style={{marginTop:'10px'}} onClick={() => this.props.openMessageBox()} >Cancel</p></div> */}
                        {/* <div className='send-message-button' style={{marginTop:'30px'}}  ><p style={{marginTop:'10px'}} onClick={() => this.executeSendMessage()} >Send</p></div> */}
                        <svg onClick={() => this.executeSendMessage()} xmlns="http://www.w3.org/2000/svg" className="send-message-button" style={{marginRight:'10px',marginLeft:'5px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    {/* </div> */}
                    </section>
                    {/* {this.processMessages()} */}
                    <section className='thread-layout'>
                        <div>{this.processMessages()}</div>
                    {/* <section > */}
                    </section>
        </div>)
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {updateUser})(CreateNewMessage)