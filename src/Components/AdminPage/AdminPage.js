
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
import ShowTraffic from './ShowTraffic'
import SVG from '../SVG';
// import Prototyping from '../Prototyping/Prototyping';
// import MessageBoard from '../UserMessages/MessageBoard';
import Memo from './Memo';
import './Memo.css'
// import DemoScene from './Three/DemoScene';
// import ViewUserV2 from './ViewUserV2';
import UserAdminMessage from './UserAdminMessage/UserAdminMessage';
import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket(`ws://127.0.0.1:8000`); // production
const client = new W3CWebSocket(`ws://165.227.102.189:8000`); // build

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

            showMessages:false,
            userMessages:[],

            showMemo:false,
            memos:[],

            showTraffic:false,
            traffic:[],

        }
        this.handleAddText = this.handleAddText.bind(this)
        this.addGeneral = this.addGeneral.bind(this)
        this.addAbout = this.addAbout.bind(this)
        this.hideDocAbout = this.hideDocAbout.bind(this)
        this.hideDocGeneral = this.hideDocGeneral.bind(this)
        this.openEditAbout = this.openEditAbout.bind(this)
        this.openEditGeneral = this.openEditGeneral.bind(this)
        this.openEditUserInfo = this.openEditUserInfo.bind(this)
        this.hideMessages = this.hideMessages.bind(this)
    }

    componentDidMount() {
        axios.get('/api/users/all').then(res => {
            this.setState({users:res.data})
        })
        axios.get('/api/track/getall').then(res => {
            this.setState({traffic:res.data})
        })
        axios.get('/api/messages/user').then(res => {
            this.setState({userMessages:res.data})
        })
        axios.get('/api/memos/get/all').then(res => {
            this.setState({memos:res.data})
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

    hideMessages = () => {
        this.setState({showMessages:!this.state.showMessages})
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

    resetView() {
        this.setState({
            showMemo:false,
            showTraffic:false,
        })
    }

    changeView(param) {
        this.resetView()
        switch(param) {
            case 'showTraffic':
                this.setState({showTraffic:true})
                break;
            case 'showMemo':
                this.setState({showMemo:true})
                break;
            default:
                break;
            }
    }

    render(){

        const { test,editAbout,editGeneral,editUserInfo,users,traffic,showMessages,userMessages,showTraffic,showMemo,memos } = this.state
        const { photo,auth,name,is_admin,is_sudo } = this.props.user.user

        const mappedUsers = users.map(element => {
            return <ShowUser user_name={element.user_name} first_name={element.first_name} last_name={element.last_name} user_id={element.user_id} />
        })

        const filterNull = traffic.filter(el => el.last_visit != null)

        const mappedTraffic = filterNull.map(el => {
            return <ShowTraffic key={el.browser_id} id={el.browser_id} date_created={el.date_created} unique_id={el.unique_id} remount={el.remount} last_visit={el.last_visit} />
        })

        const mappedMessages = userMessages.map(el => {
            return <UserAdminMessage key={el.dum_id} messagecontent={el.messagecontent} email={el.email} />
        })

        const mappedMemos = memos.map(el => {
            return <Memo key={el.memo_id} body={el.body} title={el.title} memo_id={el.memo_id} />
        })

        // const mappedTraffic = traffic.map(el => {
        //     return <ShowTraffic key={el.browser_id} id={el.browser_id} date_created={el.date_created} unique_id={el.unique_id} remount={el.remount} last_visit={el.last_visit} />
        // })

        return(
            <div className="admin-container">
                {!is_admin ? (<Route path="/" component={Home}/>) : (
                    <div>
                    <ul className="admin-header-ul">
                    {is_sudo === true ? <li className="add-doc-div-closed" onClick={() => this.changeView('showMemo')}><a>memo</a></li> : null}
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
                    {!showMessages ? <li className="add-doc-div-closed" onClick={() => this.hideMessages()} ><a>messages</a></li>
                    :
                    <li className="add-doc-div" onClick={() => this.hideMessages()} ><a>messages</a>
                        {mappedMessages}
                    </li>}
                    { editUserInfo ?
                    <li className="add-doc-div">
                        <a  onClick={this.openEditUserInfo} className="admin-a">User Details</a>
                        {mappedUsers}
                    </li>
                    :
                    <li className="add-doc-div-closed"><a onClick={this.openEditUserInfo}>User Details</a></li>}
                    <li className="add-doc-div-closed"><a>terms</a></li>
                    <li className="add-doc-div-closed"><a>user project details</a></li>
                   
                    <li className="add-doc-div-closed" onClick={() => this.changeView('showTraffic')} ><a>show traffic</a></li>
                    </ul>
                    <Link to={'/user'} ><a >mypage</a></Link>
                    {showTraffic === true ? <div className='display-traffic' >
                        <div className='traffic-display-unit' ><p className='traffic-text' >Date Created</p><p className='traffic-text' >Browser ID</p><p className='traffic-text' >Unique Id</p><p className='traffic-text' >Re-mounts</p><p className='traffic-text' >Last Visit</p></div>
                        {mappedTraffic}
                    </div> : null}
                    
                    {/* <div className='text-container' ></div> */}
                    {/* <Memo /> */}
                    {showMemo === true && is_sudo === true ? mappedMemos : null}
                    {/* <ViewUserV2 /> */}
                    {/* <Prototyping /> */}
                    {/* <MessageBoard/> */}
                    <section style={{height:'400px',width:'400px',backgroundColor:'#fff'}} >
                        <SVG params={'large_heart'} />
                        <button>click</button>
                    </section>
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