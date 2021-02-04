import react from 'react'

const ModelItem = (props) => {

    return(
        <div className="props-display">
            <h2>{props.name}</h2>
            <img className="model-img" src={props.img}/>
        </div>
    )
}

export default ModelItem