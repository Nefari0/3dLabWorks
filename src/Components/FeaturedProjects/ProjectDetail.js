import { Component } from 'react'
import { Switch,Route,Link } from 'react-router-dom'
import axios from 'axios'
import './Project.css'
import './ProjectDetail.css'
import ProjectPhotos from './ProjectPhotos'
import Comments from './Comments/Comments'
import { loginUser, updateUser, remoteLogin } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import CreateComment from './Comments/CreateComment'
import DlUrl from './DlUrl'
import Description from './Description'
import TheMaker from './TheMaker'
import EditModel from './EditProject/EditModel'
import UserPage from '../UserPage/UserPage'
import Home from '../Home/Home'
import SVG from '../SVG'
import '../SVG.css'

const selected = {backgroundColor:'#3c598e'}
const cfff = {color:'#fff'}
const c555 = {color:'#555'}

class ProjectDetail extends Component {

    constructor(){
        super();

        this.state = {
            maker_id:null,
            model_id:null,
            dlUrl:"",
            info:[],
            userInfo:[],
            comments:[],
            files:[],
            // -- views -- //
            viewFiles:true,
            viewComments:false,
            viewDetails:false,
            viewEditProject:false,
            viewInfo:false,
            addedToFavorites:false,
            // -- likes -- //
            myLike:false,
            allLikes:[],
            // -- images -- //
            modelImages:[],
            isDeleted:false,
            selectedPhoto:null,
        }
        this.changeView = this.changeView.bind(this)
        this.getDetails = this.getDetails.bind(this)
        this.plsSignIn = this.plsSignIn.bind(this)
        this.getComments = this.getComments.bind(this)
        this.likeFunc = this.likeFunc.bind(this)
        this.clickLike = this.clickLike.bind(this)
        this.setIsDeleted = this.setIsDeleted.bind(this)
        this.getImages = this.getImages.bind(this)
        this.highLightedPhoto = this.highLightedPhoto.bind(this)
    }

    componentDidMount(){
        const { model_id } = this.props.match.params
        const { user_likes,isLoggedIn } = this.props.user.user
        // ---get project info by model_id --- //
        this.getDetails().then((val) => console.log(val)) // original/working function
        // --- get project images by model_is --- //
        this.getImages()
        // ---get project comments by model_id --- //
        this.getComments()
    }

    componentDidUpdate(prevProps){
        const { model_id } = this.props.match.params
        if (prevProps.match.params.model_id !== model_id) {
            this.getDetails() // original / working function // --- make sure to use this if using getDetails() 
            this.getImages()
        }
    
    }

    async getImages() {
        const { model_id } = this.props.match.params
        axios.get(`/api/project/photos/get/${model_id}`).then((res) => {
            this.setState({modelImages:res.data})
        })
    }


    async getDetails(){

        const { model_id } = this.props.match.params

        await (
            axios
            .get(`/api/projects/id/${model_id}`)
            .then((res) => {
                const { user_id, } = res.data[0]
                axios.get(`/api/users/${user_id}`).then((res2) => {
                    const { id } = this.props.user.user
                    const { isLoggedIn } = this.props.user
                    axios
                    .get(`/api/project/photos/get/${model_id}`)
                    .then((res3) => {
                        this.setState({
                            maker_id:user_id,
                            model_id:model_id,
                            dlUrl:res.data.firebase_url,
                            info:res.data,
                            userInfo:res2.data,
                            modelImages:res3.data,
                            selectedPhoto:res.data[0].firebase_url01,
                        })
                    })
                    if(isLoggedIn === true) {
                        axios.post(`/api/project/getLike`, {id,model_id}).then((res4) => {
                        if(res4.data.user_id != null) {
                        this.setState({
                            myLike:true
                        })}
                        } )
                    }
                })

            })
            .catch((err) => {
                this.props.history.push('/404')
            })
        )
        await axios.get('')

    }

    async getComments() {
        const { model_id } = this.props.match.params
        axios
        .get(`/api/comments/id/${model_id}`)
        .then((res) => {
            this.setState({ comments : res.data})
        })
    }

    resetView() {
        this.setState({
            viewFiles:false,
            viewComments:false,
            viewDetails:false,
            viewEditProject:false,
            viewInfo:false,
            addedToFavorites:false,            
        })
    }

    changeView = (prop) => {
        window.scrollTo({
            top: 1200,
            behavior: 'smooth'
        });
        this.resetView()
        this.setState({
            [prop]:true
        })
    }

    plsSignIn = () => {
        window.scrollTo(0, 0)
        this.props.remoteLogin(true)
    }

    likeFunc = async () => {
        const { id } = this.props.user.user
        const { model_id } = this.state
        const user_id = id
        await axios.post('/api/projects/like', { user_id,model_id })
        this.setState({myLike:!this.state.myLike})
    }

    clickLike = () => {
        const { isLoggedIn,loginOpen } = this.props.user
        if (isLoggedIn === true) {
            this.likeFunc()
        } else {
            window.scrollTo(0, 0)
            this.props.remoteLogin(!loginOpen)
        }
    }

    setIsDeleted = () => {
        this.setState({isDeleted:!this.state.isDeleted})
    }

