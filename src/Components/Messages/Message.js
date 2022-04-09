import './Messages.css'
import React from 'react'
import  { Component } from 'react'
import photo from './admin_photo1.jpg'
import axios from 'axios';

class Message extends Component {
    constructor() {
        super();

        this.state = {
            showActualMessage:true,
            contactAdmin:false,
            messageContent:'Enter Message',
            email:'Enter your email address',
            welcomeGreeting:'Welcome to MadModels3d. Click here if you have questions or comments',
            responseGreeting:"Your message has been sent. I'll get back to you asap"
        }
        this.hideGreeting = this.hideGreeting.bind(this)
    }

    componentDidMount() {
        if(localStorage['visited'] !== undefined){this.setState({visited:localStorage['visited']})}
    }

    showGreeting() {
        const { responseGreeting } = this.state
        this.setState({showActualMessage:true,welcomeGreeting:responseGreeting})
        
        // this.setState({showActualMessage:false})
    }

    hideGreeting() {
        // console.log('hit hover')
        this.setState({showActualMessage:false})
    }

    setContactAdmin() {
        this.setState({contactAdmin:!this.state.contactAdmin})
    }

    inputHandler = (prop,val) => {
        this.setState({[prop]:val})
    }

    sendMessageToAdmin = () => {
        const { messageContent,email,visited } = this.state
        axios.post('/api/messages/user/add',{ messageContent,email,visited })
        this.setContactAdmin()
        this.showGreeting()
    }

    render() {

        const { showActualMessage,contactAdmin,messageContent,email,welcomeGreeting,responseGreeting } = this.state

        return(
            <div>
            <div className={`messages-container`}>
                {contactAdmin === false ? <div 
                onMouseEnter={this.hideGreeting}
                onClick={this.hideGreeting}
                className={`actual-message ${showActualMessage ? true : 'hidden'}`}  >
                    <p className='contact-admin-text' >{welcomeGreeting}</p>
                    <img src={photo} className='admin-message-photo' />
                </div> : null}

                {contactAdmin === false ? <svg onClick={() => this.setContactAdmin()} xmlns="http://www.w3.org/2000/svg" class={`admin-message-icon`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg> : null}

            </div>
                {contactAdmin=== true ? <div className='send-message'>
                    <div className='send-message-title'>
                        <h2 style={{textTransform:'none'}} >Contact</h2>
                        <svg onClick={() => this.setContactAdmin()} className="contact-admin-close-button"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <textarea onChange={(e) => this.inputHandler("email",e.target.value)} style={{minHeight:'25px',marginTop:'40px'}} name="text" rows="0" cols="35" wrap="soft" placeholder={email} />
                        <textarea onChange={(e) => this.inputHandler("messageContent",e.target.value)} style={{minHeight:'45px',marginTop:'10px'}} name="text" rows="5" cols="35" wrap="soft" placeholder={messageContent} />
                        <div className='contact-admin-send-button' ><p style={{color:'#fff'}} onClick={() => this.sendMessageToAdmin()} >send</p></div>
                    </div>
                </div> : null}
            </div>
        )
    }
}

export default Message
