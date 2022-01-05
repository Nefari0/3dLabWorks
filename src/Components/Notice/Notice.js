
import './Notice.css'
import { useState,useEffect } from 'react'

const Notice = (props) => {

    useEffect(() => {
        // setTimeout(setShowNotice(false), 10000)
        // setShowNotice(false)
    },[])

    const [ showNotice, setShowNotice ] = useState(true)

    const testFunc = () => {
        alert('does it work')
    }

    const { item,content } = props

    return (
        <div className={`notice-container ${item} ${showNotice ? true : 'hidden'}`}>
            <div className='notice-container-outer '></div>
            {/* <h2 style={{color:'#555'}}>text</h2> */}
            <p style={{color:'#555',textTransform:'none'}}>{content}</p>
        </div>
    )
}

export default Notice