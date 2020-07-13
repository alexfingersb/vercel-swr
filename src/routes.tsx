import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Welcome from "./components/Welcome";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

export interface User {
  id: string;
  name: string;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/list" component={UserList} />
        <Route path="/user/:id" component={UserDetail} />
        <Route path="/about" component={About} />
        <Route path="/" component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}
