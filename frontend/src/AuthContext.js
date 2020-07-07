import React from "react";

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

export const AuthContext = React.createContext({
  auth: false,
  setAuth: function (auth) {
    // this.auth = auth;
  },
});
