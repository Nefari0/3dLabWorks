// import { useState, useEffect } from 'react'
// import './Prototyping.css'
// import { Link } from 'react-router-dom'
// import { loginUser,registerUser } from '../../ducks/userReducer'
// import { connect } from 'react-redux'
// import Agreement from '../Register/Agreement'
import axios from 'axios'
import { Component } from 'react'
import './Prototyping.css'



 class Prototyping extends Component {
     constructor() {
        super()

        this.state = {
            messages:[],
            user_id:12,
            thread:[],
        }
        this.getMessages = this.getMessages.bind(this)
        this.openMessage = this.openMessage.bind(this)
     }

     componentDidMount() {
        this.getMessages()
     }

     getMessages = () => {
         const user_id = 12
        axios.get(`/api/conversations/${user_id}`).then(res => {
            this.setState({
                messages:res.data
            })
        })
     }

     openMessage = (conversation_id) => {
        axios.get(`/api/conversation/messages/get/${conversation_id}`).then(res => {
            this.setState({thread:res.data})
        })
     }

     render() {

        const { messages,thread } = this.state
        
        const mappedMessageNames = messages.map(el => {
            return <div key={el.conversation_id} conversation_name={el.conversation_name} conversation_id={el.conversation_id} openMessage={this.openMessage} ><p style={{color:'#555'}} onClick={() => this.openMessage(el.conversation_id)} >{el.conversation_name}</p></div>
        })

        const mappedThread = thread.map(el => {
            return <div content={el.content} ><p>{el.content}</p></div>
        })

        return(<div className='message-board' >
            <section className='dash column-flex'>
                <p className='size-test'>left</p>
                {mappedMessageNames}
            </section>

            <section className='board column-flex'>
                <p className='size-test'>right</p>
                {mappedThread}
            </section>
        </div>)
     }
 }

export default Prototyping