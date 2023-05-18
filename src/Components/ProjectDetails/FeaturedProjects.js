// import React, { Component } from 'react'
// import './FeaturedProjects.css'
// import data from '../../data.js'
// import Project from './Project'
// import { connect } from 'react-redux';
// import { updateCharacters } from '../../ducks/breakingBadReducer'
// import { getModels } from '../../ducks/modelsReducer'
// import axios from 'axios';

// class FeaturedProjects extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             featured: [],
//             setPermission:true
//         }
//     }

//     componentDidMount(){
//             axios.get('api/project/join').then(res => 
//                this.setState({...this.state,featured:res.data}))
//     }

//     render(){
       
//         const { featured } = this.state

//         const mappedModels = featured.map(element => {
//             return <Project data={element} key={element.model_id}/>
//         })
//         return(
//             <div className="featured-projects">
//                 {mappedModels}
//             </div>
//         )
//     }



// }
// function mapStateToProps(reduxState){
//     return reduxState
// }
