import React from 'react'
import styles from '../styles/header.module.css'
import ReactDom from 'react-dom';
import { useState } from 'react';

export default function Header(props) {
    const [hide, setHide] = useState("Hide");

    const onClick = () => {
        console.log(hide);
        if(hide === "Hide")
        {
            setHide("");
        }
        else if(hide == "")
        {
            setHide("Hide");
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.headerLeft}>
                <h1 className={styles.title}>JACK SKILES</h1>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="" className={styles.menuItem}>Development Projects</a>
                </div>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="" className={styles.menuItem}>Graphic Design Projects</a>
                </div>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="" className={styles.menuItem}>Other Projects</a>
                </div>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="" className={styles.menuItem}>About Me</a>
                </div>
            </div>
            <div className={styles.mobileMenuButton + hide} >
                <button onClick={onClick}>
                    <div className={styles.mobile + hide} id={styles.mobileXShowLeft}/>
                    <div className={styles.mobile + hide} id={styles.mobileXShowRight}/>
                </button>
            </div>
            <div className={styles.headerRightMobile + hide}>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="" className={styles.menuItem}>Development Projects</a>
                </div>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="" className={styles.menuItem}>Graphic Design Projects</a>
                </div>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="" className={styles.menuItem}>Other Projects</a>
                </div>
                <div className={styles.menuGroup}>
                    <img src="Rectangle 17.png" className={styles.squareIcon}></img>
                    <a href="" className={styles.menuItem}>About Me</a>
                </div>
            </div>
        </div>
    )
}
