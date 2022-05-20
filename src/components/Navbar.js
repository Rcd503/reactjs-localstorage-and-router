import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  let activeStyle = {
    // textDecoration: "underline",
    color: "red",
  };
  let activeClassName = { color: "red" };
  return (
    <div>
      <nav className="navbar" style={{backgroundColor: "#e3f2fd"}}>
        {/* <nav className="navbar navbar-expand-lg bg-light"> */}
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
                {/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                //   className="navbar-brand"
                  style={({ isActive }) => (isActive ? {activeStyle} : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#"> */}
                {/* Link
                </a> */}
                <NavLink
                  className="nav-link"
                  to="/blogs"
                  style={({ isActive }) => (isActive ? {activeStyle} : undefined)}
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#"> */}
                {/* Link
                </a> */}
                <NavLink
                  className="nav-link"
                  to="/contact"
                  Style={({ isActive }) =>
                    isActive ? {activeClassName} : undefined
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
        {/* </nav> */}
      </nav>
      <Outlet />
    </div>
  );
}
