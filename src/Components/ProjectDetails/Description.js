
const Description = (props) => {

    const { description } = props

    return (
        <div>
            <p className="doc-containers" style={{color:'#555',minHeight:'200px',overflow:'scroll'}} >{description}</p>
        </div>        
    )
}

export default Description