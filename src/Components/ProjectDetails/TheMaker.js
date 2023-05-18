import '../Project/Project.css'
import './TheMaker.css'

const TheMaker = (props) => {

    const { photo_url,user_name,info } = props
    
    return(
        <div className="maker" style={{margin:'auto',marginTop:'5px'}}>
                <img src={photo_url} className="project-user-photo" style={{marginRight:'20px'}} />
                <h4 style={{paddingBottom:'0px',paddingTop:'15px'}}>{info[0].name}<br style={{paddingBottom:'10px'}}/><i  >by {user_name}</i></h4>          
        </div>
    )
}

export default TheMaker