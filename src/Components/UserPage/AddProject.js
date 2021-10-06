
import './UserPage.css'
const AddProject = (props) => {

    return(
        <div className="add-project">
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
            <input placeholder="name"/>
            <input placeholder="description"/>
            
            <div className="add-project-button">
                <button onClick={props.fileHandler}>submit</button>
                <button onClick={props.fileHandlerRemove}>clear</button>
            </div>
            <div>
                <button onClick={props.addNewProject}>cancel</button>
            </div>
        </div>
    )
}
export default AddProject