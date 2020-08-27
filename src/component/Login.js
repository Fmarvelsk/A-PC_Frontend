import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Login extends Component{
    state= {
        username :'',
        password :''
    }
enterUser = (e)=>{
    this.setState({[e.target.name] : e.target.value})
}
enterPassword = (e)=>{
    this.setState({[e.target.name] : e.target.value})
}
loginUser = (e) => {
    e.preventDefault()
    const adminInfo ={
        username: this.state.username,
        password: this.state.password
    }
    console.log(adminInfo)
    this.setState({
        username : '',
        password : ''
    })

}
    render(){
        return(<>
            <div className="login-container">
            <span className="portal"><h3>Welcome to A & PC Portal</h3></span>
            <span className="signin"><h5>Sign In</h5></span>
            <form onSubmit={this.loginUser}>
            
            <input type="text" name="username" className="loginput"
            value={this.state.username} 
            onChange={this.enterUser} placeholder="username" required/>
            <input type="password" name="password"className="loginput"
            value={this.state.password} 
            onChange={this.enterPassword} placeholder="password" required/>
            <button className="btnlogin" type="submit">Login</button>
            <div> 
    <span className="psw">Forgot <Link to="/">password?</Link></span>
    
  </div>
           </form>
           </div>
           </>

        )
    }
}
export default Login