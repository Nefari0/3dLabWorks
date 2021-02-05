import './Project.css'
import React from 'react'

const Project = (props) => {
    const { category, img, firebase_url01, name } = props.data
    console.log(category)
    // const { img } = props
    return(
        <div className='project-container'>
            <h4 className="project-box-h4">project</h4>
            <img className="img" src={firebase_url01}/>
            <p className="project-text">{name}</p>
        </div>
    )
}

export default Project