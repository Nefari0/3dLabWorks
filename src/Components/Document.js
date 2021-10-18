
const Document = (props) => {

    const { content } = props.data

    return(
        <div className="doc-containers">
        <h4 className="about-h4">about</h4>
        <div className="h4-border"></div>
        <p>
            {content}
        </p>
    </div>
    )
}

export default Document