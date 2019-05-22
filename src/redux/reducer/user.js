import * as actionType from '../action/actionType.js';
const initUserState = {
	loginData:{},
	userData:[]
}


const loginReducer =(state = initUserState,action)=>{
	switch(action.type){
		case actionType.USER_LOGIN:
		   return Object.assign({},state,action.loginData);
		default:
		   return state;
	}
}
export {loginReducer};


const userReducer =(state = initUserState,action)=>{
	// console.log(action.data)
	switch(action.type){
		case actionType.ADD_USER:
		   return {...state,userData:action.userData};
		default:
		   return state;
	}
}
export {userReducer};