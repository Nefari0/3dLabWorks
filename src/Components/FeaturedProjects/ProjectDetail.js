import { Component } from 'react'
import axios from 'axios'
import './Project.css'
import ProjectPhotos from './ProjectPhotos'
// import logo from './../../assets/logo.png'

class ProjectDetail extends Component {

    constructor(){
        super();

        this.state = {
            info:[],
            userInfo:[],
            viewComments:false,
            viewDetails:true,
        }
    }

    componentDidMount(){

        // ---get project info by model_id --- //
        this.getDetails().then((val) => console.log(val)) // original/working function

        // ---test code below ---//

        // const { model_id } = this.props.match.params

        // await axios.get(`/api/projects/id/${model_id}`)
        // const [ firstResponse ] = await Promise.all([
        //     axios.get(`/api/projects/id/${model_id}`)
        // ])

        // extract user_id from firstResponse // then call user by user_id
        // const { user_id } = firstResponse.data[0]
        // console.log(user_id)
        // const [ secondResponse ] = await axios.get(`/api/users/${user_id}`)

        // adds to state //

        // this.setState({
        //     info:firstResponse.data
        // })
    }

    componentDidUpdate(prevProps){
        const { model_id } = this.props.match.params
        if (prevProps.match.params.model_id !== model_id) {
            // this.getDetails() // original / working function // --- make sure to use this if using getDetails() 
        }
    }

    // getDetails = () => {
    //     const { model_id } = this.props.match.params
    //     axios
    //         .get(`/api/projects/id/${model_id}`)
    //         .then((res) => {
    //             this.setState({
    //                 info:res.data,
    //             })
    //         })
    //         .catch((err) => {
    //             this.props.history.push('/404')
    //         })
    // }
    async getDetails(){
        const { model_id } = this.props.match.params
        await (
            axios
            .get(`/api/projects/id/${model_id}`)
            .then((res) => {
                // console.log(res.data[0].user_id)
                const { user_id } = res.data[0]
                axios.get(`/api/users/${user_id}`).then((res2) => {
                    // console.log('will it work?',res.data,res2.data)
                    this.setState({
                        info:res.data,
                        userInfo:res2.data
                    })
                })
                // this.setState({
                //     info:res.data,
                // })
            })
            .catch((err) => {
                this.props.history.push('/404')
            })
        )

    }

    changeView(params) {

    }


    render() {

        const { firebase_url01 } = this.state.info
        const { info } = this.state
        const { userInfo } = this.state
        console.log(userInfo)

        const mappedPhoto = info.map(element => {
            return <ProjectPhotos data={element} key={element.model_id} userInfo={userInfo} />
        }) 

        return(
            <div className="view">
                <div className="detail-container">
                    {/* <h2>project detail</h2> */}
                    {/* <div className="top-section"> */}
                    {/* <div> */}
                    {mappedPhoto}
                    <section className="right">
                        <div className="detail-box small down-load"><p className="dark-text down-load-text">Download All Files</p></div>
                        <div className="detail-box small">
                        <svg 
                            className="details-icon-big" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                // stroke-width="2"
                                stroke-width="1"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                            />
                        </svg>
                            <p className="dark-text">Like</p></div>

                        <div className="detail-box small">
                        <svg 
                            className="details-icon-big" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                // stroke-width="2"
                                stroke-width="1"
                                d="M19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" 
                            />
                        </svg>
                            <p className="dark-text">Comment</p></div>

                        <div className="detail-box small">
                        <svg 
                            className="details-icon-big" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                // stroke-width="2"
                                stroke-width="1"
                                d="M22.28,11.75a2.54,2.54,0,0,0,.6-2.56,2.43,2.43,0,0,0-1.95-1.7l-4.44-.66a.47.47,0,0,1-.36-.27l-2-4.17A2.39,2.39,0,0,0,12,1h0A2.37,2.37,0,0,0,9.83,2.4l-2,4.18a.46.46,0,0,1-.36.27l-4.43.69a2.4,2.4,0,0,0-1.94,1.7,2.53,2.53,0,0,0,.61,2.56L5,15.05a.49.49,0,0,1,.14.43l-.75,4.6a2.53,2.53,0,0,0,1,2.44,2.3,2.3,0,0,0,1.4.48,2.4,2.4,0,0,0,1.13-.29l4-2.18a.45.45,0,0,1,.45,0l4,2.16a2.33,2.33,0,0,0,2.53-.2,2.55,2.55,0,0,0,1-2.45l-.77-4.59a.51.51,0,0,1,.13-.44Zm-4.56,1.83A2.58,2.58,0,0,0,17,15.79l.77,4.6a.48.48,0,0,1-.18.48.46.46,0,0,1-.5,0l-4-2.16a2.34,2.34,0,0,0-2.24,0l-4,2.18a.46.46,0,0,1-.5,0,.47.47,0,0,1-.19-.48L7,15.82a2.58,2.58,0,0,0-.69-2.21L3.08,10.36A.49.49,0,0,1,3,9.86a.48.48,0,0,1,.39-.34l4.43-.68A2.4,2.4,0,0,0,9.58,7.47l2-4.19A.46.46,0,0,1,12,3a.46.46,0,0,1,.43.27l2,4.18a2.43,2.43,0,0,0,1.81,1.36l4.44.66a.45.45,0,0,1,.38.33.48.48,0,0,1-.12.51Z" 
                            />
                        </svg>
                            <p className="dark-text">Add To Favorites</p></div>
                        <div className="detail-box small">
                        <svg 
                            className="details-icon-big" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                // stroke-width="2"
                                stroke-width="1"
                                d="M18,16.08 C17.24,16.08 16.56,16.38 16.04,16.85 L8.91,12.7 C8.96,12.47 9,12.24 9,12 C9,11.76 8.96,11.53 8.91,11.3 L15.96,7.19 C16.5,7.69 17.21,8 18,8 C19.66,8 21,6.66 21,5 C21,3.34 19.66,2 18,2 C16.34,2 15,3.34 15,5 C15,5.24 15.04,5.47 15.09,5.7 L8.04,9.81 C7.5,9.31 6.79,9 6,9 C4.34,9 3,10.34 3,12 C3,13.66 4.34,15 6,15 C6.79,15 7.5,14.69 8.04,14.19 L15.16,18.35 C15.11,18.56 15.08,18.78 15.08,19 C15.08,20.61 16.39,21.92 18,21.92 C19.61,21.92 20.92,20.61 20.92,19 C20.92,17.39 19.61,16.08 18,16.08 Z" 
                            />
                        </svg>
                            <p className="dark-text">Share</p></div>
                    </section>
                        {/* <section className="right-col"></section> */}
                    {/* </div> */}

                
                    {/* <section className="bottom-row"></section> */}
                    {/* <div className="comment-box"></div> */}
                </div>
                <div className="comment-box"><h3 className="dark-text">comments</h3></div>
            </div>
        )
    }

}

export default ProjectDetail