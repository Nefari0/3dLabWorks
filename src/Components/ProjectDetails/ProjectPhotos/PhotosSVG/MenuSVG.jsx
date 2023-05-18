const Dots = () => {
    return (
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    )
}

const X = () => {
    return (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    )
}

export const MenuSVG = ({openMenu,setOpenMenu}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="edit-photo-button" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => setOpenMenu(!openMenu)} >
            {openMenu === false ? <X />:<Dots />}
        </svg>
    )
}