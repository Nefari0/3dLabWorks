import react from 'react'
import axios from 'axios'


const ModelItem = (props) => {

    // const { id } = props
    
    const handleClick = () => {
        const model_id = props.id
        props.delete(model_id)
    }
    
    function deleteModel(){
        const { id } = props
        axios.delete(`/api/project/delete/${id}`).then(res => {
            console.log('this shouls be res data',res.data)
        })
    }  

    return(
        <div className="props-display">
            <h2>{props.name}</h2>
            <img className="model-img" src={props.img}/>
            <button onClick={deleteModel}>delete</button>

        </div>
    )
}

export default ModelItem