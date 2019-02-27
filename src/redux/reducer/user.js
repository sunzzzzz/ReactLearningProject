import * as actionType from '../action/actionType.js';
const initUserState = {
	username:'',
	password:''
}


const loginReducer =(state = initUserState,action)=>{
	switch(action.type){
		case actionType.USER_LOGIN:
		   return Object.assign({},state,action.data);
		default:
		   return state;
	}
}
export default loginReducer;