import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillExclamationCircleFill, BsCheckCircleFill } from "react-icons/bs";
const HeadContent = () => {
  return (
    <div className="bg p-4 rounded-xl">
      <div className="flex items-center">
        <span className="heart flex justify-between items-center px-2 rounded-2xl">
          <AiOutlineHeart className="text-secondary" />
          <span className="text-sm text-white font-bold ml-2">5</span>
        </span>
        <span className="sm-text text-white font-bold mr-2 ml-2">
          LIVES LEFT
        </span>
        <BsFillExclamationCircleFill />
      </div>

      <div className="border-gray-700 border-2 rounded-md py-2 flex justify-center items-center flex-col mt-3">
        <h5 className="sm-text text-white">Fully equipped!</h5>
        <div>
          <ul className="my-4">
            {[
              { icon: <AiOutlineHeart /> },
              { icon: <AiOutlineHeart /> },
              { icon: <AiOutlineHeart /> },
              { icon: <AiOutlineHeart /> },
              { icon: <AiOutlineHeart /> },
            ].map((value, index) => (
              <li className="heat-svg inline-block mr-1">{value.icon}</li>
            ))}
          </ul>
          <span className="sm-text text-gray-400">
            <BsCheckCircleFill className="inline-block mr-2 text-primary text-lg" />
            You have maximum amount of lives
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeadContent;
