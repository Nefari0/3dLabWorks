import { Component } from 'react'
import axios from 'axios'
import './Project.css'
import ProjectPhotos from './ProjectPhotos'
import Comments from './Comments/Comments'
import { loginUser, updateUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import CreateComment from './Comments/CreateComment'
// import logo from './../../assets/logo.png'
import DlUrl from './DlUrl'
import TheMaker from './TheMaker'
import EditModel from './EditProject/EditModel'

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
        }
        this.changeView = this.changeView.bind(this)
        this.getDetails = this.getDetails.bind(this)
        this.plsSignIn = this.plsSignIn.bind(this)
        this.getComments = this.getComments.bind(this)
    }

    componentDidMount(){

        // ---get project info by model_id --- //
        this.getDetails().then((val) => console.log(val)) // original/working function

        // ---get project comments by model_id --- //
        this.getComments()


    }

    componentDidUpdate(prevProps){
        const { model_id } = this.props.match.params
        if (prevProps.match.params.model_id !== model_id) {
            this.getDetails() // original / working function // --- make sure to use this if using getDetails() 
        }
    }


    async getDetails(){
        const { model_id } = this.props.match.params
        await (
            axios
            .get(`/api/projects/id/${model_id}`)
            .then((res) => {
                const { user_id, } = res.data[0]
                axios.get(`/api/users/${user_id}`).then((res2) => {
                    this.setState({
                        maker_id:user_id,
                        model_id:model_id,
                        dlUrl:res.data.firebase_url,
                        info:res.data,
                        userInfo:res2.data
                    })
                })

            })
            .catch((err) => {
                this.props.history.push('/404')
            })
        )

    }

    async getComments() {
        const { model_id } = this.props.match.params
        axios
        .get(`/api/comments/id/${model_id}`)
        .then((res) => {
            this.setState({ comments : res.data})
        })
    }

    // async createComment() {
    //     const { username,newText } =  
    //     axios.post('/api/comments/create',{username,newText}).then(this.getComments)
    // }

    resetView() {
        this.setState({
            viewFiles:true,
            viewComments:false,
            
        })
    }

    changeView(params) {
        // this.resetView()
        switch (params) {
            case 'viewComments':
                if( this.state.viewComments === false){
                this.setState({ 
                    // viewComments : !this.state.viewComments
                    viewComments : true,
                    viewDetails : false,
                    viewFiles : false,
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
                        viewEditProject : true
                    })
                }
            default:
                break;
        }
    }

    plsSignIn = () => {
        alert('please sign in')
    }


    render() {
        const { comments,model_id,maker_id } = this.state
        const { firebase_url01,firebase_url,user_id } = this.state.info
        const { info, userInfo, viewComments, viewDetails, viewFiles,dlUrl,viewEditProject } = this.state
        const { isLoggedIn } = this.props.user
        const { user,id,photo_url,user_name } = this.props.user.user
        // const { name } = this.state.info[0]

        const mappedUrl = info.map(element => {
            return <DlUrl data={element} key={element.model_id} url={element.firebase_url} isLoggedIn={isLoggedIn} plsSignIn={this.plsSignIn} />
        })
        
        const mappedComments = comments.map(element => {
            return <Comments content={element.text} model_id={element.model_id} date_created={element.date_created} comment_id={element.comment_id} user_id={element.user_id} user_name={element.user_name} />
        })

        const mappedPhoto = info.map(element => {
            return <ProjectPhotos data={element} key={element.model_id} userInfo={userInfo} url={firebase_url} isLoggedIn={isLoggedIn} plsSignIn={this.plsSignIn} />
        })

        const mappedUserInfo = userInfo.map(element => {
            return <TheMaker data={element} key={element.user_id} photo_url={element.photo_url} user_name={element.user_name} info={info} />
        })

        // mappedEditProject = info.map(elenent) 

        return(
            <div className="view">
                {mappedUserInfo}
                {/* <div className="detail-box">
                    <img src={userInfo.photo_url} className="logo-box"/>
                    <p className="dark-text"><br/>by {user_name}</p>
                </div> */}
                <div className="detail-container">
                    {mappedPhoto}
                    <section className="right">
                        <div className={`detail-box small down-load ${viewFiles ? true : 'detail-box small down-load-selected'}`} onClick={() => this.changeView('viewFiles')}><p className={`down-load-text ${viewFiles ? true : 'down-load-text-selected'}`}><a>Download Files</a></p></div>
                        <div className="detail-box small">
                            {null ? <svg className="details-icon-big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                            :
                            <a><svg className="small-icon" style={{margin:'auto',marginLeft:'10px',marginRight:'10px', height:'45px',width:'45px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg></a>}
                            <p className="dark-text">Like</p></div>

                            

                            <div className={`detail-box small ${!viewComments ? true : 'detail-box small selected'}`} onClick={() => this.changeView('viewComments')}><svg className="small-icon" style={{margin:'auto',marginLeft:'10px',marginRight:'10px', height:'45px',width:'45px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>

                            {/* <svg xmlns="http://www.w3.org/2000/svg" className={`details-icon-big ${!viewComments ? true : 'detail-icons-big selected-icon'}`}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg> */}

                            <p className={`dark-text ${!viewComments ? true : 'light-text'}`}>Comment</p>
                            </div>

                        {isLoggedIn === true && this.props.user.user.id === maker_id ? <div className={`detail-box small ${!viewEditProject ? true : 'detail-box small selected'}`} onClick={() => this.changeView('viewEditProject')}>

                        <svg className="small-icon" style={{margin:'auto',marginLeft:'12px',marginRight:'10px', height:'47px',width:'47px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            </svg>
                        <p className={`dark-text ${!viewEditProject ? true : 'light-text'}`}>Edit Project</p></div>
                        :
                        <div className="detail-box small">

                            <svg className="small-icon" style={{margin:'auto',marginLeft:'12px',marginRight:'10px', height:'46px',width:'46px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            </svg>



                            

                            

                            <p className="dark-text">Add To Favorites</p>
                        </div>}
                        
                        
                            

                        <div className="detail-box small">

                        <svg className="small-icon" style={{margin:'auto',marginLeft:'10px',marginRight:'10px', height:'45px',width:'45px',opacity:'60%'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>

                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="details-icon-big" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg> */}

                            <p className="dark-text">Share</p>
                        </div>
                    </section>
                
                </div>
                {/* {viewFiles ? <Comments link={firebase_url}/> : null} */}
                <div className="comment-box">
                    {/* {viewComments ? (<div className="post-box"><p className="dark-text">enter your coment here</p></div>) : (null)} */}
                    {viewComments ? <CreateComment user={user} id={id} isLoggedIn={isLoggedIn} model_id={model_id} plsSignIn={this.plsSignIn} getComments={this.getComments} /> : null}
                    {viewComments ? mappedComments : null}
                    {viewFiles ? mappedUrl : null}
                    {viewEditProject ? <EditModel info={info} getDetails={this.getDetails} /> : null}
                    {/* <h3 className="dark-text">{dlUrl}</h3> */}
                    {/* {viewFiles && <p className="dark-text" >{firebase_url}</p>}  */}
                    {/* {viewComments && <Comments comments={this.state.comments}/>} */}
                    {/* {viewComments && <Comments comments={this.state.comments}/>} */}
                </div>
                
                {/* <div className="comment-box"><h3 className="dark-text">comments</h3></div> */}
                {/* <div className="comment-box"></div> */}
            </div>
        )
    }

}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { loginUser,updateUser })(ProjectDetail)

// export default ProjectDetail