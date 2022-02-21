import React from 'react'
import styles from '../styles/header.module.css'


export default function Header() {
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
        </div>
    )
}
