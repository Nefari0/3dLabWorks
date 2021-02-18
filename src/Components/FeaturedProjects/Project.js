import './Project.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
    const { category, img, firebase_url01, name, description, user_name, likes, model_id } = props.data
    // const { id } = props
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
                    <svg className="small-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    
                    {likes}</p></li>

                    <li className="devide"></li>

                    <li className="like-share-box"><p className="like-share-text">
                    <svg className="small-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    share</p></li>
                    </ul>
                </div>
            </div>
            {/* <p className="project-text">{description}</p> */}
            
        </div>
    )
}

export default Project