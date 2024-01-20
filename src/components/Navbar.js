import React from "react";
import PropTypes from "prop-types"; // Here we import ProptTypes


export default function Navbar(props){
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <li className="navbar-brand" href="#">
            {props.title}
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <li className="nav-li active" aria-current="page" href="#">
                  Home
                </li>
              </li>
              <li className="nav-item">
                <li className="nav-li" href="#">
                  About Us
                </li>
              </li>
            </ul>
            <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.RedtoggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Red-Dark Mode</label>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired }; // this will help to set the type of the props
Navbar.defaultProps = { title: "Set your title here"};  // This will set the default text
