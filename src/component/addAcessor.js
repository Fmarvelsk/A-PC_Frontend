import React, { Component } from "react";

class addAcessor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Accessor1: {
        Fullname: "",
        University: "",
        Email: "",
        Number: "",
      },

      Accessor2: {
        Fullname: "",
        University: "",
        Email: "",
        Number: "",
      },

      Accessor3: {
        Fullname: "",
        University: "",
        Email: "",
        Number: "",
      },
    };
    this.AcessorChange = this.AcessorChange.bind(this);
  }

  AcessorChange(key, e) {
    const value = e.target.value;
    const obj = e.target.name;
    this.setState((prev) => ({
        // ...[`prev.Accessor${key+1}`] this is where the issue is
        // the value of the Accessor field changes, but i cant get the value of
        //the remaining fields

        //Unless u want to uncomment all the other jsx code, then replace
        //  ...[`prev.Accessor${key+1}`] 
        //with
        // ...prev.Accessor1
        //then do for each of the Accessor objects
      [`Accessor${key+1}`]:  { ...[`prev.Accessor${key+1}`], [obj]: value },
    }));
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
        
          {Object.values(this.state).map((candidate, key) => (
            <div className="col-sm-4 col-md-4 col-xl-4 mb-5" key={key}>
              <div className="width">
                <input
                  type="text"
                  value={candidate.Fullname}
                  name="Fullname"
                  onChange={(e) => this.AcessorChange(key, e)}
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
