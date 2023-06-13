import React, { FC } from "react";
import "./styles.css";

interface PropsTypes {
  children: any;
}

const Button: FC<PropsTypes> = (props) => {
  const { children } = props;
  return (
    <div className="btn-style py-2 text-white font-medium">{children}</div>
  );
};

export default Button;
