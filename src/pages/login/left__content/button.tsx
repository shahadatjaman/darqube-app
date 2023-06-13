import React, { FC } from "react";
import "./styles.css";
interface PropsTypes {
  children: any;
  type: "primary" | "danger";
  active?: boolean;
  onClick?: () => void;
  hoverShadow?: boolean;
}

const Button: FC<PropsTypes> = (props) => {
  const { children, type, active, onClick, hoverShadow } = props;
  return (
    <div onClick={onClick} className="inline-block">
      <div
        className={`inline-block btn ${
          hoverShadow && "btn-shadow transition-all"
        } ${type === "danger" && `danger-btn ${active && "active-danger"}`} ${
          type === "primary" && `succest-btn ${active && "active-success"}`
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Button;
