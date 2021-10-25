import { useEffect, useState } from 'react'
import './Project.css'
// import logo from './../../assets/logo.png'

const TheMaker = (props) => {

    // const { firebase_url01, firebase_url, name } = props.info
    const { first_name, photo_url, user_name,info } = props
    // const { isLoggedIn } = props
    

    return(
 
            <div className="detail-box" style={{margin:'auto',marginTop:'5px'}}>
                <img src={photo_url} className="logo-box"/>
                <p className="dark-text">{info[0].name}<br/>by {user_name}</p>
            </div>


    )
}

export default TheMaker