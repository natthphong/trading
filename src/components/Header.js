import React from "react";
import ThemeIcon from "./ThemeIcon";
import TopUpIcon from "./TopUpIcon";

const Header = ({ name ,topUpFunc}) => {
  return (
    <div className="flex">
      <div className="xl:px-32">
        <h1 className="text-5xl">{name}</h1>
      </div>
      <div className="flex space-x-20 mt-4">
      <TopUpIcon topUpFunc= {topUpFunc}/>
      <ThemeIcon />
      </div>
  
    </div>
  );
};

export default Header;
