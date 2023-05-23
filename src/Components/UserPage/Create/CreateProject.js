import './CreateProject.css'
import React, { Component } from 'react'

import { 
    CreateContainer,
    CreateHead,
    CreateForm,
    CreateRow,
    CreateSectionTitle
 } from './create.styles';

 import AddFile from './AddFile/add.component';
 import AddPhoto from './AddPhoto/add-photo.component';

 import { CloseX } from '../../SVG2';

class CreateProject extends Component {
    constructor() {
        super();

        this.state = {
            description:'',
            name:'',
            previewImageFile:null
        }
        this.getFileName = this.getFileName.bind(this)
    }

    getFileName = () => {
        if (this.props.file != null) {
            return(this.props.file.name)
        } else return("Add File")
    }

    render() {

        // const { previewImageFile,previewModelFile,name } = this.state

        return(
            <CreateContainer>

                <CreateHead>
                    <CloseX onClick={() => this.props.resetView()} />
                    <h2 >Create a project</h2>
                </CreateHead>

                <CreateForm>

                    <CreateRow>
                        <AddFile
                            getFileName={this.getFileName}
                            handleFile={this.props.handleFile}
                        />
                    </CreateRow>

                    <CreateRow>
                        <CreateSectionTitle>
                            <p>Add Photo</p>
                        </CreateSectionTitle>

                        <AddPhoto
                            handlePhoto={this.props.handlePhoto}
                            previewImageFile={this.props.previewImageFile}
                        />

                    </CreateRow>

                    <CreateSectionTitle>
                        <p>Name and description</p>
                    </CreateSectionTitle>



                    <input placeholder="Name" 
                        className="log-input log-form-length disabled" 
                        style={{marginBottom:'5px',marginTop:'21px'}} 
                        onChange={e => this.props.handleAddText('projectName',e.target.value)} 
                    />

                    <textarea
                        placeholder='description' 
                        name="text" 
                        rows="5" 
                        cols="50" 
                        wrap="soft" 
                        className="text-input input-description" 
                        onChange={e => this.props.handleAddText('projectDescription',e.target.value)} 
                        >
                    </textarea>
                    
                    <div 
                        className='send-file send-file-button' 
                        onClick={() => this.props.createNewProject()}   
                        >
                            Submit
                    </div>
                </CreateForm>


            </CreateContainer>
        )
    }
}

export default CreateProject