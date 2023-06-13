import React, { FC } from "react";
import "./styles.css";
import Button from "./buton";
import { icons } from "./data";

import ContactForm from "./form";
import { useWindowWidth } from "../../../hook/useWindowWidth";

interface PropsTypes {
  themeType: string;
}

const RightContent: FC<PropsTypes> = ({ themeType }) => {
  const isMedium = useWindowWidth(900);
  return (
    <div className={`right-content-wrapper ${isMedium ? "px-4" : "px-12"}`}>
      <h2 className="login-head">
        Sign In to {themeType === "danger" ? "Terminal" : "Messenger"}
      </h2>

      <div className="mt-6">
        <Button>
          <img className="w-4 mr-2" src={icons.google} alt="google" /> Sign In
          with Google
        </Button>
      </div>

      <div className="mt-4">
        <Button>
          <img className="w-4 mr-2" src={icons.fb} alt="facebook" /> Sign In
          with Google
        </Button>
      </div>

      <div className="or-sign">
        <h3>Or Sign In with email</h3>
      </div>
      <ContactForm />

      <div className="text-gray-400 font-medium text-center">
        By signing in, you agree with <br /> Terms of Service and Privacy Policy
      </div>
    </div>
  );
};

export default RightContent;
