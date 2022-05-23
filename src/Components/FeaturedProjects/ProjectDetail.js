import { Component } from 'react'
import { Switch,Route,Link } from 'react-router-dom'
import axios from 'axios'
import './Project.css'
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
            viewFiles:true,
            viewComments:false,
            viewDetails:false,
            viewEditProject:false,
            viewInfo:false,
            myLike:false,
            allLikes:[],
            modelImages:[],
            isDeleted:false,
        // - image currently selected - // 
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
        console.log('hit getImages function')
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
                        console.log('function')
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
            viewFiles:true,
            viewComments:false,
            
        })
    }

    changeView(params) {
        switch (params) {
            case 'viewComments':
                if( this.state.viewComments === false){
                this.setState({ 
                    viewComments : true,
                    viewDetails : false,
                    viewFiles : false,
                    viewInfo : false,
                    viewEditProject : false
                })
                }
                break;
            case 'viewDetails':
                if ( this.state.viewDetails === true){
                    this.setState({ viewDetails : !this.state.viewDetails})
                }
                break;
            case 'viewFiles':
                if ( this.state.viewFiles === false){
                    this.setState({
                        // viewFiles : !this.state.viewFiles
                        viewFiles : true,
                        viewComments : false,
                        viewDetails : false,
                        viewInfo : false,
                        viewEditProject : false
                    })
                }
                break;
            case 'viewEditProject':
                if (this.state.viewEditProject === false){
                    this.setState({
                        viewFiles : false,
                        viewComments :false,
                        viewDetails : false,
                        viewInfo : false,
                        viewEditProject : true
                    })
                }
                break;
            case 'viewInfo':
                if (this.state.viewInfo === false){
                    this.setState({
                        viewFiles : false,
                        viewComments :false,
                        viewDetails : false,
                        viewEditProject : false,
                        viewInfo : true,
                    })
                }
            default:
                break;
        }
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
        // await updateLikes(model_id)
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
        // const { firebase_url01,firebase_url,user_id,description } = this.state.info
        const { info, userInfo, viewComments, viewDetails, viewFiles, viewInfo, dlUrl,viewEditProject,modelImages,isDeleted,selectedPhoto } = this.state
        const { isLoggedIn,loginOpen } = this.props.user
        const { user,id,photo_url,user_likes } = this.props.user.user

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
                
                {mappedUserInfo}

                <div className='image-viewer'>
                    {mappedThumbNails}
                </div>
                <div className="detail-container">
                    {mappedPhoto}
                    <section className="right">
                        <div className={`detail-box small down-load ${viewFiles ? true : 'detail-box small down-load-selected'}`} onClick={() => this.changeView('viewFiles')}><p className={`down-load-text ${viewFiles ? true : 'down-load-text-selected'}`}><a>Download Files</a></p></div>
                        <div className="detail-box small" onClick={this.clickLike} >
                            {isLoggedIn === true && myLike === true ? <svg  className="small-icon" style={{margin:'auto',marginLeft:'10px',marginRight:'10px', height:'45px',width:'45px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            :
                            <a><svg className="small-icon" style={{margin:'auto',marginLeft:'10px',marginRight:'10px', height:'45px',width:'45px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg></a>}
                            <p className="dark-text">Like</p>
                        </div>

                        <div className={`detail-box small ${!viewComments ? true : 'detail-box small selected'}`} onClick={() => this.changeView('viewComments')}><svg className="small-icon" style={{margin:'auto',marginLeft:'10px',marginRight:'10px', height:'45px',width:'45px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <p className={`dark-text ${!viewComments ? true : 'light-text'}`}>Comment</p>
                        </div>
                        {isLoggedIn === true && this.props.user.user.id === maker_id ? <div className={`detail-box small ${!viewEditProject ? true : 'detail-box small selected'}`} onClick={() => this.changeView('viewEditProject')}>

                        <svg className="small-icon" style={{margin:'auto',marginLeft:'12px',marginRight:'10px', height:'46px',width:'46px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>

                            
                        <p className={`dark-text ${!viewEditProject ? true : 'light-text'}`}>Edit Project</p></div>
                        :
                        <div className="detail-box small">
                            <svg className="small-icon" style={{margin:'auto',marginLeft:'12px',marginRight:'10px', height:'46px',width:'46px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            </svg>
                            <p className="dark-text">Add To Favorites</p>
                        </div>}

                        {/* -----------------------------------------------information about project-------------------------------------------------- */}

                        <div className={`detail-box small ${!viewInfo ? true : 'detail-box small selected'}`} onClick={() => this.changeView('viewInfo')} >

                        <svg className="small-icon" style={{margin:'auto',marginLeft:'12px',marginRight:'10px', height:'46px',width:'46px',opacity:'60%'}}  xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        {/* <svg className="small-icon" style={{margin:'auto',marginLeft:'10px',marginRight:'10px', height:'45px',width:'45px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg> */}
                            <p className={`dark-text ${!viewInfo ? true : 'light-text'}`} >Info</p>
                        </div>
                    </section>
                
                </div>
                    <div className="comment-box">
                        {viewComments ? <section className='project-selection-title'><h3 className="prodect-selection-h3">Comments</h3></section> : null}
                        {viewComments ? <CreateComment user={user} key={id} id={id} isLoggedIn={isLoggedIn} model_id={model_id} plsSignIn={this.plsSignIn} getComments={this.getComments} /> : null}
                        {viewComments ? mappedComments : null}
                        {viewFiles ? <section className='project-selection-title'><h3 className="prodect-selection-h3">Download File</h3></section> : null}
                        {viewFiles ? mappedUrl : null}
                        {viewEditProject ? <EditModel key={model_id} info={info} model_id={model_id} user_id={id} user_name={user} modelImages={modelImages} getDetails={this.getDetails} setIsDeleted={this.setIsDeleted} getImages={this.getImages} /> : null}
                        {viewInfo ? <section className='project-selection-title'><h3 className="prodect-selection-h3">Information</h3></section> : null}
                        {/* {viewInfo ? <section className='doc-container'><p style={{color:'#555'}} >{description}</p></section> : null} */}
                        {viewInfo ? mappedDescription : null}
                    </div>
            </div>)}
            </div>
        )}
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser,updateUser,remoteLogin })(ProjectDetail)