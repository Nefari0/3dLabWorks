
import './UserInfo.css'
import EditUserInfo from './EditUserInfo'
import React, { useState, useEffect } from 'react'

const UserInfo = (props) => {
    const { user,name,email } = props.user.user
    const [editOpen,setEditOpen ] = useState(false)

    function toggleEdit(){
        setEditOpen(!editOpen)
    }

    return(
        <div className="user-info">
            <div className="user-info-title"><p ></p><h2 className="user-info-title-text">My Info</h2></div>
            <div className="user-info-h2"><p className="user-info-p" >name:</p><h2 className="text-element">{name}</h2></div>
            <div className="user-info-h2"><p className="user-info-p">email:</p><h2 className="text-element">{email}</h2></div>  
            <div className="user-info-h2"><p className="user-info-p">username:</p><h2 className="text-element" >{user}</h2></div>
        </div>
    )
}

export default UserInfo