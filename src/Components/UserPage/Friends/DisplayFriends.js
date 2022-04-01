import { Component } from "react";
import axios from "axios";
import './DisplayFriends.css'
import ConnectRequests from "./ConnectRequests";
import MyConnection from "./MyConnections";
import Loading from "../../Loading/Loading";

class DisplayFriends extends Component {
    constructor() {
        super()

        this.state = {
            requests:[],
            friends:[],
            isLoading:false,
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
        
        this.getMyFriends()

            // this.removeConnection = this.removeConnection.bind(this)
    }

    getMyFriends = async () => {
        const { id } = this.props
        // console.log('hit user in props',this.props)
        // --- requests this user has sent --- //
        await axios.get(`/api/join/friends/${id}`).then(res => this.setState({friends:res.data}))

        // --- unconfirmed request this user has recieved --- //
        await axios.get(`/api/get/pending/friends/${id}`).then(res2 => this.setState({requests:res2.data}))

        return
    }

    startLoading = () => {
        this.setState({isLoading:!this.state.isLoading})
    }

    acceptRequest = async (from,to) => {
        const yes = true
        // this.startLoading()
        await axios.post('/api/accept/connection/',{from,to,yes})
        await this.getMyFriends()
        // this.startLoading()
    }

    removeConnection = async (from,to) => {
        console.log('hit remove', from,to)
        // this.startLoading()
        axios.post('/api/remove/connection/',{from,to})
        // this.startLoading()
    }

    pleaeLogin(){
        alert('please log in')
    }

    render() {

        const { requests,friends,isLoading } = this.state
        const { id } = this.props

        const mappedConnections = friends.map(el => {
            return <MyConnection key={el.user_id} photo_url={el.photo_url} user_id={el.user_id} user_name={el.user_name} my_id={id} removeConnection={this.removeConnection} />
        })

        const mappedRequests = requests.map(el => {
            return <ConnectRequests key={el.user_id} photo_url={el.photo_url} user_name={el.user_name} user_id={el.user_id} my_id={id} removeConnection={this.removeConnection} acceptRequest={this.acceptRequest} />
        })

        return(<div className="friend-container">
            {isLoading === true ? <Loading /> : null}
            {mappedRequests}
            {mappedConnections}
        </div>)
    }
}

export default DisplayFriends