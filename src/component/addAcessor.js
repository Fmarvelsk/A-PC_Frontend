import React, {useState} from 'react';


const AddAcessor =  () => {
    const [Accessor, newAcessor] = useState([
        {id: 1, Fullname : '', University: '', Email: '', Number:''},
        {id: 2, Fullname : '', University: '', Email: '', Number:''},
        {id: 3, Fullname : '', University: '', Email: '', Number:''}
        ]);
     return(
                <div className="paddin">
                <div className="candidate mt-5">
                <h3>Candidate name</h3>
                </div>
                <div className="row">
                {Accessor.map( (Accessor, key) =>
                <div className="col-sm-4 col-md-4 col-xl-4 mb-5" key={Accessor.id}>
                <div className="width">
                <input type='text' value={Accessor.Fullname} 
                name="Fullname"
                 onChange={ e => {
                     const Fullname = e.target.value
                     newAcessor((result)=> result.map(x => x.id === Accessor.id ? {
                       ...x,
                       Fullname
                     } :x )
                     )
                     
                 }} 
                 placeholder="Fullname"/>
                <input type='text' value={Accessor.University} 
                name="University"
                onChange={e => {
                    const University = e.target.value
                    newAcessor((result)=> result.map(y => y.id === Accessor.id ? {
                      ...y,
                      University
                    } :y )
                    )
                    
                }}
                  placeholder="University"/>
                <input type='text' value={Accessor.Email} 
                name="Email" onChange={ e => {
                    const Email = e.target.value
                    newAcessor((result)=> result.map(z => z.id === Accessor.id ? {
                      ...z,
                      
                      Email
                    } :z )
                    )
                    
                }} 
                placeholder="Email"/>
                
                <input type='tel' value={Accessor.Number} 
                name="Number" 
                onChange={e => {
                    const Number = e.target.value
                    newAcessor((result)=> result.map(x => x.id === Accessor.id ? {
                      ...x,
                      Number
                    } :x )
                    )
                    
                }}
                 placeholder="Number"/>
                   
                </div>
                </div>
                
                )}
                
                </div>
                
                
                <button className="btnSave mt-5" type="button" 
                onClick= {e => { e.preventDefault()
                    console.log(
                        JSON.stringify(Accessor)
                    )
                   
                   
                }
                }>Save&Continue</button>
                
                </div>
            )
        }


export default AddAcessor