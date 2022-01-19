import react from 'react'
import axios from 'axios'
import { app } from './../../base'
import { Link } from 'react-router-dom'
import './ModelItems.css'

const db = app.firestore()

const ModelItems = (props) => {

    const { img,id,file } = props
    
    const handleClick = () => {
        const { img,id } = props
        const model_id = props.id
        alert('are you sure you want to delete this file?')
        props.removeFileFromSpace(img,id,file)
    }

    return(
        <div className="user-model-flex">
            <div className='props-display-row'>
                <p className="title">{props.name}</p>
                <p onClick={handleClick} style={{marginRight:'10px'}}>X</p>
            </div>
            <Link to={`projectdetails/${id}`}><img className="model-img" src={props.img}/></Link>
        </div>
    )
}

// export default ModelItems