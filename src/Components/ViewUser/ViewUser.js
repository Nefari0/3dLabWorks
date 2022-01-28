import axios from 'axios';
import Home from '../Home/Home'
// import CreateProject from './CreateProject';
import { Switch, Route } from 'react-router-dom'
import UserProject from './UserProject'
import { Component, lazy } from 'react'
import { Link } from 'react-router-dom';
// import './UserPage.css'
import '../UserPage/UserPage.css'
import { connect } from 'react-redux'
// import { getProjects } from '../../ducks/projectsReducer';
import { updateUser } from '../../ducks/userReducer'
// import Collections from '../../Collections'
// import UserCollections from './UserCollections';
// import UserInfo from './UserInfo'
import UserInfo from '../UserPage/UserInfo';
import {app} from '../../base'
// import SecurityTest from './SecurityTest'
import MobileLogin from '../MobileLogin/MobileLogin'
import Loading from '../Loading/Loading';
// import AdminPage from '../AdminPage/AdminPage';
// import EditUserInfo from './EditUserInfo';

const db = app.firestore()


class ViewUser extends Component {
    constructor(props) {
        super(props);

        this.state ={
            items:[],
            user:[],
            showUserInfo:true,
            showCollections:false,
            showAdminPage:false,
            showCreateProject:false,
            showEditUserInto:false,
            profilePic:null,
            userName:null,
            isLoading:false,
            setPermission:true,
        }
        this.handleCollections = this.handleCollections.bind(this)
        this.hideView = this.hideView.bind(this)
        this.resetView = this.resetView.bind(this)
        this.pleaseLogin = this.pleaeLogin.bind(this)
        this.setIsLoading = this.setIsLoading.bind(this)
        this.deleteFromFirebase = this.deleteFromFirebase.bind(this)
    }

    componentDidMount(){
        const { user_id } = this.props.match.params
        this.getUserAndProjects()
        axios.get(`/api/users/${user_id}`).then(res => 
            this.setState({
                user:res.data,
                userName:res.data.user_name
            }))
    }
    getUserAndProjects() {
        const { user_id } = this.props.match.params
        axios.get(`/api/user/projects/get/${user_id}`).then(res => {
            this.setState({...this.state,items:res.data})
        })
    }
    projectIsLiked(projectId,userLike) {
        try {
            return(userLike.filter(el => el.model_id === projectId)[0].model_id === projectId)
          } catch (error) {
            console.log('user does not like this project',error);
          }
    }

    setIsLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
    }

    resetView(){
        this.setState({
            showCollections:false,
            showUserInfo:false,
            showEditUserInto:false,
        })
    }

    handleCollections(params){
        this.setState({isView:'isCollections'})
        console.log(this.state.isView)
    }
    
    
    hideView(params) {
        this.resetView()
        switch (params) {
            case 'showUserInfo':
                this.setState({ showUserInfo : !this.state.showUserInfo })
                break;
            case 'showCollections':
                this.setState({ showCollections : !this.state.showCollections })
                break;
            case 'showAdminPage':
                this.setState({ showAdminPage : !this.state.showAdminPage})
                break;
            case 'showEditUserInfo':
                this.setState({ showEditUserInto : !this.state.showEditUserInto})
            default:
                break;
        }
    }

    deleteFromFirebase(url){
        const storageRef = app.storage().refFromURL(url)
        storageRef.delete().then(function deleted(params) {
            console.log('image deleted')
        }).catch(function (error) {
            console.log('there was an error')
        })
    }

    handleFriends(){
        this.setState({isView:'isFriends'})
    }

    pleaeLogin(){
        alert('please log in')
    }

    render(){
        const { showCollections,showUserInfo,items,isLoading,showCreateProject,showEditUserInto,user } = this.state
        const { photo_url,auth,name,email,is_admin,background_url,user_name,user_id } = this.state.user

        const mappedUserName = user.map(el => {
            return <h2 className="portrait-row" style={{textTransform:'none'}} key={el.user_id} >{el.user_name}</h2>
        })

        const mappedUserInfo = user.map(el => {
            return <UserInfo  key={el.user_id} user={el.user_name} name={el.first_name} email={el.email} />
        })

        const mappedBackground = user.map(el => {
           return <img src={el.background_url} key={el.user_id} className='background-photo' />
        })

        const mappedProfilePhoto = user.map(el => {
            return <img className="profile-photo" src={el.photo_url} key={el.user_id} alt="photo"/>
        })

        const mappedProjects = items.map(el => {
            return <UserProject key={el.model_id} model_id={el.model_id} data={el} projectIsLiked={this.projectIsLiked} />
        })

    return(
        <div>
            <div className="user-page">
            {isLoading ? <Loading/> : null}
            <section className="column1">
                {mappedBackground}
                <div className="portrait">

                    {mappedProfilePhoto}
                    {mappedUserName}
 
                    <div className='portrait-row'>
                        <div className='user-buttons' style={{marginTop:'30px'}} ><p style={{marginTop:'10px'}} >Send Message</p></div>
                    </div>


                </div>

                {mappedUserInfo}

            </section>

            <section className="column2" >

                <div className='collections'>
                    {mappedProjects}
                </div>

            </section>
        </div>
        {/* )} */}
        </div>
        )}
}
// function mapStateToProps(reduxState){
//     return reduxState
// }

// export default connect(mapStateToProps,{getProjects,updateUser})(ViewUser)
export default ViewUser


/*
userinfo
models/colections
friends
edit
groups
*/