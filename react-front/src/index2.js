import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function init() {
    const root = document.getElementById('root')
    ReactDOM.render(<App />, root);
}

window.addEventListener('load', init);
