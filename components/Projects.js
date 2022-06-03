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
        text: "Link your spotify and change the playlists using forecasts.",
        github: "https://github.com/JackSkiles/weatherJams",
        link: "https://heavy-weather.herokuapp.com/",
        hide: "folder-content-hide",
        id: 0
      },
      // {
      //   src: "BThree.png",
      //   name: "BThree",
      //   gif: "Img",
      //   thumb: "heavyweatherthumb.png",
      //   text: "Create account and use emergency button to send text to contacts",
      //   github: "https://github.com/JackSkiles/BThree",
      //   link: "https://bthree.herokuapp.com/",
      //   hide: "folder-content-hide",
      //   id: 1
      // },
      {
        src: "kana keyboard.png",
        name: "kana keyboard",
        gif: "Img",
        thumb: "kanathumb.png",
        text: "Type text to be converted to Japanese Kana symbols.",
        github: "https://github.com/JackSkiles/japaneseKeyboard",
        link: "https://relaxed-booth-1bc501.netlify.app/",
        hide: "folder-content-hide",
        id: 1
      },
      {
        src: "Tic-Tac-Toe.png",
        name: "Tic-Tac-Toe",
        gif: "Img",
        thumb: "tictactoethumb.png",
        text: "Play a game of tic-tac-toe against an AI.",
        github: "https://github.com/JackSkiles/ticTacToe",
        link: "https://github.com/JackSkiles/ticTacToe",
        hide: "folder-content-hide",
        id: 2
      },
      {
        src: "Scene-it.png",
        name: "Scene-it",
        gif: "Img",
        thumb: "sceneitthumb.png",
        text: "Search movies from an api and add them to your favorites.",
        github: "https://github.com/JackSkiles/scene-it-starter",
        link: "https://affectionate-lumiere-0972d7.netlify.app/",
        hide: "folder-content-hide",
        id: 3
      },
      {
        src: "Kuro Coffee.png",
        name: "Kuro Coffee",
        gif: "Img",
        thumb: "kurothumb.png",
        text: "Website I created for my coffee brewing startup.",
        github: "https://github.com/JackSkiles/kuro",
        link: "https://kurocoffeebrewers.com/",
        hide: "folder-content-hide",
        id: 4
      },
      {
        src: "Pong.png",
        name: "Pong",
        gif: "Img",
        thumb: "pongthumb.png",
        text: "Simple pong game made in Python.",
        github: "https://github.com/JackSkiles/pong",
        link: "https://youtu.be/XUNmnWlVeR4",
        hide: "folder-content-hide",
        id: 5
      },
      {
        src: "Building Escape.png",
        name: "Building Escape",
        gif: "Img",
        thumb: "buildingthumb.png",
        text: "Simple puzzle game made using Unreal Engine and C++.",
        github: "https://github.com/JackSkiles/buildingEscape",
        link: "https://www.youtube.com/watch?v=MEEnwg4MEWU",
        hide: "folder-content-hide",
        id: 6
      },
      {
        src: "Snowboard.png",
        name: "Snowboard",
        gif: "Img",
        thumb: "snowboardthumb.png",
        text: "Physics based snowboard game built with Unity and C#",
        github: "https://github.com/JackSkiles/snowboarder",
        link: "https://youtu.be/mbXih7ta9U0",
        hide: "folder-content-hide",
        id: 7
      },
      {
        src: "Delivery Driver.png",
        name: "Delivery Driver",
        gif: "Img",
        thumb: "deliverythumb.png",
        text: "Pick up and deliver packages in this game built with Unity and C#",
        github: "https://github.com/JackSkiles/DeliveryDriver",
        link: "https://youtu.be/5ydWsND0wZ8",
        hide: "folder-content-hide",
        id: 8
      }
    ]
  )
  const [designProjects, setDesignProjects] = useState(
    [
      {
        src: "Kuro Designs.png",
        name: "Kuro Designs",
        gif: "Img",
        thumb: "kurothumb.png",
        text: "Designs I made for the site Kuro Coffee Brewers site.",
        github: "https://kurocoffeebrewers.com/",
        link: "https://www.behance.net/gallery/145179429/Kuro-Coffee-Brewers",
        hide: "folder-content-hide",
        link1: "Behance",
        link2: "Website",
        id: 0
      },
      {
        src: "poplar springs.png",
        name: "Poplar Springs",
        gif: "Img",
        thumb: "poplarthumb.png",
        text: "Logo and site I made for my web dev business, Poplar Springs Web.",
        github: "https://poplarspringsweb.com/",
        link: "https://www.behance.net/gallery/145220967/Poplar-Springs-Web-Development?/",
        hide: "folder-content-hide",
        link1: "Behance",
        link2: "Website",
        id: 1
      },
      {
        src: "Falcon Design.png",
        name: "Falcon Design",
        gif: "Img",
        thumb: "falconthumb.png",
        text: "Website I made for Falcon Design Consultants.",
        github: "https://falcondesignconsultants.com/",
        link: "https://xd.adobe.com/view/e9205a43-1566-411d-81d2-5652521a62a1-bc73/?fullscreen",
        hide: "folder-content-hide",
        link1: "Adobe XD",
        link2: "Website",
        id: 2
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
      e.target.src = "FolderGif7.gif";
      setTimeout(function () {
        e.target.src = `heavy weatheropen.png`;
        e.target.name = `${name}open`;
        console.log(name)
        setProjects(newArray);
        // e.target.name = "open";
        // setOpen("folder14.png");
      }, 450);
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
  const onClick2 = (e) => {
    e.preventDefault();

    // console.log(e.target.src.length);
    // creates new name variable to use in function, based on target project's name value
    const name = e.target.name;
    // creates int for name length to use in if logic
    const length = name.length;
    // console.log(src.slice(length - 4, length));
    // if src variable at index point length - 4 to length = open, run function.

    if (name.slice(length - 4, length) != "open") {
      let newArray = [...designProjects]
      newArray[e.target.id] = { ...newArray[e.target.id], hide: "folder-content" }
      console.log("hello");
      // Sets target projects source value to Gif to allow animation to run. Timer is set to length of Gif to set source back to image.
      e.target.src = "FolderGif7.gif";
      setTimeout(function () {
        e.target.src = `heavy weatheropen.png`;
        e.target.name = `${name}open`;
        console.log(name)
        setDesignProjects(newArray);
        // e.target.name = "open";
        // setOpen("folder14.png");
      }, 450);
      // sets className to change img sizing when folder is open
      e.target.className = "projectGif"
    }
    // acts the same as previous if statement, only in reverse
    else if (name.slice(length - 4, length) == "open") {
      // gets the index of current element.
      let newArray = [...designProjects]
      // Changes hide value to hidden in project, to hide folder contents when closed.
      newArray[e.target.id] = { ...newArray[e.target.id], hide: "folder-content-hide" }
      setDesignProjects(newArray);

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
                  <div className="project" key="1">
                    {/* Gives img tag values related to the project, or item, being mapped over */}
                    <img src={item.src} className={`projectImg`} name={item.name} onClick={onClick} gif="Gif" id={item.id}></img>
                    <div className={item.hide} name={item.id} id="folder-box">
                      <div className="inner-folder-left">
                        <img className="thumbnail" src={item.thumb}></img>
                      </div>
                      <div className="inner-folder">
                        <h3 className="folder-header">{item.name}</h3>
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
            <h3 className="projectHeader">Design and UI Projects</h3>
          </div>
          <div className="projectsMain">
          <div className="projectsRow">
              {/* maps through devProjects state to list out each project with data intact */}
              {designProjects.map((item) => {
                return (
                  <div className="project" key="2">
                    {/* Gives img tag values related to the project, or item, being mapped over */}
                    <img src={item.src} className={`projectImg`} name={item.name} onClick={onClick2} gif="Gif" id={item.id}></img>
                    <div className={item.hide} name={item.id} id="folder-box">
                      <div className="inner-folder-left">
                        <img className="thumbnail" src={item.thumb}></img>
                      </div>
                      <div className="inner-folder">
                        <h2 className="folder-header">{item.name}</h2>
                        <p className="folder-text">{item.text}</p>
                        <div className="text-box">
                          <a href={item.link} className="folder-link" target="blank" >{item.link1}</a>
                          <a href={item.github} className="folder-link" target="blank">{item.link2}</a>
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
