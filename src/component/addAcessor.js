import React, {Component} from 'react';

class addAcessor extends Component{
    state = {
    Accessor : [{
        Fullname: '',
        University: '',
        Email: '',
        Number: ''
    },
    {
        Fullname: '',
        University: '',
        Email: '',
        Number: ''
    },
    {
        Fullname: '',
        University: '',
        Email: '',
        Number: ''
    }
     ]
}
    AcessorName = (e) => {
        this.setState({[e.target.name]:e.target.value})
        
    }
    AcessorUniversity = (e) => {
        this.setState({ [e.target.name]:e.target.value})
    }
    AcessorEmail = (e) => {
        this.setState({[e.target.name] : e.target.value})
            var reqx = /(@|.com)/g
        if(reqx.test(e.target.value)){
            document.getElementById('name').innerHTML = ''
        }
        else{
            document.getElementById('name').innerHTML = 'Enter a valid email'
        }
    
    }
    
    AcessorNumber = (e) => {
        this.setState({ [e.target.name]:e.target.value}) 
    }
    AcessorNumber1 =(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    AcessorName1 = (e) => {
        this.setState({ [e.target.name]:e.target.value})
    }


        render(){
            return(
                <div className="paddin">
                <div className="candidate mt-5">
                <h3>Candidate name</h3>
                </div>
                <div className="row">
                <div className="col-sm-4 col-md-4 col-xl-4 mb-5">
                <div className="width">
                <input type='text' value={this.state.Accessor.Fullname} name="Fullname" onChange={this.AcessorName} placeholder="Fullname"/>
                <input type='text' value={this.state.Accessor.University} name="University" onChange={this.AcessorUniversity} placeholder="University"/>
                <input type='text' value={this.state.Accessor.Email} name="Email" onChange={this.AcessorEmail} placeholder="Email"/><div id="name"></div>
                <input type='tel' value={this.state.Accessor.Number} name="Number" onChange={this.AcessorNumber} placeholder="Number"/>

                </div>
                </div>
                <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4 mb-5">
                <div className="width">
                <input type='text' value={this.state.Accessor.Fullname} name="Fullname" onChange={this.AcessorName1} placeholder="Fullname"/>
                <input type='text' value={this.state.Accessor.University} name="University" onChange={this.AcessorUniversity1} placeholder="University"/>
                <input type='text' value={this.state.Accessor.Email}  name="Email" onChange={this.AcessorEmail1} placeholder="Email"/>
                <input type='tel' value={this.state.Accessor.Number} name="Number" onChange={this.AcessorNumber1} placeholder="Number"/>

                </div>
                </div>
                <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4 mb-5">
                <div className="width">
                <input type='text'  value={this.state.Accessor.Fullname} name="Fullname" onChange={this.AcessorName2} placeholder="Fullname"/>
                <input type='text'  value={this.state.Accessor.University} name="University" onChange={this.AcessorUniversity2} placeholder="University"/>
                <input type='text' value={this.state.Accessor.Email} name="Email" onChange={this.AcessorEmail2} placeholder="Email"/>
                <input type='tel'  value={this.state.Accessor.Number} name="Number" onChange={this.AcessorNumber2} placeholder="Number"/>

                </div>
                </div>
                </div>
                
                <button className="btnSave mt-5" type="button" onSubmit= {this.AddAcessor}>Save&Continue</button>
                
                </div>
            )
        }
} 

export default addAcessor