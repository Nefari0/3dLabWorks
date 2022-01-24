import axios from 'axios';
import Home from '../Home/Home'
// import CreateProject from './CreateProject';
import { Switch, Route } from 'react-router-dom'
import Project from '../FeaturedProjects/Project'
import { Component, lazy } from 'react'
import { Link } from 'react-router-dom';
// import './UserPage.css'
import '../UserPage/UserPage.css'
// import { connect } from 'react-redux'
// import { getProjects } from '../../ducks/projectsReducer';
// import { updateUser } from '../../ducks/userReducer'
// import Collections from '../../Collections'
import Collections from '../UserPage/Collections';
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
        this.openCreate = this.openCreate.bind(this)
    }

    componentDidMount(){
        const { user_id } = this.props.match.params
        // axios.get('/api/projects/all').then(res =>
        axios.get(`/api/users/${user_id}`).then(res => 
            this.setState({
                user:res.data,
                userName:res.data.user_name
            }))
    }

    // componentDidUpdate() {
    //     const { setPermission } = this.state
    //     const { user_id } = this.props.match.params
    //     if (setPermission === true) {
    //         axios.get(`/api/users/${user_id}`).then(res => 
    //             this.setState({user:res.data}))
    //         this.setState({setPermission:false})
    //     }
    // }

    // thisUpdateUser() {
    //     this.props.updateUser()

    // }


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


    // handleUserInfo(){

    // }

    // handleGroups(){

    // }

    handleFriends(){
        this.setState({isView:'isFriends'})
    }

    pleaeLogin(){
        alert('please log in')
    }

    openCreate() {
        this.setState({showCreateProject:!this.state.showCreateProject})
    }

    render(){
        const { showCollections,showUserInfo,items,isLoading,showCreateProject,showEditUserInto,user } = this.state
        // const { isLoggedIn } = this.props.user
        // const { photo,auth,name,is_admin,background_url } = this.props.user.user
        const { photo_url,auth,name,is_admin,background_url,user_name } = this.state.user

        const mappedUserName = user.map(el => {
            return <h2 className="portrait-row" style={{textTransform:'none'}} >{el.user_name}</h2>
        })

        const mappedBackground = user.map(el => {
           return <img src={el.background_url} className='background-photo' />
        })

        const mappedProfilePhoto = user.map(el => {
            return <img className="profile-photo" src={el.photo_url} alt="photo"/>
        })

    return(
        <div>
            {/* {!isLoggedIn ? (<Route path="/" component={Home}/>) : ( */}
            <div className="user-page">
                {/* {showEditUserInto === true ? <EditUserInfo /> : null} */}
            {isLoading ? <Loading/> : null}
            <section className="column1">
            {/* {showEditUserInto === true ? <EditUserInfo /> : null} */}
                {/* <img src={background_url} className='background-photo' /> */}
                {mappedBackground}
                <div className="portrait">
                    {/* <img className="profile-photo" src={photo_url} alt="photo"/> */}

                    {mappedProfilePhoto}

                    {/* <svg className="icon-big" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> */}

                    {/* <h2 className="name-container" >{this.props.user.user.name}</h2> */}
                    {mappedUserName}
                    {/* <h2 className="portrait-row" style={{textTransform:'none'}} >{user_name},user</h2> */}
                    <div className='portrait-row'>
                        {/* <div className='user-buttons' style={{marginTop:'30px'}} ><p style={{marginTop:'10px'}} onClick={() => this.hideView('showEditUserInfo')} >Edit Profile</p></div> */}
                        <div className='user-buttons' style={{marginTop:'30px'}}  onClick={() => this.openCreate()} ><p style={{marginTop:'10px'}} >Message</p></div>
                    </div>
 
                    {/* <div className='portrait-row' >{is_admin ? (<Link to={'/admin'} style={{ textDecoration:'none' }}><p className='go-to-admin'>admin</p></Link>) : null} </div> */}

                </div>
                {/* {showUserInfo && <UserInfo user={this.props.user} setIsLoading={this.setIsLoading} deleteFromFirebase={this.deleteFromFirebase} />} */}
                {/* <UserInfo user={this.props.user} setIsLoading={this.setIsLoading} deleteFromFirebase={this.deleteFromFirebase} /> */}

                {/* {showUserInfo && <UserInfo user={this.state.user} setIsLoading={this.setIsLoading} deleteFromFirebase={this.deleteFromFirebase} />} */}

            </section>

            <section className="column2">

                {/* {showEditUserInto === true ? <EditUserInfo setIsLoading={this.setIsLoading} hideView={this.hideView} /> : null} */}

                {<Collections username={this.props.user} setIsLoading={this.setIsLoading} photo_url={this.state.user.photo_url} openCreate={this.openCreate} showCreateProject={showCreateProject} />}

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