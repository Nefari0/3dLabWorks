import axios from 'axios';
import Home from '../Home/Home'
// import CreateProject from './CreateProject';
import { Switch, Route } from 'react-router-dom'
import Project from '../Project/Project'
import { Component, lazy } from 'react'
import { Link } from 'react-router-dom';
import './UserPage.css'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer';
import { updateUser } from '../../ducks/userReducer'
import Collections from './Collections'
import UserInfo from './UserInfo'
import {app} from '../../base'
import { addNewModel } from './../../ducks/firebaseReducer'
import SecurityTest from './SecurityTest'
import MobileLogin from '../MobileLogin/MobileLogin'
import Loading from '../Loading/Loading';
import AdminPage from '../AdminPage/AdminPage';
import EditUserInfo from './EditUserInfo';
import Table from './../Games/Table'
import MyConnection from './Friends/MyConnections';
import ConnectRequests from './Friends/ConnectRequests';
import DisplayFriends from './Friends/DisplayFriends';
import Button from '../../GlobalStyles/BaseButton/button.component';
import GameInvite from './Friends/GameInvite'; // notice to indicate invite to play game
import PhotoAlbum from './PhotoAlbum/PhotoAlbum';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { socketString } from '../WS';
// import ImagePreview from '../FeaturedProjects/EditProject/ImagePreview';
import Resizer from 'react-image-file-resizer'
// const client = new W3CWebSocket(`ws://127.0.0.1:8000`); // production
// const client = new W3CWebSocket(`ws://165.227.102.189:8000`); // build
const client = new W3CWebSocket(socketString); // production

const db = app.firestore()
const newPhotoEndpoint = '/api/photos/add/new'
const deletePhotoEndpoint = '/api/photos/delete/'
const deletePhotoByUrlEndpoint = '/api/photos/delete/'


class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state ={

            // -- this will change when new photo is added -- //
            previewImageFile:null,
            photo_url:null,
            photos:[],

            showPhotos:false,

            items:[],
            user:{},

            friends:[],
            
