import React from 'react'
import { useState } from 'react';

export default function Hero() {
    const [portrait, setImg] = useState("Mask Group 4.png");
    const [classN, setClass] = useState("portrait");


    const handleMouseEnter = () => {
        console.log("hello");
        setImg("profilepic.png");
        setClass("portrait2");
    }
    const handleMouseLeave = () => {
        setImg("Mask Group 4.png");
        setClass("portrait");
    }

    return (
        <div>
            <div className='hero-Main'>
                <div className='hero-inner' >
                    <div className='hero-left'>
                        <div className='list-div1'>
                            <div className='icon-div1'></div>
                            {/* <img src="Rectangle 17.png" className="squareIcon"></img> */}
                            <h2 className='list-header1'>SOFTWARE ENGINEER</h2>
                        </div>
                        <div className='list-div1'>
                            <div className='icon-div2'></div>
                            <h2 className='list-header2'>SOFTWARE ENGINEER</h2>
                        </div>
                        <div className='list-div1'>
                            <div className='icon-div3'></div>
                            <h2 className='list-header3'>SOFTWARE ENGINEER</h2>
                        </div>
                    </div>
                    <div className='hero-right'>
                        <div className='hero-img-div' onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} >
                            <img src={portrait} className={classN} />
                            {/* <button>Hello</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
