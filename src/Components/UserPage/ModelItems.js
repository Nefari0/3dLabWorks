import react from 'react'
import axios from 'axios'

const ModelItem = (props) => {

    const handleClick = () => {
        const model_id = props.id
        props.delete(model_id)
    }
    
    // const deleteModel = (params) => {
    //     axios.delete(`/api/project/delete/${props.id}`, {model_id}).then((res) => {
    //         console.log('this shouls be res data')
    //     })
    // }

    return(
        <div className="props-display">
            <h2>{props.name}</h2>
            <img className="model-img" src={props.img}/>
            <button onClick={props.delete}>delete</button>

        </div>
    )
}

export default ModelItem