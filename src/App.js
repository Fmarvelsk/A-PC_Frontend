import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './component/Homepage';
import Login from './component/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {

    }
  }
  render(){
  return (
    <Router>
    <Switch>
  
  <Route exact path="/" component={Login} />

  <Route path="/home" component={HomePage}/>

  </Switch>
  </Router>
    )
}
}

export default App;
