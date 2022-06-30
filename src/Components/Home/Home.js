import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'
import { connect } from 'react-redux'
import { loginUser,updateUser } from '../../ducks/userReducer'
import { getModels,getFeatured } from './../../ducks/modelsReducer'
import Loading from '../Loading/Loading'
import Project from '../FeaturedProjects/Project'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

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

        // --- this will be used for side scroll --- //
        // this.testRef = React.createRef();
    }

    componentDidMount() {
        this.getFeaturedVideos()
    }

    getFeaturedVideos = async () => {
        this.setLoading()
        await this.props.getFeatured()
        await axios.get('/api/videos/featured').then(res2 => {
            this.setState({
                videos:res2.data,
                loading:false
            })
        })
    }

    setLoading() {
        this.setState({loading:!this.state.loading})
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

    projectIsLiked(projectId,userLike) {
        try {
            return(userLike.filter(el => el.model_id === projectId)[0].model_id === projectId)
          } catch (error) {
            console.log('user does not like this project',error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
          }
    }


    //  --- SIDE SCROLL --- //
    // scroll = (params) => {
    //     console.log('hit scroll')
    //     params.current.scrollIntoView({behavior: "smooth", block: "center"})
    //     // console.log('test',this.testRef)
    //     // window.scrollTo(
    //     //     {
    //     //     top: 0,
    //     //     left: 10,
    //     //     behavior: 'smooth'
    //     //   }
    //     //   );
    // }

    render() {
        const { loading, videos } = this.state
        const { isLoggedIn } = this.props.user
        const { user_likes,model_likes } = this.props.user.user
        const { featured } = this.props.models

        const mappedModels = featured.map(element => {
            return <Project data={element} key={element.model_id} projectIsLiked={this.projectIsLiked} isLoggedIn={isLoggedIn} model_likes={model_likes} likes={element.likes} id={element.user_id} user_likes={user_likes} />
        })

        const mappedVideos = videos.map(el => {
            return <VideoPlayer key={el.video_id} video_url={el.video_url} category={el.category} tag={el.tag} firebase_url={el.firebase_url} photo_url={el.photo_url} user_name={el.user_name} name={el.name} video_name={el.video_name} />
        })

        return(
                <div className="hero">
                    {!loading ? true : <Loading />}

                    <h2 className="">IMAGINE IT - BUILD IT.</h2>

                    <section className="deploy-projects invisible-scrollbar" >
                        {mappedVideos}
                        {mappedModels}
                    </section>
                </div>
        )
    }
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser,updateUser,getModels,getFeatured })(Home)