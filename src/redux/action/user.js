import * as actionType from './actionType.js';

export const login = (usr,pwd) =>{
	console.log(usr+'///'+pwd)
	return (dispatch) =>{
		dispatch({
			type:actionType.USER_LOGIN,
			data:{
				username:usr,
				password:pwd
			}
		})
	}
}


