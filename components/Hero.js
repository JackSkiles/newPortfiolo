import React from 'react'
import { useState, useEffect } from 'react';

export default function Hero() {
    // state to set right header img src
    const [portrait, setImg] = useState("Mask Group 4.png");
    const [mobilePortrait, setMobile] = useState("profilepic.png");
    // states to let list item position in rotation. blank indicates top, front indicates center, and bottom indicates bottom
    const [list1, setList1] = useState("1");
    const [list2, setList2] = useState("2-front");
    const [list3, setList3] = useState("3-bottom");

    const [classN, setClass] = useState("portrait");

    // useEffect to change list positions
    useEffect(() => {

        // sets a timer that will run every 2.5 seconds. This will shift the positions of the list items by seting states to new classes, giving an animated effect.
        const interval = setInterval(() => {
            if (list1 == "1") {
                setList1("1-front");
                setList2("2-bottom");
                setList3("3");
            }
            else if (list1 == "1-front") {
                setList1("1-bottom");
                setList2("2");
                setList3("3-front");
            }
            else if (list1 == "1-bottom") {
                setList1("1");
                setList2("2-front");
                setList3("3-bottom");
            }
            else {
                console.log("issue")
            }
            // console.log('This will run every second!');
        }, 2500);
        return () => clearInterval(interval);
    });

    // Mouse enter event to check if mouse has entered portrait image. This allows swapping between illustrator image and organic photo.
    const handleMouseEnter = () => {
        // console.log("hello");
        setImg("profilepic.png");
        // setClass("portrait2");
    }
    const handleMouseLeave = () => {
        setImg("Mask Group 4.png");
        // setClass("portrait");
    }

    const onClick = () => {
        if(mobilePortrait == "profilepic.png")
        {
            setMobile("Mask Group 4.png");
        }
        else
        {
            setMobile("profilepic.png");
        }
    }


    return (
        <div>
            <div className='hero-Main'>
                <div className='hero-inner' >
                    <div className='hero-left'>
                        <div className={`list-div${list1}`} id="listDiv">
                            <div className={`icon-div${list1}`}></div>
                            {/* <img src="Rectangle 17.png" className="squareIcon"></img> */}
                            <h2 className={`list-header${list1}`}>SOFTWARE ENGINEER</h2>
                        </div>
                        <div className={`list-div${list2}`} id="listDiv">
                            <div className={`icon-div${list2}`}></div>
                            <h2 className={`list-header${list2}`}>GRAPHIC DESIGNER</h2>
                        </div>
                        <div className={`list-div${list3}`} id="listDiv">
                            <div className={`icon-div${list3}`}></div>
                            <h2 className={`list-header${list3}`}>WEB DEVELOPER</h2>
                        </div>
                        <div className='hero-img-div' onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} >
                            <img src={portrait} className={classN} />
                            {/* <button>Hello</button> */}
                        </div>
                    </div>
                    <div className='hero-right'>
                        
                    </div>
                </div>
                <div className='hero-inner-mobile' >
                    <div className='hero-left-mobile'>
                        <div className='div-box-mobile'>
                            <div className={`list-div${list1}`} id="listDivMobile">
                                <div className={`icon-div${list1}`} id="iconDivMobile"></div>
                                {/* <img src="Rectangle 17.png" className="squareIcon"></img> */}
                                <h2 className={`list-header${list1}`} id="listHeaderMobile">SOFTWARE ENGINEER</h2>
                            </div>
                            <div className={`list-div${list2}`} id="listDivMobile">
                                <div className={`icon-div${list2}`} id="iconDivMobile"></div>
                                <h2 className={`list-header${list2}`} id="listHeaderMobile">GRAPHIC DESIGNER</h2>
                            </div>
                            <div className={`list-div${list3}`} id="listDivMobile">
                                <div className={`icon-div${list3}`} id="iconDivMobile"></div>
                                <h2 className={`list-header${list3}`} id="listHeaderMobile">WEB DEVELOPER</h2>
                            </div>

                        </div>
                    </div>
                    <div className='hero-right-mobile'>
                        <div className='hero-img-div' onClick={onClick} >
                            <img src={mobilePortrait} className={classN} />
                            {/* <button>Hello</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='seperatorDiv'>
            </div>
        </div>
    )
}
