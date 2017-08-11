import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class NewsList extends Component({
  render(){
    return(
      <div>
        <ul style={Styles.ul}>
          {this.props.data.map(function(item,index){
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
  }
})

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
export default NewsList