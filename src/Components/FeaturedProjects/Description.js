
const Description = (props) => {

    const { description } = props

    return (
        <div>
            <p className="doc-containers" style={{color:'#555',maxHeight:'200px'}} >{description}</p>
        </div>        
    )
}

export default Description