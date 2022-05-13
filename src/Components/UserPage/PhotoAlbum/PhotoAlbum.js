import './PhotoAlbum.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import SelectedImage from './SelectedImage'

const PhotoAlbum = (props) => {

    const [albums, setAlbums] = useState([])
    const [view,setView] = useState('photos')
    const [create,setCreate] = useState(false)
    const [currentImg,setCurrentImg] = useState(null)

    const { id,photos } = props
    const user_id = id

    useEffect(() => {
        axios.get(`/api/photos/albums/${user_id}`).then(res => {
            setAlbums(res.data)
        })
    },[])

    const addAndUpdate = async (e) => {
        await props.handlePhoto(e)
    }

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

        {currentImg ? <SelectedImage image_url={currentImg} setCurrentImg={setCurrentImg} removingPhoto={props.removingPhoto} getPhotos={props.getPhotos} user_id={id} /> : null}
        {view === 'albums' ? mappedAlbums : null}
        {view === 'photos' ? mappedPhotos : null}
    </div>)
}

export default PhotoAlbum

{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg> */}