
import './MessageBoard.css'
import { loginUser,registerUser,updateUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import axios from 'axios'
import { Component } from 'react'
import MyMessage from './MyMessage'
import CreateMessage from './CreateMessage'
import SelectedMessage from './SelectedMessage'
import EndOfMessages from './EndOfMessages'
import React from 'react'
// import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket(`ws://127.0.0.1:8000`);


 class MessageBoard extends Component {
     constructor() {
         super()
         
         this.state = {
             messages:[],
             newMessages:[],
             thread:[],
             conversation_id:null,
             gotMessages:false,
             expand:false,
             openContacts:true,
            }
            this.getMessages = this.getMessages.bind(this)
            this.openMessage = this.openMessage.bind(this)
            this.expandMessageBoard = this.expandMessageBoard.bind(this)
            this.setOpenContacts = this.setOpenContacts.bind(this)
            // this.sendToSockets = this.sendToSockets.bind(this)
            // this.getConnected = this.getConnected.bind(this)
        }

    componentDidMount() {
        this.props.updateUser()
     }

     componentDidUpdate(prevProps,prevState) {
         const { gotMessages } = this.state
         const { id } = this.props.user.user
         if(gotMessages === false && id != undefined){
             this.setState({gotMessages:true})
             this.getMessages()
         }
     }

     // --- sockets --- //
    //  getConnected = (input) => {
    //      const { conversation_id } = this.state
    //      console.log(`got connected to ${input}`,input === conversation_id)
    //     const contentDefaultMessage = "default message as string"
    //     client.onopen = () => {
    //      console.log('WebSocket Client Connected');
    //     };
    
    //       client.onmessage = (message) => {
        
    //       const dataFromServer = JSON.parse(message.data);
    //       console.log('got reply',dataFromServer)
    //       if (dataFromServer.type === 'message' && input === conversation_id ) {
    //         this.openMessage(conversation_id)
    //         this.setState((State) =>
    //         ({newMessages:[...this.state.newMessages,
    //         {
    //           msg: dataFromServer.msg,
    //           user:dataFromServer.user
    //         }]
    
    //       }))
    //         console.log('is messaged')
    //       }
    //       }
    // }
    // sendToSockets = (text,conversation_id) => {
    //     const { messages,loggedInUser } = this.state
    //     const { user } = this.props.user.user
    //     client.send(JSON.stringify({type: "message",msg:text,user:user, conversation_id:conversation_id}))
    // };
    //     // --------------- //
                

     getMessages = () => {
        const { id } = this.props.user.user
        const user_id = id
        axios.get(`/api/conversations/${user_id}`).then(res => {
            this.setState({
                messages:res.data,
                loggedInUser:id
            })
        })
     }

     openMessage = async (conversation_id) => {
        // this.getConnected(conversation_id)
        await axios.get(`/api/conversation/messages/get/${conversation_id}`).then(res => {
            this.setState({
                thread:res.data,
                conversation_id:conversation_id,
                openContacts:false
            })
        })
        // await this.getConnected(conversation_id)
     }

     expandMessageBoard = () => {
         this.setState({expand:!this.state.expand})
     }

     setOpenContacts = () => {
         this.setState({openContacts:!this.state.openContacts})
     }

     render() {

        const { messages,thread,selectedMessage,conversation_id,expand,gotMessages,openContacts,newMessages } = this.state
        const { id } = this.props.user.user
        const { isLoggedIn } = this.props.user
        const user_id = id
        
        const mappedMessageUsers = messages.map(el => {
            return <SelectedMessage key={el.conversation_id} selectedMessage={conversation_id} conversation_name={el.conversation_name} conversation_id={el.conversation_id} openMessage={this.openMessage} photo_url={el.photo_url} user_name={el.user_name} getConnected={this.getConnected} />
        })

        const mappedThread = thread.map(el => {
            return <MyMessage key={el.message_id} loggedInUser={user_id} content={el.content} user_id={el.user_id} photo_url={el.photo_url} user_name={el.user_name} date_created={el.date_created} />
        })

        const mappedNewMessages = newMessages.map(el => {
            const { counter } = this.state
            return <p style={{color:'#555'}}>{el.msg} </p>
        })

        if(isLoggedIn === false && gotMessages === true){
            this.setState({
                messages:[],
                thread:[],
                conversation_id:null,
                gotMessages:false,
                expand:false,
            })
        }

        return(<div>
            {isLoggedIn ?  (!expand ? <div className='message-board-closed' onClick={() => this.expandMessageBoard()} >

            <svg xmlns="http://www.w3.org/2000/svg" style={{width:'25px',opacity:'.5'}} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>

            </div> :
            <div className='message-board ' >
            <div className='message-board-title'>

            <svg className="close-message-box" onClick={() => this.expandMessageBoard()} style={{color:'#fff', height:'35px',width:'35px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>


            <h2 style={{textTransform:'none'}} >Messages</h2>

            <svg className={`toggle-contacts ${openContacts ? true : 'toggle-contacts-rotated'}`} style={{ height:'35px',width:'35px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor" onClick={() => this.setOpenContacts()}>
                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
            </svg>

            </div>
            
            <section>
                <div className='dash' >{mappedMessageUsers}</div>
            </section>

            <section className={`mobile-dash ${openContacts ? false : 'mobile-dash-closed'}`}>
                <div >{openContacts === true ? mappedMessageUsers : null }</div>
            </section>

            <section className=' board'>
                <div >
                    {mappedThread}
                {/* {mappedNewMessages} */}
                </div>
                
            </section>
            <section>
                {/* <div className='text-input-container'><CreateMessage id='EndOfMessages' conversation_id={this.state.conversation_id} user_id={user_id} openMessage={this.openMessage} sendToSockets={this.sendToSockets} /></div> */}
                <div className='text-input-container'><CreateMessage id='EndOfMessages' conversation_id={this.state.conversation_id} user_id={user_id} openMessage={this.openMessage} /></div>

            </section>
        </div>) : null}
        </div>)
     }
 }

 function mapStateToProps(reduxState) {
     return reduxState
 }

 export default connect(mapStateToProps, {updateUser})(MessageBoard)