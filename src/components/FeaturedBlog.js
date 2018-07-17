import React from 'react';
import styles from '../css/featuredblog.css';


class FeaturedBlog extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.innerContent}>
                    <div className={styles.blogImage}>  
                        <span className={styles.helper}><img src={this.props.blog[0]} /></span>
                    </div>
                    <div className={styles.blogContent}>
                        <h3>Featured Blog:</h3>
                        <h1>{this.props.blog[1]}</h1>
                        <p>{this.props.blog[2]}</p>
                        <button type="submit">Read Blog</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedBlog;