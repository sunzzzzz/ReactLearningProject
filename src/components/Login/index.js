import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link} from 'react-router-dom';
export default class Login extends React.Component{
	constructor(props){
		super(props)
	}
	handleClick(){
		this.props.history.push({
			pathname:'error',
			state:{id:'3'}
		})
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
