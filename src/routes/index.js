import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import HomePage from "../screen/home/Home";
import SignIn from "../screen/login/Login";
import SignUp from "../screen/cadastro/Cadastro";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/cadastro" component={SignUp} />

      {/* <Route path="/home" component={Home} isPrivate /> */}

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={HomePage} />
    </Switch>
  );
}
