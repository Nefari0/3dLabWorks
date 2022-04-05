import './MyConnection.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const MyConnection = (props) => {

    const { photo_url,user_name,user_id,my_id } = props 

    const [menuOpen,setMenuOpen] = useState(false)
    const [remove,setRemove] = useState(false)

    useEffect(() => {
        // props.getUserID(user_id)
        // axios.get('/api/users/all').then(res => {
        //     setUsers(res.data)
        // })
        // axios.get('/api/products/all').then((res) => {
        //     setProducts(res.data)
        // })
        // axios.get('/api/orders/join').then((res) => {
        //     // console.log('this is res',res.data)
        //     setOrders(res.data)
        // }).catch((err) => {
        //     console.log('this is from joins',err)
        // })

    }, [])

    const handleRemove = (user_id,my_id) => {
        props.removeConnection(user_id,my_id)
        setRemove(true)
    }

    return(<div>{remove === false ? <div className="connection-container">

        <div className='photo-name-flex' ><Link to={`viewuser/${user_id}`} ><img src={photo_url} className='connection-photo' /></Link><p className='connection-name' >{user_name}</p></div>

        {menuOpen === true ? <ul className={`friend-options`} >
            {/* <div className='friend-menu-row'>
                <svg xmlns="http://www.w3.org/2000/svg" className='friend-menu-icon' fill="none"  stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className='friend-menu-text' >message</p>
            </div> */}
            {/* <p>content</p> */}

            <div className='friend-menu-row' onClick={() => props.getUserID(user_id)} >
            <svg xmlns="http://www.w3.org/2000/svg" className="friend-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
                <p className='friend-menu-text' >Game invite</p>
            </div>
            {/* <p>content</p> */}

            <div className='friend-menu-row' >
            <svg xmlns="http://www.w3.org/2000/svg" className="friend-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
                <p className='friend-menu-text' onClick={() => handleRemove(user_id,my_id)} >remove friend</p>
            </div>
            {/* <p>content</p> */}
        </ul> : null}
        <svg onClick={() => setMenuOpen(!menuOpen)} xmlns="http://www.w3.org/2000/svg" className='small-icon' style={{marginBottom:'10px',marginRight:'0px', height:'40px',width:'40px',opacity:'60%'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>


    </div> : null}</div>)
}

export default MyConnection