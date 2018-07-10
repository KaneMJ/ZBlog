import React from 'react';
import styles from '../css/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.headerWrapper}>
                    <img className={styles.image} src='../images/headerPic.jpg' alt='Zettler' />
                </div>
                <img className={styles.zblog} src='../images/zBlogImage.png' alt="Zettler Blog" />
                <div className={styles.headerDiv}>
                    <ul className={styles.nav}>
                        <li><a href="test.com">Home</a></li>
                        <li><a href="test2.com">Blogs</a></li>
                        <li className={styles.visitZettler}><a href="test3.com">Visit Zettler</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;