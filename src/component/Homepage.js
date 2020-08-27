import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import CandidateList from './CandidateList';
import addCandidate from './addCandidate';
import addAcessor from './addAcessor';
import viewCandiate from './viewCandidate'


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
    viewCandidate = (id) =>{
      
       console.log(id)
    }
    
    render(){
        return(
            <Switch>
            <>
            <div className="home-body">
            <Navbar />
            <Route path="/home/cand" render= { props =>
                <React.Fragment>
                <CandidateList candidate={this.state.candidate} viewCandidate={this.viewCandidate}/>

                </React.Fragment>
            } />
            <Route path="/home/addcandidate" component={addCandidate}/>
            <Route path="/home/addAcessor" component={addAcessor} />
            <Route path ="/home/viewCandidate" component ={viewCandiate}/>
        
            </div>
            
            </>
            </Switch>
        

        )
    }
}
export default Homepage