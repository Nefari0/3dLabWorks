import React, { Component } from 'react'
import './Comments.css'

const Comments = (props) => {

    const { content,date_created } = props
    // console.log(props.comments[0])

    return(
        // <div className="comment-box">
        <div className="content-box post-box">
            <h5 className='dark-text'>{date_created}</h5>
            {/* <h3 className='dark-text'>text</h3> */}
        <p className='dark-text comment-text' >{content}</p>
            
        </div>
    )
}

export default Comments