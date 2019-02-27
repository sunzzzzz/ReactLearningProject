import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter,Route,Switch,hashHistory} from 'react-router-dom';
import * as Page from './components';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducer/index.js';
import {routerMiddleware,syncHistoryWithStore,push} from 'react-router-redux';
import {createStore,applyMiddleware,compose} from 'redux';

const middleware = routerMiddleware(hashHistory);
const composeEnhancers = compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk,middleware)))

ReactDOM.render(
	<Provider store={store}>
	    <HashRouter history={hashHistory}>
	    	<Switch>
				<Route path="/login" component={Page.Login}></Route>
				<Route path="/error" exact component={Page.NotFound}></Route>
				<Route path="/main" exact component={Page.Main}></Route>
			</Switch>
		</HashRouter>
	</Provider>

    ,
	document.getElementById('app')
);
