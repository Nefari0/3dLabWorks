
import './MessageBoard.css'
import { useState,useEffect } from 'react'

const MyMessage = (props) => {

    useEffect(() => {
        // setShowNotice(false)
        if(loggedInUser === user_id){setIsUser(true)}
    },[])

    const [isUser,setIsUser] = useState(false)

    const testFunc = () => {
        alert('does it work')
    }

    const { item,content,loggedInUser,user_id,photo_url } = props
    console.log(loggedInUser === user_id)
    return (
        <div className={`over-flow ${loggedInUser === user_id ? true : 'user-over-flow'}`}>
        <div className={`my-message-container ${loggedInUser === user_id ? true : 'user-message-container'}`}>
        {/* <div className={`my-message-container`}> */}
            <p style={{textTransform:'none'}}>{content}</p>
        </div>
            <div><img src={photo_url} className={`my-message-photo ${isUser ? true : 'my-message-photo'}`} /></div>
        </div>
        
    )
}

export default MyMessage