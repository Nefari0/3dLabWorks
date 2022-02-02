// import { useState, useEffect } from 'react'
// import './Prototyping.css'
// import { Link } from 'react-router-dom'
import { loginUser,registerUser,updateUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
// import Agreement from '../Register/Agreement'
import axios from 'axios'
import { Component } from 'react'
import './MessageBoard.css'
import MyMessage from './MyMessage'
import CreateMessage from './CreateMessage'
import SelectedMessage from './SelectedMessage'
import { useRef } from 'react'

 class MessageBoard extends Component {
     constructor() {
        super()

        this.state = {
            messages:[],
            thread:[],
            conversation_id:null,
        }
        this.getMessages = this.getMessages.bind(this)
        this.openMessage = this.openMessage.bind(this)
     }

     componentDidMount() {
        this.props.updateUser()
        this.getMessages()

        const objDiv = document.getElementById('the-beginning');
        objDiv.scrollTop = objDiv.scrollHeight;
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

        const { messages,thread,selectedMessage,conversation_id } = this.state
        const { id } = this.props.user.user
        const user_id = id
        
        const mappedMessageUsers = messages.map(el => {
            return <SelectedMessage key={el.conversation_id} selectedMessage={conversation_id} conversation_name={el.conversation_name} conversation_id={el.conversation_id} openMessage={this.openMessage} photo_url={el.photo_url} user_name={el.user_name} />
        })

        const mappedThread = thread.map(el => {
            return <MyMessage key={el.message_id} loggedInUser={user_id} content={el.content} user_id={el.user_id} photo_url={el.photo_url} user_name={el.user_name} />
        })

        return(<div className='message-board white-background' >
            <section className='dash column-flex'>

                {mappedMessageUsers}
                <div id='the-beginning'></div>
                
            </section>

            <section className='board column-flex'>
                <CreateMessage conversation_id={this.state.conversation_id} user_id={user_id} openMessage={this.openMessage} />
                {mappedThread}

            </section>
        </div>)
     }
 }

 function mapStateToProps(reduxState) {
     return reduxState
 }

 export default connect(mapStateToProps, {updateUser})(MessageBoard)

// export default MessageBoard