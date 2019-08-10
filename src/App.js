import React, { useEffect } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { connect } from 'react-redux';
import asyncComponent from './hoc/AsyncComponent/asyncComponent';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const asyncCheckout = asyncComponent(() => {
	return import('./containers/Checkout/Checkout.js');
});

const asyncOrders = asyncComponent(() => {
	return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
	return import('./containers/Auth/Auth');
});

const App = (props) => {
	useEffect(() => {
		props.onTryAutoSignUp();
	}, []);

	let routes = (
		<Switch>
			<Route path="/auth" component={asyncAuth} />
			<Route path="/" exact component={BurgerBuilder} />
			<Redirect to="/" />
		</Switch>
	);

	if (props.isAuthenticated) {
		routes = (
			<Switch>
				<Route path="/checkout" component={asyncCheckout} />
				<Route path="/orders" component={asyncOrders} />
				<Route path="/logout" component={Logout} />
				<Route path="/auth" component={asyncAuth} />
				<Route path="/" exact component={BurgerBuilder} />
				<Redirect to="/" />
			</Switch>
		);
	}

	return (
		<div className="App">
			<Layout>{routes}</Layout>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTryAutoSignUp: () => dispatch(actions.authCheckState())
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
