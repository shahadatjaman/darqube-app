import React from "react";
import { logo } from "./data";

const Logo = () => {
  return (
    <div className="w-9 mr-4">
      <img className="w-full" src={logo} alt="darqube" />
    </div>
  );
};

export default Logo;
