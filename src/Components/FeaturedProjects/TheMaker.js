import './Project.css'

const TheMaker = (props) => {

    const { photo_url,user_name,info } = props
    
    return(
        <div className="detail-box" style={{margin:'auto',marginTop:'5px'}}>
                <img src={photo_url} className="project-user-photo" style={{marginTop:'20px'}} />
                <h4 style={{paddingBottom:'5px',paddingTop:'15px'}}>{info[0].name}<br/><i >by {user_name}</i></h4>          
        </div>
    )
}

export default TheMaker