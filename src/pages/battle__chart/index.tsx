import React from "react";
import Layout from "../layout";
import Breacrumb from "./breacrumb";
import { Timer } from "./timer";
import RightContent from "./right___content";
import { WidgetComponent } from "./left__content";

const BattleChart = () => {
  return (
    <Layout>
      <div className="flex m-8 space-x-8">
        <div className="w-3/4">
          <div className="flex justify-between items-center">
            <Breacrumb />
            <Timer value={9} />
          </div>
          <WidgetComponent />
        </div>
        <div className="w-1/5">
          <RightContent />
        </div>
      </div>
    </Layout>
  );
};

export default BattleChart;
