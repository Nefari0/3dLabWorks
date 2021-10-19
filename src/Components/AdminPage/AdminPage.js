
import { Component } from 'react'
import './AdminPage.css'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/userReducer';
import { getProjects } from '../../ducks/projectsReducer';
import Home from '../Home/Home';
import axios from 'axios';

class AdminPage extends Component {

    constructor(){
        super();

        this.state = {
            text:'test',
            generalContent:'',
            aboutContent:''

        }
        this.handleAddText = this.handleAddText.bind(this)
        this.addGeneral = this.addGeneral.bind(this)
        this.addAbout = this.addAbout.bind(this)
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

    render(){

        const { test } = this.state
        const { photo,auth,name,is_admin } = this.props.user.user

        return(
            <div className="admin-container">
                {!is_admin ? (<Route path="/" component={Home}/>) : (
                    <div>
                    <h4>admin page</h4>
                    {/* <input type="text" className="admin-input" ></input> */}
                    <div className="add-doc-div"><textarea onChange={e => this.handleAddText('generalContent', e.target.value)} className="input" name="text" rows="14" cols="100" wrap="soft"> </textarea>
                    <button className="text" onClick={this.addGeneral}>add to general content</button></div>

                    <div className="add-doc-div"><textarea onChange={e => this.handleAddText('aboutContent', e.target.value)} className="input" name="text" rows="14" cols="100" wrap="soft"> </textarea>
                    <button className="text" onClick={this.addAbout}>add to about content</button></div>
                    
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