import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">欢迎来到阿拉德大陆</h1>
                </header>
                <com name = {this.props.name} />
            </div>
        );
    }
}

class com extends Component {
    render() {
        return (
            <p className="App-intro">
                <code>你要选择什么职业</code>
            </p>
        );
    }
}

export default App;

