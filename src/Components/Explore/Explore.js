import React, { Component } from 'react'
import './Explore.css'
import Project from '../../Components/FeaturedProjects/Project'
// import { getProjects } from '../../ducks/projectsReducer'
import { loginUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import axios from 'axios'

class Explore extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[],
            names:[],
            likes:[],
            userId:null
        }
        this.addLike = this.addLike.bind(this)
        this.handleClick = this.handleClick.bind(this)
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

    addLike(model_id){
        const { id } = this.props.user.user
        // const { model_id } = this.props.data
        console.log('this is model_id params from explore addLike function',model_id)
        console.log('this is user_id from explore addLike function',id)
        // alert(params)
        if(id != undefined){
            axios.post('/api/projects/like', { id, model_id }).then(res => {
                this.setState({
                    ...this.state,
                    likes:res.data
                })
            })
        } else {
            alert('please sign in')
        }
        // axios.post('/api/project/like').then(res => {
        //     this.setState({...this.state,likes:res.data})
        // })
    }

    handleClick(){
        // alert('click from even handler')
        this.addLike()
    }
    
    render(){

        const { data } = this.state
        const { isLoggedIn } = this.props.user
        console.log(isLoggedIn)
        if(isLoggedIn === true){ let { id } = this.props.user}
        // const { id } = this.props.user.user
    
        const mappedData = data.map(element => {
            return <Project data={element} key={element.model_id} addLike={this.addLike} handleClick={this.handleClick} />
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