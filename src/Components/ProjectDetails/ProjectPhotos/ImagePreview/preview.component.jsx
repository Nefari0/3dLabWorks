import { 
    ImagePreviewContainer,
    EditFileButton 
} from './preview.styles'

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
        <ImagePreviewContainer>
            <img src={previewImageFile}/>
            <EditFileButton style={{width:'50%'}} onClick={() => addNewHandler()} >Submit</EditFileButton>
            <EditFileButton style={{right:'0px',width:'50%'}} onClick={() => clearState(['string'])} >Cancel</EditFileButton>
        </ImagePreviewContainer>
    )
}

export default ImagePreview