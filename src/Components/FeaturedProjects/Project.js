import './Project.css'
import React from 'react'

const Project = (props) => {
    const { category, img, name } = props.data
    console.log(category)
    // const { img } = props
    return(
        <div className='project-container'>
            <h4 className="project-box-h4">project</h4>
            <img className="img" src={img}/>
            <p className="project-text">{name}</p>
        </div>
    )
}

export default Project