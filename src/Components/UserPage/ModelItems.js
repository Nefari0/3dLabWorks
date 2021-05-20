import react from 'react'
import axios from 'axios'
import { app } from './../../base'

const db = app.firestore()

const ModelItem = (props) => {

    const { img } = props
    console.log('this is db from ModelItem',db.INTERNAL)
    
    const handleClick = () => {
        const { img,id } = props
        const model_id = props.id
        alert('are you sure you want to delete this file?')
        // props.delete(model_id)
        props.removeFileFromSpace(img,id)
        // deleteDBFile()
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
    
    // const deleteDBFile = async () => {
    //     const { img } = props
    //     console.log(img)
    //     db.INTERNAL.delete(await img).then(() => {
    //         console.log('file deleted')
    //     }).catch(('uh oh'))
    // }

    return(
        <div className="props-display">
            <h2>{props.name}</h2>
            <img className="model-img" src={props.img}/>
            <button onClick={handleClick}>delete</button>
            {/* <button onClick={deleteModel}>delete</button>  */}
            {/* <button onClick={deleteDBFile}>delete</button> */}

        </div>
    )
}

export default ModelItem