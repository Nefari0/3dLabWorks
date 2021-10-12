
import './UserPage.css'


const AddProject = (props) => {

    const {imageFile} = props

    return(
        <div className="add-project">
            <div className="add-project-info-section" >
                <p>add project</p>
                <a className="small-text">image</a>
                <div className="add-project-button">
                    <input
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={e => props.handlePhoto(e)} 
                    />
                    
                </div>
                <a className="small-text">.blend/.stl</a>
                <div className="add-project-button">
                    <input
                        type="file"
                        accept=".stl,.blend"
                        onChange={e => props.handleFile(e)} 
                    />
                </div>
                <input placeholder="name" onChange={e => props.handleAddText('projectName', e.target.value)} />
                {/* <input placeholder="description"/> */}
                <input placeholder="description" onChange={e => props.handleAddText('projectDescription', e.target.value)} />
                
                <div className="add-project-button">
                    <button onClick={props.fileHandler}>submit</button>
                    <button onClick={props.fileHandlerRemove}>clear</button>
                </div>
                <div>
                    <button onClick={props.addNewProject}>cancel</button>
                </div>
            </div>
            <div >
                <img className="add-project-photo-section" src={imageFile} />
            </div>
        </div>
    )
}
export default AddProject