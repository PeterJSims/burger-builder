import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Route path="/checkout" component={Checkout} />
					<Route exact path="/" component={BurgerBuilder} />
				</Layout>
			</div>
		);
	}
}

export default App;
