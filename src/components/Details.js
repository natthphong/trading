import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

const Details = ({ diamond,money }) => {
  const { darkMode } = useContext(ThemeContext);


  return (
    <Card>
    <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
      My Port
    </span>
    <div className="w-full h-full flex items-center justify-around">
      <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
        {diamond}
        <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
          diamond
        </span>
      </span>
      <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
        ${money}
        <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
           บาท
        </span>
      </span>
    </div>
  </Card>
  );
};

export default Details;
