import './ImagePreview.css'

const ImagePreview = (props) => {

    const { previewImageFile,photo_url }= props

    const addNewHandler = async () => {
        await props.addPhoto(photo_url)
        await clearState()
    }

    const clearState = () => {
        props.handleInput('previewImageFile',null)
        props.handleInput('photo_url',null)
    }

    return(
        <div className='im-prev-container'>
            <img src={previewImageFile} className="prev-im-size" />
            <div className='edit-file-button' style={{width:'50%'}} onClick={() => addNewHandler()} ><p>Submit</p></div>
            <div className='edit-file-button' style={{right:'0px',width:'50%'}} onClick={() => clearState(['string'])} ><p>Cancel</p></div>
        </div>
    )
}

export default ImagePreview