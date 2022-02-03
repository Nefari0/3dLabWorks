// import { useState, useEffect } from 'react'
import './MessageBoard.css'
// import './Prototyping.css'
// import { Link } from 'react-router-dom'
import { loginUser,registerUser,updateUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
// import Agreement from '../Register/Agreement'
import axios from 'axios'
import { Component } from 'react'
import MyMessage from './MyMessage'
import CreateMessage from './CreateMessage'
import SelectedMessage from './SelectedMessage'
import EndOfMessages from './EndOfMessages'
// import { useRef } from 'react'
// import createRef from 'react'
import React from 'react'


 class MessageBoard extends Component {
     constructor() {
         super()
         
         this.state = {
             messages:[],
             thread:[],
             conversation_id:null,
             gotMessages:false,
             expand:false,
            }
            this.getMessages = this.getMessages.bind(this)
            this.openMessage = this.openMessage.bind(this)
            // this.getScrollLocations = this.getScrollLocations.bind(this)
            // this.scrollToBottom = this.scrollToBottom.bind(this)
        }
        // scrollToBottom = () => {
        //     this.messagesEndRef.scrollIntoView({ behavior: 'smooth' })
        // }
        // getScrollLocations() {
            //     const EndOfMessages = document.getElementById('EndOfMessages');
            //     EndOfMessages.scrollIntoView();
            //   }
            
    componentDidMount() {
        // const messagesEndRef = React.createRef()
        this.props.updateUser()
        // this.getMessages()
        // this.scrollToBottom()
     }
     componentDidUpdate() {
         const { gotMessages } = this.state
         const { id } = this.props.user.user
         if(gotMessages === false && id != undefined){
             this.setState({gotMessages:true})
             this.getMessages()
         }
     }

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

     openMessage = (conversation_id) => {
        axios.get(`/api/conversation/messages/get/${conversation_id}`).then(res => {
            this.setState({
                thread:res.data,
                conversation_id:conversation_id,
            })
        })
     }

     render() {

        const { messages,thread,selectedMessage,conversation_id,expand } = this.state
        const { id } = this.props.user.user
        const { isLoggedIn } = this.props.user
        const user_id = id
        
        const mappedMessageUsers = messages.map(el => {
            return <SelectedMessage key={el.conversation_id} selectedMessage={conversation_id} conversation_name={el.conversation_name} conversation_id={el.conversation_id} openMessage={this.openMessage} photo_url={el.photo_url} user_name={el.user_name} />
        })

        const mappedThread = thread.map(el => {
            return <MyMessage key={el.message_id} loggedInUser={user_id} content={el.content} user_id={el.user_id} photo_url={el.photo_url} user_name={el.user_name} />
        })

        return(<div>
            {!isLoggedIn ? null : (
            <div className='message-board ' >
            <section className='dash column-flex'>

                {mappedMessageUsers}
                
            </section>

            <section className='board column-flex'>
                {/* {this.getScrollLocations()} */}
                {/* {EndOfMessages.scrollIntoView} */}
                
                {/* <EndOfMessages id='EndOfMessages' /> */}
                {/* <div ref={this.messagesEndRef} /> */}
                <div style={{marginTop:'150px'}}>{mappedThread}</div>
                {/* <CreateMessage id='EndOfMessages' conversation_id={this.state.conversation_id} user_id={user_id} openMessage={this.openMessage} /> */}
                <div className='text-input-container'><CreateMessage id='EndOfMessages' conversation_id={this.state.conversation_id} user_id={user_id} openMessage={this.openMessage} /></div>

            </section>
        </div>)}
        </div>)
     }
 }

 function mapStateToProps(reduxState) {
     return reduxState
 }

 export default connect(mapStateToProps, {updateUser})(MessageBoard)

// export default MessageBoard