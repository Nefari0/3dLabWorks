
import './UserPage.css'
const AddProject = (props) => {

    return(
        <div className="add-project">
            <p>add project</p>
            <div className="add-project-button">
                <form>
                <input 
                type="file"
                accept="image/png,image/jpeg"
                onChange={e => props.handlePhoto(e)} 
                />
                
                </form>
            </div>
            {/* <p>add file</p> */}
            <div className="add-project-button">
                <input
                type="file"
                accept=".stl,.blend"
                onChange={e => props.handleFile(e)} 
                />
            </div>
            
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