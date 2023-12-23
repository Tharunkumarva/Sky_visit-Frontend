import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info"> {/* Change bg-light to bg-info */}
      <div className="container">
        <div className="col-lg-9">
          <div className="navbar-brand">
            <NavLink to="/" className="text-dark text-decoration-none fs-2">
              Sky Visit ✈️
            </NavLink>
          </div>
        </div>
        <div className="col-lg-1">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-outline-dark">
                <NavLink className="nav-link text-dark fs-6 text-decoration-none" to="/signup">
                  SignUp
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-lg-1">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button type="button" className="btn btn-outline-dark ml-2">
                <NavLink className="nav-link text-dark fs-6 text-decoration-none" to="/signin">
                  SignIn
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;



// mongodb://localhost:27017/