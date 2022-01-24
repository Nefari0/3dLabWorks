import './Project.css'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getModels } from '../../ducks/modelsReducer'
import { updateUser } from '../../ducks/userReducer'
// import { addLike } from '../../../server/controllers/projectsController'

const Project = (props) => {
    // const { category, img, firebase_url,firebase_url01, name, description, user_name, model_likes, model_id, photo_url, user_id, likes } = props.data
    const { category, img, firebase_url,firebase_url01, name, description, user_name, model_likes, model_id,photo_url, user_id, likes } = props.data
    const { handleClick,isLoggedIn,id,user_likes } = props
    // const { user_likes } = props.user.user

    const [numOfLikes, setNumOfLikes] = useState(0)
    const [heart,setHeart] = useState(false) // for highlighting hearts if current user has already like this project

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
        await setHeart(!heart)
        await checkIfLiked(heart)
    }

    const updateLikes = async (params) => {
        console.log('params',params)
        axios.get(`/api/like/update/${params}`).then(res => {
            const { likes } = res.data[0]
            console.log(likes)
            setNumOfLikes(likes)
        })
    }

    const clickedLike = () => {
       if (isLoggedIn === true && id != undefined) {likeFunc(id,model_id)} else {plsSignIn()}
    }

    const checkIfLiked = (params) => {
        // console.log('clicked "check if liked"')
        console.log('clicked check if likeds',params)
        // if(params != undefined) {return(params)}
        if (props.projectIsLiked(model_id,user_likes) === true){ return(true) } else { return(false) } 
    }

    const getPhotoUrl = () => {
        const { user_photo_url } = props
        if (photo_url != undefined) {
            return(photo_url)
        } else return(user_photo_url)
    }

    const getUserName = () => {
        const { current_user_name } = props
        if (user_name != undefined) {
            return(user_name)
        } else return(current_user_name)
    }

    return(
        <div className='project-container'>
            {checkIfLiked()}
            <div>
            {/* <p className="dark-text-larger">{name}</p> */}
                {/* <div className="photo-title-border"><img src={photo_url} className="project-user-photo"/><p className="dark-text-larger">{name}<br/><p className='usr-nm-txt'>by {user_name}</p></p></div> */}


                <div className="photo-title-border"><img src={photo_url} className="project-user-photo"/>

                {/* --------------- */}
                {/* <div className="photo-title-border"><Link to={`viewuser/${user_id}`} ><img src={getPhotoUrl()} className="project-user-photo"/></Link> */}
                {/* <div className="photo-title-border"><Link to={`viewuser/${user_id}`} ><img src={getPhotoUrl()} className="project-user-photo"/></Link> */}
                {/* ------------- */}
                
                {/* <p className="dark-text-larger">{name}</p> */}
                {/* <p className="dark-text">{name}<br/><p className='usr-nm-txt'>by {user_name}</p></p></div> */}
                <p className="dark-text">{name}<br/><p className='usr-nm-txt'>by {getUserName()}</p></p></div>

                <div className="image-div" ><Link to={`projectdetails/${model_id}`}><img className="model-photo" src={firebase_url01}/></Link></div>
            </div>
            <div>
                <div className="download-container">

                    { isLoggedIn ? 
                    <a href={`${firebase_url}`} >
                        <svg className="small-icon" style={{marginLeft:'10px',marginRight:'5px', height:'50px',width:'50px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a> 
                    : 
                    <a onClick={plsSignIn} >
                        <svg className="small-icon" style={{marginLeft:'10px',marginRight:'5px', height:'50px',width:'50px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>}
                    
                    { isLoggedIn ? <a className="project-text" href={`${firebase_url}`}>download</a> : <a className="project-text" onClick={plsSignIn}>download</a>}

                    <div className="like-share">
                        <div>
                            <div className="like-share-box" style={{borderBottom:'1px solid #555'}}>
                                {checkIfLiked() === false ? <svg className="small-icon small-icon-tweaks" onClick={() => clickedLike()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"  />
                                </svg>
                                :
                                <svg className="small-icon small-icon-tweaks" onClick={clickedLike} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>}
                                <p className="like-share-text" style={{marginLeft:'10px'}}>{numOfLikes}</p>
                            </div>

                            <div className="like-share-box">
                                <svg className="small-icon small-icon-tweaks" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                <p className="like-share-text" style={{marginLeft:'10px'}}>share</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { getModels,updateUser })(Project)

// export default Project