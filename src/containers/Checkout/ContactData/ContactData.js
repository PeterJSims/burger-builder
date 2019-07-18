import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			zipCode: ''
		},
		loading: false
	};

	orderHandler = (e) => {
		e.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Peter',
				address: {
					street: 'Testing',
					zipCode: '23423',
					country: 'USA'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		};
		axios
			.post('/orders.json', order)
			.then((response) => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch((error) => {
				this.setState({ loading: false });
			});
	};

	render() {
		let form = (
			<form>
				<input className={classes.Input} type="text" name="name" placeholder="Your Name" />
				<input className={classes.Input} type="email" name="email" placeholder="Your Email" />
				<input className={classes.Input} type="text" name="street" placeholder="Your Street Adress" />
				<input className={classes.Input} type="text" name="zipCode" placeholder="Your Zipcode" />
				<Button btnType="Success" clicked={this.orderHandler}>
					ORDER NOW
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}

		return (
			<div className={classes.ContactData}>
				<h4>Enter Your Contact Info </h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
