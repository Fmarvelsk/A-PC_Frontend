import React, { Component } from 'react';
//import { produce } from 'immer';

class addAcessor extends Component {
  state = {
        Accessor: [ {
          id: 1,
        Fullname: "",
        University: "",
        Email: "",
        Number: "",
      },
{
        id: 2, 
        Fullname: "",
        University: "",
        Email: "",
        Number: "",
      },
{
        id: 3,
        Fullname: "",
        University: "",
        Email: "",
        Number: "",
      },
    
    ]
  }
  AcessorChange(e, key) {
   
  }
  addAddAcessor= (e) => {
    e.preventDefault()
    const newCandidate = {
        Fullname : this.state.Accessor1.Fullname,
        University : this.state.Accessor1.University,
        Email : this.state.Accessor1.Email,
        Number: this.state.Accessor1.Number,
    }
    console.log(newCandidate)
    this.setState({
        Fullname: "",
        University: "",
        Email: "",
        Number: "",
    })
}

  render() {
    return (
      <div className="paddin">
        <div className="candidate mt-5">
          <h3>Candidate name</h3>
        </div>
        <form onSubmit={this.AddAcessor}>
        <div className="row">
        
          {this.state.Accessor.map((candidate, key) => (
            <div className="col-sm-4 col-md-4 col-xl-4 mb-5" key={candidate.id}>
              <div className="width">
                <input
                  type="text"
                  
                  name="Fullname"
                  onChange={(e, id) => { 
                    const Fullname = e.target.name
                    this.setState( this.state.Accessor.map(prev =>{
                      if(prev.id === candidate.id){
                        const hello ={prev, Fullname}
                        return hello
                      } return prev
                    }
                      ))} }
                    value={candidate.Fullname}

                  placeholder="Fullname"
                />
                <input
                  type="text"
                  value={candidate.University}
                  name="University"
                  onChange={(e) => this.AcessorChange(key, e)}
                  placeholder="University"
                />
                <input
                  type="text"
                  value={candidate.Email}
                  name="Email"
                  onChange={(e) => this.AcessorChange(key, e)}
                  placeholder="Email"
                />
                <div id="name"></div>
                <input
                  type="tel"
                  value={candidate.Number}
                  name="Number"
                  onChange={(e) => this.AcessorChange(key, e)}
                  placeholder="Number"
                />
              </div>
            </div>
            
          ))}
          {

          }
         
        </div>

        <button
          className="btnSave mt-5"
          type="submit"
        >
          Save&Continue
        </button>
        </form>
      </div>
    );
  }
}

export default addAcessor;
