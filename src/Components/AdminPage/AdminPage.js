
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
            generalContent:''

        }
        this.handleAddText = this.handleAddText.bind(this)
        this.addGeneral = this.addGeneral.bind(this)
    }

    handleAddText(prop, val) {
        this.setState({
          [prop]: val
        })
      }

    addGeneral = () => {

        const { generalContent } = this.state
        const tag = 'general'

        axios.post('/api/docs/post',{generalContent,tag}).then(alert('new content has been added to General Information element')).catch(err => {
            console.log('error',err)
        })
    }

    render(){

        const { test } = this.state
        const { photo,auth,name,is_admin } = this.props.user.user

        return(
            <div className="admin-container">
                {!is_admin ? (<Route path="/" component={Home}/>) : (
                    <div>
                    <h4 style={{color:'#fff'}}>admin page</h4>
                    {/* <input type="text" className="admin-input" ></input> */}
                    <div className="add-doc-div"><textarea onChange={e => this.handleAddText('generalContent', e.target.value)} className="input" name="text" rows="14" cols="100" wrap="soft"> </textarea>
                    <a onClick={this.addGeneral}>add to general content</a></div>
                    
                    <Link to={'/user'} ><a style={{color:'#fff'}}>mypage</a></Link>
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