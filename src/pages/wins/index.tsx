import React from "react";
import "./styles.css";
import { HiArrowLongRight } from "react-icons/hi2";
import Layout from "../layout";
import { HiOutlineHeart } from "react-icons/hi2";
import Avatar from "../../shared/avatar";
import { user } from "./data";
import { useWindowWidth } from "../../hook/useWindowWidth";

const Wins = () => {
  const isMedium = useWindowWidth(900);
  return (
    <Layout>
      <div className="pb-8 h-90 flex justify-center items-center flex-col my-8">
        {/* Heart  */}
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-white block text-3xl font-bold">You lost!</h1>

          <div className="mt-8 relative">
            <div className="count-heart-style text-white font-bold">0</div>
            <HiOutlineHeart className={"text-8xl text-secondary"} />
          </div>
        </div>

        {/* investors */}
        <div
          className={`investor-wrapper ${
            !isMedium ? "flex" : "px-8"
          }  justify-center`}
        >
          <div
            className={`${
              isMedium ? "w-full mb-8" : "w-1/3 mx-8"
            } investor-left `}
          >
            <div className="mr-32 mb-3 text-1xl font-bold">
              <span className="text-white w-full ml-8">You</span>
            </div>
            <div className="mr-20 mb-2 text-2xl font-bold">
              <span className="text-white">-0.58%</span>
            </div>
            <div className="absolute -top-1 right-0">
              <Avatar src={user.avatar} alt={user.name} width={60} />
            </div>
          </div>
          <div
            className={`${isMedium ? "w-full" : "w-1/3 mx-8"} investor-right`}
          >
            <div className="mr-auto ml-20 mb-1 text-2xl font-bold">
              <span className="text-white">-0.58%</span>
            </div>
            <div className="mr-8 mb-3 text-1xl font-bold">
              <span className="text-white w-full ml-8">Lorraine</span>
            </div>
            <div className="absolute -top-1 left-0">
              <Avatar src={user.avatar} alt={user.name} width={60} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-slate-800 rounded-xl flex justify-center items-center px-5 py-3">
            <span className="bg-black mr-1 text-white text-sm px-3 py-2 rounded-full">
              999
            </span>
            <span className="bg-primary mr-2 text-white text-sm px-3 py-2 rounded-full">
              +9
            </span>
            <p className="text-gray-400">Your new position in Leaderboard</p>
          </div>
        </div>
        <span className="block w-1/3 mx-auto mt-12 border-gray-600 border-b-2 "></span>

        <div
          className={`flex ${
            isMedium && "flex-col-reverse"
          } justify-center items-center mt-8`}
        >
          <div className={`flex ${isMedium && "mt-8 w-full"}`}>
            <span className="bg-white rounded-full text-sm font-bold px-2 py-2">
              DONE
            </span>
            <span className="bg-transparent flex justify-between items-center border-2 border-gray-500 rounded-full text-sm font-bold px-2 py-2 text-white  ml-8">
              <HiArrowLongRight className="text-white font-bold mr-2" />
              BATTLES AGAIN
            </span>
          </div>

          <div className="ml-8 flex">
            <Avatar src={user.avatar} alt={user.name} />
            <span className="bg-gray-600 rounded-2xl px-4 justify-center items-start w-16 flex ml-4 text-white font-bold py-1">
              <HiOutlineHeart className="text-secondary font-bold text-xl mr-2" />{" "}
              8
            </span>
            <span className="text-white font-bold text-sm ml-2 mt-2">
              LIVES LEFT
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wins;
