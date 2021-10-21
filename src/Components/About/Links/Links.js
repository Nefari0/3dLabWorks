
import axios from 'axios';
import { Component } from 'react'
import OneLink from './OneLink'
// import './About.css'

export default class Links extends Component {
    constructor() {
        super();

        this.state ={
            link:'blender.org',
            linkText:'Blender',
            links:[],
        }
    }

    componentDidMount(){
        axios.get('/api/links/get').then(res => {
            this.setState({
                links:res.data
            })
        })
    }

    render(){
        
        const { links } = this.state

        const mappedLinks = links.map(element => {
            return <OneLink link_to={element.link_to} link_id={element.link_id} link_text={element.link_text} description={element.description} />
        })
 
        return(
            <div className="doc-containers">
                {mappedLinks}
            </div>
        )
    }
}