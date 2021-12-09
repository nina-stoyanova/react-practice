import React, { useContext } from "react";
import AuthContext from "../../store/auth.context";

import classes from "./Navigation.module.css";

//consumer - takes a child (function), with an argument the context data and return the JSX code
//then we have access to the isLoggedIn prop with context object
const Navigation = () => {
  const context = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
