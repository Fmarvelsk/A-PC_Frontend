import React, { Component } from 'react'


class Candidate extends Component{
    
    render(){
        const {name, id} = this.props.item
        return(
            <div className="row d">
            <div className="col-sm-1 data mb-3">{id}</div>
            <div className="col-sm-2 data">{name}</div>
        <div className="col-sm-2 data">hello</div>
        <div className="col-sm-2 data ">hello</div>
        <div className="col-sm-2 data">Full name</div>
        <div className="col-sm-2 data">Full name</div>
            <div className="col-sm-1 data">
            <input className="style" type="button" value="View" onClick={this.props.viewCandidate.bind(this, id)}></input>
            
            </div>
            
            </div>
        )
    }
}
export default Candidate;