import React, { Component } from 'react'
import './FeaturedProjects.css'
import data from '../../data.js'
import Project from './Project'
import { connect } from 'react-redux';
// import { getProjects } from '../../ducks/projectsReducer'
// import { updateCharacters } from '../../ducks/breakingBadReducer'
import { getModels } from '../../ducks/modelsReducer'
import axios from 'axios';

class FeaturedProjects extends Component {
    constructor(props){
        super();

        this.state = {
            featured: {}
        }
    }


        componentDidMount(){
            // axios.get('/api/projects/join').then(res => 
            //     this.setState({...this.state,featured:res.data}))

        // this.props.getFeatured()
        // const { data } = this.props.models.models
        // this.setState({
        //     ...this.state,models:data
        // })

    
    
    }

    render(){
        const { data } = this.props.models.models

        // for (var key in data) {
        //     console.log(data[key])
        // }

        // const mappedModels = data.map(element => {
        //     return <Project data={element} key={element.model_id}/>
        // })
        return(
            <div className="featured-projects">

            {/* <button onClick={this.props.getModels}>click</button> */}
                
                {/* {console.log(data[3])} */}

                {/* { this.props.models.isloading ? (
                    <h3>loading</h3>
                ) : (
                    this.props.models.models.data.map(element => (
                        <Project  key={element.model_id}/>
                    ))
                    // this.props.models.models.data.map(element => (
                    //     <Project  data={element} key={element.model_id}/>
                    // ))
                )} */}

            </div>
        )
    }



}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { getModels })(FeaturedProjects)

// export default FeaturedProjects