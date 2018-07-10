import React from 'react';
import Header from './Header';
import '../css/styles.css';

class App extends React.Component {
    render() {
        return (
            <div className="myApp">
                <Header />
            </div>
        )
    }
}

export default App;