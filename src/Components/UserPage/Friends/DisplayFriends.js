import { Component } from "react";
import axios from "axios";
import './DisplayFriends.css'
import ConnectRequests from "./ConnectRequests";
import MyConnection from "./MyConnections";
import Loading from "../../Loading/Loading";
import { w3cwebsocket as W3CWebSocket } from "websocket";
// const client = new W3CWebSocket(`ws://127.0.0.1:8000`); // production
const client = new W3CWebSocket(`ws://165.227.102.189:8000`); // build

class DisplayFriends extends Component {
    constructor() {
        super()

        this.state = {
            requests:[],
            friends:[],
            isLoading:false,

    // - new friend from websocket - pending accept - //
            newFriends:[],
    // - new friend from websocket - confirmed - //
            justAdded:[],
        }
        this.getMyFriends = this.getMyFriends.bind(this)
        this.acceptRequest = this.acceptRequest.bind(this)
        this.startLoading = this.startLoading.bind(this)
        this.removeConnection = this.removeConnection.bind(this)
    }

    componentDidMount(){
        // const { id } = this.props.user.user
        // axios.get(`/api/join/friends/${id}`).then(res => this.setState({friends:res.data}))

        // axios.get(`/api/get/pending/friends/${id}`).then(res2 => this.setState({requests:res2.data})).catch(err => {
        //     this.setState({requests:[]})
        // })
        // console.log('is user already here?',this.props.user.user)
        // axios.get('/api/projects/all').then(res =>
            // this.setState({ ...this.state,items:res.data}))
            // axios.get(`/api/friends/${this.props.user.user.id}`).then(res => this.setState({friends:res.data})) 
        this.sockets()
        this.getMyFriends()

            // this.removeConnection = this.removeConnection.bind(this)
    }

    componentDidUpdate() {
        this.sockets()
    }

    // --- websocket --- //
    sockets = (input) => {
        client.onopen = () => {
            console.log('connected in Display Friends')
        }
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            const { fromUser } = dataFromServer
            const { newFriends } = this.state
            if (dataFromServer.type === 'new_friend' && parseInt(fromUser.toUser) === this.props.id) {
                newFriends.push(fromUser)
                this.setState({newFriends:newFriends})
            }
        }
    }

    getMyFriends = async () => {
        const { id } = this.props
        // console.log('hit user in props',this.props)
        // --- requests this user has sent --- //
        await axios.get(`/api/join/friends/${id}`).then(res => this.setState({friends:res.data})).catch(err => console.log(err))

        // --- unconfirmed request this user has recieved --- //
        await axios.get(`/api/get/pending/friends/${id}`).then(res2 => this.setState({requests:res2.data})).catch(err2 => console.log(err2))

        return
    }

    startLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
    }

    acceptRequest = async (from,to,photo_url,user_name) => {
        const { friends } = this.state
        const yes = true
        var friendObj = {
            photo_url:photo_url,
            user_id:from,
            user_name:user_name
        }
        var updateFriends = [...friends]
        updateFriends.push(friendObj)
        this.setState({friends:updateFriends})
        console.log('accepting',from,to)
        // this.startLoading()
        const newFriend = await axios.post('/api/accept/connection',{from,to,yes})
        // this.setState({...this.state,testfriend:newFriend})
        // if(newFriends[0] != undefined) {
            // friends.push(newFriends[0])
        // }
        // await this.getMyFriends()
        // this.startLoading()
    }

    removeConnection = async (from,to) => {
        console.log('hit remove', from,to)
        // this.startLoading()
        axios.post('/api/remove/connection',{from,to})
        // this.startLoading()
    }

    pleaeLogin(){
        alert('please log in')
    }

    render() {

        const { requests,friends,isLoading,newFriends } = this.state
        const { id } = this.props

        const mappedConnections = friends.map(el => {
            return <MyConnection key={el.user_id} photo_url={el.photo_url} user_id={el.user_id} user_name={el.user_name} my_id={id} removeConnection={this.removeConnection} getUserID={this.props.getUserID} />
        })

        const mappedRequests = requests.map(el => {
            return <ConnectRequests key={el.user_id} photo_url={el.photo_url} user_name={el.user_name} user_id={el.user_id} my_id={id} removeConnection={this.removeConnection}  acceptRequest={this.acceptRequest} />
        })

        const mappedNewRequestes = newFriends.map(el => {
            return <ConnectRequests key={el.id} photo_url={el.photo} user_name={el.user} user_id={el.id} my_id={id} removeConnection={this.removeConnection}  acceptRequest={this.acceptRequest}/>
        })

        return(<div className="friend-container">
            {isLoading === true ? <Loading /> : null}
            {mappedNewRequestes}
            {mappedRequests}
            {mappedConnections}
        </div>)
    }
}

export default DisplayFriends