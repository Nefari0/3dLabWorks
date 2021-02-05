import React, { Component } from 'react'
import './UserPage.css'
import axios from 'axios'
import UserProject from './UserProject'
import {app} from '../../base'
import ModelItem from './ModelItems'

class Collections extends Component {
    // function Collections(){

    constructor(){
        super();

        this.state = {
            items:[],
        }
        // this.giveInfo = this.giveInfo.bind(this)
        this.sendIntoSpace = this.sendIntoSpace.bind(this)
    }

    componentDidMount(){
        axios.get('/api/projects/all').then(res =>
            this.setState({ ...this.state,items:res.data}))        
    }

    giveInfo(){
        // console.log(app.firebase)
    }

    // sendIntoSpace(params){
    //     const file = e.target.file[0];
    //     const storageRef = app.storage().ref()
    //     const fileRef = storageRef.child(file.name)
    //     fileRef.put(file).then(() => {
    //         console.log("uploaded a file")
    //     })
    // }

    sendIntoSpace(e){
        const file = e.target.files[0];
        console.log('here is the info',file)
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        console.log('this is fileref',fileRef)
        fileRef.put(file).then(() => {
            console.log("uploaded a file")
        })
    }

    handleChange(params){
        this.setState({ file:params })
    }

    render(){

        const { items } = this.state


        const mappedItems = items.map(element => {
            return <ModelItem key={element.model_id} name={element.name} img={element.firebase_url01}/>
        })

        return(
            <div className="collections">
                <section className="input">
                    <div className="collections-h2"><h2 >Collections</h2></div>
                    {/* <button onClick={this.giveInfo}>click</button> */}
                    <input 
                    type="file"
                    onChange={e => this.sendIntoSpace(e)}
                    // onChange={this.sendIntoSpace()}
                    />
                    {/* {mappedItems} */}
                </section>
                <section className="items-view">
                    {mappedItems}
                </section>
  
            </div>
        )
    }
}

export default Collections