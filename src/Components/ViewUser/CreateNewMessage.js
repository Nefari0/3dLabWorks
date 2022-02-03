import { Component } from 'react'
import './CreateNewMessage.css'
import { connect } from 'react-redux'
import { loginUser,registerUser,updateUser } from '../../ducks/userReducer'
import axios from 'axios'

class CreateNewMessage extends Component {
    constructor() {
        super()

        this.state = {

        }
        this.handleText = this.handleText.bind(this)
        this.executeSendMessage = this.executeSendMessage.bind(this)
    }

    handleText(prop,val) {
        this.setState({
            [prop]:val
        })
    }

    executeSendMessage = async () => {
        const { text } = this.state
        const { id } = this.props.user.user
        const { user_id } =  this.props
        const conversation = await axios.post('/api/conversation/new',{user_id,id,text})
    }

    

    render() {

        const { user_id,user_name } = this.props
        const { loggedInUser } = this.props

        return(<div className='create-message-container'>
                    <h4 style={{color:'#555',textTransform:'none'}} >Send message to {user_name} ?</h4>
                    <textarea className='new-message-text-input' value={this.state.text} name="text" rows="5" cols="50" wrap="soft" onChange={e => this.handleText('text',e.target.value)} > </textarea>
                    <div className='portrait-row'>
                        <div className='user-buttons' style={{marginTop:'30px'}}  ><p style={{marginTop:'10px'}} onClick={() => this.props.openMessageBox()} >Cancel</p></div>
                        <div className='user-buttons' style={{marginTop:'30px'}}  ><p style={{marginTop:'10px'}} onClick={() => this.executeSendMessage()} >Send</p></div>
                    </div>
        </div>)
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, {updateUser})(CreateNewMessage)