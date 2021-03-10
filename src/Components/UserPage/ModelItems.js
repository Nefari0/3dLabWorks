import react from 'react'
import axios from 'axios'
import { app } from './../../base'

const db = app.firestore()

const ModelItem = (props) => {

    const { img } = props
    console.log('this is db from ModelItem',db.INTERNAL)
    
    const handleClick = () => {
        const model_id = props.id
        props.delete(model_id)
    }
    
    // function deleteModel(){
    //     const { id,img } = props
    //     deleteDBFile(img)
    //     axios.delete(`/api/project/delete/${id}`).then(res => {
    //         console.log('this should be res data',res.data)
    //     })
    // } 

    // const deleteModel = () => {
    //     const { id,img } = props
    //     deleteDBFile(img)
    //     axios.delete(`/api/project/delete/${id}`).then(res => {
    //         console.log('this should be res data',res.data)
    //     })
    // } 
    
    // const deleteDBFile = async (img) => {
    //     var { img } = props
    //     console.log(img)
    //     db.INTERNAL.delete(await img).then(() => {
    //         console.log('file deleted')
    //     }).catch(('uh oh'))
    // }

    return(
        <div className="props-display">
            <h2>{props.name}</h2>
            <img className="model-img" src={props.img}/>
            {/* <button onClick={deleteModel}>delete</button>  */}
            {/* <button onClick={deleteDBFile}>delete</button> */}

        </div>
    )
}

export default ModelItem