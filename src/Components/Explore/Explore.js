import React, { Component } from 'react'
import './Explore.css'
import Project from '../FeaturedProjects/Project'
// import { getProjects } from '../../ducks/projectsReducer'
import { loginUser,updateUser } from '../../ducks/userReducer'

import { connect } from 'react-redux'
import axios from 'axios'

class Explore extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[],
            names:[],
            userId:null,
            likes:[],
        }
        this.addLike = this.addLike.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.updateState = this.updateState.bind(this)
        this.projectIsLiked = this.projectIsLiked.bind(this)
    }

    componentDidMount(){
        // const { id } = this.props.user.user
        this.updateState()
    }

    componentDidUpdate() {
        this.props.updateUser()
    }

    updateState(){
        axios.get('/api/project/join').then(res =>
            this.setState({ ...this.state,data:res.data})) 
    }

    addLike(params_id){
        const { data } = this.state
        const { id } = this.props.user.user
        const user_id = id
        console.log('this is add like()',user_id)
        
        const { userId } = this.state
        if(user_id != undefined){
            axios.post('/api/projects/like', { user_id, params_id }).then(res => {

            })
                for(let key in data){
                    if (data[key].model_id === params_id) {
                    console.log(key,data[key],data[key].likes)
                    // this.setState({})
                    }
                }
        } else {
            alert('please sign in')
        }
    }

    handleClick(){
        this.addLike()
    }

    projectIsLiked(projectId,userLike) {
        try {
            return(userLike.filter(el => el.model_id === projectId)[0].model_id === projectId)
          } catch (error) {
            console.log('user does not like this project',error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
          }
    }
    
    render(){


        const { data } = this.state
        const { isLoggedIn } = this.props.user
        const { user_likes,model_likes,id } = this.props.user.user
    
        const mappedData = data.map(element => {
            return <Project data={element} key={element.model_id} projectIsLiked={this.projectIsLiked} handleClick={this.handleClick} isLoggedIn={isLoggedIn} likes={element.likes} id={id} user_likes={user_likes} />
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

export default connect(mapStateToProps, { loginUser,updateUser })(Explore)