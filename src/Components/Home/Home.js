import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'
import { connect } from 'react-redux'
// import { updateCharacters } from '../../ducks/breakingBadReducer'
import { loginUser,updateUser } from '../../ducks/userReducer'
import { getModels } from './../../ducks/modelsReducer'
// import FirebaseTest from '.././FirebaseTest'
import { Icon } from './Icons/Icon'
import Footer from '../Footer/Footer'
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects'
import Loading from '../Loading/Loading'
// import CurrentProject from './CurrentProject/CurrentProject'
import Project from '../FeaturedProjects/Project'

// import Vid from './Video/EC.NC gear train0001-0500.mp4'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            projects:[],
            user_name:'',
            password:''
        }
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.remindWhoUser = this.remindWhoUser.bind(this)
    }

    componentDidMount() {

        this.props.getModels()

    }

    componentDidUpdate() {
        this.props.updateUser()
    }

    handleUserName(value){
        this.setState({...this.state,user_name:value})
    }

    handlePassword(value){
        this.setState({...this.state,password:value})
    }

    handleClick() {
        const { user_name, password } = this.state
        this.props.loginUser(user_name,password)
        this.setState({user_name:'',password:''})
    }

    remindWhoUser(){
        const { user_name, password } = this.state
        console.log(this.props.user.user.data)
    }

    render() {
        const { user_name, password, projects } = this.state
        const { loginUser } = this.props
        const { isLoggedIn } = this.props.user
        const { user_likes,model_likes,id } = this.props.user.user
        const { models } = this.props.models

        const mappedModels = models.map(element => {
            return <Project data={element} key={element.model_id} isLoggedIn={isLoggedIn} model_likes={model_likes} likes={element.likes} id={id} user_likes={user_likes} />
        })

        return(
            <div>
                <div className="hero">
                    <h2 className="hero-h2">IMAGINE IT - BUILD IT.</h2>
                    <div className="deploy-projects">{mappedModels}</div>
                    {/* <video autoPlay loop muted
                    style={{
                        position:"relavtive",
                        width:"100%",
                        left:"50%",
                        top:"50%",
                        height:"100%"

                    }}
                    >
                        <source src={Vid} type="video/mp4"/>
                    </video> */}
                </div>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser,updateUser,getModels })(Home)