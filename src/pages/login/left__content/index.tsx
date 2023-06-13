import React, { useState, FC, useEffect } from "react";
import "./styles.css";
import Button from "./button";
import { AiFillPlayCircle } from "react-icons/ai";

interface PropsTypes {
  themeHandler: any;
}

const LeftContent: FC<PropsTypes> = (props) => {
  const { themeHandler } = props;
  const [activebtn, setActiveBtn] = useState("danger");

  const changeButton = (value: string) => {
    setActiveBtn(value);
  };
  useEffect(() => {
    themeHandler(activebtn);
  }, [activebtn]);

  return (
    <div className="p-16">
      <h1 className="text-7xl large-text text-gray-500 font-bold">
        Discover
        <br />
        the Full Power
        <br />
        of
        <span className="text-7xl large-text text-white ml-4 font-normal">
          Terminal
        </span>
      </h1>

      <div className="w-3/5 my-8 text-gray-500 font-bold text-lg">
        <h5>
          All-in-One platform for smarter Investing, Analytics, Trading &
          Messaging
        </h5>
      </div>

      <div className="space-x-4">
        <Button
          onClick={() => changeButton("danger")}
          active={activebtn === "danger"}
          type="danger"
        >
          Terminal
        </Button>
        <Button
          onClick={() => changeButton("success")}
          active={activebtn === "success"}
          type="primary"
        >
          Messenger
        </Button>
      </div>

      <div className="my-12">
        <Button active={true} hoverShadow={true} type="primary">
          <AiFillPlayCircle className="mr-3 text-primary" />
          Watch Video
        </Button>
      </div>

      <div className="text-xs text-gray-500">
        <p>
          Distributed by Darqube Ltd, United Kingdom.
          <br />
          All images and logos are trademarks of their respective owners.
        </p>
      </div>
    </div>
  );
};

export default LeftContent;
