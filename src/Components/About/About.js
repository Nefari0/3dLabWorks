import { useState, useEffect } from 'react'
import './About.css'

const About = (props) => {

    return(
        <div className="about-container">
            <div className="doc-containers">
                <h4 className="about-h4">about</h4>
                <div className="h4-border"></div>
                <p>
                    MadModels is an establishment to allow makers, tinkerers and artist to updload and share 3d models. Ultimately, the purpose of this site is to act as a repository, where makers can share their work, and invite other makers to edit and collaborate on projects. The formats used in this site are .stl and .blend. 
                </p>
            </div>
            <div className="doc-containers">
                <h4 className="about-h4">General Information</h4>
                <div className="h4-border"></div>
                <text>
                    This site is an ongoing project. As of 10/4/2021 it is still under construction. Developers are working towards utilizing in app 3d rendering tools to allow users to upload .stl and .mtl files that will automatically be displayed in the app. Since this is currently not supported, it is recommended that you upload a screenshot of your project along with the file so other users can preview your work before downloading the file
                </text>
            </div>
        </div>
    )
}

export default About