
const Document = (props) => {

    const { content,tag,display_document } = props.data

    return(
    <div>
         {display_document && <div className="doc-containers">
            {/* <h4 className="about-h4">about</h4> */}
            <h4 className="about-h4">{tag}</h4>
            <span className="h4-border"></span>
            <p className="long-text">
                {content}
            </p>
        </div>}
    </div>
    )
}

export default Document