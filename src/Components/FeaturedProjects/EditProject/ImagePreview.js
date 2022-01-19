import './ImagePreview.css'

const ImagePreview = (props) => {

    const { previewImageFile } = props

    return(
        <div className='im-prev-container'>
            <img src={previewImageFile} style={{width:'100%',height:'100%'}} />
            <div className='edit-file-button' style={{position:'relative',top:'-36px',height:'30px',width:'80px'}} onClick={() => props.passNewPhotoToFB()} ><p>Submit</p></div>

        </div>
    )
}

export default ImagePreview