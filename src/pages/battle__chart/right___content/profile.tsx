import { FC } from "react";
import Avatar from "../../../shared/avatar";
import "./styles.css";
interface PropsTypes {
  avatar: string;
  name: string;
  point?: number;
  persent: number;
}

const Profile: FC<PropsTypes> = (props) => {
  const { avatar, name, persent, point } = props;
  return (
    <div className="pro-wrapper">
      <Avatar src={avatar} alt={name} width={50} />
      <span className="points">{point ? point : "-"}</span>
      <h3 className="pro-name">{name}</h3>
      <div className="persent">{persent}%</div>
    </div>
  );
};

export default Profile;
