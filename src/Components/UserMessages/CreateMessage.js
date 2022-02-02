import axios from "axios";
import React, { Component } from "react";
import '../../Components/FeaturedProjects/Comments/Comments'


export default class CreateMessage extends Component {

    constructor(){
        super();

        this.state = {
            text:"",
        }
        this.handleText = this.handleText.bind(this)
        // this.sendPost = this.sendPost.bind(this)
        this.executeSendMessage = this.executeSendMessage.bind(this)
    }

    executeSendMessage = async () => {
        const { text } = this.state
        const { user_id,conversation_id } = this.props
        // console.log('hit execute',text,conversation_id,user_id)

        await axios.post('/api/conversation/user/new',{conversation_id,user_id,text})
        await this.props.openMessage(conversation_id)
    }

    
    handleText(prop,val) {
        this.setState({
            [prop]:val
        })
    }

    render() {

        const { isLoggedIn } = this.props
 
        return(
            <div className="create-post" style={{minHeight:'100px'}}>

                <textarea className='comment-text-input post-input' value={this.state.text} name="text" rows="5" cols="50" wrap="soft" onChange={e => this.handleText('text',e.target.value)} > </textarea>

                {/* {!isLoggedIn ? <div className='add-button file-button' onClick={this.props.plsSignIn} style={{marginLeft:'200px'}} >send</div> : <div className='add-button submit-message-button'  style={{marginLeft:'200px'}} onClick={() => this.executeSendMessage()} >send</div>} */}
                <div className='add-button file-button' onClick={() => this.executeSendMessage()} style={{marginLeft:'200px'}} >send</div> 

            </div>
        )
    }
}