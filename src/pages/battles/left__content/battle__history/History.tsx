import React, { FC, useState } from "react";
import "./styles.css";
import Avatar from "../../../../shared/avatar";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import HistoryCollapse from "./history__collapse";

interface PropsTypes {
  id: number;
  avatar: string;
  his_name: string;
  date: string;
  key: number;
}

const History: FC<PropsTypes> = (props) => {
  const [collapsId, setCollapsId] = useState(0);
  const { avatar, date, his_name, key, id } = props;

  const collapsHandler = (id: any) => {
    if (collapsId === id) {
      setCollapsId(0);
    } else {
      setCollapsId(id);
    }
  };

  return (
    <div key={key} className={`transition-all mb-2 px-2 rounded-xl`}>
      <div
        className={`history-wrapper ${
          collapsId === id ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={() => collapsHandler(id)}
      >
        <div className="flex justify-start items-center">
          {collapsId === id ? (
            <AiOutlineDown className="mr-3" />
          ) : (
            <AiOutlineRight className="mr-3" />
          )}
          <Avatar src={avatar} alt="U" />
          <h2 className="text-white ml-3">{his_name}</h2>
        </div>
        <div>
          <span className="text-color">{date}</span>
        </div>
      </div>
      {collapsId === id && <HistoryCollapse />}
    </div>
  );
};

export default History;
