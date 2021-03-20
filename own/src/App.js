import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import NTUSports from './containers/NTUSports';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<NTUSports />
			</BrowserRouter>
		)
	}
}

export default App
