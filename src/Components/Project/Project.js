import '../Project/Project.css'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getModels } from '../../ducks/modelsReducer'
import { updateUser,remoteLogin } from '../../ducks/userReducer'
import SVG from '../SVG'
import '../SVG.css'
// import { addLike } from '../../../server/controllers/projectsController'

const Project = (props) => {

    const { category, img, firebase_url,firebase_url01, name, description, user_name, model_likes, model_id,photo_url, user_id, likes } = props.data
    const { handleClick,isLoggedIn,id,user_likes } = props

    const [numOfLikes, setNumOfLikes] = useState(0)
    const [heart,setHeart] = useState(false) // for highlighting hearts if current user has already like this project

    useEffect(() => {
        
        setNumOfLikes(likes)

        if(checkIfLiked() === true && heart === false) {
            setHeart(true)
        }

    },[])

    const plsSignIn = () => {
        window.scrollTo(0, 0)
        props.remoteLogin(true)
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
            setNumOfLikes(likes)
        })
    }

    const clickedLike = () => {
       if (isLoggedIn === true && id != undefined) {likeFunc(id,model_id)} else {plsSignIn()}
    }

    const checkIfLiked = (params) => {
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
        <div className='project-container' style={{overflow:'hidden'}}>

            <header style={{backgroundColor:''}}>
                <Link to={`/viewuser/${user_id}`} ><img src={getPhotoUrl()} className="project-user-photo"/></Link>
                <h5 className='dark-text' style={{color:'#555',paddingBottom:'15px',paddingTop:'',fontWeight:'400'}}>{name}
                    <br/><i>by {getUserName()}</i>
                </h5>
            </header>

            <Link to={`/projectdetails/${model_id}`}>
                <section className="project-image">
                    <img src={firebase_url01}/>
                </section>
            </Link>

            <footer>

                <div onClick={() => isLoggedIn === true ? window.open(firebase_url) : plsSignIn()} >
                    <SVG params={'download_icon'} fill={'none'} stroke={'currentColor'}/>
                </div>
                    
                { isLoggedIn ? 
                <a style={{marginRight:'10px',textDecoration:'none'}} href={`${firebase_url}`} target="_blank" rel="noopener noreferrer">download</a>
                    : 
                <a style={{marginRight:'10px',color:'#555'}} onClick={() => plsSignIn()}>download</a>
                }

                <div className="like-share">
            
                    <aside style={{borderBottom:'1px solid #555'}}>
                        {
                        heart === false ?
                
                        
                        <svg className="small-icon" onClick={clickedLike} xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"  />
                        </svg>
                            :
                        <svg className="small-icon" onClick={clickedLike} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        }
                        
                        <p style={{marginLeft:'10px'}}>{numOfLikes}</p>
                    </aside>

                    <aside>
                        <svg className="small-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <p style={{marginLeft:'10px'}}>share</p>
                    </aside>

                </div>
            
            </footer>
        </div>
    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { getModels,updateUser,remoteLogin })(Project)