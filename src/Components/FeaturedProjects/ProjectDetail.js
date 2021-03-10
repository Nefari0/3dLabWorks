import { Component } from 'react'
import axios from 'axios'
import './Project.css'
import ProjectPhotos from './ProjectPhotos'

class ProjectDetail extends Component {

    constructor(){
        super();

        this.state = {

        }
    }

    render() {

        return(
            <div className="detail-container">
                {/* <h2>project detail</h2> */}
                <ProjectPhotos />
                <section className="right-col"></section>
                <section className="bottom-row"></section>
            </div>
        )
    }

}

export default ProjectDetail