import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import RequestData from '../RequestData'

class MainNav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      code    : null,
      msg     : null,
      list    : []
    }
  }

  componentDidMount() {
    const url = 'https://way.jd.com/jisuapi/channel?appkey=dae6003383236acf8388b8f9fca4b1f1';
    fetch(url).then(res=>{
      res.json().then(data=>{
        console.log(data);
        this.setState({
          code    : data.code,
          msg     : data.result.msg,
          list    : data.result.result
        })
      })
    })
  }

  render(){
    return(
      <Router>
        <Route render={({ location }) => (
          <div style={styles.fill}>
            <ul style={styles.nav}>
              {this.state.list.map(function(item,index){
                return <NavLink key={index} to={`/${index}`}>{item}</NavLink>
              })}
            </ul>
              <Route exact key={0} path='/' component={RequestData}/>
            {
              this.state.list.map(function(item,index){
                return <Route key={index} path={`/${index}`} component={RequestData}/>
              })
            }
          </div>
        )}/>
      </Router>
    )
  }

}

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)



const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl  = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

export default MainNav