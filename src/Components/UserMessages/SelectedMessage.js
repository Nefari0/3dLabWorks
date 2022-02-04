import './SelectedMessage.css'
import { useState,useEffect } from 'react'

const SelectedMessage = (props) => {

    const { photo_url,conversation_id,selectedMessage } = props
    const [isSelected,setIsSelected] = useState(false)
    
    useEffect(() => {
        if(selectedMessage===conversation_id && isSelected===false) {setIsSelected(true)} else if (selectedMessage === conversation_id && isSelected===true) {setIsSelected(false)}
        // setIsSelected(false)
    },[])

    const gotClicked = () => {
        // setIsSelected(true)
        props.openMessage(conversation_id)
    }

    return(
        // isSelected ?
        <div className={`selected-message-container`} onClick={() => gotClicked()} >
            <img className='senders-photo' src={photo_url} />
        </div>
        //    : 
        //   <div className='selected-message-selected' onClick={() => gotClicked()} ></div>
          )
}

export default SelectedMessage