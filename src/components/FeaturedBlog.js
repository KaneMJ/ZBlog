import React from 'react';
import styles from '../css/featuredblog.css';

class FeaturedBlog extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.innerContent}>
                    <div className={styles.blogImage}>  
                        <span className={styles.helper}><img src='../images/relayPic.png' alt='Zettler Blog' /></span>
                    </div>
                    <div className={styles.blogContent}>
                        <h3>Featured Blog:</h3>
                        <h1>Dynamic Title of Blog</h1>
                        <p>Transformers are some of the most widely used electronic components in hardware. From hot tubs and vending machines to power plants and even your phone charger, transformers are extremely versatile in their applications.
                            Check out this blog for five examples of applications where you just might find a transformer at work.</p>
                        <button type="submit">Read Blog</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedBlog;