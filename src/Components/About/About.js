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
            about:[],
            showAbout:true,
            general:[],
            showGeneral:true,

            mainSelected:true,
            linksSelected:false
        }
        this.changeView = this.changeView.bind(this)
        this.resetView = this.resetView.bind(this)
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

    resetView = () => {
        this.setState({
            mainSelected:false,
            linksSelected:false
        })
    }

    changeView = (params) => {
        this.resetView()
        switch(params) {
            case 'main':
                this.setState({mainSelected:true})
                break;
            case 'links':
                this.setState({linksSelected:true})
                break;
            default:
                break;
        }
    }

        render(){

            const { about,general,mainSelected,linksSelected } = this.state

            const mappedAbout = about.map(element => {
                return <Document data={element} key={element.doc_id} />
            })

            const mappedGeneral = general.map(element => {
                return <Document data={element} key={element.doc_id} />
            })

            return(
                <div>
                    <div className="about-header">
                        {!mainSelected ? (<a onClick={() => this.changeView('main')}>main</a>) : (<a className="a-selected" >main</a>)}
                        {!linksSelected ? (<div className='about-header-item'><Notice item={'about-links'} content={'Resources'} /><a onClick={() => this.changeView('links')}>links</a></div>) : (<a className="a-selected">links</a>)}
                    </div>
                    <div className="about-container">   
                        {mainSelected ? <div>{mappedAbout}</div> : null}
                        {mainSelected ? <div>{mappedGeneral}</div> : null}
                        {linksSelected ? <Links /> : null}
                    </div>
                </div>
            )
        }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps,{updateUser})(About)