import React from "react";
import { ReactComponent as Battle } from "../battle-icon.svg";
import Items from "./items";
const BodyContent = () => {
  return (
    <div className="bg rounded-xl mt-4 text-white pl-6 pt-6">
      <div className="flex font-bold">
        <Battle className="mr-3 text-sm" />
        <span>LEADERBOARD</span>
        <span className="text-secondary ml-2">#BATTLES</span>
      </div>

      <Items />
    </div>
  );
};

export default BodyContent;
