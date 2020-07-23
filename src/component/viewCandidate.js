import React, {Component} from 'react';

class viewCandidate extends Component{

    render(){
        return(
            <div className="paddin">
            <div className="candidate mt-5">
            <h3>Candidate name</h3>
            </div>
            <div className="row">
            <div className="col-sm-4 col-md-4 col-xl-4 mb-5">
            <div className="width">
            <input type='text' />
            <input type='text' />
            <input type='text'/>
            <input type='tel'/>
            <input type="checkbox" value="Invitation sent" /><label> Invitation Sent </label><br/>
            <input type="checkbox" value="Application received" /><label> Application Received </label><br/>
            <input type="checkbox" value="Paper sent" /><label>Paper Sent</label><br/>
            <input type="checkbox" value="Paper received" /><label> Paper Received </label><br/>
            
            </div>
            </div>
           </div>
           </div>
        )
    }

} 


export default viewCandidate;