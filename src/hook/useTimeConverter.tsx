import React, { useEffect, useState } from "react";

export const useTimeFormater = (seconds: number) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const formattedTime = `${Math.floor(time / 60)}:${time % 60 < 10 ? "0" : ""}${
    time % 60
  }`;

  return formattedTime;
};
