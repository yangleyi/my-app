import React,{ Component } from 'react';

class Datas extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  		code 	: -1,
  		msg 	: null,
  		channel : null,
  		data 	: []
  	}
  }

   componentDidMount() {
     var url = 'https://way.jd.com/jisuapi/get?channel=头条&num=10&start=0&appkey=dae6003383236acf8388b8f9fca4b1f1';
     fetch(url).then(res=>{
       res.json().then(data=>{
         console.log(data);
         this.setState({
         	code 	: data.code,
         	msg 	: data.result.msg,
         	channel : data.result.result.channel,
         	data 	: data.result.result.list
         })
       })
     })
   }

  render(){
  	console.log('-----------------');
  	console.log( Array.isArray(this.state.data));
  	var dd = this.state.data;
  	console.log(dd.length);
  	return(
  	  <div>
  	    <h1>{this.state.channel}</h1>
  	   	<ul>
  	   	  {this.state.data.map(function(item,index){return <div key={index}>{item.title} </div>})}
  	   	</ul>
  	  </div>
  	)
  }
}
export default Datas