import React, { FC, useState } from "react";
import "./styles.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface PropsTypes {
  name: string;
  onChnage: () => void;
  onFocus?: () => void;
  placeholder: string;
  value?: string;
  type?: string;
  isShow?: boolean;
}

const Input: FC<PropsTypes> = (props) => {
  const { name, onChnage, placeholder, value, onFocus, type } = props;

  const [InputType, setPassType] = useState("password");

  const showPassword = () => {
    if (InputType === "password") {
      setPassType("text");
    } else {
      setPassType("password");
    }
  };

  return (
    <div className="relative">
      {type == "password" &&
        (InputType === "password" ? (
          <AiFillEye onClick={showPassword} className="show-icon" />
        ) : (
          <AiFillEyeInvisible onClick={showPassword} className="show-icon" />
        ))}

      <input
        name={name}
        type={InputType}
        placeholder={placeholder}
        onChange={onChnage}
        onFocus={onFocus}
        value={value}
        className="input-bg  input-style"
      />
    </div>
  );
};

export default Input;
