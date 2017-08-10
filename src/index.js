import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MainNav from './MainNav/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainNav />, document.getElementById('root'));
registerServiceWorker();
