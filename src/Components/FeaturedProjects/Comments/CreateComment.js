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

    sendPost(isLoggedIn) {
        const { text } = this.state
        const { id,model_id,user } = this.props
        if (isLoggedIn === true) {
            axios.post('/api/comments/create',{id,model_id,user,text}).then(this.props.getComments)
        } else {this.props.plsSignIn()}
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
                 <a className='add-button' onClick={() => this.sendPost(isLoggedIn)} style={{marginLeft:'200px'}} >send</a>

            </div>
        )
    }
}