import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Dashboard from './Dashboard'
import Afterlogin from './Afterlogin'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.Fragment>
    <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'" />
    <App />
  </React.Fragment>
  ,
  document.getElementById('root')
)

serviceWorker.unregister();