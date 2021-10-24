import './Project.css'

const DlUrl = (props) => {

    const { url,isLoggedIn } = props

    return(
        <div>
           { isLoggedIn ? <a className="dark-text" href={url} >Download</a> : <a className="dark-text" onClick={props.plsSignIn} >Download</a>}
        </div>
    )
}

export default DlUrl