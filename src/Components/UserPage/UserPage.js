import axios from 'axios';
import Project from '../FeaturedProjects/Project'
import { Component } from 'react'
// import { Link } from 'react-router-dom';
import './UserPage.css'
import { connect } from 'react-redux'
import { getProjects } from '../../ducks/projectsReducer';
import Collections from './Collections'
import UserInfo from './UserInfo'


class UserPage extends Component {
    constructor() {
        super();

        this.state ={
            items:{},
            user:{},
            showUserInfo:true,
            showCollections:false
        }
        this.handleCollections = this.handleCollections.bind(this)
        this.hideView = this.hideView.bind(this)
        this.resetView = this.resetView.bind(this)
    }

    componentDidMount(){
        axios.get('/api/projects/all').then(res =>
            this.setState({ ...this.state,items:res.data}))        
    }

    resetView(){
        this.setState({
            showCollections:false,
            showUserInfo:false
        })
    }

    handleCollections(params){
        this.setState({isView:'isCollections'})
        console.log(this.state.isView)
    }
    
    
    hideView(params) {
        this.resetView()
        console.log(params);
        switch (params) {
            case 'showUserInfo':
                this.setState({ showUserInfo : !this.state.showUserInfo })
                break;
            case 'showCollections':
                this.setState({ showCollections : !this.state.showCollections })
                break;
            default:
                break;
        }
    }

    // handleUserInfo(){

    // }

    // handleGroups(){

    // }

    handleFriends(){
        this.setState({isView:'isFriends'})
    }

    render(){
        console.log('userpage props',this.props.projects.projects)
        const { showCollections,showUserInfo,items } = this.state

        // const mappedItems = items.map((el,i,all) => {
        //     return <Collections key={el.model_id} />
        // })

        // const { first_name } =this.props.user.user.user

    return(
        <div className="user-page">
            <ul className="column1">
                <li><div className="portrait">image</div></li>
                <li><h2>{this.props.user.user.name}</h2></li>
                <li><div onClick={() => this.hideView('showUserInfo')} className="profile-buttons">user info</div></li>
                <li><div onClick={() => this.hideView('showCollections')} className="profile-buttons">collections</div></li>
                <li><div className="profile-buttons">groups</div></li>
                <li><div className="profile-buttons">friends</div></li>
                {/* <li><div className="profile-buttons">stuff</div></li> */}
            </ul>
            <section className="column2">
                {showCollections && <Collections/>}
                
                {showUserInfo && <UserInfo/>}

            </section>
        </div>
        )}
}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{getProjects})(UserPage)

// export default UserPage




/*
userinfo
models/colections
friends
edit
groups
*/