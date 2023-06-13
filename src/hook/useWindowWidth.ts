import { FC, useEffect, useState } from "react";

export const useWindowWidth = (width: number) => {
  const [isMatched, setIsMatched] = useState<boolean>(() => {
    // Set initial value based on the current window width
    return width > window.innerWidth;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMatched(width > window.innerWidth || window.innerWidth < 328);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return isMatched;
};
