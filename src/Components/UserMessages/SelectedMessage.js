import './SelectedMessage.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

const SelectedMessage = (props) => {

    const { photo_url,conversation_id,selectedMessage,user_name,read_by,id,to_user } = props
    const [isSelected,setIsSelected] = useState(false)
    
    useEffect(() => {

    },[])

    const gotClicked = (id) => {
        props.openMessage(id,to_user)
        const cancel = null
        axios.post(`api/messages/read/`,{cancel,conversation_id})
        setIsSelected(true)
    }

    return(
        <div className={`selected-message-container ${selectedMessage!=conversation_id ? true : 'selected-message-selected'}`} onClick={() => gotClicked(conversation_id)} >
            <img className='senders-photo' src={photo_url} />
            {read_by === id && isSelected === false ? <p className='new-message' >new!</p> : null}
            <p className='display-name-message'>{user_name}</p>
        </div>
          )
}

export default SelectedMessage