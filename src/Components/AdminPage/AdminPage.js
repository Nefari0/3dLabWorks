
import { Component } from 'react'
import './AdminPage.css'
// import { Link } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/userReducer';
import { getProjects } from '../../ducks/projectsReducer';
import Home from '../Home/Home';
import axios from 'axios';
import ShowUser from './ShowUser';
// import DemoScene from './Three/DemoScene';

class AdminPage extends Component {

    constructor(){
        super();

        this.state = {
            users:[],

            text:'test',
            generalContent:'',
            displayGeneral:true,
            editGeneral:false,

            aboutContent:'',
            displayAbout:true,
            editAbout:false,

            editUserInfo:false,

        }
        this.handleAddText = this.handleAddText.bind(this)
        this.addGeneral = this.addGeneral.bind(this)
        this.addAbout = this.addAbout.bind(this)
        this.hideDocAbout = this.hideDocAbout.bind(this)
        this.hideDocGeneral = this.hideDocGeneral.bind(this)
        this.openEditAbout = this.openEditAbout.bind(this)
        this.openEditGeneral = this.openEditGeneral.bind(this)
        this.openEditUserInfo = this.openEditUserInfo.bind(this)
    }

    componentDidMount() {
        axios.get('/api/users/all').then(res => {
            this.setState({users:res.data})
        })
    }

    handleAddText(prop, val) {
        this.setState({
          [prop]: val
        })
      }

    addGeneral = () => {

        const { generalContent } = this.state
        const content = generalContent
        const tag = 'general'

        axios.post('/api/docs/post',{content,tag}).then(alert('new content has been added to General Information element')).catch(err => {
            console.log('error',err)
        })
    }

    addAbout = () => {
        const { aboutContent } = this.state
        const content = aboutContent
        const tag = 'about'

        axios.post('/api/docs/post', {content,tag}).then(alert('new content has been added to About Information element')).catch(err => {
            console.log(err)
        })
    }

    hideDocGeneral = () => {
        const { displayGeneral } = this.state
        const content = displayGeneral
        const tag = 'general'
        axios.post('/api/docs/hide' ,{content,tag}).then(alert('display changed')).catch(err => console.log(err))
    }

    hideDocAbout = () => {
        const { displayAbout } = this.state
        const content = displayAbout
        const tag = 'about'
        axios.post('/api/docs/hide' ,{content,tag}).then(alert('display changed')).catch(err => console.log(err))
    }

    openEditAbout(){
        this.setState({
            editAbout:!this.state.editAbout
        })
    }
    openEditGeneral(){
        this.setState({
            editGeneral:!this.state.editGeneral
        })
    }

    openEditUserInfo(){
        this.setState({editUserInfo:!this.state.editUserInfo})
    }

    render(){

        const { test,editAbout,editGeneral,editUserInfo,users } = this.state
        const { photo,auth,name,is_admin } = this.props.user.user

        const mappedUsers = users.map(element => {
            return <ShowUser user_name={element.user_name} first_name={element.first_name} last_name={element.last_name} />
        })

        return(
            <div className="admin-container">
                {!is_admin ? (<Route path="/" component={Home}/>) : (
                    <div>
                    <ul className="admin-header-ul">
                    { editGeneral ?
                    <li className="add-doc-div" >
                        <a onClick={this.openEditGeneral}>edit general info</a>
                        <textarea onChange={e => this.handleAddText('generalContent', e.target.value)} className="input" name="text" rows="14" cols="100" wrap="soft"> </textarea>
                        <button className="text" onClick={this.addGeneral}>add to general content</button>
                        <div className="checkbox" style={{marginTop:'20px'}}><input type="checkbox" onChange={e => this.handleAddText('displayGeneral',!this.state.displayGeneral)} /><p style={{color:'#555'}}>display this document?</p><button onClick={this.hideDocGeneral}>change</button></div>
                    </li>
                    :
                    <li className="add-doc-div-closed" onClick={this.openEditGeneral}><a>edit general info</a></li>}

                    { editAbout ?
                    <li className="add-doc-div">
                        <a  onClick={this.openEditAbout} className="admin-a">edit about info</a>
                        <textarea onChange={e => this.handleAddText('aboutContent', e.target.value)} className="input" name="text" rows="14" cols="100" wrap="soft"> </textarea>
                        <button className="text" onClick={this.addAbout}>add to about content</button>
                        <div className="checkbox" style={{marginTop:'20px'}}><input type="checkbox" onChange={e => this.handleAddText('displayAbout',!this.state.displayAbout)} /><p style={{color:'#555'}}>display this document?</p><button onClick={this.hideDocAbout}>change</button></div>
                    </li>
                    :
                    <li className="add-doc-div-closed"><a onClick={this.openEditAbout}>edit about info</a></li>}
                    <li className="add-doc-div-closed"><a>notifications</a></li>
                    <li className="add-doc-div-closed"><a>messages</a></li>
                    { editUserInfo ?
                    <li className="add-doc-div">
                        <a  onClick={this.openEditUserInfo} className="admin-a">edit about info</a>
                        {mappedUsers}
                    </li>
                    :
                    <li className="add-doc-div-closed"><a onClick={this.openEditUserInfo}>User Details</a></li>}
                    <li className="add-doc-div-closed"><a>terms</a></li>
                    <li className="add-doc-div-closed"><a>user project details</a></li>
                    <li className="add-doc-div-closed"><a>memo</a></li>
                    </ul>
                    <Link to={'/user'} ><a >mypage</a></Link>
                    </div>
                )}
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{updateUser,getProjects})(AdminPage)