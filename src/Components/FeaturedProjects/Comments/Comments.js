import React, { Component } from 'react'
import './Comments.css'

const Comments = (props) => {

    const { content,date_created,user_name } = props
    // console.log(props.comments[0])

    return(
        // <div className="comment-box">
        <div className="content-box post-box">
            <div><h5 className='comment-h5 comment-text-dark'>{user_name}</h5></div>
            {/* <h3 className='dark-text'>text</h3> */}
        <p className='dark-text comment-text' >{content}</p>
            
        </div>
    )
}

export default Comments