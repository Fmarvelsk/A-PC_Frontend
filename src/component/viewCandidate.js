import React, {Component} from 'react';

export class viewCandidate extends Component{

    state = {
        Accessor:[]
    }
    render(){
        return(
            <div>
            <div className="candidate mt-5">
            <h3>Candidate name</h3>
            </div>
            <div className="row">
            {this.state.Accessor.map( (Accessor, key) =>
            <div className="col-sm-4 col-md-4 col-xl-4 mb-5" key={Accessor.id}>
            <div className="width">
            <input type='text' 
            name="Fullname"
             placeholder={Accessor.Fullname}/>
            <input type='text' value={Accessor.University} 
            name="University"
           
              placeholder="University"/>
            <input type='text' value={Accessor.Email} 
            name="Email"
            placeholder="Email"/>
            
            <input type='tel' value={Accessor.Number} 
            name="Number" 
            
             placeholder="Number"/>
               
            </div>
            </div>
            
            )}
            
            </div>
            
            
            <button className="btnSave mt-5" type="button" 
            onClick= {e => { e.preventDefault()
               
               
            }
            }>Edit Profile</button>
            
            </div>
        )
    }
}


export default viewCandidate