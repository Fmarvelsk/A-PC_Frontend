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
    addCandidate = (e) => {
        e.preventDefault()
        const newCandidate = {
            surname : this.state.surname,
            otherName : this.state.otherName,
            email : this.state.email,
            faculty : this.state.department,
            present_level : this.state.present_level
        }
        console.log(newCandidate)
        this.setState({
            surname: '',
            otherName: '',
            email: '',
            faculty: '',
            department: '',
            present_level:''
        })
    }

    render(){
        return(
            <div className="container container-fluid padding">
            <form onSubmit= {this.addCandidate} className="paddingf">
            <input type="text" 
            value={this.state.surname} name="surname"
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
            <button className="btn-addcandidate mt-5" type="button">Add Candidate</button>
            </form>
            </div>
        )
    }
}
export default addCandidate;
