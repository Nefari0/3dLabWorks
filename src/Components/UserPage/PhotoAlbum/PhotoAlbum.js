import './PhotoAlbum.css'
import axios from 'axios'
const addImageEndpoint = 'place holder'

const PhotoAlbum = (prop) => {

const addPhoto =  async (url) => {
        const { model_id,info } = this.props
        const name = null
        this.setIsLoading() // -- init loading screen
        
        const refFromURL = await this.props.getRefFromUrl(info[0].firebase_url).payload // -- path of stored project -- //
         
        const cloud = await this.props.addNewModel(url,refFromURL) // -- add new photo -- //

        // -- fetch and store photo url -- //
        const photo_url = await cloud.action.payload.ref.getDownloadURL()
        await axios.post(addImageEndpoint,{model_id,name,photo_url})

        // -- render new images -- //
        await this.props.getImages()
        this.setState({previewImageFile:null})
        this.setIsLoading() // -- exit loading screen
    }

    return(<div className="album-container">
        {/* <span className='album-title'>photos</span> */}
        <h2 className='album-title' >photos</h2>
        <div>photo</div>

    </div>)
}

export default PhotoAlbum