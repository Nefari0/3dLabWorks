import React, { Component } from 'react'
import './Comments.css'

const Comments = (props) => {

    const { text } = props.comments[0]
    console.log(props.comments[0])

    return(
        <div className="comment-box">
            <h3 className='dark-text'>comments</h3>
            <h3 className='dark-text'>{text}</h3>
            
        </div>
    )
}

export default Comments