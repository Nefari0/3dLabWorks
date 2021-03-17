import React, { Component } from 'react'
import './UserPage.css'
import { connect } from 'react-redux'
const Public = () => {<h3>Public</h3>}
const Protected = () => <h3>Protected</h3>

class SecurityTest extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){

        return (
            <div className="sec-test-container">
                

            </div>
        )
    }
}
export default SecurityTest