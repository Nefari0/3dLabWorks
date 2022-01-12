import React, { Component } from 'react'
import './Comments.css'

const Comments = (props) => {

    const { content,date_created,user_name,photo_url } = props

    return(
        <div className="container-flex">
            <img src={photo_url} className='author-pic'/>
            <div className='right-column-flex'>
                <div className='comment-text'><p >{content}</p></div>
            </div>
        </div>
    )
}

export default Comments