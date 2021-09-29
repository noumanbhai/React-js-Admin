import React from "react";
import Footer from "../Main/Footer";
import Navbar from "../Main/Navbar";
import Sidebar from "../Main/Sidebar";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Pagewrapper() {
  return (
    <>
      {/*  Page Wrapper */}
      <div id="wrapper" style={{ marginBottom: "-33px" }}>
        {/*  Sidebar */}
        <Sidebar />
        {/*  End of Sidebar */}

        {/*  Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*  Main Content */}
          <div id="content">
            {/*  Topbar */}
            <Navbar />
            {/*  End of Topbar */}

            {/*  Begin Page Content */}
            <div className="container-fluid">
              {/*  Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
            </div>
          </div>

          {/*   Page Heading end*/}
          {/* center  start*/}
          {/* <About />
          <Home />
          <Contact /> */}
          {/* center end */}

          {/*  Footer */}
          <Footer />
          {/*  End of Footer */}
        </div>
        {/*  End of Content Wrapper */}
      </div>
      {/*  End of Page Wrapper */}
      <hr />
      {/* Scroll start */}
      <a
        class="scroll-to-top rounded"
        href="#page-top"
        style={{ display: "inline" }}
      >
        <i class="fas fa-angle-up"></i>
      </a>
      {/* Scroll start end*/}
      {/* logout modal */}
      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a class="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* logout modal end */}
    </>
  );
}

export default Pagewrapper;
