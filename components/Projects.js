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
        alt: "Heavy Weather project folder",
        subAlt: "Heavy Weather thumbnail, stormy weather with spotify.",
        id: 0
      },
      {
        src: "Code Kitchen.png",
        name: "Code Kitchen",
        gif: "Img",
        thumb: "kitchenthumb.png",
        text: "Review and like recipes in this Full Stack React Express app.",
        github: "https://github.com/JackSkiles/code-kitchen",
        link: "https://code-kitchen.herokuapp.com/",
        hide: "folder-content-hide",
        alt: "Code Kitchen project folder",
        subAlt: "Code Kitchen Thumbnail.",
        id: 1
      },
      {
        src: "Bthree.png",
        name: "BThree",
        gif: "Img",
        thumb: "Bthreethumb.png",
        text: "Full Stack group React Project for sending emergency texts.",
        github: "https://github.com/JackSkiles/BThree",
        link: "https://bthree.herokuapp.com/",
        hide: "folder-content-hide",
        alt: "BThree project folder",
        subAlt: "BThree Thumbnail.",
        id: 2
      },
      {
        src: "Scene-it-redux.png",
        name: "Scene-it-redux",
        gif: "Img",
        thumb: "moviethumb.png",
        text: "Search movies from an api and add them to your list using State and Redux.",
        github: "https://github.com/JackSkiles/electric-boogaloo",
        link: "https://master--golden-nasturtium-7d75fc.netlify.app/",
        hide: "folder-content-hide",
        subAlt: "scene it project folder",
        alt: "scene it thumbnail",
        id: 3
      },
      {
        src: "kana keyboard.png",
        name: "kana keyboard",
        gif: "Img",
        thumb: "kanathumb.png",
        text: "Type text to be converted to Japanese Kana symbols.",
        github: "https://github.com/JackSkiles/japaneseKeyboard",
        link: "https://relaxed-booth-1bc501.netlify.app/",
        hide: "folder-content-hide",
        alt: "Kana Keyboard project folder",
        subAlt: "Kana Keyboard thumbnail, Japanese Hiragana",
        id: 4
      },
      {
        src: "Kuro Coffee.png",
        name: "Kuro Coffee",
        gif: "Img",
        thumb: "kurothumb.png",
        text: "Website created for a local startup",
        github: "https://github.com/JackSkiles/kuro",
        link: "https://kurocoffeebrewers.com/",
        hide: "folder-content-hide",
        subAlt: "Kuro Coffee project folder",
        alt: "Kuro Coffee thumbnail, coffee drippers.",
        id: 5
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
        subAlt: "Tic Tac Toe project folder",
        alt: "Tic Tac Toe thumbnail, tic tac toe game board",
        id: 6
      },
      {
        src: "Pong.png",
        name: "Pong",
        gif: "Img",
        thumb: "pongthumb.png",
        text: "Simple Pong game made in Python.",
        github: "https://github.com/JackSkiles/pong",
        link: "https://youtu.be/XUNmnWlVeR4",
        hide: "folder-content-hide",
        subAlt: "Pong project folder",
        alt: "Pong thumbnail, pong game in progress",
        id: 7
      },
      {
        src: "Building Escape.png",
        name: "Building Escape",
        gif: "Img",
        thumb: "buildingthumb.png",
        text: "Puzzle game made using Unreal Engine and C++.",
        github: "https://github.com/JackSkiles/buildingEscape",
        link: "https://www.youtube.com/watch?v=MEEnwg4MEWU",
        hide: "folder-content-hide",
        subAlt: "Building Escape project folder",
        alt: "Building Escape thumbnail, unreal engine game.",
        id: 8
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
        alt: "Snowboarding project folder",
        subAlt: "Snowboard game thumbnail, unity game.",
        id: 9
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
        subAlt: "Delivery Driver project folder",
        alt: "Delivery Driver thumbnail, unity game.",
        id: 10
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
        text: "Custom logo and website for Kuro Coffee Brewers",
        github: "https://kurocoffeebrewers.com/",
        link: "https://www.behance.net/gallery/145179429/Kuro-Coffee-Brewers",
        hide: "folder-content-hide",
        link1: "Behance",
        link2: "Website",
        subAlt: "Kuro Designs project folder",
        alt: "Kuro Designs thumbnail, coffee drippers.",
        id: 0
      },
      {
        src: "poplar springs.png",
        name: "Poplar Springs",
        gif: "Img",
        thumb: "poplarthumb.png",
        text: "Custom logo and website for Poplar Springs Web Development",
        github: "https://poplarspringsweb.com/",
        link: "https://www.behance.net/gallery/145220967/Poplar-Springs-Web-Development?/",
        hide: "folder-content-hide",
        link1: "Behance",
        link2: "Website",
        subAlt: "Poplar Springs Web project folder.",
        alt: "Poplar Springs Website thumbnail.",
        id: 1
      },
      {
        src: "Falcon Design.png",
        name: "Falcon Design",
        gif: "Img",
        thumb: "falconthumb.png",
        text: "Custom logo and website for Falcon Design Consultants in Atlanta Ga",
        github: "https://falcondesignconsultants.com/",
        link: "https://xd.adobe.com/view/e9205a43-1566-411d-81d2-5652521a62a1-bc73/?fullscreen",
        hide: "folder-content-hide",
        link1: "Adobe XD",
        link2: "Website",
        subAlt: "Falcon Design project folder",
        alt: "Falcon Design Website thumbnail.",
        id: 2
      }
    ]
  )
  const [searchDevProjects, setSearchDev] = useState();
  const [searchDesignProjects, setSearchDesign] = useState();

  const [searchText, setText] = useState('');
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
      e.target.src = "smallFolderGifFast.gif";
      setTimeout(function () {
        e.target.src = `heavy weatheropen.png`;
        e.target.name = `${name}open`;
        console.log(name)
        setProjects(newArray);
        // e.target.name = "open";
        // setOpen("folder14.png");
      }, 320);
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
      e.target.src = "smallFolderGifFast.gif";
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

  const formSearch = (e) => {
    e.preventDefault();
    const newSearchArray = [];
    const testText = RegExp(searchText, "i");
    devProjects.map(project => {
      console.log(project.name)
      if (testText.exec(project.name) !== null) {
        newSearchArray.push(project)
        console.log("Match")
      }
      else {
        console.log("No matches");
      }
    })
    if(e.target.name == "dev")
    {
      setSearchDev(newSearchArray);
    }
    console.log(searchDevProjects);
    useEffect(e.target.name);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setText(value);
  }

  const useEffect = () => {
    console.log("hello")
  }

  return (
    <div className="projects-main" style={{ backgroundImage: "url(/background.png)" }}>
      <div className="about-column">
        <div className="about-box">
          <p className="about-text" id="about">
            I am a software engineer and designer from Chattanooga, TN.
            I am passionate about  software development, website design and graphic design,
            and am always excited to discover new techniques and technologies to further my craft.
            This website is a culmination of many of the skills that I have acquired.
            I prototyped and built the design of the site in Adobe XD, built the graphics and background in Illustrator and coded the site using React.
            I hope you enjoy checking it out!  Please feel free to contact me for any additional information!
          </p>
        </div>
      </div>
      <div className="outerProjectsBox" >
        <div className="ProjectsBox">
          <div className="projectHeaderBox">
            <div className='projectsIcon'></div>
            <h3 className="projectHeader" id="devProjects">Development Projects</h3>
          </div>
          <div className="projectsMain">
            <form onSubmit={formSearch} class="search-div" name="dev">
              <input class="search-Bar" defaultValue={"Project search using Regular Expressions"} value={searchText} onChange={handleChange}></input>
              <button type="Submit">Search</button>
            </form>
            <div className="devProjectsRow">
              {/* maps through devProjects state to list out each project with data intact */}
              {devProjects.map((item) => {
                return (
                  <div className="project" key="1">
                    {/* Gives img tag values related to the project, or item, being mapped over */}
                    <img tabIndex="0" src={item.src} className={`projectImg`} name={item.name} onClick={onClick} gif="Gif" id={item.id} alt={item.alt}></img>
                    <div className={item.hide} name={item.id} id="folder-box">
                      <div className="inner-folder-left">
                        <img className="thumbnail" src={item.thumb} alt={item.subAlt}></img>
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
            <h3 className="projectHeader" id="designProjects">Design and UI Projects</h3>
          </div>
          <div className="projectsMain">
            <div className="designProjectsRow">
              {/* maps through devProjects state to list out each project with data intact */}
              {designProjects.map((item) => {
                return (
                  <div className="project" key="2">
                    {/* Gives img tag values related to the project, or item, being mapped over */}
                    <img tabIndex="0" src={item.src} className={`projectImg`} name={item.name} onClick={onClick2} gif="Gif" id={item.id} alt={item.alt}></img>
                    <div className={item.hide} name={item.id} id="folder-box">
                      <div className="inner-folder-left">
                        <img className="thumbnail" src={item.thumb} alt={item.subAlt}></img>
                      </div>
                      <div className="inner-folder">
                        <h3 className="folder-header">{item.name}</h3>
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
