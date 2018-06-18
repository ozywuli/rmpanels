import React, { Component } from 'react';
import Dashboard from './Dashboard';
import content from '../data/content.json';

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="app">
                <Dashboard content={content} />
            </div>
        )
    }
}

export default App;