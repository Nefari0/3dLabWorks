import axios from "axios";
import React, { Component } from "react";
import './Comments.css'


export default class CreateComment extends Component {

    constructor(){
        super();

        this.state = {
            text:""
        }
        this.handleText = this.handleText.bind(this)
        this.sendPost = this.sendPost.bind(this)
    }

    sendPost() {
        const { text } = this.state
        const { id,model_id,user } = this.props
        axios.post('/api/comments/create',{id,model_id,user,text}).then(this.props.getComments)
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

                {!isLoggedIn ? <div className='add-button file-button' onClick={this.props.plsSignIn} style={{marginLeft:'200px'}} >send</div> : <div className='add-button submit-message-button' onClick={this.sendPost} style={{marginLeft:'200px'}} >send</div>}

            </div>
        )
    }
}