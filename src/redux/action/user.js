import * as actionType from './actionType.js';
import axios from 'axios';
const server = 'http://192.168.43.198:8080/';
export const login = (usr,pwd) =>{
	console.log(usr+'///'+pwd)
	return (dispatch) =>{
		dispatch({
			type:actionType.USER_LOGIN,
			loginData:{
				username:usr,
				password:pwd
			}
		})
	}
}
/*promise写法*/


// /*调用接口1*/
// export const getUserId = (obj)=>{
// 	console.log(obj)
//   var promise = new Promise((resolve,reject)=>{
// 		axios.post(server+'addUser.json',obj)
// 		     .then((res)=>{
// 		     	console.log(res)
// 		     	resolve(res);
// 			})
// 		     .catch((error)=>{
// 		     	reject(error)
// 		     })
// 	})
// 	return promise;
// }

// /*调用接口2*/
// export const getUserInfo = (res)=>{
// 	console.log(res)
//     let obj = {
// 		userId:res[0].data.user_id
// 	}
// 	// console.log(userid)
// 	var promise = new Promise((resolve,reject)=>{
// 		axios.post(server+'findUser.json',obj)
// 		     .then((res)=>{
// 		     	resolve(res.data);
// 		     })
// 		     .catch((error)=>{
// 		     	reject(error)
// 		     })
// 	})
// 	return promise;
// }
// 调用接口3
// export const getMaxAge = (res)=>{
	
// 	var promise = new Promise((resolve,reject)=>{
// 		axios.post(server+'findMaxAge.json',{})
// 		     .then((res)=>{
// 		     	resolve(res.data);
// 		     })
// 		     .catch((error)=>{
// 		     	reject(error)
// 		     })
// 	})
// 	return promise;
// }

// export const addUser = (userno,username,sex,age)=>{
// 	let obj = {
// 		userNo:userno,
// 		userName:username,
// 		sex:sex,
// 		age:age
// 	}
// 	return (dispatch)=>{
// 		return Promise.all([getUserId(obj)])
// 		             .then((res1)=>{
// 		             	Promise.all([getUserInfo(res1),getMaxAge()])
// 		             	       .then((res2)=>{
// 		             	       	 console.log(res2)
// 		             	       })
// 					 })

// 	}
	
// }




/*async,await写法*/

/*调用接口1*/
export const getUserId = (obj)=>{
	return axios.post(server+'addUser.json',obj)
	     .then((res)=>{
			return res.data.user_id
	     })
}

// /*调用接口2*/
export const getUserInfo = (userid)=>{
	let obj = {
		userId:userid
	}
	return axios.post(server+'findUser.json',obj)
	     .then((res)=>{
	     	return res
	     })
}
export const  addUser = (userno,username,sex,age)=>{

	return async (dispatch)=>{
		let obj = {
			userNo:userno,
			userName:username,
			sex:sex,
			age:age
		}
		let userid = await getUserId(obj);
		let userinfo = await getUserInfo(userid);
		console.log(userid);
		console.log(userinfo.data);
		dispatch({
			type:actionType.ADD_USER,
			userData:userinfo.data
		})
	}
	
}
