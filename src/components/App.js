import React from 'react';
import Header from './Header';
import styles from '../css/app.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles}>
                <Header />
            </div>
        )
    }
}

export default App;