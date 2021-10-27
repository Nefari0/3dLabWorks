import React, { Component } from 'react'
import './EditModel.css'

class EditModel extends Component {

    constructor() {
        super();

        this.state = {
            name:''
        }
    }

    render() {
        
        return(
            <div className="edit-project-container" >
                <h2 className="edit-model-h3">edit model ?</h2>
                <input placeholder="project name" className="text-input"></input>
                <input placeholder="project description" className="text-input"></input>
                <p>select photo</p>
                <input  type="file" accept=".jpg/.png" ></input>
                <p>add .blend or .stl file</p>
                <input  type="file" accept=".blend/.stl" ></input>
            
            </div>
        )
    }
}

export default EditModel