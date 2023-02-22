import React, { useState } from "react";

import Nav from "bulma";
import 'bulma/css/bulma.min.css';
import './App.css';




class Navi extends React.Component {
  render() {
     return (
        <div >
           <nav class="navbar" role="navigation" aria-label="main navigation" >
        <div class="navbar-brand">
          <a class="navbar-item" href="https://iiitu.ac.in/">
            <img src="iiituna.png" width="100" height="68"></img>
          </a>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              
              Home
            </a>
      
            <a class="navbar-item">
              Attendance
            </a>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-item" >
                More
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider"></hr>
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              
              <div class="buttons">
                <a class="button is-danger">
                  <strong >Sign up</strong>
                </a>
                
                <a class="button is-light">
                  Log in
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </nav>
        </div>
     )
  }
}
export default Navi;