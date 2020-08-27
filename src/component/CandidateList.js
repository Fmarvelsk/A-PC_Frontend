import React from 'react';
import Candidate from './Candidate';

function CandidateList(props){
    
    return (
        <div className="container mt-5 d1">
        <div className="row d">
        <div className="col-sm-1 data">S/N</div>
        <div className="col-sm-2 data">Full name</div>
        <div className="col-sm-2 data">Email Address</div>
        <div className="col-sm-2 data">Time added</div>
        <div className="col-sm-2 data">Faculty</div>
        <div className="col-sm-2 data">Department</div>
        <div className="col-sm-1 data">Action</div>
        </div>
       
        
        {props.candidate.map(candi => 
        <Candidate key={candi.id} item={candi} viewCandidate={props.viewCandidate}/>
        
    )}
    </div>
    )
}
export default CandidateList;