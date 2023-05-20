import axios from 'axios'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteFile } from '../../../ducks/firebaseReducer'
import { MenuSVG } from './PhotosSVG/MenuSVG'
import { GarbageCan,ImageIcon } from '../../SVG2'
import { 
    PhotoMenu,
    PhotoMenuRow,
    MainImage,
    MainPhotoContainer
 } from './projectphotos.styles'
// import {app} from '../../base'
// const db = app.firestore()
// import logo from './../../assets/logo.png'

const ProjectPhotos = (props) => {

    const { 
        url,
        maker_id,
        id,
        model_id,
        getImages
    } = props
    
    // -- Delete individual / selected photo from FB and DB -- //
    const deletePhotoFromDB = async (url) => {
        await deleteFile(url)
        const deleted = await axios.post(`/api/projects/photos/delete/`,{url})
        await getImages()
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
        <MainPhotoContainer>

            {/* Open photo options menu */}
            {maker_id === id &&<MenuSVG openMenu={openMenu} setOpenMenu={setOpenMenu} />}

            {/*  Photo options menu */}
            {openMenu === true && maker_id === id ? 
            <PhotoMenu style={{top:'30px',left:'15px',height:'85px',width:'210px'}}>

                <PhotoMenuRow onClick={() => makeMainPhoto()} >
                    <ImageIcon />
                    <p>Display As Main Photo</p>
                </PhotoMenuRow>

                <PhotoMenuRow onClick={() => deletePhotoFromDB(url)} >
                    <GarbageCan />
                    <p >Delete This Photo</p>
                </PhotoMenuRow>

            </PhotoMenu> : null}

            {/* Actual photo */}
            <MainImage src={url} />

        </MainPhotoContainer>
    )
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps)(ProjectPhotos)