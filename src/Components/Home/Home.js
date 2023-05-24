import React, { Component } from 'react'
import axios from 'axios'
// import './Home.css'
import { connect } from 'react-redux'
import { loginUser,updateUser } from '../../ducks/userReducer'
import { getModels,getFeatured } from '../../ducks/modelsReducer'
import Loading from '../Loading/Loading'
import Project from '../Project/Project'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import { RightArrow,LeftArrow } from '../SVG2'
import { 
    Hero,
    HeroH2,
    CarouselRail,
    Carousel,
    RightSlideButton, 
    LeftSlideButton
} from './home.styles'

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
            positionCounter:0
        }
        this.stateHandler = this.stateHandler.bind(this)
        this.projectIsLiked = this.projectIsLiked.bind(this)
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

    stateHandler(prop,val) {
        this.setState({
            [prop]:val
        })
    }

    projectIsLiked(projectId,userLike) {
        try {
            return(userLike.filter(el => el.model_id === projectId)[0].model_id === projectId)
          } catch (error) {
            console.log('user does not like this project',error);
          }
    }

    render() {

        const { loading, videos, positionCounter } = this.state
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
                <Hero>
                    
                    {!loading ? true : <Loading />}

                    <HeroH2 className="">IMAGINE IT - BUILD IT.</HeroH2>

                    <CarouselRail>
                        <Carousel positionCounter={positionCounter}>
                            {mappedVideos}
                            {mappedModels}
                        </Carousel>
                    </CarouselRail>

                    {positionCounter < 0 && 
                        <LeftSlideButton onClick={() => this.stateHandler('positionCounter',positionCounter+260)}>
                            {LeftArrow()}
                        </LeftSlideButton>
                    }

                    {positionCounter >= ((mappedVideos.length+mappedModels.length-2)*-400)+600 && 
                        <RightSlideButton 
                            onClick={() => this.stateHandler('positionCounter',positionCounter-260)}
                        >
                            {RightArrow()}
                        </RightSlideButton>
                    }

                </Hero>
        )
    }
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser,updateUser,getModels,getFeatured })(Home)