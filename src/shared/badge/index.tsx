import { FC } from "react";
import "./styles.css";

interface PropsTypes {
  icon: any;
  count: number;
}

const Badge: FC<PropsTypes> = (props) => {
  const { count, icon } = props;
  return (
    <div className="wrapper">
      <span
        className={`count-style ${count > 99 ? "w-6" : "w-5"} ${
          count > 99 ? "h-4" : "h-5"
        } ${count > 99 ? "rounded-lg" : "rounded-full"}`}
      >
        {count > 99 ? "99+" : count}
      </span>
      <div>{icon}</div>
    </div>
  );
};

export default Badge;