            requests:[],
            showUserInfo:true,
            showCollections:true,
            showAdminPage:false,
            showCreateProject:false,
            showEditUserInto:false,
            showGames:false,
            showFriends:false,
            profilePic:null,
            userName:null,
            isLoading:false,
            setPermission:true,
            challengeUser:null, // challenge this your to game
            currentGame:null,
        }
        this.handleCollections = this.handleCollections.bind(this)
        this.hideView = this.hideView.bind(this)
        this.resetView = this.resetView.bind(this)
        this.pleaseLogin = this.pleaeLogin.bind(this)
        this.setIsLoading = this.setIsLoading.bind(this)
        this.deleteFromFirebase = this.deleteFromFirebase.bind(this)
        this.getUserID = this.getUserID.bind(this)
        this.receiveInvite = this.receiveInvite.bind(this)
        // this.handlePhoto = this.handlePhoto.bind(this)
    }

    componentDidMount(){
        this.receiveInvite()
        // this.getPhotos()
        this.setState({currentGame:this.getUniqueID()})
    }

    // --- get user photos -- //
    // getPhotos = async (user_id) => {
    //     await axios.get(`/api/user/photos/get/${user_id}`).then(res => {
    //         this.setState({photos:res.data})
    //     })
    // }

    componentDidUpdate() {
        const { id,photo } = this.props.user.user
        // this.props.updateUser()
        // this.getPhotos(id)
        if(this.state.friends.length < 1 && id != undefined){
            axios.get(`/api/join/friends/${id}`).then(res => this.setState({friends:res.data}))   
            // axios.get(`/api/user/photos/get/${id}`).then(res => this.setState({photos:res.data}))
            // this.getPhotos(id)
        }
    }

    // // --- editing / adding / removing user photos with firebase --- //
    // // --- add file to state / resize / show preview --- //


    // handlePhoto = async (e) => {
    //     var fileInput = false;

    //     if (e.target.files[0]) {
    //         fileInput = true
    //     }

    //     if (fileInput) {
    //         try {
    //             Resizer.imageFileResizer(
    //                 e.target.files[0],
    //                 400,
    //                 267,
    //                 "JPEG",
    //                 100,
    //                 0,
    //                 (uri) => {
    //                     console.log(uri,'uri')
    //                     this.setState({
    //                         previewImageFile:URL.createObjectURL(uri),
    //                         photo_url:uri
    //                     })
    //                 },
    //                 "file",
    //                 298,
    //                 191
    //             );
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     return
    // }

    // addingPhoto = async () => {
    //     const { photo_url } = this.state
    //     const { id,user } = this.props.user.user
    //     var album_id = null
    //     this.setState({previewImageFile:null})
        
    //     this.setIsLoading()
    //     // get firebase ref
    //     const cloud = await this.props.addNewModel(photo_url,`${user}/photos`)

    //     // get dl url
    //     const image_url = await cloud.action.payload.ref.getDownloadURL()

    //     // add to photo db
    //     await axios.post(newPhotoEndpoint,{album_id,id,image_url})
    //     // await this.getPhotos(id)
    //     this.setIsLoading()
    // }

    removingPhoto = async (image_url) => {
        await this.deleteFromFirebase(image_url)
        // await axios.post(`${deletePhotoEndpoint}${photo_id}`)
        console.log(' here is url ',image_url)
        await axios.post(`/api/photos/delete/`,{image_url})
    }
    // // -------------------------------------------------------------//

    changeGameID = (confirm,val) => {
        if(confirm === true){this.setState({currentGame:val})} else {this.setState({challengeUser:null})}
        
    }

    receiveInvite = () => {
        client.onopen = () => {
        }
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            const { id } = this.props.user.user
            
            if(dataFromServer.type === 'gameInvite' && dataFromServer.gameInformation.to === id) {
                this.setState({challengeUser:dataFromServer})
            }
        }
    }

    sendInvite = (gameInformation) => {
        client.send(JSON.stringify({type: 'gameInvite',gameInformation:gameInformation}))
    }
    
    // --- get user_id from props. this is used to invite other users to join an activity --- //
    getUniqueID = () => {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + '-' + s4();
    };
    
    getUserID = (to) => {
        const { id,photo } = this.props.user.user
        var { currentGame } = this.state
        // var newChallenge = [...challengeUser]
        // const gameID = this.getUniqueID()
        var gameInformation = {
            to:to,
            from:id,
            isAccepted:false,
            photo:photo,
            gameID:currentGame

        }
        // this.setState({currentGame:gameID})
        this.sendInvite(gameInformation)
    }

    handleInput = (prop,val) => {
        this.setState({
            [prop]:val
        })
    }

    setIsLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
    }

    resetView(){
        this.setState({
            showCollections:true,
            showUserInfo:false,
            showEditUserInto:false,
            showCreateProject:false,
            showGames:false,
            showFriends:false,
            showPhotos:false,
        })
    }

    handleCollections(){
        this.setState({isView:'isCollections'})
    }
    
    
    hideView(params) {
        this.receiveInvite()
        this.resetView()
        switch (params) {
            case 'showUserInfo':
                this.setState({ showUserInfo : !this.state.showUserInfo })
                break;
            case 'showCollections':
                this.setState({ showCollections : true })
                break;
            case 'showAdminPage':
                this.setState({ showAdminPage : !this.state.showAdminPage})
                break;
            case 'showEditUserInfo':
                this.setState({ showEditUserInto : true})
                break;
            case 'showCreateProject':
                this.setState({showCreateProject : true})
                break;
            case 'showGames':
                this.setState({showGames:true})
                break;
            case 'showFriends':
                this.setState({ showFriends : true, showCollections:false})
            case 'showPhotos':
                this.setState({showPhotos:true,showCollections:false})
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
        const {
            photos,
            previewImageFile,
            photoUrl,
            showCollections,
            showUserInfo,
            items,
            isLoading,
            showCreateProject,
            showEditUserInto,
            showGames,
            showFriends,
            friends,
            requests,
            challengeUser,
            currentGame,
            currentPhoto,
            showPhotos
        } = this.state

        const { isLoggedIn } = this.props.user

        const {
            photo,
            auth,
            name,
            is_admin,
            background_url,
            user,
            email,
            id
        } = this.props.user.user

    return(
        <div>
            {!isLoggedIn ? (<Route path="/" component={Home}/>) : (
            <div className="user-page">
            {isLoading ? <Loading/> : null}
            <section className="column1">
                <img src={background_url} className='background-photo' onClick={() => this.hideView('showPhotos')} />
                   {challengeUser === null ? null: <GameInvite challengeUser={challengeUser} changeGameID={this.changeGameID} hideView={this.hideView} /> }

                <div className="portrait">
                    <img className="profile-photo" 
                    src={photo}
                    alt="photo"
                    onClick={() => this.hideView('showPhotos')}
                    />

                    <h4 className="portrait-row" style={{textTransform:'none'}} >{this.props.user.user.user}</h4>
                    
                    <div className='portrait-row' style={{flexWrap:'wrap',justifyContent:'center',width:'300px'}}>

                        <Button
                            onClick={() => this.hideView('showEditUserInfo')}
                            text={'My Info'}
                        />

                        <Button
            
                            onClick={() => this.hideView('showCreateProject')}
                            text={'Create'}
                        />

                        <Button
                            onClick={() => this.hideView('showGames')}
                            text={'Games'}
                        />

                        <Button
                            onClick={() => this.hideView('showPhotos')}
                            text={'Photos'}
                        />

                        <Button
                            onClick={() => this.hideView('showFriends')}
                            text={'Friends'}
                        />

                        <Button
                            onClick={() => this.hideView('showCollections')}
                            text={'Collections'}
                        />

                    </div>
 
                    <div className='portrait-row' >{is_admin ? (<Link to={'/admin'} style={{ textDecoration:'none' }}><p className='go-to-admin'>admin</p></Link>) : null}  </div>

                </div>
                <UserInfo user={user} name={name} email={email} id={id} setIsLoading={this.setIsLoading} deleteFromFirebase={this.deleteFromFirebase} />

            </section>

            <section className="column2">

                {showGames &&
                    <Table
                        hideView={this.hideView}
                        challengeUser={challengeUser}
                        client={client}
                        currentGame={currentGame}
                />}

                {showEditUserInto &&
                    <EditUserInfo
                        setIsLoading={this.setIsLoading}
                        resetView={this.resetView}
                        updateUser={this.props.updateUser}
                />}

                {showCollections &&
                    <Collections 
                        setIsLoading={this.setIsLoading}
                        photo_url={photo}
                        resetView={this.resetView}
                        showCreateProject={showCreateProject}
                />} 

                {showFriends && 
                    <DisplayFriends
                        id={id}
                        getUserID={this.getUserID}
                />}
                
                {showPhotos &&
                    <PhotoAlbum
                        id={id}
                        handlePhoto={this.handlePhoto}
                        removingPhoto={this.removingPhoto}
                        setIsLoading={this.setIsLoading}
                    />}

                {/* {previewImageFile != null ? <ImagePreview previewImageFile={previewImageFile} photo_url={photoUrl} addPhoto={this.addingPhoto} handleInput={this.handleInput} /> : null} */}
            </section>
        </div>
        )}
        </div>
        )}
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{getProjects,updateUser,addNewModel})(UserPage)


/*
userinfo
models/colections
friends
edit
groups
*/