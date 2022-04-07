// import { Component } from "react";
// import axios from "axios";
// import { loginUser, updateUser } from '../../ducks/userReducer'
// import { connect } from 'react-redux'
// import './Messages.css'
// import Message from './Message'

// class Messages extends Component {
//     constructor() {
//         super()

//         this.state = {
//             messages:[],
//             text:'',
//         }
//         // this.getMessages = this.getMessages.bind(this)
//         // this.sendNewMessage = this.sendNewMessage.bind(this)
//         // this.textHandler = this.textHandler.bind(this)
//     }

//     componentDidMount() {
//         // const { user_id } = this.props.match.params
//         // this.getMessages()
//     }

//     // getMessages() {
//     //     const { user_id } = this.props.match.params
//     //     axios.get(`/api/messages/user/${user_id}`).then(res => {
//     //         this.setState({messages:res.data})
//     //     })
//     // }

//     sendNewMessage() {
//         const { id,user } = this.props.user.user
//         const { text } = this.state
//         const user_id = id
//         const message_description = 'new message'
//         const send_from = user
//         // axios.post('/api/messages/user/add', {user_id,text,message_description,send_from}).then(() => {
//         //     this.getMessages()
//         // })
//     }

//     textHandler = (prop,val) => {
//         this.setState({
//             [prop]:val
//         })
//     }

//     render() {

//         const { messages } = this.state

//         // const mappedMessages = messages.map(el => {
//         //     return <Message key={el.message_id} send_from={el.send_from} text={el.text} />
//         // })

//         return(
//             <div className="messages-container">
//                 <section className="add-doc-div read-message">
//                     {/* <Message/> */}
//                     {/* {mappedMessages} */}
//                 </section>
//                 <section className="add-doc-div write-message">
//                 <textarea className="write-message-input" name="text" rows="7" cols="32" wrap="soft" onChange={(e) => this.textHandler('text',e.target.value)}> </textarea>
//                 <div className='send-button' onClick={() => this.sendNewMessage()} >send</div>
//                 </section>
//             </div>
//         )
//     }
// }

// function mapStateToProps(reduxState) {
//     return reduxState
// }

// export default connect(mapStateToProps, { loginUser, updateUser})(Messages)