import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../css/app.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles}>
                <Header />
                <Footer />
            </div>
        )
    }
}

export default App;