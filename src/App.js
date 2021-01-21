import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'

import Dashboard from './Dashboard'
import Afterlogin from './Afterlogin'

class App extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app">
			<BrowserRouter>
				<meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'" />
				<Route path="/" component={Dashboard} >
					<Route path="/controlPage" component={Afterlogin} />
				</Route>

				<Dashboard />
			</BrowserRouter>
		)
	}
}

export default App
