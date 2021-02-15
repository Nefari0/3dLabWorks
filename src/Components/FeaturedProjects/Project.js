import './Project.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
    const { category, img, firebase_url01, name, description, user_name } = props.data
    return(
        <div className='project-container'>
            <h4 className="project-box-h4">{name}</h4>
            <Link to={"projectdetails"}><img className="img" src={firebase_url01}/></Link>
            <div className="download-container">
                <svg className="big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="project-text">download</p>
                <div className="horizontal-devide"></div>
                <div className="like-share">
                    <ul>
                    <li className="like-share-box"><p className="like-share-text">

                    {/* <svg className="big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>     */}
                    like</p></li>

                    <li className="devide"></li>
                    <li className="like-share-box"><p className="like-share-text">share</p></li>
                    </ul>
                </div>
            </div>
            {/* <p className="project-text">{description}</p> */}
            
        </div>
    )
}

export default Project