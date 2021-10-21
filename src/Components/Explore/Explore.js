import React, { Component } from 'react'
import './Explore.css'
import Project from '../FeaturedProjects/Project'
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
            userId:null,
            likes:[],
        }
        this.addLike = this.addLike.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.updateState = this.updateState.bind(this)
    }

    componentDidMount(){
        const { id } = this.props.user.user
        // axios.get('/api/projects/all').then(res =>
        this.updateState()
        // axios.get('/api/project/join').then(res =>
        //     this.setState({ ...this.state,data:res.data,userId:id}))   
    }

    // componentDidUpdate(){
    //     const { id,isLoggedIn } = this.props.user.user
    //     const { userId } = this.state
    //     if (userId === null) {
    //         this.userIdToState()
    //         this.setState({userId : id})
    //         console.log('update component',id)
    //     }
    // }

    updateState(){
        
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

    addLike(params_id){
        const { data } = this.state
        const { id } = this.props.user.user
        const user_id = id
        console.log('this is add like()',user_id)
        
        const { userId } = this.state
        // console.log('this is model_id params from explore addLike function',model_id)
        // console.log('this is user_id from explore addLike function',user_id)
        // alert(params)
        if(user_id != undefined){
            axios.post('/api/projects/like', { user_id, params_id }).then(res => {

            })
            // for (let i = 0; i < data.length; i++){
                for(let key in data){
                    if (data[key].model_id === params_id) {
                    console.log(key,data[key],data[key].likes)
                    this.setState({
                        // data[key]."likes":"1"
                    })
           
                    // if (data[key].firstName === "Elsy") {
                    //     obj[key].aNumber += 2
                    //     console.log(obj[key].aNumber)
                    }
                }
            // }
        } else {
            alert('please sign in')
        }

 



        // this.updateState()
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
            return <Project data={element} key={element.model_id} addLike={this.addLike} handleClick={this.handleClick} isLoggedIn={isLoggedIn} />
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