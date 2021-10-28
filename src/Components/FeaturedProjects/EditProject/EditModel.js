import axios from 'axios';
import React, { Component } from 'react'
import './EditModel.css'

class EditModel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:'',
            description:''
        }
        // this.addToState = this.addToState.bind(this)
        this.handleText = this.handleText.bind(this)
        this.executeChange = this.executeChange.bind(this)
        // const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = props.info[0]
    }


    async componentDidUpdate(){
        // if (prevProps !== this.props) {
        //     this.setState({ information: {} })
        //   }
        // const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = await this.props.info
    //     if (this.state.information === undefined){
        // this.addToState(description,name)
    //     }
    }

    // addToState(name1,name2) {
    //             const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = this.props.info
    //     this.setState({
    //         stateName:name2,
    //         stateDescription:name1

    //         // ...this.state,
    //         // information:this.props.info
    //     })
    // }

    handleText(prop,val){
        this.setState({
            [prop]:val
            // information:[prop][val]
        })
    }

    executeChange(){
        const { model_id } = this.props.info[0]
        const { name, description } = this.state
        
        axios.post('/api/project/edit/name', {name,model_id})
        this.props.getDetails()
    }

    render() {
        
        // const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = this.state.information
        const { description,firebase_url,firebase_url01,firebase_url02,model_id,name,user_id} = this.props.info

        return(
            <div className="content-box edit-project-container" >
                <h2 className="edit-model-h3">edit model ?</h2>
                {/* <input placeholder="project name" className="text-input"></input> */}

                <input placeholder={`${'name'}`} className="text-input" onChange={e => this.handleText('name',e.target.value)}></input>
                <input placeholder={`${'description'}`} className="text-input" onChange={e => this.handleText('description',e.target.value)}></input>
                <button onClick={this.executeChange}>execute</button>


                {/* <input placeholder="project description" className="text-input"></input> */}
                {/* <p>select photo</p> */}
                {/* <input  type="file" accept=".jpg/.png" ></input> */}
                {/* <p>add .blend or .stl file</p> */}
                {/* <input  type="file" accept=".blend/.stl" ></input> */}
            
            </div>
        )
    }
}

export default EditModel