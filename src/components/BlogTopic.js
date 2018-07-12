import React from 'react';
import styles from '../css/blogtopic.css';

class BlogTopic extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.blogTopicWrapper}>
                    <h1 className={styles.title}>Blogs By Topic</h1>
                    <div className={styles.cardWrapper}>
                        <div className={styles.transformerCard}>
                            <div className={styles.imgDiv}>
                            </div>
                            <div className={styles.description}>
                                <h3>Transformers</h3>
                                <p>Chassis-Mounted, Toroidal...</p>
                            </div>
                        </div>
                        <div className={styles.displayCard}>
                            <div className={styles.imgDiv}>
                            </div>
                            <div className={styles.description}>
                                <h3>Displays</h3>
                                <p>Capacitive vs. Resistive</p>
                            </div>
                        </div>
                        <div className={styles.relayCard}>
                            <div className={styles.imgDiv}>
                            </div>
                            <div className={styles.description}>
                                <h3>Power Relays</h3>
                                <p>Solar, Automotive, Power Relays and More...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogTopic;