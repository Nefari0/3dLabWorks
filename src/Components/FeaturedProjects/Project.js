import './Project.css'
import React from 'react'

const Project = (props) => {
    const { category, img, firebase_url01, name, description } = props.data
    console.log(category)
    return(
        <div className='project-container'>
            <h4 className="project-box-h4">3d model .stl</h4>
            <img className="img" src={firebase_url01}/>
            <p className="project-text">{name}</p>
            <p className="project-text">{description}</p>
        </div>
    )
}

export default Project