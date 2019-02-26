import React from 'react';
import ReactDOM from 'react-dom';

export default class NotFound extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		// console.log(this.props.match.params) 通过url拼接参数
		// console.log(this.props.history.location.state)
	}
	// handleBack(){
	// 	this.props.history.goBack()
	// }
	// handleReplace(){
 //        this.props.history.replace('login')
	// }
	render(){
		return(
			<div>
				<p>404 NotFound</p>
				{
					/*
						<div onClick={this.handleBack.bind(this)}>返回上一级页面</div>
						<div onClick={this.handleReplace.bind(this)}>重定向</div>
					*/
				}
				
		    </div>
		)
	}
}
