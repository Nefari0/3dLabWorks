import React, { Component } from 'react'
import './UserPage.css'
import axios from 'axios'
import UserProject from './UserProject'

class Collections extends Component {
    constructor(){
        super();

        this.state = {
            items:[]
        }
    }

    componentDidMount(){
        axios.get('/api/projects/all').then(res =>
            this.setState({ ...this.state,items:res.data}))        
    }

    render(){

        const { items } = this.state

        const mappedItems = items.map(element => {
            return <UserProject key={element.model_id} />
        })

        return(
            <div className="collections">
                <h2>Collections</h2>
                {mappedItems}
            </div>
        )
    }
}

export default Collections