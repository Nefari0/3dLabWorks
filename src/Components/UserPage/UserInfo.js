import React from 'react'
import './UserPage.css'

const UserInfo = (props) => {
    const { user,name,email } = props.user.user
    console.log(name,user)

    return(
        <div className="user-info">
            <div className="user-info-h2"><p ></p><h2 className=" title-h">UserInfo</h2></div>

            <div className="user-info-h2"><p className="user-info-p" >name:</p><h2 className="text-element">{name}</h2></div>

            <div className="user-info-h2"><p className="user-info-p">email:</p><h2 className="text-element">{email}</h2></div>
            
            <div className="user-info-h2"><p className="user-info-p">username:</p><h2 className="text-element" >{user}</h2></div>

        </div>
    )
}

export default UserInfo