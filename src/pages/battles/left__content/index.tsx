import React from "react";
import "./styles.css";
import Profile from "./profile";
import BattleHistory from "./battle__history";

const LeftContent = () => {
  return (
    <>
      <div className="dis-button rounded-full px-4">
        <h4 className="">BATTLE AND HAVE FUN!</h4>
      </div>
      <Profile />
      <BattleHistory />
    </>
  );
};

export default LeftContent;
