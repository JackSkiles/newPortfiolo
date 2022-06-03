import Link from 'next/link'
import styles from '../styles/topbar.module.css'

const TopBar = () => {
    return (
        <nav>
            <div className={styles.topbarmain}>
                <div className={styles.topbarleft}>
                </div>
                <div className={styles.topbarright1}>
                    <div className={styles.contactdiv}>
                        <img className={styles.topimg} src="Icon ionic-ios-mail.png" />
                        <p>JackSkiles71@gmail.com</p>
                    </div>
                    <div className={styles.contactdiv}>
                        <img className={styles.topimg} src="Icon awesome-phone-alt.png" />
                        <p>423 619-5332</p>
                    </div>
                </div>
                <div className={styles.seperatordiv}></div>
                <div className={styles.topbarright2}>
                    <div className={styles.contactdiv}>
                        <a className={styles.imageLink} href="https://www.linkedin.com/in/jack-skiles-46500a1a7/">
                            <img className={styles.topimg2} src="Icon awesome-linkedin.png" />
                        </a>
                    </div>
                    <div className={styles.contactdiv}>
                        <img className={styles.topimg2} src="Icon awesome-github.png" />
                    </div>
                    <div className={styles.contactdiv}>
                        <img className={styles.topimg2} src="Icon ionic-md-paper.png" />
                    </div>
                    <div className={styles.contactdiv2}>
                        <img className={styles.topimg2mobile} src="mailmobile.png" />
                    </div>
                    <div className={styles.contactdiv2}>
                        <img className={styles.topimg2mobile} src="phonemobile.png" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopBar;