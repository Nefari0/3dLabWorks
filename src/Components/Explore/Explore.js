import React, { Component } from 'react'
import './Explore.css'
import Project from '../../Components/FeaturedProjects/Project'
// import { getProjects } from '../../ducks/projectsReducer'
import { loginUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import axios from 'axios'

class Explore extends Component {
    constructor(){
        super();

        this.state = {
            data:[],
            names:[],
            likes:[],
            userId:null
        }
        this.addLike = this.addLike.bind(this)
    }

    componentDidMount(){
        // axios.get('/api/projects/all').then(res =>
        axios.get('/api/project/join').then(res =>
            this.setState({ ...this.state,data:res.data}))   
    }

    // componentDidMount(){
    //     // axios.get('/api/projects/all').then(res =>
    //     axios.get('/api/project/join').then(res => {
    //         let live = res.data
    //         axios.get('/api/like/count').then(res => {
    //             let live2 = res.data
    //             this.setState({...this.state,data:live,likes:live2})
    //         })
    //     })
    // }

    addLike(){
        axios.post('/api/project/like').then(res => {
            this.setState({...this.state,likes:res.data})
        })
    }
    
    render(){

        const { data } = this.state
        const { isLoggedIn } = this.props.user
        if(isLoggedIn === true){ let { id } = this.props.user}
        // const { id } = this.props.user.user
    
        const mappedData = data.map(element => {
            return <Project data={element} key={element.model_id}/>
        })

        return(
            <div className="explore-container">
                {mappedData}
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}
// export default Explore
export default connect(mapStateToProps, { loginUser })(Explore)