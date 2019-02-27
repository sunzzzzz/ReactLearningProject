import {combineReducers} from 'redux';
import {routerRedux} from 'react-router-redux';
import loginReducer from './user.js';
export default combineReducers({
	login:loginReducer
})
