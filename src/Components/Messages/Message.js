import './Messages.css'

const Message = (props) => {

    const { text,send_from } = props

    return(
        <div className='content-box message-box'>
            <section className='from-name'><p className="name-text">from {send_from}</p></section>
            <section className='message-content-container'><p className="content-text">{text}</p></section>
            
        </div>
    )
}

export default Message