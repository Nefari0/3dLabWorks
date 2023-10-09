import { Color } from "three"

const OneLink = (props) => {

    const { link_text, link_to, description } = props

    return(
        <div>
            <a href={`${link_to}` } style={{textDecoration:'none'}}><h4 style={{textDecoration:'none',color:'blue'}}>{link_text}</h4></a>
        </div>
    )
}

export default OneLink