import './MyConnection.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ConnectRequests = (props) => {

    const [remove,setRemove] = useState(false)

    const { photo_url,user_name,user_id,my_id } = props 

    const handleConfirm = (user_id,my_id) => {
        props.acceptRequest(user_id,my_id)
        setRemove(true)
    }

    const handleRemove = (user_id,my_id) => {
        props.removeConnection(user_id,my_id)
        setRemove(true)
    }

    

    return(<div>{remove === false ? <div className={`connection-container`}>
        <div className='photo-name-flex' ><Link to={`viewuser/${user_id}`} ><img src={photo_url} className='connection-photo' /></Link><p className='connection-name' >{user_name}</p></div>
        {/* <button>confirm</button> */}
        {/* <div className='connection-buttons-full'><p>Confirm</p></div> */}
        <div className='button-row' >
            <p className='connection-buttons' style={{marginBottom:'10px'}} onClick={() => handleRemove(user_id,my_id)} >Remove</p>
            <p className='connection-buttons-full' style={{marginBottom:'10px',marginRight:'10px'}} onClick={() => handleConfirm(user_id,my_id)} >Confirm</p>
        </div>
    </div> : null}</div>)
}

export default ConnectRequests