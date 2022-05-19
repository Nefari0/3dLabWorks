
import '../UserMessages/MessageBoard.css'
import './OneMessage.css'
import { useState,useEffect } from 'react'

const OneMessage = (props) => {

    useEffect(() => {
        // setShowNotice(false)
        if(loggedInUser === user_id){setIsUser(true)}
    },[])

    const [isUser,setIsUser] = useState(false)

    const testFunc = () => {
        alert('does it work')
    }
    var months = [ "January","February","March","April","May","June","July","August","September","October","November","December"];
    const { content,loggedInUser,user_id,photo_url,date_created } = props
    const time = date_created.split("T")
    // find date
    const dateVal = time[0].split('-')
    // find time
    // find am or pm
    const amPm = (input) => {
        if(input[0] > 12){
            return input[0]-12 + ':' + input[1] + ' pm'
        } else {return(input[0] + ':' + input[1] + ' am')}
    }
    const timeVal = time[1].split(':')
    
    // console.log(loggedInUser === user_id)
    return (
        // <div className={`over-flow ${loggedInUser === user_id ? true : 'user-over-flow'}`}>
        <div className={`over-flow ${loggedInUser === user_id ? true : 'user-over-flow'}`} style={{}} >
        
        <div className={`my-message-container ${loggedInUser === user_id ? true : 'user-message-container'}`}>
            <p className='time-stamp'style={{textTransform:'none',fontSize:'xx-small'}}>{months[parseInt(dateVal[1])-1]+' '+dateVal[2]+' '+dateVal[0]}</p>
        {/* <div className={`my-message-container`}> */}
            <p style={{textTransform:'none'}}>{content}</p>
            <p style={{textTransform:'none',fontSize:'xx-small'}}>{amPm(timeVal)}</p>
            {/* <p className={`my-time-format ${isUser ? true : 'user-time-format'}`} >{amPm(timeVal)}</p> */}
        </div>
            <div>
                <img src={photo_url} className={`my-message-photo ${isUser ? true : 'my-message-photo'}`} />
                    {/* <p className='time-format' >{amPm(timeVal)}</p> */}
            </div>
            {/* <p className='time-format' >{amPm(timeVal)}</p> */}
        </div>
        
    )
}

export default OneMessage