import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Battle } from "./battle-icon.svg";
import "./styles.css";
import { useTimeFormater } from "../../hook/useTimeConverter";

interface PropsTypes {
  max: number;
  seconds: number;
}

const ProgressBar: FC<PropsTypes> = ({ max, seconds }) => {
  const min = useTimeFormater(max * 60);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds === 0) {
      navigate("/wins");
    }
  }, [seconds]);

  return (
    <div className="w-3/4 flex justify-end items-center">
      <Battle className="text-primary text-2xl mr-3" />
      <progress className="rounded-2xl" value={seconds} max={max * 60} />
      <span
        className={`text-white ${
          seconds > 60 ? "bg-primary" : "bg-secondary"
        } ml-4 px-4 py-1 rounded-2xl font-bold`}
      >
        {min}
      </span>
    </div>
  );
};

export default ProgressBar;
