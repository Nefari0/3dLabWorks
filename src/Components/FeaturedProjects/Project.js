import './Project.css'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect, connent } from 'react-redux'
import { getModels } from '../../ducks/modelsReducer'
// import { addLike } from '../../../server/controllers/projectsController'

const Project = (props) => {
    const { category, img, firebase_url,firebase_url01, name, description, user_name, model_likes, model_id, photo_url, user_id, likes } = props.data
    const { handleClick,isLoggedIn,id,user_likes } = props

    const [numOfLikes, setNumOfLikes] = useState(0)
    // const [heart,setHeart] = useState(false) // for highlighting hearts if current user has already like this project

    useEffect(() => {
        setNumOfLikes(likes)
    },[])

    const plsSignIn = () => {
        alert('please sign in')
    }

    const likeFunc = async (id,m_id) => {
        const user_id = id
        const model_id = m_id
        await axios.post('/api/projects/like', { user_id,model_id })
        await updateLikes(model_id)
    }

    const updateLikes = async (params) => {
        console.log('params',params)
        axios.get(`/api/like/update/${params}`).then(res => {
            const { likes } = res.data[0]
            console.log(likes)
            return(setNumOfLikes(likes))
            // setNumOfLikes(res.data.likes)
        })
    }
    // const gotClicked = () => {
    //     console.log('got click',id,model_id)
    //    if (isLoggedIn === true && id != undefined) {likeFunc(id,model_id)} else {plsSignIn()}
    // }

    const clickedLike = () => {
        // console.log('clicked like',id,model_id)
       if (isLoggedIn === true && id != undefined) {likeFunc(id,model_id)} else {plsSignIn()}
    }

    // ---- this portion of the code is experimental. it's pupose is to 'highlight' hearts in projects the current user has already liked.
    // const checkIfLiked = () => {
    //     const { user_likes } = props
    //     var userLike = user_likes.filter(element => element.model_id === model_id)
    //     if (userLike[0] != undefined && props.data.model_id === userLike[0].model_id) {setHeart(true)}
    //     console.log(heart)
    // }
    // // checkIfLiked()
    // {if (props.user_likes != undefined) {checkIfLiked()}}
    return(
        <div className='project-container'>
                <div>
                {/* <div className="photo-title-border"><img src={photo_url} className="user-photo"/><h4 className="project-box-h4">{name}</h4></div> */}
                <div className="photo-title-border"><img src={photo_url} className="user-photo"/><p className="dark-text">{name}<br/>by {user_name}</p></div>

                {/* <Link to={`projectdetails/${model_id}`}><img className="img" src={firebase_url01}/></Link> */}
                <div className="image-div" ><Link to={`projectdetails/${model_id}`}><img className="img" src={firebase_url01}/></Link></div>
            </div>
            <div>
                <div className="download-container-top"></div>
                <div className="download-container">
                    {/* <svg className="big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> */}
                    {/* <a style={{margin:"auto"}} href={`${firebase_url}`} ><svg className="big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg></a> */}

                    { isLoggedIn ? <a href={`${firebase_url}`} ><svg className="small-icon" style={{marginLeft:'10px',marginRight:'20px', height:'50px',width:'50px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg></a> : <a onClick={plsSignIn} ><svg className="small-icon" style={{marginLeft:'10px',marginRight:'20px', height:'50px',width:'50px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg></a>}

                    
                    { isLoggedIn ? <a className="project-text" href={`${firebase_url}`}>download</a> : <a className="project-text" onClick={plsSignIn}>download</a>}

                    <div className="horizontal-devide"></div>
                    <div className="like-share">
                        <ul>
                        <li className="like-share-box"><p className="like-share-text">

                        <svg className="small-icon" onClick={clickedLike} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"  />
                        </svg>
                        
                        {/* {likes}</p></li> */}
                        
                        {numOfLikes}</p>
                        </li>

                        <li className="devide"></li>

                        <li className="like-share-box"><p className="like-share-text">
                        <svg className="small-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        share</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <p className="project-text">{description}</p> */}
            
        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { getModels })(Project)

// export default Project