    highLightedPhoto = (url) => {
        this.setState({
            selectedPhoto:url
        })
    }

    render() {
        const { comments,model_id,maker_id,myLike } = this.state
        const { info, userInfo,viewComments,viewFiles,viewInfo,viewEditProject,modelImages,isDeleted,selectedPhoto,addedToFavorites } = this.state
        const { isLoggedIn } = this.props.user
        const { user,id } = this.props.user.user

        // -- If logged in user is also the owner of this project - authorize privileges -- //
        const authorized = () => {
            if(isLoggedIn) {
                if(id === maker_id) {
                    return true
                }
            }
        }

        const mappedDescription = info.map(el => {
            return <Description key={el.model_id} description={el.description} />
        })

        const mappedUrl = info.map(element => {
            return <DlUrl data={element} key={element.model_id} url={element.firebase_url} isLoggedIn={isLoggedIn} plsSignIn={this.plsSignIn} />
        })
        
        const mappedComments = comments.map(element => {
            return <Comments content={element.text} key={element.comment_id} model_id={element.model_id} date_created={element.date_created} photo_url={element.photo_url} comment_id={element.comment_id} user_id={element.user_id} user_name={element.user_name} getComments={this.getComments} />
        })

        const mappedPhoto = info.map(element => {
            return <ProjectPhotos data={element} key={element.model_id} firebase_url={info[0].firebase_url} model_id={element.model_id} userInfo={userInfo} url={selectedPhoto} isLoggedIn={isLoggedIn} id={id} maker_id={maker_id} plsSignIn={this.plsSignIn} getImages={this.getImages} />
        })

        const mappedUserInfo = userInfo.map(element => {
            return <TheMaker data={element} key={element.user_id} photo_url={element.photo_url} user_name={element.user_name} info={info} maker_id={maker_id} />
        })

        const mappedThumbNails = modelImages.map((el) => {
            return <div key={el.image_id} onClick={() => this.highLightedPhoto(el.photo_url)} ><img className='thumbnail-image' src={el.photo_url}/></div>
        })

        return(
            <div>
            {isDeleted ? (<Route path="/" component={Home}/>) :
                (<div className="view">
                    
                    <section onClick={() => this.props.history.push(`/viewuser/${maker_id}`)} >{mappedUserInfo}</section>

                    <section className='image-viewer'>{mappedThumbNails}</section>

                    <div className="detail-container">

                        {mappedPhoto}

                            <ul>
                                <li style={viewFiles ? selected : null} onClick={() => this.changeView('viewFiles')} >
                                    <p style={viewFiles ? {color:'#fff'} : null} >Download Files</p>
                                </li>

                                <li onClick={this.clickLike}>
                                {isLoggedIn === true && myLike === true ? 
                                <svg  className="small-icon" style={{margin:'auto',marginLeft:'10px',marginRight:'10px', height:'45px',width:'45px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                :
                                <svg className="small-icon" style={{margin:'auto',marginLeft:'10px',marginRight:'10px', height:'45px',width:'45px',opacity:'60%'}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                }
                                <p className="dark-text">Like</p>
                                </li>

                                <li style={viewComments ? selected : null} onClick={() => this.changeView('viewComments')} >
                                    <SVG params={'comments'} fill={'none'} stroke={'currentColor'}/>
                                    <p style={viewComments ? cfff : null}>Comments</p>
                                </li>
                       
                                <li style={viewEditProject || addedToFavorites ? selected : null} onClick={() => this.changeView(authorized() === true ? 'viewEditProject' : 'viewInfo')}>

                                    {authorized() === true ? 
                                    <SVG params={'edit_project'} fill={'none'} stroke={'currentColor'}/> : 
                                    <SVG params={'folder'} fill={'none'} stroke={'currentColor'} />}

                                    <p style={viewEditProject ? cfff : null}>{authorized() ? 'Edit Project' : 'Add to Favorites'}</p>
                                </li>

                                <li style={viewInfo ? selected : null} onClick={() => this.changeView('viewInfo')}>
                                    <SVG params={'info'} fill={'none'} stroke={'currentColor'}/>
                                    <p style={viewInfo ? cfff : null} >Info</p>
                                </li>
                            </ul>
                    </div>
                    
                    <section className="comment-box">

                        <header >
                            <h3>
                                {viewComments ? 'Comments' : null}
                                {viewFiles ? 'Download File' : null}
                                {viewInfo ? 'Information' : null}
                            </h3>
                        </header>

                        {viewComments ? <CreateComment user={user} key={id} id={id} isLoggedIn={isLoggedIn} model_id={model_id} plsSignIn={this.plsSignIn} getComments={this.getComments} /> : null}
                        {viewComments ? mappedComments : null}

                        {viewFiles ? mappedUrl : null}

                        {viewEditProject && authorized() ? <EditModel key={model_id} info={info} model_id={model_id} user_id={id} user_name={user} modelImages={modelImages} getDetails={this.getDetails} setIsDeleted={this.setIsDeleted} getImages={this.getImages} /> : null}

                        {viewInfo ? mappedDescription : null}
                    </section>
                </div>)}
            </div>
        )}
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser,updateUser,remoteLogin })(ProjectDetail)