import React from "react";
import { Route, Redirect } from "react-router";
import { signup } from "./helpers/auth";

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/chat" />
        )
      }
    />
  );
}

export default PublicRoute;
