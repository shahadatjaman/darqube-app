import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const Breacrumb = () => {
  return (
    <div className="flex">
      <FaAngleLeft className="mr-3 text-gray-500" />
      <span className="font-bold text-xs text-gray-500">
        BACK TO LEADERBOARD
      </span>
    </div>
  );
};

export default Breacrumb;
