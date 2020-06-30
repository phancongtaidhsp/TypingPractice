import React from "react";
import { Redirect } from "react-router-dom";

const LogoutPage = () => {
  localStorage.removeItem("user");
  return (
    <Redirect
      to={{
        pathname: "/",
      }}
    />
  );
};

export default LogoutPage;
