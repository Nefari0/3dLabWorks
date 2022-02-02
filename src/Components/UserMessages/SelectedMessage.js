import './SelectedMessage.css'
import { useState,useEffect } from 'react'

const SelectedMessage = (props) => {

    const { photo_url,conversation_id,SelectedMessage } = props
    const [isSelected,setIsSelected] = useState(false)
    

    if(SelectedMessage===conversation_id) {setIsSelected(true)}

    return(<div className='selected-message-container' onClick={() => props.openMessage(conversation_id)} >
        <img className='senders-photo' src={photo_url} />
    </div>)
}

export default SelectedMessage