import SVG from "../../SVG"

const selected = {backgroundColor:'#3c598e'}
const cfff = {color:'#fff'} // -- light
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
            <h4 className='dark-text' style={viewFiles ? cfff : null} >Download Files</h4>
        </li>

        <li onClick={clickLike}>
            {isLoggedIn === true && myLike === true ? 
            <svg  style={icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            :
            <svg style={icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            }
            <p className="dark-text">Like</p>
        </li>

        <li style={viewComments ? selected : null} onClick={() => changeView('viewComments')} >
            <SVG params={'comments'} />
            <p style={viewComments ? cfff : null}>Comments</p>
        </li>

        <li style={viewEditProject || addedToFavorites ? selected : null} onClick={() => changeView(authorized() === true ? 'viewEditProject' : 'viewInfo')}>
            {authorized() === true ? 
            <SVG params={'edit_project'} fill={'none'} stroke={'currentColor'}/> : 
            <SVG params={'folder'} fill={'none'} stroke={'currentColor'} />}
            <p style={viewEditProject ? cfff : null}>{authorized() ? 'Edit Project' : 'Add to Favorites'}</p>
        </li>

        <li style={viewInfo ? selected : null} onClick={() => changeView('viewInfo')}>
            <SVG params={'info'} fill={'none'} stroke={'currentColor'}/>
            <p style={viewInfo ? cfff : null} >Info</p>
        </li>
    </ul>
    )
}

export default OptionsMenu