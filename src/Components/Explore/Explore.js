import React, { Component } from 'react'
import './Explore.css'
import Project from '../Project/Project'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import Loading from '../Loading/Loading'
import { loginUser,updateUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import Button from '../../GlobalStyles/BaseButton/button.component'

import axios from 'axios'

class Explore extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[],
            names:[],
            videos:[],
            userId:null,
            likes:[],
            projectSearch:"",
            openSearchBar:false,
            isLoading:false,

    // --- select items to view --- //
            viewModels:true,
            viewVideos:false,
        }
        this.addLike = this.addLike.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.updateState = this.updateState.bind(this)
        this.projectIsLiked = this.projectIsLiked.bind(this)
        this.handleText = this.handleText.bind(this)
        this.openSearch = this.openSearch.bind(this)
        this.setIsLoading = this.setIsLoading.bind(this)
    }

    componentDidMount(){
        this.updateState()
    }

    componentDidUpdate() {
        this.props.updateUser()
    }

    setIsLoading() {
        this.setState({isLoading:!this.state.isLoading})
    }

    async updateState(){
        await this.setIsLoading()
        await axios.get('/api/project/join').then(res =>
            this.setState({ ...this.state,data:res.data}))

        await axios.get('/api/videos/get').then(res2 => {
            this.setState({videos:res2.data})
        })
        await this.setIsLoading()
    }

    addLike(params_id){
        const { data } = this.state
        const { id } = this.props.user.user
        const user_id = id
        console.log('this is add like()',user_id)
        
        if(user_id !== undefined){
            axios.post('/api/projects/like', { user_id, params_id }).then(res => {
            })
                for(let key in data){
                    if (data[key].model_id === params_id) {
                    console.log(key,data[key],data[key].likes)
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
            // console.log('user does not like this project',error);
          }
    }

    handleText = (prop,val) => {
        this.setState({
            [prop]:val,
        })
    }

    openSearch = () => {
        this.setState({openSearchBar:!this.state.openSearchBar})
    }

    changeView = (param) => {
        this.resetView()
        switch(param) {
            case '3D Models':
                this.setState({viewModels:true})
                break;
            case 'Videos':
                this.setState({viewVideos:true})
                break;
            default:
                return
        }
    }
    resetView = () => {
        this.setState({
            viewModels:false,
            viewVideos:false,
        })
    }
    
    render(){
        const { data,projectSearch,openSearchBar,videos,isLoading } = this.state
        const { isLoggedIn } = this.props.user
        const { user_likes,id } = this.props.user.user

        const filterProjects = data.filter(element => element.name.toString().includes(projectSearch))

        const mappedData = filterProjects.map(element => {
            return <Project data={element} key={element.model_id} projectIsLiked={this.projectIsLiked} handleClick={this.handleClick} isLoggedIn={isLoggedIn} likes={element.likes} id={id} user_likes={user_likes} />
        })

        const mappedVideos = videos.map(el => {
            return <VideoPlayer key={el.video_id} video_url={el.video_url} category={el.category} tag={el.tag} firebase_url={el.firebase_url} photo_url={el.photo_url} user_name={el.user_name} name={el.name} video_name={el.video_name}  />
        })

        return(
            <div >
                {isLoading === true ? <Loading /> : null}
                <header className="sub-header">
                    <Button
                        onClick={() => this.changeView('3D Models')} 
                        text={'3D Models'}
                        selected={this.state.viewModels}     
                        buttonClass={'tiny'}
                    />

                    <Button 
                        onClick={() => this.changeView("Videos")}
                        text={'Videos'} 
                        buttonClass={'tiny'}
                        selected={this.state.viewVideos}
                    />

                </header>
                <div className="explore-container" style={{paddingTop:'25px'}}>
                    <div className={`search-menu ${!isLoggedIn ? true : 'slide-over'} ${openSearchBar ? true : `search-menu-closed ${!isLoggedIn ? true : 'slide-over'}`}`} >

                        <svg onClick={() => this.openSearch()} style={{width:'25px',opacity:'.5'}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div className={`show-bar ${openSearchBar ? false : `dont-show-bar`}`}>
                            <input placeholder="search" type="text" style={{height:'25px',width:'100px',borderRadius:'10px',color:'#fff',marginLeft:'10px'}} onChange={e => this.handleText("projectSearch",e.target.value)} ></input>
                        </div>
                    </div>
                    {this.state.viewModels === true ? mappedData : null}
                    {this.state.viewVideos === true ? mappedVideos : null}
                </div>
            </div>

        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser,updateUser })(Explore)