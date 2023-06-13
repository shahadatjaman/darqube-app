import { useState } from "react";

import "./styles.css";

import RightContent from "./right__content";
import Logo from "./logo";
import LeftContent from "./left__content";
import { useWindowWidth } from "../../hook/useWindowWidth";

const Login = () => {
  const [themeType, setThemeType] = useState("danger");
  const isMedium = useWindowWidth(900);

  const themeHandler = (value: string) => {
    setThemeType(value);
  };
  return (
    <>
      <div
        className={`${
          themeType === "danger" &&
          `${!isMedium ? "root-bg-danger" : "bg-danger"}`
        } ${themeType === "success" && "root-bg-danger"}
         overflow-hidden login-wrap`}
      >
        <Logo />
        <div
          className={`${
            themeType === "danger" && `${!isMedium && "bg-danger"}`
          } ${themeType === "success" && "bg-success"} content-wrap ${
            isMedium ? "w-full" : "w-3/5"
          }`}
        >
          <div className={`w-2/3 ${isMedium && "hidden"}`}>
            <LeftContent themeHandler={themeHandler} />
          </div>
          <div className={`${isMedium ? "w-full" : "w-5/12 bg-right-login"}`}>
            <RightContent themeType={themeType} />
          </div>
        </div>
        <div className=" text-center font-bold text-gray-700 pb-8">
          <span>Copyright © 2023 Darqube. All rights reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Login;
