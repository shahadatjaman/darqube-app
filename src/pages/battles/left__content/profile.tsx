import React from "react";
import "./styles.css";
import Avatar from "../../../shared/avatar";
import { user } from "../data";
import Level from "./level";

const Profile = () => {
  return (
    <div className="profile-wrapper pt-3 rounded-lg px-5">
      <div className="my-4 text-center flex justify-center flex-col items-center">
        <Avatar src={user.avatar} alt={user.name} width={60} />
        <h2 className="text-white mt-4 text-xl">{user.name}</h2>
        <Level />
      </div>
    </div>
  );
};

export default Profile;
