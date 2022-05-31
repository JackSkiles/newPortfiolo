import React from 'react'

export default function Info() {
    return (
        <div>
            <div className="outerInfoBox">
                <div className="infoBox">
                    <div className="infoHeaderBox">
                        <div className='projectsIcon'></div>
                        <h3 className="infoHeader">Skills and Technologies</h3>
                    </div>
                    <div className="icon-container">
                        <div className="icon2">
                            <i className="devicon-visualstudio-plain" title="Visual Studio Code" id="skill"></i>
                            {/* <p id="iconText">Visual Studios</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-javascript-plain" title="JavaScript" id="skill"></i>
                            {/* <p id="iconText">JavaScript</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-react-plain" title="React" id="skill"></i>
                            {/* <p id="iconText">JavaScript</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-postgresql-plain" title="PostgreSQL" id="skill"></i>
                            {/* <p id="iconText">PostgreSQL</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-sequelize-plain" title="Sequelize" id="skill"></i>
                            {/* <p id="iconText">Sequelize</p> */}
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="icon2">
                            <i className="devicon-nodejs-plain" title="Nodejs" id="skill"></i>
                            {/* <p id="iconText">Node.js</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-html5-plain" title="HTML5" id="skill"></i>
                            {/* <p id="iconText">HTML5</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-git-plain" title="Git" id="skill"></i>
                            {/* <p id="iconText">Git</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-bootstrap-plain" title="Bootstrap" id="skill"></i>
                            {/* <p id="iconText">Bootstrap</p> */}
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="icon2">
                            <i className="devicon-photoshop-plain" title="Adobe Photoshop" id="skill"></i>
                            {/* <p id="iconText">Bootstrap</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-xd-plain" title="Adobe XD" id="skill"></i>
                            {/* <p id="iconText">Bootstrap</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-premierepro-plain" title="Adobe Premiere Pro" id="skill"></i>
                            {/* <p id="iconText">Bootstrap</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-illustrator-plain" title="Adobe Illustrator" id="skill"></i>
                            {/* <p id="iconText">Bootstrap</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-gimp-plain" title="GIMP" id="skill"></i>
                            {/* <p id="iconText">Bootstrap</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
