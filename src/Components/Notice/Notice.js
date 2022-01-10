
import './Notice.css'
import { useState,useEffect } from 'react'

const Notice = (props) => {

    useEffect(() => {
        setShowNotice(false)
    },[])

    const [ showNotice, setShowNotice ] = useState(true)

    const testFunc = () => {
        alert('does it work')
    }

    const { item,content } = props

    return (
        <div className={`notice-container ${item} ${showNotice ? true : 'hidden'}`}>
            <p style={{color:'#fff',textTransform:'none'}}>{content}</p>
        </div>
    )
}

export default Notice