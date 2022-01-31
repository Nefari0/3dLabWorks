
import './MessageBoard.css'
import { useState,useEffect } from 'react'

const MyMessage = (props) => {

    useEffect(() => {
        // setShowNotice(false)
    },[])

    const testFunc = () => {
        alert('does it work')
    }

    const { item,content,loggedInUser,user_id,photo_url } = props

    return (
        <div>
        <div className={`my-message-container ${loggedInUser === user_id ? true : 'user-message-container'}`}>
            <img src={photo_url} className={`my-message-photo ${loggedInUser === user_id ? true : 'user-message-photo'}`} />

            <p style={{textTransform:'none'}}>{content}</p>
        </div>
        </div>
    )
}

export default MyMessage