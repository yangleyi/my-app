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
  	  <NewsList data={this.state.data}/>
  	)
  }
}
const NewsList = React.createClass({
  render(){
    return(
      <div>
        <ul style={Styles.ul}>
          {this.props.data.map(function(item,index){
            return <li style={Styles.li} key={index}>
                    <Link to={`${item}`}>
                      <dl style={Styles.dl}>
                        <dt style={Styles.dt}>{item.title}</dt>
                        <dd style={Styles.dd}><span>{item.src}</span><span>{item.time}</span></dd>
                      </dl>
                    </Link>
                </li>
          })}
        </ul>
      </div>
    )
  }
})
/*
const NewsList = ({data}) => (
  <div>
    <ul style={Styles.ul}>
      {data.map(function(item,index){
        return <li style={Styles.li} key={index}>
                <dl style={Styles.dl}>
                  <dt style={Styles.dt}>{item.title}</dt>
                  <dd style={Styles.dd}><span>{item.src}</span><span>{item.time}</span></dd>
                </dl>
            </li>
      })}
    </ul>
  </div>
)
*/






const Styles = {}
Styles.ul={
  marginTop:'3em',
  marginBottom:0,
  padding:0
}
Styles.li={
  background:'hsl(140,60%,90%)',
  paddingTop:'0.6em',
  paddingBottom:'0.6em',
  marginBottom:'1px',
  listStyle:'none'
}
Styles.dl={
  marginTop:0,
  marginBottom:0
}
Styles.dt={
  fontSize:'1.6rem',
  lineHeight:'1em',
  paddingBottom:'0.5em'
}
Styles.dd={
  marginLeft:0,
  display:'flex',
  justifyContent:'space-between',
  fontSize:'1.4rem',
  color:'#777'
}
export default Datas
/*
<p dangerouslySetInnerHTML={{__html:item.content}}></p> 
*/