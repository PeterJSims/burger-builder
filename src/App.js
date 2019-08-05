import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Route path="/checkout" component={Checkout} />
					<Route path="/orders" component={Orders} />
					<Route exact path="/" component={BurgerBuilder} />
				</Layout>
			</div>
		);
	}
}

export default App;
