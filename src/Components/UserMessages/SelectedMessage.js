import './SelectedMessage.css'
import { useState,useEffect } from 'react'

const SelectedMessage = (props) => {

    const { photo_url,conversation_id,selectedMessage,user_name } = props
    const [isSelected,setIsSelected] = useState(false)
    
    useEffect(() => {

    },[])

    const gotClicked = (id) => {
        props.openMessage(id)
    }

    return(
        <div className={`selected-message-container ${selectedMessage!=conversation_id ? true : 'selected-message-selected'}`} onClick={() => gotClicked(conversation_id)} >
            <img className='senders-photo' src={photo_url} />
            <p className='display-name-message'>{user_name}</p>
        </div>
          )
}

export default SelectedMessage