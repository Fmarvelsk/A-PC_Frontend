import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './component/Homepage';
import Login from './component/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Notfound from '../src/component/404';

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
  <Route path="/home/*" component={Notfound} />
  </Switch>
  </Router>
    )
}
}

export default App;
