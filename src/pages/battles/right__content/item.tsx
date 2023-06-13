import React, { FC } from "react";
import Avatar from "../../../shared/avatar";

interface PropsTypes {
  id: number;
  name: string;
  avatar: string;
  wins: number;
  returns: number;
}
const Item: FC<PropsTypes> = (props) => {
  const { avatar, id, name, returns, wins } = props;
  return (
    <div key={id} className="item-wrapper">
      <div className="flex">
        <span
          className={`id-styled ${id === 1 ? "bg-secondary" : "bg-slate-800"}`}
        >
          {id}
        </span>
        <Avatar src={avatar} alt={name} className="mx-3" />
        <h5>{name}</h5>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-primary mr-2">{wins}</span>
          <span className="text-gray-600">Wins</span>
        </div>
        <div>
          <span className="text-gray-600">Return</span>
          <span className="text-primary ml-2">{returns}%</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
