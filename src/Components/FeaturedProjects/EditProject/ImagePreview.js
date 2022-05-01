import './ImagePreview.css'

const ImagePreview = (props) => {

    const { previewImageFile,photo_url }= props

    const clearState = () => {
        
        props.handleInput('previewImageFile',null)
        props.handleInput('photo_url',null)
    }

    return(
        <div className='im-prev-container'>
            <img src={previewImageFile} />
            <div className='edit-file-button' onClick={() => props.addPhoto(photo_url)} ><p>Submit</p></div>
            <div className='edit-file-button' style={{right:'0px'}} onClick={() => clearState(['string'])} ><p>Cancel</p></div>
        </div>
    )
}

export default ImagePreview