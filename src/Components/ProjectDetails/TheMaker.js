import '../Project/Project.css'
import './TheMaker.css'

const TheMaker = (props) => {

    const { info,userInfo } = props
    const { user_name, photo_url } = userInfo
    
    return(
        <div className="maker" style={{margin:'auto',marginTop:'5px'}}>
                <img src={photo_url} className="project-user-photo" style={{marginRight:'20px'}} />
                <h4 style={{paddingBottom:'0px',paddingTop:'15px'}}>{info.name}<br style={{paddingBottom:'10px'}}/><i  >by {user_name}</i></h4>          
        </div>
    )
}

export default TheMaker