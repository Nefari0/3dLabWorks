import './SelectedMessage.css'
import { useState,useEffect } from 'react'

const SelectedMessage = (props) => {

    const { photo_url,conversation_id,selectedMessage,user_name } = props
    const [isSelected,setIsSelected] = useState(false)
    
    useEffect(() => {
        // if(selectedMessage===conversation_id && isSelected===false) {setIsSelected(true)} else if (selectedMessage === conversation_id && isSelected===true) {setIsSelected(false)}
        // setIsSelected(false)
    },[])

    const gotClicked = (id) => {
        // setIsSelected(true)
        props.openMessage(id)
    }

    return(
        // isSelected ?
        // <div className={`selected-message-container ${!isSelected ? true : 'selected-message-selected'}`} onClick={() => gotClicked(conversation_id)} >
        <div className={`selected-message-container ${selectedMessage!=conversation_id ? true : 'selected-message-selected'}`} onClick={() => gotClicked(conversation_id)} >
            <img className='senders-photo' src={photo_url} />
            <p className='display-name-message'>{user_name}</p>
            {/* <p className='display-name-message'>{user_name}</p> */}
        </div>
        //    : 
        //   <div className='selected-message-selected' onClick={() => gotClicked()} ></div>
          )
}

export default SelectedMessage