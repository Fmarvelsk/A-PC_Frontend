import React from 'react';
import Candidate from './Candidate';

function CandidateList(props){
    
    return (
        <div className="container mt-5">
        <div className="row">
        <div className="col-sm-1">S/N</div>
        <div className="col-sm-2">Full name</div>
        <div className="col-sm-2">Email Address</div>
        <div className="col-sm-2">Time added</div>
        <div className="col-sm-2">Faculty</div>
        <div className="col-sm-2">Department</div>
        <div className="col-sm-1">Action</div>
        </div>
        <div className="row mt-5">
        
        {props.candidate.map(candi => 
        <Candidate key={candi.id} item={candi} viewCandidate={props.viewCandidate}/>
        
    )}</div>
    </div>
    )
}
export default CandidateList;