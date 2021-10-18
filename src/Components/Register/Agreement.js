import { Component } from 'react'
import './Register.css'

class Agreement extends Component {


    render(){
        return(
            <div className="agreement-container">
                <p className="agreement-text">
                Any and all information and content that a User submits to, or uses with, the Sites or Services (e.g., content in the User’s profile or postings, user-created designs), including any modifications, improvements, or alterations (“Modification”) made to products available by Company or its authorized suppliers through MadModels3d (all such products collectively referred to herein as the “MadModels3d Experimental Product”) or to any print profiles, modes, or settings created by you using Company products (“Print Profile”). You retain all your intellectual property rights in your User Content. Company does not claim ownership in any User Content. You are solely responsible for your User Content, and you assume all risks associated with use of your User Content, including any reliance on its accuracy, completeness, or usefulness by others, or any disclosure of your User Content by you that makes you or any third party personally identifiable. Unless Company states otherwise in a writing to you, you may not state or imply that your User Content is in any way provided, sponsored, or endorsed by the Company. The Company is not obligated to backup any User Content and User Content may be deleted at any time. You are solely responsible for creating backup copies of your User Content if you desire.
                </p>
                <button onClick={this.props.handleOpenIAgree} >back</button>
            </div>
        )}

}

export default Agreement