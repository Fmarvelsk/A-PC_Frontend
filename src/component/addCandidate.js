import React, {Component} from 'react';

class addCandidate extends Component{
    state = {
        surname: '',
        otherName: '',
        email: '',
        faculty: '',
        department: '',
        present_level:''
    }
    onchangeEvent = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    onchangeEventName = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    onchangeEventDepartment = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    onchangeEventFaculty = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    onchangeEventEmail = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    onchangeEventLevel = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return(
            <div className="container container-fluid login-container">
            <form onSubmit= {this.addCandidate}>
            <input type="text" 
            value={this.state.Surname} name="Surname"
            onChange={this.onchangeEvent} placeholder='Surname'/>
            <input type="text" 
            value={this.state.otherName} name="otherName"
            onChange={this.onchangeEventName} placeholder='Other Name'/>
            <input type="text" 
            value={this.state.email} name="email"
            onChange={this.onchangeEventEmail} placeholder='Email'/>
            <input type="text" 
            value={this.state.faculty} name="faculty"
            onChange={this.onchangeEventFaculty} placeholder='Faculty'/>
            <input type="text" 
            value={this.state.department} name="department"
            onChange={this.onchangeEventDepartment} placeholder='Department'/>
            <input type="text" 
            value={this.state.present_level} name="present_level"
            onChange={this.onchangeEventLevel} placeholder='Present Level'/>
            
            </form>
            </div>
        )
    }
}
export default addCandidate;
