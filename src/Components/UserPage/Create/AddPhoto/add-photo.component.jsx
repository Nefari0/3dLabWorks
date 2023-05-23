import { CreateInputBox } from "./add-photo.styles";

const AddPhoto = ({previewImageFile,handlePhoto}) => {
    
    return (
        <CreateInputBox>
   
            <img src={previewImageFile} />

            <input
                style={{marginLeft:'40px'}}
                type="file"
                accept="image/png,image/jpeg"
                onChange={e => handlePhoto(e)}
            />

        </CreateInputBox>
    )
}

export default AddPhoto