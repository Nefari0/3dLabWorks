// import React from 'react'
import './UserPage.css'
import EditUserInfo from './EditUserInfo'
import React, { useState, useEffect } from 'react'

const UserInfo = (props) => {
    const { user,name,email } = props.user.user
    const [editOpen,setEditOpen ] = useState(false)

    function toggleEdit(){
        setEditOpen(!editOpen)
    }

    return(
        <div className="display-user-info">
        {editOpen ? (<EditUserInfo edit={toggleEdit} setIsLoading={props.setIsLoading} deleteFromFirebase={props.deleteFromFirebase} />):(<div className="user-info">
            <div className="user-info-h2"><p ></p><h2 className=" title-h">UserInfo</h2></div>
            <button className="edit-menu-button" onClick={toggleEdit}>edit</button>
            <div className="user-info-h2"><p className="user-info-p" >name:</p><h2 className="text-element">{name}</h2></div>

            <div className="user-info-h2"><p className="user-info-p">email:</p><h2 className="text-element">{email}</h2></div>
            
            <div className="user-info-h2"><p className="user-info-p">username:</p><h2 className="text-element" >{user}</h2></div>

        </div>)}
        </div>
    )
}

export default UserInfo