import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic fw-bold" to="3" >
            <p style={{fontSize:'3rem'}}>FoodDel</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#"style={{fontSize:'1.5rem'}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{fontSize:'1.5rem'}}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
