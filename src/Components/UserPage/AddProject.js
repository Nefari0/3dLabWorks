
import './UserPage.css'
const AddProject = (props) => {

    return(
        <div className="add-project">
            <p>add photo</p>
            <div className="add-project-button">
                <input 
                type="file"
                
                accept="image/png,image/jpeg"
                onChange={e => this.handlePhoto(e)} 
                />
            </div>
            <p>add file</p>
            <div className="add-project-button">
                <input
                type="file"
                accept=".stl,.blend"
                onChange={e => this.handleFile(e)} 
                />
            </div>
            
            <div className="add-project-button">
                <button onClick={props.fileHandler}>submit</button>
                <button onClick={props.fileHandlerRemove}>clear</button>
            </div>
            <div>
                <button>cancel</button>
            </div>
        </div>
    )
}
export default AddProject