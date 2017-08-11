import React, { Component } from 'react';

class TestArr extends Component{
	constructor(props) {
		super(props);
		this.state = {
			arr:['a','b','c','d','e','f']
		}
	}

	render() {
		console.log(this.state.arr.length)
		return(
			<div>
				{this.state.arr.map(function(item,index){return <div key={index}>{item} </div>})}
			</div>
		)
	}
}
export default TestArr