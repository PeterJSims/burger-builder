import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
		return (
			<li key={ingKey}>
				<span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {props.ingredients[ingKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>One fresh burger with the following: </p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: ${props.price.toFixed(2)}</strong>
			</p>
			<p>Continue to Checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCancelled}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</Aux>
	);
};

export default OrderSummary;
