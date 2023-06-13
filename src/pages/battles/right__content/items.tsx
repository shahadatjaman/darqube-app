import React from "react";
import { items } from "./data";
import Item from "./item";

const Items = () => {
  return (
    <div className="mt-4 h-screen pr-4 overflow-hidden custom-scrollbar overflow-y-scroll">
      {items?.map((item, index) => (
        <Item
          avatar={item.avatar}
          id={index + 1}
          name={item.name}
          returns={item.returns}
          wins={item.wins}
        />
      ))}
    </div>
  );
};

export default Items;
