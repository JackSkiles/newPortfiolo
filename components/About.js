import React from 'react'
import { useState, useEffect } from 'react';
// import backgroundImg from "./public/background.png"

export default function About() {
  const [open, setOpen] = useState("HeavyWeather.png");
  const [gif, setGif] = useState("Img");


  const onClick = () => {
    // console.log(hide);
    // console.log(mobileMenuButton)
    if (open === "HeavyWeather.png") {
      console.log("hello");
      setOpen("Gif.gif");
      setTimeout(function () {
        setOpen("folder14.png");
      }, 270);
      setGif("Gif");
    }
    else if (open === "folder14.png") {

      console.log("hello");
      setOpen("HeavyWeather.png");
      setGif("Img");
    }
  }
  return (
    <div className="about-main" style={{ backgroundImage: "url(/background.png)" }}>
      <div className="about-column">
        <div className="about-box">
          <p className="about-text">
            I'm a software engineer and designer from Chattanooga, TN. I have been working on websites, software and graphic design over the past 3 years. Since then I have learned many new technologies, languages and techniques to further the craft. I had a lot of fun making this site and the projects presented, so I hope you enjoy!
          </p>
        </div>

      </div>
      <div className="outerProjectsBox">
        <div className="ProjectsBox">
          <div className="projectHeaderBox">
            <div className='icon-div1-front'></div>
            <h3 className="projectHeader">Development Projects</h3>
          </div>
          <div className="projectsMain">
            <div className="projectsRow">
              <div className="project">
                <img src={open} className={`project${gif}`} onClick={onClick}></img>
                {/* <img src="BThree.png" className="projectImg"></img> */}
                {/* <video width="320" height="240" controls><source src="frame2.mov"></source></video> */}
              </div>
              <div className="project">
                <img src="BThree.png" className="projectImg"></img>
              </div>
              <div className="project">
                <img src="kanakeyboard.png" className="projectImg"></img>
              </div>
            </div>
            <div className="projectsRow">
              <div className="project">
                <img src="Tic.png" className="projectImg"></img>
              </div>
              <div className="project">
                <img src="Sceneit.png" className="projectImg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outerProjectsBox">
        <div className="ProjectsBox">
          <div className="projectHeaderBox">
            <div className='icon-div1-front'></div>
            <h3 className="projectHeader">Design Projects</h3>
          </div>
          <div className="projectsMain">
            <div className="projectsRow">
              <div className="project">
                <img src="heavyWeather.png" className="projectImg"></img>
              </div>
              <div className="project">
                <img src="BThree.png" className="projectImg"></img>
              </div>
              <div className="project">
                <img src="BThree.png" className="projectImg"></img>
              </div>
            </div>
            <div className="projectsRow">
              <div className="project">
                <img src="heavyWeather.png" className="projectImg"></img>
              </div>
              <div className="project">
                <img src="BThree.png" className="projectImg"></img>
              </div>
              <div className="project">
                <img src="BThree.png" className="projectImg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
