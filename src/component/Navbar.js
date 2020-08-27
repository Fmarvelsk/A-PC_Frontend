import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (){
    return(
        
        <nav className="navbar navbar-expand-lg navbar-is-sticky">
        <div className="container">
            
        <Link className="navbar-brand" to="/home">
          
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="menu-icon__circle">
              </span>
          <span className="menu-icon">
                  <span className="menu-icon__bar"></span>
                  <span className="menu-icon__bar"></span>
                  <span className="menu-icon__bar"></span>
              </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-lg-auto">
              
              <li className="nav-item">
              <Link className="nav-link" to="/home/addCandidate">Add Candidate</Link></li>
              <li className="nav-item">
              <Link className="nav-link" to="/">View Candidate</Link></li>
              <li className="nav-item">
              <Link className="nav-link" to="/">Notificationn</Link></li>
              
          </ul>
          </div>
            </div>
            </nav>
   
    )
      

}
export default Navbar