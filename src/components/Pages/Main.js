import React from 'react'
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import NotFound from '../Body/NotFound';

function Main() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact component="/NotFound">
         <NotFound/>
          </Route>
        </Switch>
      </>
    );
}

export default Main
