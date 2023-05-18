import React, { Component } from 'react'
import './Comments.css'
import { connect } from 'react-redux'
import { updateUser } from '../../../ducks/userReducer'
import axios from 'axios'
import { useState } from 'react'

import { 
    MenuDots,
    GarbageCan
 } from '../../SVG2'

import { 
    CommentContainer,
    RightColumn,
    AuthorPic,
    CommentTextContainer,
} from './comments.styles'

const Comments = (props) => {

    const { content,photo_url,user_id,comment_id } = props
    const { id } = props.user.user
    const [menuOpen,setMenuOpen] = useState(false)

    const deletePost = async () => {
        // match logged in user id with comment author id
        if(user_id === id) {
            await axios.delete(`/api/comments/user/delete/${comment_id}`).then(() => {props.getComments()})
        }
    }

    return(
        <CommentContainer>
            <AuthorPic src={photo_url}/>
            <RightColumn>

                <CommentTextContainer>
                    <p >{content}</p>
                </CommentTextContainer>

                {id != undefined && id === user_id && <MenuDots onClick={() => setMenuOpen(!menuOpen)}/>}

                {menuOpen && 
                    <ul className='friend-options' style={{width:'130px',height:'40px'}}>
                        <li className='friend-menu-row' onClick={() => deletePost()} >
                            <GarbageCan />
                            <p className='friend-menu-text' >Delete post</p>
                        </li>
                    </ul>
                }

            </RightColumn>
        </CommentContainer>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateUser })(Comments)

// export default Comments