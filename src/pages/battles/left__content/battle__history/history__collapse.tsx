import "./styles.css";
import Avatar from "../../../../shared/avatar";
import { user } from "../../data";

const HistoryCollapse = () => {
  return (
    <div className="collaps-wrapper">
      <div className="flex w-full space-x-5">
        <div className="left-collaps-bg left-content">
          <span className="persent">0.00%</span>
          <Avatar src={user.avatar} alt={user.name} />
        </div>
        <div className="w-2/4 right-collaps-bg right-content">
          <Avatar src={user.avatar} alt={user.name} />
          <span className="persent ml-1">0.00%</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryCollapse;
