import { 
    AddFileButton,
    AddFileContainer,
    InputFile
} from "./add.styles"

const AddFile = ({handleFile,getFileName}) => {

    return (
        <AddFileContainer>
            <div>
                <AddFileButton
                >
                    {getFileName()}
                </AddFileButton>

                <InputFile
                    style={{marginLeft:'40px'}}
                    type="file"
                    accept=".blend,.stl"
                    onChange={e => handleFile(e)} 
                />
            </div>
        </AddFileContainer>
    )
}

export default AddFile