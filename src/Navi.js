import React from "react";
import { Link } from "react-router-dom";
import Nav from "bulma";
import "bulma/css/bulma.min.css";
import "./App.css";

const Navi = () => {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link class="navbar-item" to={"https://iiitu.ac.in/"}>
            <img src="iiituna.png" width="100" height="68"></img>
          </Link>

          <Link
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item" >Home</Link>

            <Link class="navbar-item" to={"/attendance"}>Attendance</Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <Link class="navbar-item">More</Link>

              <div class="navbar-dropdown">
                <Link class="navbar-item">About</Link>
                <Link class="navbar-item">Jobs</Link>
                <Link class="navbar-item">Contact</Link>
                <hr class="navbar-divider"></hr>
                <Link class="navbar-item">Report an issue</Link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link class="button is-danger">
                  <strong>Sign up</strong>
                </Link>

                <Link class="button is-light">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navi;
