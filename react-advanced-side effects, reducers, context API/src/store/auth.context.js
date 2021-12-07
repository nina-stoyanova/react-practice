import React from "react";
//an object that contains a component
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
