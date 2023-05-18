import axios from 'axios'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteFile } from '../../../ducks/firebaseReducer'
import { MenuSVG } from './PhotosSVG/MenuSVG'
// import {app} from '../../base'
// const db = app.firestore()
// import logo from './../../assets/logo.png'

const ProjectPhotos = (props) => {

    const { url,maker_id,id,model_id} = props
    
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

            {maker_id === id &&<MenuSVG openMenu={openMenu} setOpenMenu={setOpenMenu} />}

            {openMenu === true && maker_id === id ? 
            <div className='friend-options' style={{top:'30px',left:'15px',height:'85px',width:'210px'}}>

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