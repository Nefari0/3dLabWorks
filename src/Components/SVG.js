import { useState } from "react"
import './../App.css'
import './SVG.css'

const SVG = (params) => {

    const styling ={
        margin: 'auto',
        marginLeft: '10px',
        marginRight: '10px',
        height: '40px',
        width: '40px',
        opacity: '60%',
        color: '#6495ed',
        paddingTop: '10px',
    }

    const xButton = () => {return <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />}

    const downloadIcon = () => {return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />}

    const largeHeart = (dark) => {return (dark === 'dark' ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />)}

    const comments = () => {return (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />)}

    const editProject = () => {return (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />)}

    const folder = () => {return (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />)}

    const info = () => {return (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />)}

    const send = () => {return (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />)}

    const icon = (param) => {
        switch (param) {
            case "download_icon":
                return (downloadIcon())
            case "large_heart":
                return (largeHeart())
            // --- ICON BELOW NOT FULLY FUNCTIONAL --- //
            case "large_heart_dark":
                return (largeHeart('dark'))
            // --------------------------------------- //
            case 'edit_project':
                return (editProject())
            case 'comments':
                return (comments())
            case 'folder':
                return (folder())
            case 'info':
                return (info())
            case 'largeX':
                return (xButton())
            case 'send':
                return (send())
                
        }
    }

    return (<div>
        <svg 
        style={styling}
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
            {icon(params.params)}
        </svg>
    </div>)

}

export default SVG