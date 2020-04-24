import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, connected, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return connected ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/category", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
