import React from "react";
import { AiOutlineHistory, AiOutlineScan } from "react-icons/ai";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <AiOutlineHistory />
        <span className="text-sm text-white ml-4 font-bold">
          MY BATTLES HISTORY
        </span>
      </div>
      <div>
        <AiOutlineScan className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
