import React from "react";
import "./styles.css";
import Header from "./header";
import Categories from "./categories";
import Histories from "./histories";
const BattleHistory = () => {
  return (
    <div className="wrapper h-90 px-3 py-5 rounded-lg overflow-hidden">
      <Header />
      <Categories />
      <Histories />
    </div>
  );
};

export default BattleHistory;
