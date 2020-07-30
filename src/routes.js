import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import Checkout from './pages/Checkout';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/details" component={Details} />
			<Route path="/checkout" component={Checkout} />
		</Switch>
	);
}