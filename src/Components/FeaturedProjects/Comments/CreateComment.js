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
        const { user_id,model_id } = this.props
        axios.post('/api/comments/create',{user_id,model_id,text}).then(this.props.getComments)
    }

    
    handleText(prop,val) {
        this.setState({
            [prop]:val
        })
    }

    render() {

        const { isLoggedIn } = this.props
 
        return(
            <div className="content-box post-box" style={{minHeight:'100px'}}>
                <textarea value={this.state.text} name="text" rows="5" cols="50" wrap="soft" style={{minWidth:'100%',marginBottom:'auto'}} onChange={e => this.handleText('text',e.target.value)} > </textarea>
                {!isLoggedIn ? <button style={{marginTop:'auto'}} onClick={this.props.plsSignIn} >post</button> : <button style={{marginTop:'auto'}} onClick={this.sendPost} >post</button>}
            </div>
        )
    }
}