import { useEffect, useState } from 'react'
import './Project.css'
// import logo from './../../assets/logo.png'

const ProjectPhotos = (props) => {

    const { firebase_url01, firebase_url, name } = props.data
    const { first_name, photo_url, user_name } = props.userInfo[0]
    const { isLoggedIn,url } = props
    

    return(
        // <div className="detail-photo-main"> //original
        <div className="left">
            {/* <div className="detail-box">
                <img src={photo_url} className="logo-box"/>
                <p className="dark-text">{name}<br/>by {user_name}</p>
            </div> */}
            {/* <img src={firebase_url01} className="detail-photo"/> */}
            <img src={url} className="detail-photo"/>
            {/* {isLoggedIn ? <a className="dark-text show-dl-url" href={`${firebase_url}`}>Download</a> : <a className="dark-text show-dl-url" onClick={props.plsSignIn} >Download</a>} */}
        </div>
        // </div>

    )
}

export default ProjectPhotos