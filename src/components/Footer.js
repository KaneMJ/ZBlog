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
                        <a href="https://www.linkedin.com/company/zettler-group" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://vimeo.com/zettler" target="_blank"><i className="fab fa-vimeo-v"></i></a>
                    </div>
                    <div className={styles.zettlerLinks}>
                        <a href="#"><span>HOME</span></a>
                        <a href="#">BLOG</a>
                        <a href="#">VISIT ZETTLER</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;