
import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router';

export default class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={
			input:"",
			addr:"",
			gmap:{},
            location:{}
        }
	}

	componentDidMount(){
		const { BMap, BMAP_STATUS_SUCCESS } = window
		var map = new BMap.Map("allmap");
		map.centerAndZoom("北京",12);                   // 初始化地图,设置城市和地图级别。

		var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
			{"input" : "suggestId"
			,"location" : map
		});

		var _this = this;
		ac.addEventListener("onconfirm", (e)=> {    //鼠标点击下拉列表后的事件
			
			var _value = e.item.value;
			
			var myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
				_this.setState({
					addr:myValue
				},()=>{
					console.log(_this.state.addr)
				})
				
			});
			// var rinput = this.refs.rs;
			// rinput.addEventListener('click',()=>{
			// 	console.log('12222222')
			// })

	}
	
	
	render(){
		console.log(this.state.addr)
		return(
			<div>
	
				<div id="allmap" style={{ position: "absolute", top: 40, left: 0, bottom:60,width: '50vw', height: '50vh' }}></div>
				
				<div>请输入:<input type="text" id="suggestId" size="20" value="百度" style={{width:'150px'}} /></div>
				<div id="searchResultPanel" style={{border:'1px solid #C0C0C0',width:'150px',height:'auto',display:'none'}}></div>
				 
			</div>
		)
	}
}
