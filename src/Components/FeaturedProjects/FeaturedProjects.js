import React, { Component } from 'react'
import './FeaturedProjects.css'
import data from '../../data.js'
import Project from './Project'
import { connect } from 'react-redux';
import { updateCharacters } from '../../ducks/breakingBadReducer'

class FeaturedProjects extends Component {
    constructor(props){
        super();

        this.state = {

        }
    }


    componentDidMount(){
        this.props.updateCharacters()
    }

    // componentDidUpdate(){
    //     console.log(this.props)
    // }

    render(){
        const { data } = this.props.characters.characters
        // console.log(data)

        // const mappedCharacters = data.map(element => {
        //     return <Project data={element}/>
        // })
        return(
            <div className="featured-projects">
                {/* {mappedCharacters} */}
            </div>
        )
    }



}
function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { updateCharacters })(FeaturedProjects)

// export default FeaturedProjects