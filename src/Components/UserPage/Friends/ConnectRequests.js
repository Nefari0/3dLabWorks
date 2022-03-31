import './MyConnection.css'
import { Link } from 'react-router-dom'

const ConnectRequests = (props) => {

    const { photo_url,user_name,user_id,my_id } = props 

    return(<div className='connection-container'>
        <div className='photo-name-flex' ><Link to={`viewuser/${user_id}`} ><img src={photo_url} className='connection-photo' /></Link><p className='connection-name' >{user_name}</p></div>
        {/* <button>confirm</button> */}
        {/* <div className='connection-buttons-full'><p>Confirm</p></div> */}
        <p className='connection-buttons' style={{marginBottom:'10px'}} onClick={() => props.removeConnection(user_id,my_id)} >Remove</p>
        <p className='connection-buttons-full' style={{marginBottom:'10px',marginRight:'10px'}} onClick={() => props.acceptRequest(user_id,my_id)} >Confirm</p>
    </div>)
}

export default ConnectRequests