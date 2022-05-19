import React from 'react'

export default function Info() {
    return (
        <div>
            <div className="outerInfoBox">
                <div className="infoBox">
                    <div className="infoHeaderBox">
                        <div className='icon-div1-front'></div>
                        <h3 className="projectHeader">Skills and Technologies</h3>
                    </div>
                    <div className="icon-container">
                        <div className="icon2">
                            <i class="devicon-visualstudio-plain" id="skill"></i>
                            {/* <p id="iconText">Visual Studios</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-postgresql-plain" id="skill"></i>
                            {/* <p id="iconText">PostgreSQL</p> */}
                        </div>
                        <div className="icon2">
                            <i class="devicon-sequelize-plain" id="skill"></i>
                            {/* <p id="iconText">Sequelize</p> */}
                        </div>
                        <div className="icon2">
                            <i class="devicon-nodejs-plain" id="skill"></i>
                            {/* <p id="iconText">Node.js</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-javascript-plain" id="skill"></i>
                            {/* <p id="iconText">JavaScript</p> */}
                        </div>
                        <div className="icon2">
                            <i className="devicon-html5-plain" id="skill"></i>
                            {/* <p id="iconText">HTML5</p> */}
                        </div>
                        <div class="icon2">
                            <i class="devicon-git-plain" id="skill"></i>
                            {/* <p id="iconText">Git</p> */}
                        </div>
                        <div class="icon2">
                            <i class="devicon-bootstrap-plain" id="skill"></i>
                            {/* <p id="iconText">Bootstrap</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
