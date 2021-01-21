import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'

import Dashboard from './Dashboard'
import Signup from './Signup_front'
import SignIn from './LogInF'


class App extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app">
			<BrowserRouter>
				<Dashboard />
			</BrowserRouter>
		)
	}
}

export default App
