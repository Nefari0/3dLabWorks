import { Component } from 'react'
import axios from 'axios'
import './Project.css'
import ProjectPhotos from './ProjectPhotos'

class ProjectDetail extends Component {

    constructor(){
        super();

        this.state = {
            info:{},
        }
    }

    componentDidMount(){
        this.getDetails()
    }

    componentDidUpdate(prevProps){
        const { model_id } = this.props.match.params
        if (prevProps.match.params.model_id !== model_id) {
            this.getDetails()
        }
    }

    getDetails = () => {
        const { model_id } = this.props.match.params
        axios
            .get(`/api/projects/id/${model_id}`)
            .then((res) => {
                this.setState({
                    info:res.data,
                })
            })
            .catch((err) => {
                this.props.history.push('/404')
            })
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