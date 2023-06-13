import React, { useState } from "react";
import "./styles.css";
import { categories } from "./data";

const Categories = () => {
  const [cate, setCate] = useState("all");
  const changeHandler = (value: string) => {
    setCate(value);
  };
  return (
    <div className="mt-8 border-t-2 border-gray-700 pt-6">
      <ul className=" flex justify-center items-center">
        {categories?.map((value, index) => (
          <li
            onClick={() => changeHandler(value.name)}
            key={index}
            className={`li-cate ${
              cate === value.name ? "bg-gray-600 text-white" : "text-gray-500"
            }`}
          >
            {value.name}
            <span className="text-xs ml-1">{value.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
