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
                        <img className={styles.topimg} src="Icon ionic-ios-mail.png" />
                        <p>JackSkiles71@gmail.com</p>
                    </div>
                </div>
                <div className={styles.topbarright2}>

                </div>
            </div>
        </nav>
    );
}

export default TopBar;