import { useWindowWidth } from "../../hook/useWindowWidth";
import Layout from "../layout";
import CenterContext from "./center__content";
import LeftContent from "./left__content";
import RightContent from "./right__content";

import "./styles.css";

const Battles = () => {
  const isMedium = useWindowWidth(900);
  return (
    <Layout>
      <div
        className={`my-5 ${
          !isMedium && "overflow-hidden space-x-9 flex"
        } mx-7 h-90 mb-5`}
      >
        <div
          className={`${!isMedium && `flex space-x-8`}  ${
            isMedium ? `w-full` : `w-4/5`
          }`}
        >
          {/* left content */}
          <div
            className={`${isMedium ? "w-full ceter-content mb-4" : "w-1/3"}`}
          >
            {isMedium ? <CenterContext /> : <LeftContent />}
          </div>
          {/* Center content */}
          <div
            className={` ${
              !isMedium ? "w-10/12 ceter-content" : "w-full"
            } rounded-xl`}
          >
            {!isMedium ? <CenterContext /> : <LeftContent />}
          </div>
        </div>
        {/* Right content */}
        <div className={`${isMedium ? `w-full` : `w-1/5`}`}>
          <RightContent />
        </div>
      </div>
    </Layout>
  );
};

export default Battles;
