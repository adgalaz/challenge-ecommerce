import React, { Component } from 'react';
import Items from './../../../Items/'
import Cart from './../../../Cart/'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<Cart />
				</div>
				<div className="product-cont">
					<Items />
				</div>	
			</div>
		);
	}
}

export default App;