import React from 'react'
import { useState, useEffect } from 'react';
// import backgroundImg from "./public/background.png"

export default function About() {
  // array state for development project storage
  const [devProjects, setProjects] = useState(
    [
      {
        src: "Heavy Weather.png",
        name: "Heavy Weather",
        gif: "Img",
        thumb: "heavyweatherthumb.png",
        text: "Change weather with music",
        github: "https://github.com/JackSkiles/weatherJams",
        link: "https://heavy-weather.herokuapp.com/",
        hide: "folder-content-hide",
        id: 0
      },
      {
        src: "BThree.png",
        name: "BThree",
        gif: "Img",
        thumb: "heavyweatherthumb.png",
        text: "Create account and use emergency button to send text to contacts",
        github: "https://github.com/JackSkiles/BThree",
        link: "https://bthree.herokuapp.com/",
        hide: "folder-content-hide",
        id: 1
      },
      {
        src: "kana keyboard.png",
        name: "kana keyboard",
        gif: "Img",
        thumb: "heavyweatherthumb.png",
        text: "Type text to be converted to Japanese Kana",
        github: "https://github.com/JackSkiles/japaneseKeyboard",
        link: "https://relaxed-booth-1bc501.netlify.app/",
        hide: "folder-content-hide",
        id: 2
      },
      {
        src: "Tic.png",
        name: "Tic",
        gif: "Img",
        thumb: "heavyweatherthumb.png",
        text: "Play a game of tic tac toe",
        github: "https://github.com/JackSkiles/ticTacToe",
        link: "https://heavy-weather.herokuapp.com/",
        hide: "folder-content-hide",
        id: 3
      },
      {
        src: "Sceneit.png",
        name: "Sceneit",
        gif: "Img",
        thumb: "heavyweatherthumb.png",
        text: "Search movies and add them to your favorites",
        github: "https://github.com/JackSkiles/scene-it-starter",
        link: "https://affectionate-lumiere-0972d7.netlify.app/",
        hide: "folder-content-hide",
        id: 4
      }
    ]
  )
  // const [open, setOpen] = useState("");
  const [open, setOpen] = useState("folder-content");

  // Click event for each project that will open folder by playing a Gif animation
  const onClick = (e) => {
    e.preventDefault();

    // console.log(e.target.src.length);
    // creates new name variable to use in function, based on target project's name value
    const name = e.target.name;
    // creates int for name length to use in if logic
    const length = name.length;
    // console.log(src.slice(length - 4, length));
    // if src variable at index point length - 4 to length = open, run function.

    if (name.slice(length - 4, length) != "open") {
      let newArray = [...devProjects]
      newArray[e.target.id] = { ...newArray[e.target.id], hide: "folder-content" }
      console.log("hello");
      // Sets target projects source value to Gif to allow animation to run. Timer is set to length of Gif to set source back to image.
      e.target.src = "Gif.gif";
      setTimeout(function () {
        e.target.src = `${name}open.png`;
        e.target.name = `${name}open`;
        console.log(name)
        setProjects(newArray);
        // e.target.name = "open";
        // setOpen("folder14.png");
      }, 230);
      // sets className to change img sizing when folder is open
      e.target.className = "projectGif"
    }
    // acts the same as previous if statement, only in reverse
    else if (name.slice(length - 4, length) == "open") {
      // gets the index of current element.
      let newArray = [...devProjects]
      // Changes hide value to hidden in project, to hide folder contents when closed.
      newArray[e.target.id] = { ...newArray[e.target.id], hide: "folder-content-hide" }
      setProjects(newArray);

      console.log(name)
      // creates newName variable that takes just the name of target project, without the text open, to reset it to closed.
      const newName = name.slice(0, length - 4);
      console.log(newName);
      console.log("hello");
      e.target.src = `${newName}.png`;
      e.target.name = `${newName}`;
      // e.target.name = "";
      // setOpen("HeavyWeather.png");
      e.target.className = "projectImg"
      setOpen(`folder-content-hide${e.target.id}`);
    }
  }
  return (
    <div className="projects-main" style={{ backgroundImage: "url(/background.png)" }}>
      <div className="about-column">
        <div className="about-box">
          <p className="about-text">
            I am a software engineer and designer from Chattanooga, TN. I have been working on websites, software and graphic design over the past 3 years. Since then I have learned many new technologies, languages and techniques to further the craft. I had a lot of fun making this site and the projects presented, so I hope you enjoy!
          </p>
        </div>
      </div>
      <div className="outerProjectsBox" >
        <div className="ProjectsBox">
          <div className="projectHeaderBox">
            <div className='projectsIcon'></div>
            <h3 className="projectHeader">Development Projects</h3>
          </div>
          <div className="projectsMain">
            <div className="projectsRow">
              {/* maps through devProjects state to list out each project with data intact */}
              {devProjects.map((item) => {
                return (
                  <div className="project" key="mainDiv">
                    {/* Gives img tag values related to the project, or item, being mapped over */}
                    <img src={item.src} className={`projectImg`} name={item.name} onClick={onClick} gif="Gif" id={item.id}></img>
                    <div className={item.hide} name={item.id} id="folder-box">
                      <div className="inner-folder-left">
                        <img className="thumbnail" src={item.thumb}></img>
                      </div>
                      <div className="inner-folder">
                        <h2 className="folder-header">{item.name}</h2>
                        <p className="folder-text">{item.text}</p>
                        <div className="text-box">
                          <a href={item.link} className="folder-link" target="blank" >Demo</a>
                          <a href={item.github} className="folder-link" target="blank">Github link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* <div className="project">
                <img src={open} className={`project${gif}`} onClick={onClick}></img>
              </div>
              <div className="project">
                <img src="BThree.png" className="projectImg"></img>
              </div>
              <div className="project">
                <img src="kanakeyboard.png" className="projectImg"></img>
              </div> */}
            {/* 
            <div className="projectsRow">
              <div className="project">
                <img src="Tic.png" className="projectImg"></img>
              </div>
              <div className="project">
                <img src="Sceneit.png" className="projectImg"></img>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="outerProjectsBox" id="box2">
        <div className="ProjectsBox">
          <div className="projectHeaderBox">
            <div className='projectsIcon'></div>
            <h3 className="projectHeader">Design Projects</h3>
          </div>
          <div className="projectsMain">
          <div className="projectsRow">
              {/* maps through devProjects state to list out each project with data intact */}
              {devProjects.map((item) => {
                return (
                  <div className="project" key="mainDiv2">
                    {/* Gives img tag values related to the project, or item, being mapped over */}
                    <img src={item.src} className={`projectImg`} name={item.name} onClick={onClick} gif="Gif" id={item.id}></img>
                    <div className={item.hide} name={item.id} id="folder-box">
                      <div className="inner-folder-left">
                        <img className="thumbnail" src={item.thumb}></img>
                      </div>
                      <div className="inner-folder">
                        <h2 className="folder-header">{item.name}</h2>
                        <p className="folder-text">{item.text}</p>
                        <div className="text-box">
                          <a href={item.link} className="folder-link" target="blank" >Demo</a>
                          <a href={item.github} className="folder-link" target="blank">Github link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
