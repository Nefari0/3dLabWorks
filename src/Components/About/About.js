// import { useState, useEffect } from 'react'
import { Component } from 'react'
import './About.css'
import Document from './../Document'
import axios from 'axios'
import data from '../../data';
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/userReducer';
import UserPage from '../UserPage/UserPage';

class About extends Component {

    constructor(){
        super();

        this.state = {
            about:[],
            showAbout:true,
            general:[],
            showGeneral:true
        }
    }

    componentDidMount(){
        axios.get('/api/documents/about').then(res => {
            this.setState({about:res.data})
        })
        axios.get('/api/documents/general').then(res => {
            this.setState({general:res.data})
        })
    }

        render(){

            const { about,general } = this.state

            // const filterAbout = about.filter(element => {element.tag="about"})
            const mappedAbout = about.map(element => {
                return <Document data={element} key={element.doc_id} />
            })

            const mappedGeneral = general.map(element => {
                return <Document data={element} key={element.doc_id} />
            })

            return(
                <div className="about-container">
                    
                    {mappedAbout}

                    {mappedGeneral}

                </div>
            )
        }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{updateUser})(About)

// export default class About