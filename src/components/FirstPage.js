import React from "react";
import { Link } from "react-router-dom";
import Navi from "../Navi";
import Display from "./Display";
import '../Styles/card.css'
const FirstPage = () => {
  return (
    <div>
      <Navi />
      <Display />
      <div className="flx">
      <Link to={"/courses"}>
        <div className="card">
          <img src="degree.jpg" alt="photo" className="card_img"/>
          <h2>COURSES</h2>
          <p className="card_p">
            IIITUna offers BTech Computer Science , Information Technology,
            Electronics and Communication Engineering are
          </p>
        </div>
      </Link>
      <Link to={"/Engneering"}>
        <div className="card">
          <img src="degree.jpg" alt="photo" className="card_img"/>
          <h2>COURSES</h2>
          <p className="card_p">
            IIITUna offers BTech Computer Science , Information Technology,
            Electronics and Communication Engineering are
          </p>
        </div>
      </Link>
      <Link to={"/Engneering"}>
        <div className="card">
          <img src="degree.jpg" alt="photo" className="card_img"/>
          <h2>COURSES</h2>
          <p className="card_p">
            IIITUna offers BTech Computer Science , Information Technology,
            Electronics and Communication Engineering are
          </p>
        </div>
      </Link>
      <Link to={"/Engneering"}>
        <div className="card">
          <img src="degree.jpg" alt="photo" className="card_img"/>
          <h2>COURSES</h2>
          <p className="card_p">
            IIITUna offers BTech Computer Science , Information Technology,
            Electronics and Communication Engineering are
          </p>
        </div>
      </Link>
      </div>
      
    </div>
  );
};

export default FirstPage;
