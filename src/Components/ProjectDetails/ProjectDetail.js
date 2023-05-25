import { Component } from 'react'
import { Switch,Route,Link } from 'react-router-dom'
import axios from 'axios'
// import '../Project/Project.css'
import './ProjectDetail.css'
import ProjectPhotos from './ProjectPhotos/ProjectPhotos'
import Comments from './Comments/Comments'
import { loginUser, updateUser, remoteLogin } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import CreateComment from './Comments/CreateComment'
import DlUrl from './DlUrl'
import TheMaker from './TheMaker'
import EditModel from './EditProject/EditModel'
import UserPage from '../UserPage/UserPage'
import Home from '../Home/Home'
import SVG from '../SVG'
import '../SVG.css'
import OptionsMenu from './Options/options.component'

import { 
    DetailsView,
    DetailContainer,
    ThumbnailViewer,
    CommentBox,
    CommentBoxHeader,
    DescriptionText
} from './projectdetail.styles'

// const selected = {backgroundColor:'#3c598e'}
// const cfff = {color:'#fff'} // -- light
// const icon ={
//     margin: 'auto',
//     marginLeft: '10px',
//     marginRight: '10px',
//     height: '40px',
//     width: '40px',
//     opacity: '60%',
//     color: '#6495ed',
//     paddingTop: '10px',
// }

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
        this.stateHandler = this.stateHandler.bind(this)
    }

    componentDidMount(){
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
            this.setState({
                modelImages:res.data
            })
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
                            info:res.data[0],
                            userInfo:res2.data[0],
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

    stateHandler = (prop,val) => {
        this.setState({
            [prop]:val
        })
    } 

    highLightedPhoto = (url) => {
        this.setState({
            selectedPhoto:url
        })
    }

    render() {
        const { comments,model_id,maker_id,myLike } = this.state

        const { 
            info,
            userInfo,
            viewComments,
            viewFiles,
            viewInfo,
            viewEditProject,
            modelImages,
            isDeleted,
            selectedPhoto,
            addedToFavorites,
         } = this.state

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
        
        const mappedComments = comments.map(element => {
            return (
                <Comments 
                    content={element.text} 
                    key={element.comment_id} 
                    model_id={element.model_id} 
                    date_created={element.date_created} 
                    photo_url={element.photo_url} 
                    comment_id={element.comment_id} 
                    user_id={element.user_id} 
                    user_name={element.user_name} 
                    getComments={this.getComments} 
                />
            )
        })

        const mappedThumbNails = modelImages.map((el) => {
            return <div key={el.image_id} onClick={() => this.highLightedPhoto(el.photo_url)} ><img className='thumbnail-image' src={el.photo_url}/></div>
        })

        return(
            <>
            {isDeleted ? (<Route path="/" component={Home}/>) :
                (<DetailsView>
                    
                    <section 
                       onClick={() => this.props.history.push(`/viewuser/${maker_id}`)} 
                    >
                        <TheMaker
                            userInfo={userInfo} 
                            info={info} 
                            maker_id={maker_id}
                        />
                    </section>

                    <ThumbnailViewer>{mappedThumbNails}</ThumbnailViewer>

                    <DetailContainer>

                        <ProjectPhotos
                            model_id={model_id} 
                            url={selectedPhoto} 
                            maker_id={maker_id} 
                            id={id}
                            getImages={this.getImages}
                            main_image_url={this.state.info.firebase_url01}
                            stateHandler={this.stateHandler}
                        />

                        <OptionsMenu
                            state={this.state}
                            authorized={authorized}
                            isLoggedIn={isLoggedIn}
                            clickLike={this.clickLike}
                            changeView={this.changeView}
                        />

                    </DetailContainer>
                    
                    <CommentBox>

                        <CommentBoxHeader >
                            <h3>
                                {viewComments && 'Comments'}
                                {viewFiles && 'Download File'}
                                {viewInfo && 'Information'}
                                {viewEditProject && 'Edit Project'}
                            </h3>
                        </CommentBoxHeader>

                        {/* ---------- */}
                        {/* COMMENTS */}
                        {/* ---------- */}
                        {viewComments &&
                            <CreateComment 
                                user={user} 
                                key={id} 
                                id={id} 
                                isLoggedIn={isLoggedIn} 
                                model_id={model_id} 
                                plsSignIn={this.plsSignIn} 
                                getComments={this.getComments} 
                            />
                        }

                        {viewComments && mappedComments}
                        {/* -------------- */}

                        {viewFiles && 
                            <DlUrl 
                                url={info.firebase_url}
                                isLoggedIn={isLoggedIn}
                                plsSignIn={this.plsSignIn}
                            />
                        }   

                        {viewEditProject && authorized() && 
                            <EditModel 
                                key={model_id} 
                                info={info} 
                                model_id={model_id} 
                                user_id={id} 
                                user_name={user} 
                                modelImages={modelImages} 
                                getDetails={this.getDetails} 
                                setIsDeleted={this.setIsDeleted} 
                                getImages={this.getImages} 
                            />}

                        {viewInfo && 
                            <DescriptionText>
                                    {info.description}
                            </DescriptionText>}

                    </CommentBox>
                </DetailsView>)}
            </>
        )}
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser,updateUser,remoteLogin })(ProjectDetail)