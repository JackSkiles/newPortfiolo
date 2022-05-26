(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 355:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "header_container__W0aRT",
	"headerLeft": "header_headerLeft__unu2i",
	"headerRight": "header_headerRight__QMno7",
	"squareIcon": "header_squareIcon__cwAnL",
	"title": "header_title__u04qZ",
	"menuGroup": "header_menuGroup__8TJ3p",
	"menuGroup2": "header_menuGroup2__y9vkB",
	"menuItem": "header_menuItem__XXNUI",
	"headerRightMobile": "header_headerRightMobile__a3Vy0",
	"mobileMenuButton": "header_mobileMenuButton__wn5w_",
	"mobileXShowLeft": "header_mobileXShowLeft__7LWsV",
	"mobileXShowRight": "header_mobileXShowRight__RHuoI",
	"mobileMenuButtonHide": "header_mobileMenuButtonHide__c9U_X",
	"headerRightMobileHide": "header_headerRightMobileHide__POarB"
};


/***/ }),

/***/ 757:
/***/ ((module) => {

// Exports
module.exports = {
	"contactdiv": "topbar_contactdiv__lAjb0",
	"topbarmain": "topbar_topbarmain__w6nkc",
	"topbarleft": "topbar_topbarleft__tHOsQ",
	"topbarright1": "topbar_topbarright1__uXFf5",
	"topbarright2": "topbar_topbarright2__IicPc",
	"topimg2": "topbar_topimg2__pPCJI",
	"seperatordiv": "topbar_seperatordiv__jJWB0",
	"contactdiv2": "topbar_contactdiv2__VfaVp"
};


/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./styles/topbar.module.css
var topbar_module = __webpack_require__(757);
var topbar_module_default = /*#__PURE__*/__webpack_require__.n(topbar_module);
;// CONCATENATED MODULE: ./components/TopBar.js



const TopBar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (topbar_module_default()).topbarmain,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (topbar_module_default()).topbarleft
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (topbar_module_default()).topbarright1,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (topbar_module_default()).contactdiv,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: (topbar_module_default()).topimg,
                                    src: "Icon ionic-ios-mail.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "JackSkiles71@gmail.com"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (topbar_module_default()).contactdiv,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: (topbar_module_default()).topimg,
                                    src: "Icon awesome-phone-alt.png"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "JackSkiles71@gmail.com"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (topbar_module_default()).seperatordiv
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (topbar_module_default()).topbarright2,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (topbar_module_default()).contactdiv,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: (topbar_module_default()).topimg2,
                                src: "Icon awesome-linkedin.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (topbar_module_default()).contactdiv,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: (topbar_module_default()).topimg2,
                                src: "Icon awesome-github.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (topbar_module_default()).contactdiv,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: (topbar_module_default()).topimg2,
                                src: "Icon ionic-md-paper.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (topbar_module_default()).contactdiv2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: (topbar_module_default()).topimg2mobile,
                                src: "mailmobile.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (topbar_module_default()).contactdiv2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: (topbar_module_default()).topimg2mobile,
                                src: "phonemobile.png"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_TopBar = (TopBar);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./styles/header.module.css
var header_module = __webpack_require__(355);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./components/Header.js





function Header(props) {
    const { 0: hide , 1: setHide  } = (0,external_react_.useState)("Hide");
    // click event to hide or open mobile menu.
    const onClick = ()=>{
        console.log(hide);
        // console.log(mobileMenuButton)
        // if mobile menu is hidden, this will remove that text to set it to shown
        if (hide === "Hide") {
            setHide("");
        } else if (hide === "") {
            setHide("Hide");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (header_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (header_module_default()).headerLeft,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (header_module_default()).title,
                    children: "JACK SKILES"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (header_module_default()).headerRight,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (header_module_default()).menuGroup,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "Rectangle 17.png",
                                className: (header_module_default()).squareIcon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                className: (header_module_default()).menuItem,
                                children: "Development Projects"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (header_module_default()).menuGroup,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "Rectangle 17.png",
                                className: (header_module_default()).squareIcon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                className: (header_module_default()).menuItem,
                                children: "Graphic Design Projects"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (header_module_default()).menuGroup,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "Rectangle 17.png",
                                className: (header_module_default()).squareIcon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                className: (header_module_default()).menuItem,
                                children: "Other Projects"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (header_module_default()).menuGroup,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "Rectangle 17.png",
                                className: (header_module_default()).squareIcon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                className: (header_module_default()).menuItem,
                                children: "About Me"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `mobileMenuButton${hide}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: onClick,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `mobileX${hide}Left`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `mobileX${hide}Center`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `mobileX${hide}Right`
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `headerRightMobile${hide}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "outerHeaderRightMobile",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (header_module_default()).menuGroup2,
                            id: "top-div",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "Rectangle 17.png",
                                    className: (header_module_default()).squareIcon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "",
                                    className: (header_module_default()).menuItem,
                                    children: "Development Projects"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (header_module_default()).menuGroup2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "Rectangle 17.png",
                                    className: (header_module_default()).squareIcon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "",
                                    className: (header_module_default()).menuItem,
                                    children: "Graphic Design Projects"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (header_module_default()).menuGroup2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "Rectangle 17.png",
                                    className: (header_module_default()).squareIcon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "",
                                    className: (header_module_default()).menuItem,
                                    children: "Other Projects"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (header_module_default()).menuGroup2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "Rectangle 17.png",
                                    className: (header_module_default()).squareIcon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "",
                                    className: (header_module_default()).menuItem,
                                    children: "About Me"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Hero.js



function Hero() {
    // state to set right header img src
    const { 0: portrait , 1: setImg  } = (0,external_react_.useState)("Mask Group 4.png");
    const { 0: mobilePortrait , 1: setMobile  } = (0,external_react_.useState)("profilepic.png");
    // states to let list item position in rotation. blank indicates top, front indicates center, and bottom indicates bottom
    const { 0: list1 , 1: setList1  } = (0,external_react_.useState)("1");
    const { 0: list2 , 1: setList2  } = (0,external_react_.useState)("2-front");
    const { 0: list3 , 1: setList3  } = (0,external_react_.useState)("3-bottom");
    const { 0: classN , 1: setClass  } = (0,external_react_.useState)("portrait");
    // useEffect to change list positions
    (0,external_react_.useEffect)(()=>{
        // sets a timer that will run every 2.5 seconds. This will shift the positions of the list items by seting states to new classes, giving an animated effect.
        const interval = setInterval(()=>{
            if (list1 == "1") {
                setList1("1-front");
                setList2("2-bottom");
                setList3("3");
            } else if (list1 == "1-front") {
                setList1("1-bottom");
                setList2("2");
                setList3("3-front");
            } else if (list1 == "1-bottom") {
                setList1("1");
                setList2("2-front");
                setList3("3-bottom");
            } else {
                console.log("issue");
            }
        // console.log('This will run every second!');
        }, 2500);
        return ()=>clearInterval(interval)
        ;
    });
    // Mouse enter event to check if mouse has entered portrait image. This allows swapping between illustrator image and organic photo.
    const handleMouseEnter = ()=>{
        // console.log("hello");
        setImg("profilepic.png");
    // setClass("portrait2");
    };
    const handleMouseLeave = ()=>{
        setImg("Mask Group 4.png");
    // setClass("portrait");
    };
    const onClick = ()=>{
        if (mobilePortrait == "profilepic.png") {
            setMobile("Mask Group 4.png");
        } else {
            setMobile("profilepic.png");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hero-Main",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hero-inner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "hero-left",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `list-div${list1}`,
                                        id: "listDiv",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `icon-div${list1}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: `list-header${list1}`,
                                                children: "SOFTWARE ENGINEER"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `list-div${list2}`,
                                        id: "listDiv",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `icon-div${list2}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: `list-header${list2}`,
                                                children: "GRAPHIC DESIGNER"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `list-div${list3}`,
                                        id: "listDiv",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `icon-div${list3}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: `list-header${list3}`,
                                                children: "WEB DEVELOPER"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hero-right",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hero-img-div",
                                    onMouseEnter: handleMouseEnter,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: portrait,
                                        className: classN
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hero-inner-mobile",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hero-left-mobile",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "div-box-mobile",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `list-div${list1}`,
                                            id: "listDivMobile",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `icon-div${list1}`,
                                                    id: "iconDivMobile"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: `list-header${list1}`,
                                                    id: "listHeaderMobile",
                                                    children: "SOFTWARE ENGINEER"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `list-div${list2}`,
                                            id: "listDivMobile",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `icon-div${list2}`,
                                                    id: "iconDivMobile"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: `list-header${list2}`,
                                                    id: "listHeaderMobile",
                                                    children: "GRAPHIC DESIGNER"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `list-div${list3}`,
                                            id: "listDivMobile",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `icon-div${list3}`,
                                                    id: "iconDivMobile"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: `list-header${list3}`,
                                                    id: "listHeaderMobile",
                                                    children: "WEB DEVELOPER"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hero-right-mobile",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hero-img-div",
                                    onClick: onClick,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: mobilePortrait,
                                        className: classN
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "seperatorDiv"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Projects.js



// import backgroundImg from "./public/background.png"
function About() {
    // array state for development project storage
    const { 0: devProjects , 1: setProjects  } = (0,external_react_.useState)([
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
    ]);
    // const [open, setOpen] = useState("");
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)("folder-content");
    // Click event for each project that will open folder by playing a Gif animation
    const onClick = (e)=>{
        e.preventDefault();
        // console.log(e.target.src.length);
        // creates new name variable to use in function, based on target project's name value
        const name = e.target.name;
        // creates int for name length to use in if logic
        const length = name.length;
        // console.log(src.slice(length - 4, length));
        // if src variable at index point length - 4 to length = open, run function.
        if (name.slice(length - 4, length) != "open") {
            let newArray = [
                ...devProjects
            ];
            newArray[e.target.id] = {
                ...newArray[e.target.id],
                hide: "folder-content"
            };
            console.log("hello");
            // Sets target projects source value to Gif to allow animation to run. Timer is set to length of Gif to set source back to image.
            e.target.src = "Gif.gif";
            setTimeout(function() {
                e.target.src = `${name}open.png`;
                e.target.name = `${name}open`;
                console.log(name);
                setProjects(newArray);
            // e.target.name = "open";
            // setOpen("folder14.png");
            }, 230);
            // sets className to change img sizing when folder is open
            e.target.className = "projectGif";
        } else if (name.slice(length - 4, length) == "open") {
            // gets the index of current element.
            let newArray = [
                ...devProjects
            ];
            // Changes hide value to hidden in project, to hide folder contents when closed.
            newArray[e.target.id] = {
                ...newArray[e.target.id],
                hide: "folder-content-hide"
            };
            setProjects(newArray);
            console.log(name);
            // creates newName variable that takes just the name of target project, without the text open, to reset it to closed.
            const newName = name.slice(0, length - 4);
            console.log(newName);
            console.log("hello");
            e.target.src = `${newName}.png`;
            e.target.name = `${newName}`;
            // e.target.name = "";
            // setOpen("HeavyWeather.png");
            e.target.className = "projectImg";
            setOpen(`folder-content-hide${e.target.id}`);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "projects-main",
        style: {
            backgroundImage: "url(/background.png)"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "about-column",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "about-box",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "about-text",
                        children: "I am a software engineer and designer from Chattanooga, TN. I have been working on websites, software and graphic design over the past 3 years. Since then I have learned many new technologies, languages and techniques to further the craft. I had a lot of fun making this site and the projects presented, so I hope you enjoy!"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "outerProjectsBox",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ProjectsBox",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "projectHeaderBox",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "projectsIcon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "projectHeader",
                                    children: "Development Projects"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "projectsMain",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "projectsRow",
                                children: devProjects.map((item)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "project",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: item.src,
                                                className: `projectImg`,
                                                name: item.name,
                                                onClick: onClick,
                                                gif: "Gif",
                                                id: item.id
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: item.hide,
                                                name: item.id,
                                                id: "folder-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "inner-folder-left",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "thumbnail",
                                                            src: item.thumb
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inner-folder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "folder-header",
                                                                children: item.name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "folder-text",
                                                                children: item.text
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "text-box",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: item.link,
                                                                        className: "folder-link",
                                                                        target: "blank",
                                                                        children: "Demo"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: item.github,
                                                                        className: "folder-link",
                                                                        target: "blank",
                                                                        children: "Github link"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, "mainDiv");
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "outerProjectsBox",
                id: "box2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ProjectsBox",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "projectHeaderBox",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "projectsIcon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "projectHeader",
                                    children: "Design Projects"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "projectsMain",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "projectsRow",
                                children: devProjects.map((item)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "project",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: item.src,
                                                className: `projectImg`,
                                                name: item.name,
                                                onClick: onClick,
                                                gif: "Gif",
                                                id: item.id
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: item.hide,
                                                name: item.id,
                                                id: "folder-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "inner-folder-left",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "thumbnail",
                                                            src: item.thumb
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "inner-folder",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "folder-header",
                                                                children: item.name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "folder-text",
                                                                children: item.text
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "text-box",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: item.link,
                                                                        className: "folder-link",
                                                                        target: "blank",
                                                                        children: "Demo"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: item.github,
                                                                        className: "folder-link",
                                                                        target: "blank",
                                                                        children: "Github link"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, "mainDiv2");
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Info.js


function Info() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "outerInfoBox",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "infoBox",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "infoHeaderBox",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon-div1-front"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "infoHeader",
                                children: "Skills and Technologies"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "icon-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-visualstudio-plain",
                                    title: "Visual Studio Code",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-javascript-plain",
                                    title: "JavaScript",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-postgresql-plain",
                                    title: "PostgreSQL",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-sequelize-plain",
                                    title: "Sequelize",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-nodejs-plain",
                                    title: "Nodejs",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-html5-plain",
                                    title: "HTML5",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-git-plain",
                                    title: "Git",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-bootstrap-plain",
                                    title: "Bootstrap",
                                    id: "skill"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "icon-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-photoshop-plain",
                                    title: "Adobe Photoshop",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-xd-plain",
                                    title: "Adobe XD",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-premierepro-plain",
                                    title: "Adobe Premiere Pro",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-illustrator-plain",
                                    title: "Adobe Illustrator",
                                    id: "skill"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "icon2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "devicon-gimp-plain",
                                    title: "GIMP",
                                    id: "skill"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Footer.js


function footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "footerMain",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footerLeft",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "footerHeader",
                            children: "Contact"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "+14236195332",
                            className: "footerLink",
                            children: "(423) 619-5332"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "jackskiles71@gmail.com",
                            className: "footerLink",
                            children: "jackskiles71@gmail.com"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footerCenter"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footerRight",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        className: "designedBy",
                        children: [
                            "Created by ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " Jack Skiles"
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout.js







const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_TopBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(About, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Info, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {}),
            children
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js








function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,505,397,664], () => (__webpack_exec__(138)));
module.exports = __webpack_exports__;

})();