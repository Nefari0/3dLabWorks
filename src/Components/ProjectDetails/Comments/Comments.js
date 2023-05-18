import React, { Component } from 'react'
import './Comments.css'
import { connect } from 'react-redux'
import { updateUser } from '../../../ducks/userReducer'
import axios from 'axios'
import { useState } from 'react'

const Comments = (props) => {

    const { content,date_created,user_name,photo_url,user_id,comment_id } = props
    const { id } = props.user.user
    const [menuOpen,setMenuOpen] = useState(false)

    const deletePost = async () => {
        // match logged in user id with comment author id
        console.log('hit delete post front end')
        if(user_id === id) {
            await axios.delete(`/api/comments/user/delete/${comment_id}`).then(() => {props.getComments()})
        }
    }

    return(
        <div className="container-flex">
            <img src={photo_url} className='author-pic'/>
            <div className='right-column-flex'>
                <div className='comment-text'>
                    <p >{content}</p>
                
                </div>
                    {/* <a className='comment-menu' >delete</a> */}
                {id != undefined && id === user_id ? <svg onClick={() => setMenuOpen(!menuOpen)} xmlns="http://www.w3.org/2000/svg" className='comment-menu small-icon' style={{marginBottom:'10px',marginRight:'0px', height:'40px',width:'40px',opacity:'60%'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg> : null}
                {!menuOpen ? true : <ul className='friend-options' style={{width:'130px',height:'40px'}}>
                    <li className='friend-menu-row' onClick={() => deletePost()} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="friend-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                        <p className='friend-menu-text' >Delete post</p>
                    </li>
                </ul>}
            </div>
        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateUser })(Comments)

// export default Comments