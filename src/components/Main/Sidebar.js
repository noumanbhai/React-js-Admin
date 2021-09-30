import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";

// import NavLink from "react-router-dom";
function Sidebar() {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*  Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            Test React <sup>2</sup>
          </div>
        </a>

        {/*  Divider */}
        <hr className="sidebar-divider my-0" />

        {/*  Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/*  Divider */}
        <hr className="sidebar-divider" />

        {/*  Heading */}
        <div className="sidebar-heading">Interface</div>

        {/*  Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link
                className={`collapse-item ${
                  location.pathname === "/" ? "active" : ""
                }`}
                exact
                to="/"
              >
                Home
              </Link>
              <Link
                className={`collapse-item ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                exact
                to="/about"
              >
                About
              </Link>
              <Link
                className={`collapse-item ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/Contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </li>

        {/*  Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a className="collapse-item" href="utilities-color.html">
                Colors
              </a>
              <a className="collapse-item" href="utilities-border.html">
                Borders
              </a>
              <a className="collapse-item" href="utilities-animation.html">
                Animations
              </a>
              <a className="collapse-item" href="utilities-other.html">
                Other
              </a>
            </div>
          </div>
        </li>

        {/*  Divider */}
        <hr className="sidebar-divider" />

        {/*  Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0 nnn"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </>
  );
}

export default Sidebar;
