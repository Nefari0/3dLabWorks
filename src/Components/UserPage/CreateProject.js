import './CreateProject.css'
import React, { Component } from 'react'

class CreateProject extends Component {
    constructor() {
        super();

        this.state = {
            description:'',
            name:''
        }
        this.handleText = this.handleText.bind(this)
    }

    handleText = (prop,val) => {
        this.setState({
            [prop]:val
        })
    }

    render() {

        return(
            <div className='create-container'>
                <section className='create-title'>
                <h2 style={{textTransform:'none'}} >Create a project</h2>
                </section>

                <section className='create-form'>
                    <div className='create-section-title'>
                        <p className='create-section-title-text' style={{color:'#555'}}>Add File</p>
                        {/* <p className='create-section-title-text' style={{color:'#555'}}>Add Photo</p> */}
                    </div>
                    {/* <div className='upload-div'> */}
                        <input
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.fileHandler(e)} 
                        />

                        <div className='create-section-title'>
                        <p className='create-section-title-text' style={{color:'#555'}}>Add </p>
                        {/* <p className='create-section-title-text' style={{color:'#555'}}>Add file</p> */}
                        </div>

                        <input
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => this.fileHandler(e)} 
                        />

                    {/* </div> */}


                    <input placeholder="Name" className="log-input log-form-length disabled" style={{marginBottom:'5px',marginTop:'21px'}} onChange={e => this.handleText('name',e.target.value)} />
                    {/* <input placeholder="Name" className="log-input log-form-length disabled" style={{marginBottom:'5px',marginTop:'21px'}}/> */}
                    <textarea name="text" rows="5" cols="50" wrap="soft" placeholder='text' className="text-input input-description" onChange={e => this.handleText('description',e.target.value)} > </textarea>
                    <div className='add-button file-button' onClick={() => this.uploadNewFile()}>Submit</div>
                </section>


            </div>
        )
    }
}

export default CreateProject