import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

//Header
function Headar() {
  return (
    <div className="divHeadar">
      <div className="">
        <span className="textLogo"> Cover </span>
      </div>
      <div className="divSilok">
        <div>
          <NavLink className="silki" to="/home">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className="silki" to="/features">
            Features
          </NavLink>
        </div>
        <div>
          <NavLink className="silki" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Headar;
