/* Root component for the React App 

Details of some of the compoents being imported 

a. React - Main component to use react app
b. App.css - the main CSS file app.js is going to use for styling 
c. GetQuote - A custom component build to render the form to get the request for currency conversion 
d. RenderQuote - The component created to render the form once the request for quote has been made  

*/

import React, { Component } from 'react';
import './App.css';
import { RenderQuote } from './RenderQuote';
import { GetQuote } from './GetQuote';



class App extends Component {

	/* Starting the constructor function to : a. Set states of component variables   b. bind functions  */

	constructor(props) {
		super(props);

		/* This is to set the state of various HTML elements and utilize the state to make an API call */
		this.state = {
			posts: [],
			//show state is used to either show the getQuote screen or render the quotes based on API call . IF show =false - show the screen with quotes taken from API call 
			//	
			fname: null,
			lname: null,
			exampleInputEmail1: null,
			show: true,
			fromCurrency: 'AUD',
			toCurrency: 'GBP',
			CustomerAmount: '1000',
			CustomerRate: '0.56',
			amount: '200'

		}

		/* Binding the methods used in the component  */

		this.ChangeState = this.ChangeState.bind(this);
		this.ChangeStateRender = this.ChangeStateRender.bind(this);
	};

	/* Closing the Constructor function */

	ChangeState(obj, amount) {
		this.setState({ show: !this.state.show });
		this.setState({ amount: amount });
		this.setState({ CustomerAmount: obj.CustomerAmount });
		this.setState({ CustomerRate: obj.CustomerRate });
		//<RenderQuote  amount={this.state.amount} CustomerAmount={this.state.posts.CustomerAmount} CustomerRate={this.state.posts.CustomerAmount}  />
	}

	ChangeStateRender() {
		this.setState({ show: !this.state.show });
		//<RenderQuote  amount={this.state.amount} CustomerAmount={this.state.posts.CustomerAmount} CustomerRate={this.state.posts.CustomerAmount}  />
	}


	render() {
		return (
			<div>
				{this.state.show ? <GetQuote value={this.ChangeState} /> : <RenderQuote value={this.ChangeStateRender} amount={this.state.amount} CustomerAmount={this.state.CustomerAmount} CustomerRate={this.state.CustomerRate} />});
</div>
		);
	}
	/* End of Render function */


} /* End of return statement */

export default App;
