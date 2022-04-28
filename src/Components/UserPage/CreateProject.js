import './CreateProject.css'
import React, { Component } from 'react'

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

        const { previewImageFile,previewModelFile,name } = this.state

        return(
            <div className='create-container'>
                <section className='create-title'>
                <svg className="close-button" style={{color:'#fff', height:'35px',width:'35px',opacity:'60%',marginTop:'2px',marginBottom:'2px'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor" onClick={() => this.props.resetView()} >
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <h2 style={{textTransform:'none'}} >Create a project</h2>
                </section>

                <section className='create-form'>

                <section className='create-project-row'>
                    <div className='file-add'>

                    <div className='photo-input-box '>
                        <div className='add-file-button add-file-button-text' >{this.getFileName()}</div>
                        <input className='input-file select-file-1'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept=".blend,.stl"
                        onChange={e => this.props.handleFile(e)} 
                        />
                    </div>

                    </div>
                </section>

                    <section className='create-project-row'>
                    <div className='create-section-title'><p style={{color:'#555'}}>Add Photo</p></div>
              
                    <div className='create-input-box' >
                        <img style={{width:'80px',height:'80px',borderRadius:'10px',marginLeft:'35%',marginBottom:'0px'}} src={this.props.previewImageFile} />
                        <input className='input select-file-1'
                        style={{marginLeft:'40px'}}
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.props.handlePhoto(e)}
                        />
                    </div>

                </section>

                    <div className='create-section-title' style={{marginTop:'10px'}}><p style={{color:'#555'}}>Name and description</p></div>
                    <input placeholder="Name" className="log-input log-form-length disabled" style={{marginBottom:'5px',marginTop:'21px'}} onChange={e => this.props.handleAddText('projectName',e.target.value)} />
                    <textarea placeholder='description' name="text" rows="5" cols="50" wrap="soft" className="text-input input-description" onChange={e => this.props.handleAddText('projectDescription',e.target.value)} > </textarea>
                    <div className='send-file send-file-button' onClick={() => this.props.createNewProject()}>Submit</div>
                </section>


            </div>
        )
    }
}

export default CreateProject