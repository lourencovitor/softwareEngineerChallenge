/* eslint-disable no-unused-expressions */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../app/pages/Home";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);
export default Router;
