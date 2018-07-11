import React from 'react';
import styles from '../css/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.innerContent}>
                    <div className={styles.copyright}>
                        <p>© Copyright 2018 - American Zettler, Inc - All Rights Reserved</p>
                    </div>
                    <div className={styles.linkTags}>
                        <p>Links</p>
                    </div>
                    <div className={styles.zettlerLinks}>
                        <a>HOME</a>
                        <a>BLOG</a>
                        <a>VISIT ZETTLER</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;