import axios from "axios";
import React, { Component } from "react";
import './Comments.css'

export default class CreateComment extends Component {

    constructor(){
        super();

        this.state = {
            text:""
        }
    }

    sendPost() {
        // axios.post('/api/comments/create',)
    }

    render() {

        return(
            <div className="content-box post-box" style={{minHeight:'100px'}}>
                <textarea name="text" rows="5" cols="50" wrap="soft" style={{minWidth:'100%',marginBottom:'auto'}}> </textarea>
                <button style={{marginTop:'auto'}}>post</button>
            </div>
        )
    }
}