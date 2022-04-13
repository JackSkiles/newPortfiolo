import React from 'react'
import { useState } from 'react';

export default function Hero() {
    const [portrait, setImg] = useState("Mask Group 4.png");


    const handleMouseEnter = () => {
        console.log("hello");
        setImg("");
    }
    const handleMouseLeave = () => {
        setImg("Mask Group 4.png");
    }

    return (
        <div>
            <div className='hero-Main'>
                <div className='hero-inner' >
                    <div className='hero-left'>

                    </div>
                    <div className='hero-right'>
                        <div className='hero-img-div' onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} >
                            <img src={portrait} className="portrait"  />
                            {/* <button>Hello</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
