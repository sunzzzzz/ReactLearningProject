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
			age:'',
			isCommitted:false

			
		}
	}
	handleClick(){
		// this.props.history.push({
		// 	pathname:'main',
		// 	state:{id:'3'}
		// })
		let str = ' qqq opks ';
		// console.log(Util._trimAside(str));
		// this.props.dispatch(User.login('xiaoming','123456'))
		console.log(([])?true:false); 
		var a = 0Xf000000000000000;
		var b = 0x7FFFFFFFFFFFFFFF;
		console.log(a-b)
	}
	// componentWillReceiveProps(nextProps){
	// 	if(nextProps.user!=this.props.user){
	// 		if(nextProps.user.userData.length!=0){
	// 			this.setState({
	// 				canClick:false
	// 			})
	// 		}
	// 	}
	// }

	throttle(fn, delay = 1000) {
		let preTime = Date.now()
	  
		return (event)=>{
			const context = this;
			event.persist && event.persist(); //保留对事件的引用
			let doTime = Date.now()
			if (doTime - preTime >= delay) {
				fn.apply(context)
				preTime = Date.now()
			}
		}
	  }
	  

		  
	debounce(fn, wait=1000) {
		let timeout;  // 定时器变量
		return function(event){
			clearTimeout(timeout);  // 每次触发时先清除上一次的定时器,然后重新计时
			event.persist && event.persist()   //保留对事件的引用
			//const event = e && {...e}   //深拷贝事件对象
			timeout = setTimeout(()=>{
				fn(event)
			}, wait);  // 指定 xx ms 后触发真正想进行的操作 handler
		};
	}
	

	addUser = this.throttle((e)=>{
		let {tel,username,sex,age} = this.state;
	    this.props.dispatch(User.addUser(tel,username,sex,age));
	})

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
    //    let arr = [];
	//    list.forEach((item,index,list)=>{
	// 	   arr.push(
	// 		<div>
	// 			<div>用户名{item.username}</div>
	// 			<div>手机号{item.userno}</div>
	// 			<div>年龄{item.age}</div> 
	// 		</div>
	// 	   )
	//    })

	    const nameSpace = 'mod-login-'
		return(
			<div>
			    <h1 className={nameSpace+'h1'} onClick={this.handleClick.bind(this)}>点击事件跳转B页面</h1>
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

				<button id="button1" style={{width:'80px',height:'30px',backgroundColor:'skyblue',textAlign:'center',borderRadius:'3px',border:'none',cursor:'pointer'}}  onClick={this.addUser.bind(this)}>添加人员</button>
				
				{
					/*arr*/
				}
				
				


			</div>
		)
	}
}
const mapStateToProps = (state)=>{
	console.log(state)
	return{
		login:state.login,
		user:state.user
	}
}
export default connect(mapStateToProps)(Login);
