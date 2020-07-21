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
      [`Accessor${key+1}`]: { ...[`prev.Accessor${key+1}`] ,[obj]: value },
    }));
  }
  //   AcessorName = (e) => {
  //     this.setState(state => { state, [e.target.name]: e.target.value });
  //     console.log('e')
  //   };
  //   AcessorUniversity = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  //   AcessorEmail = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //     console.log('w')
  //     var reqx = /(@|.com)/g;
  //     if (reqx.test(e.target.value)) {
  //       document.getElementById("name").innerHTML = "";
  //     } else {
  //       document.getElementById("name").innerHTML = "Enter a valid email";
  //     }
  //   };

  //   AcessorNumber = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  //   AcessorNumber1 = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  //   AcessorName1 = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  render() {
    return (
      <div className="paddin">
        <div className="candidate mt-5">
          <h3>Candidate name</h3>
        </div>
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
          {/* <div className="col-sm-4 col-md-4 col-xl-4 mb-5">
            <div className="width">
              <input
                type="text"
                value={this.state.Accessor.Fullname}
                name="Fullname"
                onChange={this.AcessorName}
                placeholder="Fullname"
              />
              <input
                type="text"
                value={this.state.Accessor.University}
                name="University"
                onChange={this.AcessorUniversity}
                placeholder="University"
              />
              <input
                type="text"
                value={this.state.Accessor.Email}
                name="Email"
                onChange={this.AcessorEmail}
                placeholder="Email"
              />
              <div id="name"></div>
              <input
                type="tel"
                value={this.state.Accessor.Number}
                name="Number"
                onChange={this.AcessorNumber}
                placeholder="Number"
              />
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4 mb-5">
            <div className="width">
              <input
                type="text"
                value={this.state.Accessor.Fullname}
                name="Fullname"
                onChange={this.AcessorName1}
                placeholder="Fullname"
              />
              <input
                type="text"
                value={this.state.Accessor.University}
                name="University"
                onChange={this.AcessorUniversity1}
                placeholder="University"
              />
              <input
                type="text"
                value={this.state.Accessor.Email}
                name="Email"
                onChange={this.AcessorEmail1}
                placeholder="Email"
              />
              <input
                type="tel"
                value={this.state.Accessor.Number}
                name="Number"
                onChange={this.AcessorNumber1}
                placeholder="Number"
              />
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4 mb-5">
            <div className="width">
              <input
                type="text"
                value={this.state.Accessor.Fullname}
                name="Fullname"
                onChange={this.AcessorName2}
                placeholder="Fullname"
              />
              <input
                type="text"
                value={this.state.Accessor.University}
                name="University"
                onChange={this.AcessorUniversity2}
                placeholder="University"
              />
              <input
                type="text"
                value={this.state.Accessor.Email}
                name="Email"
                onChange={this.AcessorEmail2}
                placeholder="Email"
              />
              <input
                type="tel"
                value={this.state.Accessor.Number}
                name="Number"
                onChange={this.AcessorNumber2}
                placeholder="Number"
              />
            </div>
          </div> */}
        </div>

        <button
          className="btnSave mt-5"
          type="button"
          onSubmit={this.AddAcessor}
        >
          Save&Continue
        </button>
      </div>
    );
  }
}

export default addAcessor;
