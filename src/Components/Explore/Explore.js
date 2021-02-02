import React, { Component } from 'react'
import './Explore.css'
import Project from '../../Components/FeaturedProjects/Project'
// import { getProjects } from '../../ducks/projectsReducer'
import { connect } from 'react-redux'
import axios from 'axios'

class Explore extends Component {
    constructor(){
        super();

        this.state = {
            data:[],
            names:[]  
        }
    }

    // componentDidMount() {
    //     axios.get('/api/projects/all').then(res => {
    //         this.setState({
    //             data:res.data})
    //     })
    // }

    componentDidMount() {
        axios.get("https://www.breakingbadapi.com/api/characters").then(res => {
            this.setState({
                data:res.data})
        })
    }
    
    render(){

        const { data } = this.state
        
        console.log('props for explorer',this.props)
        const mappedData = data.map(element => {
            return <Project data={element} key={element.product_id} />
        })

        return(
            <div className="explore-container">
                {/* <h4 onClick={this.update}className="explore-h4">explore</h4> */}

                {mappedData}
            </div>
        )
    }
}

// function mapStateToProps(reduxState){
    // return reduxState
// }
export default Explore
// export default connect(mapStateToProps, { getProjects })(Explore)