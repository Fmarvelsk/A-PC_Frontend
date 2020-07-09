import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CandidateList from './CandidateList';
import addCandidate from './addCandidate'

export class Homepage extends Component {
    state = {
        candidate:[
            {   id :1,
                name : 'barney'
            },
            {   id: 2,
                name : 'marvellous'
            },{   id :3,
                name : 'barney'
            },
            {   id: 4,
                name : 'marvellous'
            },{   id :5,
                name : 'barney'
            },
            {   id: 6,
                name : 'marvellous'
            },{   id :7,
                name : 'barney'
            },
            {   id: 8,
                name : 'marvellous'
            }
        ]
    }
    viewCandidate = (e) =>{
        console.log('clicked')
    }
    
    render(){
        return(
            <Router>
            <div className="home-body">
            <Navbar />
            <Route path="/cand" render= { props =>
                <React.Fragment>
                <CandidateList candidate={this.state.candidate} viewCandidate={this.viewCandidate}/>
                {console.log(props)}
                </React.Fragment>
            } />
            <Route path="/addCandidate" component={addCandidate}/>
            
            
        
            
            </div>
            </Router>
        )
    }
}
export default Homepage