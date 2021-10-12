import './CurrentProject.css'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect, connent } from 'react-redux'
// import { getModels } from './../../ducks/modelsReducer'
// import { addLike } from '../../../server/controllers/projectsController'

const CurrentProject = (props) => {
    const { category, img, firebase_url,firebase_url01, name, description, user_name, likes, model_id, photo_url, user_id } = props.data
    const { handleClick } = props

    const [isLiked, setIsLiked] = useState([])

    // useEffect(() => {
    //     setIsLiked(likes)
    // },[])

    const likeFunc = (params) => {
        props.addLike(model_id)
    }

    const gotClicked = () => {

    }


    return(
        <div className='current-project-container' onClick={gotClicked}>
                <div>
                {/* <div className="photo-title-border"><img src={photo_url} className="user-photo"/><h4 className="project-box-h4">{name}</h4></div> */}
                <div className="photo-title-border"><img src={photo_url} className="user-photo"/><p className="dark-text">{name}<br/>by {user_name}</p></div>

                {/* <Link to={`projectdetails/${model_id}`}><img className="img" src={firebase_url01}/></Link> */}
                <div className="display-image" ><Link to={`projectdetails/${model_id}`}><img className="img" src={firebase_url01}/></Link></div>
            </div>
            <div>
                {/* <div className="download-container-top"></div> */}
                <div className="current-download-container">
                    {/* <svg className="big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> */}
                    {/* <a style={{margin:"auto"}} href={`${firebase_url}`} ><svg className="big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg></a> */}



                </div>
            </div>
            {/* <p className="project-text">{description}</p> */}
            
        </div>
    )
}

// function mapStateToProps(reduxState) {
//     return reduxState
// }

// export default connect(mapStateToProps, { getModels })(CurrentProject)

export default CurrentProject