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
    SubHeader,
    TextLink
 } from '../../Global/global.styles'

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

            // const mappedAbout = about.map(element => {
            //     return <Document data={element} key={element.doc_id} />
            // })

            // const mappedGeneral = general.map(element => {
            //     return <Document data={element} key={element.doc_id} />
            // })

            return(
                <AboutContainer >
                    <SubHeader  >
                        <TextLink onClick={() => this.changeView('main')} className={`${currentView === 'main' ? 'selected' : null}`} >main</TextLink>
                        <TextLink onClick={() => this.changeView('links')} className={`${currentView === 'links' ? 'selected' : null}`}>links</TextLink>

                    </SubHeader>
                    <section>   

                        {currentView === 'main' && 
                        <>
                            <Document data={about}/>
                            <Document data={general}/>
                        </>}

                        {currentView === 'links' ? <Links /> : null}

                    </section>
                </AboutContainer>
            )
        }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{updateUser})(About)