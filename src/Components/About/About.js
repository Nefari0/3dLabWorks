import { Component } from 'react'
import './About.css'
import Document from './../Document'
import axios from 'axios'
import data from '../../data';
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/userReducer';
import UserPage from '../UserPage/UserPage';
import Links from './Links/Links';
import Notice from '../Notice/Notice';

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
                about:res.data
            })
        })
        axios.get('/api/documents/general').then(res => {
            this.setState({general:res.data})
        })
    }

    changeView = (params) => {
        this.setState({currentView:params})
    }

        render(){

            const { about,general,currentView } = this.state

            const mappedAbout = about.map(element => {
                return <Document data={element} key={element.doc_id} />
            })

            const mappedGeneral = general.map(element => {
                return <Document data={element} key={element.doc_id} />
            })

            return(
                <div className='about-container' >
                    <header className="sub-header" style={{position:'relative'}} >
                        <a onClick={() => this.changeView('main')} className={`${currentView === 'main' ? 'selected' : null}`} >main</a>
                        <a onClick={() => this.changeView('links')} className={`${currentView === 'links' ? 'selected' : null}`}>links</a>
                        {/* <Notice item={'about-links'} content={'Resources'} /> */}
                    </header>
                    <section>   

                        {currentView === 'main' ? <div>{mappedAbout}</div> : null}
                        {currentView === 'main' ? <div>{mappedGeneral}</div> : null}
                        {currentView === 'links' ? <Links /> : null}

                    </section>
                </div>
            )
        }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{updateUser})(About)