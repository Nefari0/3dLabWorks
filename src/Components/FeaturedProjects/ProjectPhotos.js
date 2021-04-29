import { useEffect, useState } from 'react'
import './Project.css'
// import logo from './../../assets/logo.png'

const ProjectPhotos = (props) => {

    const { firebase_url01, name } = props.data
    const { first_name, photo_url, user_name } = props.userInfo[0]
    

    return(
        // <div className="detail-photo-main"> //original
        <div className="left">
            <div className="detail-box">
                <img src={photo_url} className="logo-box"/>
                {/* <h4>this is project details</h4> */}
                <p className="dark-text">{name}<br/>by {user_name}</p>
                {/* <p className="dark-text">{name}</p> */}
            </div>
            <img src={firebase_url01} className="detail-photo"/>
        </div>
        // </div>

    )
}

export default ProjectPhotos