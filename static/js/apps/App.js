import React, { Component } from 'react';
import Items from './../../../Items/';
import Cart from './../../../Cart/';
import Title from './../../../Title/';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<Cart />
				</div>
				<div>
					<Title />
				</div>
				<div className="product-cont">
					<Items />
				</div>	
			</div>
		);
	}
}

export default App;