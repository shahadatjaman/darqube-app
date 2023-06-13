import React from "react";
import { ReactComponent as Battle } from "../battle-icon.svg";
import "./styles.css";
import { AiFillCaretUp } from "react-icons/ai";

const Level = () => {
  return (
    <div className=" pb-3  w-full my-4">
      <div className="flex justify-center pb-3 border-b-2 border-gray-700">
        <div className="mr-5">
          <span className="mr-4 text-primary">0</span>
          <text className="text-color">Wins</text>
        </div>
        <div>
          <span className="loss mr-4">0</span>
          <text className="text-color">losses</text>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex text-sm">
          <Battle />
          <span className="text-color ml-4">0</span>
        </div>
        <div className="text-sm flex">
          <span className="text-color">Performance</span>
          <span className="text-primary ml-2">0.00%</span>
          <AiFillCaretUp className="text-primary mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Level;
