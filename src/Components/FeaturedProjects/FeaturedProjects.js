import React, { Component } from 'react'
import './FeaturedProjects.css'
import data from '../../data.js'
import Project from './Project'
import { connect } from 'react-redux';
// import { getProjects } from '../../ducks/projectsReducer'
import { updateCharacters } from '../../ducks/breakingBadReducer'
import { getModels } from '../../ducks/modelsReducer'
import axios from 'axios';

class FeaturedProjects extends Component {
    constructor(props){
        super(props);

        this.state = {
            featured: [],
            reduxFeatured:[], //for testing modelsReducer
            setPermission:true
        }
        this.getRedux = this.getRedux.bind(this)
    }


    componentDidMount(){
            // this.getRedux()
        // this.getFromProps()

            // this.props.getModels()
            // const { data } = this.props.models.models
            // // console.log(data)
            // this.setState({...this.state,reduxFeatured:data})

            // this code is the original and functional code to loading featrued projects---
            axios.get('api/project/join').then(res => 
               this.setState({...this.state,featured:res.data}))
    }

    // getFromProps = async () => {
    //     this.props.getModels()
    //     const  { data } = this.props.models.models
    //     this.setState({...this.state, reduxFeatured:data})
    // }

    getRedux = async () => {
        this.props.getModels()
        const { data } = this.props.models.models
        return this.setState({...this.state,featured:data})
    }

    render(){
        const { data } = this.props.models.models
        const { featured } = this.state
        // for (var key in data) {
        //     console.log(data[key])
        // }

        const mappedModels = featured.map(element => {
            // return <Project data={element} key={element.user_id}/> // original
            return <Project data={element} key={element.model_id}/>
        })
        return(
            <div className="featured-projects">
                {/* <button onClick={this.handleReduxClick}>get redux</button> */}
                {mappedModels}
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

export default connect(mapStateToProps, { getModels,updateCharacters })(FeaturedProjects)

// export default FeaturedProjects