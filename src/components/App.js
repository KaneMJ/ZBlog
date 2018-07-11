import React from 'react';
import Header from './Header';
import AboutZettler from './AboutZettler';
import Footer from './Footer';
import styles from '../css/app.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Header />
                <AboutZettler />
                <Footer />
            </div>
        )
    }
}

export default App;