import React from "react";
import "../styles.css";
import "./styles.css";

import { BsArrowRight, BsFillMenuButtonFill } from "react-icons/bs";
import { useWindowWidth } from "../../../hook/useWindowWidth";
import { useNavigate } from "react-router-dom";
const CenterContext = () => {
  const isMedium = useWindowWidth(900);
  const navigate = useNavigate();
  const startBattle = () => {
    navigate("/matching");
  };
  return (
    <div
      className={`center-content-wrapper ${!isMedium ? "h-full" : `h-screen`}`}
    >
      <div className="mb-4">
        <h1 className="h1-styled pt-9 mb-6">Grow your trading muscles!</h1>
        <div className="flex justify-center items-center button-wrapper">
          <button onClick={startBattle} className="button-style rounded-full">
            <BsArrowRight /> Start a battle
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-between flex-col items-center">
          <div className="flex">
            <h4 className="text-white text-2xl font-bold mr-8">Learn & Earn</h4>
            <span className="battle-btn-wrapper px-4 text-white">
              <BsFillMenuButtonFill />
              <span className="battle-btn font-bold">BATTLES TOUR</span>
            </span>
          </div>
          <div className="mt-8 w-3/5 mx-auto">
            <p className="text-gray-500 font-bold text-center">
              Trading Battles are 10 minutes games that are played 1-to-1 in
              real-time market conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterContext;
