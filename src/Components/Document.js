
const Document = (props) => {

    const { content,tag } = props.data

    return(
        <div className="doc-containers">
        {/* <h4 className="about-h4">about</h4> */}
        <h4 className="about-h4">{tag}</h4>
        <div className="h4-border"></div>
        <p>
            {content}
        </p>
    </div>
    )
}

export default Document