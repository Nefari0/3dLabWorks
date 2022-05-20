import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'
import { connect } from 'react-redux'
import { loginUser,updateUser } from '../../ducks/userReducer'
import { getModels,getFeatured } from './../../ducks/modelsReducer'
import { Icon } from './Icons/Icon'
import Footer from '../Footer/Footer'
// import FeaturedProjects from '../FeaturedProjects/FeaturedProjects'
import Loading from '../Loading/Loading'
import Project from '../FeaturedProjects/Project'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
// import Prototyping from '../Prototyping/Prototyping'
// import Vid from './Video/EC.NC gear train0001-0500.mp4'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            projects:[],
            videos:[],
            user_name:'',
            password:'',
            userLikes:null,
            loading:false,
        }
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.projectIsLiked = this.projectIsLiked.bind(this)
    }

    componentDidMount() {
        
        // this.props.getModels()
        // axios.get('/api/videos/get').then(res => {
        //     this.setState({videos:res.data})
        // })
        // axios.get('/api/videos/featured').then(res => {
        //     this.setState({videos:res.data})
        // })
        // this.props.getFeatured()
        this.getFeaturedVideos()
        
        
    }

    getFeaturedVideos = async () => {
        // await axios.get('/api/featured/join').then(res => {
        //     console.log('res',res.data)
        //     this.setState({projects:res.data})
        // })
        this.setLoading()
        await this.props.getFeatured()
        await axios.get('/api/videos/featured').then(res2 => {
            this.setState({
                videos:res2.data,
                loading:false
            })
            // this.setLoading()
        })
    }

    setLoading() {
        this.setState({loading:!this.state.loading})
    }

    componentDidUpdate() {
        this.props.updateUser()
        // if (this.state.userLikes === null) {this.setState({...this.state,userLikes:this.props.user.user.user_likes})}
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

    // remindWhoUser(){
    //     const { user_name, password } = this.state
    //     console.log(this.props.user.user.data)
    // }

    projectIsLiked(projectId,userLike) {
        try {
            return(userLike.filter(el => el.model_id === projectId)[0].model_id === projectId)
          } catch (error) {
            console.log('user does not like this project',error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
          }
    }

    render() {
        const { user_name, password, projects, loading, videos } = this.state
        const { loginUser } = this.props
        const { isLoggedIn } = this.props.user
        const { user_likes,model_likes,id } = this.props.user.user
        // const { models } = this.props.models
        const { models,featured } = this.props.models

        const mappedModels = featured.map(element => {
            return <Project data={element} key={element.model_id} projectIsLiked={this.projectIsLiked} isLoggedIn={isLoggedIn} model_likes={model_likes} likes={element.likes} id={element.user_id} user_likes={user_likes} />
        })

        const mappedVideos = videos.map(el => {
            return <VideoPlayer key={el.video_id} video_url={el.video_url} category={el.category} tag={el.tag} firebase_url={el.firebase_url} photo_url={el.photo_url} user_name={el.user_name} name={el.name} video_name={el.video_name} />
        })

        return(
            <div>
                <div className="hero">
                    {!loading ? true : <Loading />}
                    <h2 className="hero-h2">IMAGINE IT - BUILD IT.</h2>
                    {/* <h2 className="hero-h2">JOIN THE MAKER REVOLUTION</h2> */}
                    <div className="deploy-projects">
                        {mappedVideos}
                        {mappedModels}
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser,updateUser,getModels,getFeatured })(Home)