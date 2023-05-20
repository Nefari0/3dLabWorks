import SVG from "../../SVG"
import { 
    LargeLightHeart,
    LargeDarkHeart
 } from "../../SVG2"

import { 
    OptionsH4,
    OptionsText
 } from "./options.styles"

const selected = {backgroundColor:'#3c598e'}
const icon ={
    margin: 'auto',
    marginLeft: '10px',
    marginRight: '10px',
    height: '40px',
    width: '40px',
    opacity: '60%',
    color: '#6495ed',
    paddingTop: '10px',
}

const OptionsMenu = (props) => {

    const { 
        state,
        isLoggedIn,
        authorized,
        clickLike,
        changeView
    } = props

    const {
        viewFiles,
        myLike,viewComments,
        viewEditProject,
        addedToFavorites,
        viewInfo
    } = state

    return (
    <ul>
        <li style={viewFiles ? selected : null} onClick={() => changeView('viewFiles')} >
            <OptionsH4
                viewFiles={viewFiles}
            >
                Download Files
            </OptionsH4>
        </li>

        <li onClick={clickLike}>
            {isLoggedIn === true && myLike === true ? <LargeLightHeart />:<LargeDarkHeart />}
            <OptionsText>Like</OptionsText>
        </li>

        <li style={viewComments ? selected : null} onClick={() => changeView('viewComments')} >
            <SVG params={'comments'} />
            <OptionsText condition={viewComments} >Comments</OptionsText>
        </li>

        <li style={viewEditProject || addedToFavorites ? selected : null} onClick={() => changeView(authorized() === true ? 'viewEditProject' : 'viewInfo')}>
            {authorized() === true ? 
            <SVG params={'edit_project'} fill={'none'} stroke={'currentColor'}/> : 
            <SVG params={'folder'} fill={'none'} stroke={'currentColor'} />}
            <OptionsText condition={viewEditProject || addedToFavorites}>{authorized() ? 'Edit Project' : 'Add to Favorites'}</OptionsText>
        </li>

        <li style={viewInfo ? selected : null} onClick={() => changeView('viewInfo')}>
            <SVG params={'info'} fill={'none'} stroke={'currentColor'}/>
            <OptionsText condition={viewInfo} >Info</OptionsText>
        </li>
    </ul>
    )
}

export default OptionsMenu