import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import history from './utils/history';


ReactDOM.render(<Router><App history={history} /></Router>, document.getElementById('root'));
