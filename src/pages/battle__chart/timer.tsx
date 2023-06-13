import React, { FC, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

interface PropsTypes {
  value: number;
}

export const Timer: FC<PropsTypes> = ({ value }) => {
  const [seconds, setSeconds] = useState(value * 60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);

  return <ProgressBar seconds={seconds} max={value} />;
};
