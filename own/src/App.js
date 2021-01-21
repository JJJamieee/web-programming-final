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
				<Route path="/" component={Dashboard} >
					<Route path="/controlPage" component={Afterlogin} />
				</Route>

				<Dashboard />
			</BrowserRouter>
		)
	}
}

export default App
