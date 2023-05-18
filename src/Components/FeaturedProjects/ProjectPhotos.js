import axios from 'axios'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteFile } from '../../ducks/firebaseReducer'
// import {app} from '../../base'
// const db = app.firestore()
// import logo from './../../assets/logo.png'

const ProjectPhotos = (props) => {

    
    const { firebase_url01, firebase_url, name, model_id } = props.data
    const { first_name, photo_url, user_name } = props.userInfo[0]
    const { isLoggedIn,url,maker_id,id } = props
    
    // -- Delete individual / selected photo from FB and DB -- //
    const deletePhotoFromDB = async (url) => {
        await deleteFile(url)
        const deleted = await axios.post(`/api/projects/photos/delete/`,{url})
        await props.getImages()
        setOpenMenu(!openMenu)
        return deleted
    }

    // -- Displays selected photo as main photo for this project -- //
    const makeMainPhoto = () => {
        setOpenMenu(!openMenu)
        axios.post('/api/projects/photos/change/main/',{model_id,url})
    }

    const [ openMenu,setOpenMenu ] = useState(false)

    return(
        <section>
            {maker_id === id ? <svg xmlns="http://www.w3.org/2000/svg" className="edit-photo-button" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => setOpenMenu(!openMenu)} >
                {openMenu === false ? <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />:
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />}
            </svg> : null}

            {openMenu === true && maker_id === id ? <div className='friend-options' style={{top:'30px',left:'15px',height:'85px',width:'210px'}}>

                <div className='friend-menu-row' style={{width:'250px'}} onClick={() => makeMainPhoto()} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="friend-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className='friend-menu-text' >
                        Display As Main Photo
                    </p>
                </div>

                <div className='friend-menu-row' style={{width:'250px'}} onClick={() => deletePhotoFromDB(url)} >
                <svg xmlns="http://www.w3.org/2000/svg" className="friend-menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                    <p className='friend-menu-text' >
                        Delete This Photo
                    </p>
                </div>

            </div> : null}

            <img src={url} style={{width:'100%',height:'auto'}} />

        </section>
    )
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps)(ProjectPhotos)