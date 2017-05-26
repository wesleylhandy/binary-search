import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//Do we need React Router?

export const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Login}/>
		<Route path='/:letter'/>
		<Route path='*' component={NotFound}/>
	</Router>
);