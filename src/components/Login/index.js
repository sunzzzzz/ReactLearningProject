import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import * as Util from '../../utils/util.js';
import * as User from '../../redux/action/user.js'; 
import {connect} from 'react-redux';

const list = [
	{username:'zhangsan1',age:'13',userno:'1524567782'},
	{username:'zhangsan2',age:'14',userno:'1524564389'},
	{username:'zhangsan3',age:'16',userno:'1524567342'},
]
class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tel:'',
			username:'',
			sex:'0',
			age:''
			
		}
	}
	handleClick(){
		// this.props.history.push({
		// 	pathname:'main',
		// 	state:{id:'3'}
		// })
		let str = ' qqq opks ';
		console.log(Util._trimAside(str));
		this.props.dispatch(User.login('xiaoming','123456'))
	}

	addUser(){
		let {tel,username,sex,age} = this.state;
		 this.props.dispatch(User.addUser(tel,username,sex,age))
	}

	handleChange(e){
		switch(e.target.name){
			case 'tel':
			   this.setState({
			   	  tel:e.target.value
			   });
			   break;
			case 'username':
				this.setState({
			   	  username:e.target.value
			   });
			   break;
			case 'age':
				this.setState({
			   	  age:e.target.value
			   });
			   break;
			case 'male':
				this.setState({
				  sex:e.target.value
			   });
			   break;
			case 'female':
				this.setState({
			   	  sex:e.target.value
			   });
			   break;
            default:
               break;
		}
	}
	render(){
       let arr = [];
	   list.forEach((item,index,list)=>{
		   arr.push(
			<div>
				<div>用户名{item.username}</div>
				<div>手机号{item.userno}</div>
				<div>年龄{item.age}</div> 
			</div>
		   )
	   })
		return(
			<div>
			    <h1 onClick={this.handleClick.bind(this)}>点击事件跳转B页面</h1>
				<a href="#/error">a跳转B页面</a><br/>
                

                <input type="text" onChange={this.handleChange.bind(this)} name="tel" value={this.state.tel}/>手机号<br/>
                <input type="text" onChange={this.handleChange.bind(this)} name="username" value={this.state.username}/>用户名<br/>
                <input type="text" onChange={this.handleChange.bind(this)} name="age" value={this.state.age}/>年龄<br/>
                <input
                       type="radio"
                       value="0"
                       name="male"
                       checked={this.state.sex === '0'}
                       
                       onChange={this.handleChange.bind(this)}/>男
                <input
                       type="radio"
                       value="1"
                       name="female"
                     
                       checked={this.state.sex === '1'}
                       onChange={this.handleChange.bind(this)}/>女<br/>

				<button style={{width:'80px',height:'30px',backgroundColor:'skyblue',textAlign:'center',borderRadius:'3px',border:'none',cursor:'pointer'}} onClick={this.addUser.bind(this)}>添加人员</button>
				
				{arr}
				

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
