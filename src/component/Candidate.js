import React, { Component } from 'react'


class Candidate extends Component{
    
    render(){
        const {name, id} = this.props.item
        return(
            <>
            <div className="col-sm-1 mb-3">{id}</div>
            <div className="col-sm-2">{name}</div>
        <div className="col-sm-2">hello</div>
        <div className="col-sm-2">hello</div>
        <div className="col-sm-2">Full name</div>
        <div className="col-sm-2">Full name</div>
            <div className="col-sm-1">
            <input className="style" type="button" value="View" onClick={this.props.viewCandidate.bind(this)}></input>
            
            </div>
            </>
        )
    }
}
export default Candidate;