import './Memo.css'
import { useState } from 'react'
import axios from 'axios'

const Memo = (props) => {

    const { body,title,memo_id } = props
    var [ text,setText ] = useState(body)
    
    const sendUpdate = () => {
        axios.post('/api/memo/update', {text,memo_id})
    }

    return(<div className="text-container" >
        <input value={title} style={{width:'95%',marginBottom:'5px'}}></input>
        <textarea name="text" rows="23" cols="50" wrap="soft" placeholder='text' onChange={(e) => setText(e.target.value)} value={text} className="admin-memo-body" > </textarea>
        <button onClick={() => sendUpdate()} >submit</button>
    </div>)
}

export default Memo