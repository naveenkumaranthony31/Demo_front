import React from "react";
import logo from "../../assets/Images/Rail-logo.png";
import "./Navbar.css";
import Trains from "../Trains/Trains";
import Login from "../Login/Login"
import Register from "../Login/Register"

const Navbar = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-light py-2 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <img src={logo} alt="IRCTC Logo" width="70" />
          </div>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Login></Login>
              </li>
              <li className="nav-item">
              <Register></Register>
              </li>
              <li className="nav-item">
                <Trains></Trains>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a href="https://equery.irctc.co.in/irctc_equery/" className="nav-link">
                  Help & Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
