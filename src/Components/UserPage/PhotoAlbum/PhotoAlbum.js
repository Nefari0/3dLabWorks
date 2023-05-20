import './PhotoAlbum.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import SelectedImage from './SelectedImage'
import Resizer from 'react-image-file-resizer'
// import { get } from 'http'
import { addNewModel } from '../../../ducks/firebaseReducer'
import { connect } from 'react-redux'
import ImagePreview from '../../ProjectDetails/ProjectPhotos/ImagePreview/ImagePreview';
import {app} from '../../../base'
const db = app.firestore()


const PhotoAlbum = (props) => {
    
    const newPhotoEndpoint = '/api/photos/add/new'
    const [albums, setAlbums] = useState([])
    const [photos,setPhotos] = useState([])
    const [view,setView] = useState('photos')
    const [create,setCreate] = useState(false)
    const [currentImg,setCurrentImg] = useState(null)
    // const [previewImageFile,setPreviewImage] = useState(null)
    const [photoUrl,setPhotoUrl] = useState(null)
    const [state,setState] = useState({
        previewImageFile:null
    })

    const { id } = props
    const user_id = id

    useEffect(() => {
        axios.get(`/api/photos/albums/${user_id}`).then(res => {
            setAlbums(res.data)
        })
        getPhotos(user_id)
    },[])

    const handleInput = (prop,val) => {
        setState({[prop]:val})
    }

    // --- editing / adding / removing user photos with firebase --- //
// --- add file to state / resize / show preview --- //
    const addAndUpdate = async (e) => {
        await handlePhoto(e)
        await getPhotos(user_id)
    }

        // --- get user photos -- //
    const getPhotos = async (user_id) => {
        await axios.get(`/api/user/photos/get/${user_id}`).then(res => {
            setPhotos(res.data)
        })
    }

    const handlePhoto = async (e) => {
        // const photo = e.target.files[0]
        var fileInput = false;

        if (e.target.files[0]) {
            fileInput = true
        }

        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    e.target.files[0],
                    400,
                    267,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        console.log(uri,'uri')
                        const objUrl = URL.createObjectURL(uri)
                        // setPreviewImage(URL.createObjectURL(uri))
                        setState({previewImageFile:objUrl})
                        setPhotoUrl(uri)
                    },
                    "file",
                    298,
                    191
                );
            } catch (err) {
                console.log(err)
            }
        }
    }

    const addingPhoto = async () => {
        const photo_url = photoUrl
        const { id,user } = props.user.user
        var album_id = null
        // this.setState({previewImageFile:null})
        // setPreviewImage(null)
        
        props.setIsLoading()
        // get firebase ref
        const cloud = await props.addNewModel(photo_url,`${user}/photos`)

        // get dl url
        const image_url = await cloud.action.payload.ref.getDownloadURL()

        // add to photo db
        await axios.post(newPhotoEndpoint,{album_id,id,image_url})
        await getPhotos(id)
        await props.setIsLoading()
    }

    const removingPhoto = async (image_url) => {

        await deletePhotoFromFirebase(image_url)
        // await axios.post(`${deletePhotoEndpoint}${photo_id}`)
        // console.log(' here is url ',image_url)
        await axios.post(`/api/photos/delete/`,{image_url})
    }

    const deletePhotoFromFirebase = async (url) => {
        const storageRef = app.storage().refFromURL(url)
        storageRef.delete().then(function deleted(params) {
            console.log('image deleted')
        }).catch(function (error) {
            console.log('there was an error')
        })
    }
    // -------------------------------------------------------------//

        const mappedAlbums = albums.map(el => {
            return <p key={el.album_id} >{el.title}</p>
        })

        const mappedPhotos = photos.map(el => {
            return <img key={el.photo_id} src={el.image_url} style={{height:'75px',width:'75px'}} onClick={() => setCurrentImg(el.image_url)}/>
        })

    return(<div className="album-container">

            {view === 'photos' ? <header className='album-title-row'>
                <p style={{float:'left',fontWeight:'700'}}>Photos</p>

                    <input className='user-photo-file-input'
                    style={{position:'absolute',top:'5px',right:'10px',width:'20px',height:'20px'}}
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={e => addAndUpdate(e)} 
                    />
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="friend-menu-icon" style={{position:'absolute',top:'4px',right:'0px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        {/* <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> */}
                    </svg>

            </header>
            :
            <header className='album-title-row'>
                <p style={{float:'left',fontWeight:'700'}}>Albums</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="friend-menu-icon" style={{float:'right',marginTop:'5px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => setCreate(!create)} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
            </header>
            }

        <header className='album-title-row-bottom'>
            {/*  ---- not functional yet --------- */}
            {/* <p className={`photo-selector`} onClick={() => switchView('albums')} >Albums</p> */}

            <p className={`photo-selector`} onClick={() => setView('photos')} >Photos</p>
        </header>

        {currentImg ? <SelectedImage image_url={currentImg} setCurrentImg={setCurrentImg} removingPhoto={props.removingPhoto} getPhotos={getPhotos} user_id={user_id} /> : null}
        {view === 'albums' ? mappedAlbums : null}
        {view === 'photos' ? mappedPhotos : null}
        {state.previewImageFile != null ? <ImagePreview previewImageFile={state.previewImageFile} photo_url={photoUrl} addPhoto={addingPhoto} handleInput={handleInput} /> : null}
    </div>)
}

// export default PhotoAlbum
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{addNewModel})(PhotoAlbum)

{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg> */}