import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter,Route, Switch,hashHistory} from 'react-router-dom';
import * as Page from './components';
ReactDOM.render(
    <HashRouter history={hashHistory}>
    	<Switch>
			<Route path="/login" component={Page.Login}></Route>
			<Route path="/error" exact component={Page.NotFound}></Route>
		</Switch>
	</HashRouter>
    ,
	document.getElementById('app')
);
