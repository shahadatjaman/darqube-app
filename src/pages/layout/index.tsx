import React from "react";
import TopBar from "./top__header/";
import { useWindowWidth } from "../../hook/useWindowWidth";

interface PropTypes {
  children: React.ReactNode;
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  const isMedium = useWindowWidth(900);

  return (
    <div
      className={`h-screen overflow-x-hidden  pb-10 ${
        !isMedium && `overflow-hidden`
      }`}
    >
      <TopBar />
      {children}
    </div>
  );
};

export default Layout;
