import { Component } from 'react'
import './About.css'
import Document from './../Document'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/userReducer';
import Links from './Links/Links';

import { 
    AboutContainer,
} from './about.styles'

import { 
    SubHeader
 } from '../../GlobalStyles/global.styles'
 import Button from '../../GlobalStyles/BaseButton/button.component'

class About extends Component {

    constructor(){
        super();

        this.state = {
            currentView:'main',
            about:[],
            general:[],
        }
    }

    componentDidMount(){
        axios.get('/api/documents/about').then(res => {
            this.setState({
                about:res.data[0]
            })
        })
        axios.get('/api/documents/general').then(res => {
            this.setState({general:res.data[0]})
        })
    }

    changeView = (params) => {
        this.setState({currentView:params})
    }

        render(){

            const { about,general,currentView } = this.state

            return(
                <AboutContainer >
                    <SubHeader  >
                        <Button 
                            onClick={() => this.changeView('main')} 
                            selected={currentView === 'main'}
                            text={'main'}
                            buttonClass={'tiny'}
                        />

                        <Button
                            onClick={() => this.changeView('links')}
                            selected={currentView === 'links'}
                            text={'links'}
                            buttonClass={'tiny'}
                        />
                    </SubHeader>

                    <section>   

                        {currentView === 'main' && 
                        <>
                            <Document data={about}/>
                            <Document data={general}/>
                        </>}

                        {currentView === 'links' && <Links />}

                    </section>

                </AboutContainer>
            )
        }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{updateUser})(About)