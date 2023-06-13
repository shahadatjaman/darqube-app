import React from "react";
import Layout from "../layout";
import "./styles.css";

import Avatar from "../../shared/avatar";
import { BsXLg } from "react-icons/bs";
import { user } from "../wins/data";
import { useWindowWidth } from "../../hook/useWindowWidth";
import { useNavigate } from "react-router-dom";

const Matching = () => {
  const isMedium = useWindowWidth(900);
  const navigate = useNavigate();

  const cancelMatch = () => {
    navigate("/battle_chart");
  };
  return (
    <Layout>
      <div className="pb-8 h-90 flex justify-center items-center flex-col my-8">
        <div>
          <h1
            className={`text-4xl text-white text-center font-bold ${
              isMedium && `text-lg`
            }`}
          >
            We are looking for an opponent...
          </h1>
        </div>

        <div className={`match-wrapper ${isMedium && `flex-col`}`}>
          <div className="flex justify-center items-center flex-col">
            <Avatar src={user.avatar} alt={user.name} width={80} />
            <h3 className="text-white font-bold mt-4 text-xl">You</h3>
            <span className="bg-gray-600 px-2 py-1 text-xs text-white font-bold rounded-2xl">
              554
            </span>
          </div>
          <div className={`vs-style ${isMedium && "my-8"}`}>VS.</div>
          <div className="flex mb-8">
            <Avatar src="" alt="" loading={true} width={50} />
          </div>
        </div>

        <div className=" mt-44">
          <span
            onClick={cancelMatch}
            className="uppercase flex text-white border-2 border-gray-700 rounded-full px-3 py-2 font-bold text-xs"
          >
            <BsXLg className="mr-2 text-white" />
            Cancel
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Matching;
