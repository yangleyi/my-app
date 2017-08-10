import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class Datas extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  		code 	  : -1,
  		msg     : null,
  		channel : null,
  		data 	  : [],
      title   : "头条",
      start   : 0,
      num     : 10,
      appkey  : 'dae6003383236acf8388b8f9fca4b1f1',
      url     : 'https://way.jd.com/jisuapi/get',
      nameArr : ["头条","新闻","财经","体育","娱乐","军事","教育","科技","NBA","股票","星座","女性","健康","育儿"]
  	}
  }

  componentWillMount() {
    const arg = Number(this.props.match.url.split('/')[1]);
    (arg == '' || arg == 0) ? this.setState({title:this.state.nameArr[0]}) : this.setState({title:this.state.nameArr[arg]})
  }

   componentDidMount() {
     // var url = 'https://way.jd.com/jisuapi/get?channel=头条&num=10&start=0&appkey=dae6003383236acf8388b8f9fca4b1f1';
     var url = `${this.state.url}?channel=${this.state.title}&start=${this.state.start}&appkey=${this.state.appkey}`;
     fetch(url).then(res=>{
       res.json().then(data=>{
         console.log(data);
         this.setState({
         	channel : data.result.result.channel,
         	data 	  : data.result.result.list
         })
       })
     })
   }

  render(){
  	return(
  	  <div>
  	    <h1>{this.state.channel}</h1>
  	   	<ul className="main-ul">
  	   	  {this.state.data.map(function(item,index){
  	   	  	return <li className="main-li" key={index}>{item.title}
  	   	  				<p dangerouslySetInnerHTML={{__html:item.content}}></p> 
  	   	  			</li>
  	   	  })}
  	   	</ul>
  	  </div>
  	)
  }
}
export default Datas