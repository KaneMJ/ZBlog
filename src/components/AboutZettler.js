import React from 'react';
import styles from '../css/aboutzettler.css';

class AboutZettler extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.innerContent}>
                    <div className={styles.aboutZettlerContainer}>
                        <div className={styles.aboutZettler}>
                            <h2>About American Zettler</h2>
                            <p>American Zettler is one of the top component manufacturing firms in the world.
                            We've decided to make a blog to let you in on all the hardware knowledge.</p>
                            <p>If you're in the market for electrical components, be sure to visit us today!</p>
                            <div>
                                <button type="button">Visit American Zettler<i className="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.zLogoDiv}>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutZettler;