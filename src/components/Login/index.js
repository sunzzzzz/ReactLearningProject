import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import * as Util from '../../utils/util.js';
import * as User from '../../redux/action/user.js'; 
import {connect} from 'react-redux';
class Login extends React.Component{
	constructor(props){
		super(props)
	}
	handleClick(){
		// this.props.history.push({
		// 	pathname:'main',
		// 	state:{id:'3'}
		// })
		let str = ' qqq opks ';
		console.log(util._trimAside(str));
		this.props.dispatch(User.login('xiaoming','123456'))
	}
	render(){
		return(
			<div>
				<h1 onClick={this.handleClick.bind(this)}>点击事件跳转B页面</h1>
				<a href="#/error">a跳转B页面</a>
			</div>
		)
	}
}
const mapStateToProps = (state)=>{
	console.log(state)
	return{
		login:state.login
	}
}
export default connect(mapStateToProps)(Login);
