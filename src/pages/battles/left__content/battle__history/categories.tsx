import React, { useState } from "react";
import { categories } from "./data";

const Categories = () => {
  const [cate, setCate] = useState("all");
  const handleChange = (name: string) => {
    setCate(name);
  };
  return (
    <div className="my-5">
      <ul className="flex">
        {categories?.map((value, index) => (
          <li
            key={index}
            style={{
              background: cate === value.name ? "#383d46" : "",
            }}
            className={`rounded-3xl px-3 cursor-pointer transition-all`}
            onClick={() => handleChange(value.name)}
          >
            <span
              className={`mr-2 ${
                cate === value.name ? "text-white" : " text-color"
              } capitalize`}
            >
              {value.name}
            </span>
            <span className="text-color text-sm font-bold">0</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
