import axios from "axios";
import React, { Component } from "react";
// import '../../Components/FeaturedProjects/Comments/Comments'
import './CreateMessage.css'
// import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket('ws://127.0.0.1:8000');


export default class CreateMessage extends Component {

    constructor(){
        super();

        this.state = {
            text:"",
        }
        this.handleText = this.handleText.bind(this)
        this.executeSendMessage = this.executeSendMessage.bind(this)
    }

    executeSendMessage = async () => {
        const { text } = this.state
        const { user_id,conversation_id } = this.props

        await axios.post('/api/conversation/user/new',{conversation_id,user_id,text})
        await this.props.sendToSockets(text,conversation_id)
        this.setState({text:''})
    }

    
    handleText(prop,val) {
        this.setState({
            [prop]:val
        })
    }

    render() {

        const { isLoggedIn } = this.props
 
        return(
            <div className="input-background" style={{maxHeight:'50px'}}>
            {/* <div className="input-background" > */}

                <textarea className=' message-input' style={{minHeight:'45px'}} value={this.state.text} name="text" rows="5" cols="50" wrap="soft" onChange={e => this.handleText('text',e.target.value)} > </textarea>

                {/* {!isLoggedIn ? <div className='add-button file-button' onClick={this.props.plsSignIn} style={{marginLeft:'200px'}} >send</div> : <div className='add-button submit-message-button'  style={{marginLeft:'200px'}} onClick={() => this.executeSendMessage()} >send</div>} */}
                <div className='send-message-button' onClick={() => this.executeSendMessage()} style={{position:'absolute',height:'30px',width:'30px'}} >
                {/* <div className='send-message-button' onClick={() => this.props.sendToSockets()} style={{position:'absolute',height:'30px',width:'30px'}} > */}
                    {/* send */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div> 

            </div>
        )
    }
}