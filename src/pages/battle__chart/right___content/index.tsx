import "./styles.css";
import { ReactComponent as Battle } from "./battle-icon.svg";
import Profile from "./profile";
import { user1, user2 } from "./data";
import Categories from "./categories";
const RightContent = () => {
  return (
    <div className="bg p-5 rounded-xl">
      <div className="flex w-full">
        <div className="left-pro">
          <Profile
            avatar={user1.avatar}
            name={"You"}
            persent={0.05}
            point={55}
          />
        </div>

        <div className="right-pro">
          <Profile avatar={user2.avatar} name={user2.name} persent={0.53} />
        </div>
      </div>
      <div className="border-icon">
        <span className="absolute -top-1">
          <Battle />
        </span>
      </div>

      <Categories />
    </div>
  );
};

export default RightContent;
