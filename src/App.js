import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {
	componentDidMount() {
		this.props.onTryAutoSignUp();
	}
	render() {
		return (
			<div className="App">
				<Layout>
					<Route path="/checkout" component={Checkout} />
					<Route path="/orders" component={Orders} />
					<Route path="/auth" component={Auth} />
					<Route path="/logout" component={Logout} />
					<Route path="/" exact component={BurgerBuilder} />
				</Layout>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTryAutoSignUp: () => dispatch(actions.authCheckState())
	};
};
export default withRouter(connect(null, mapDispatchToProps)(App));
