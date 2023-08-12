import React from "react";
import Card from "./Card";

const Overview = ({  bid,  offer }) => {
  return (
    <Card>
      <span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-2xl xl:text-3xl 2xl:text-3xl flex items-center">
        ฿{bid} 
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            ราคาขาย
          </span>
        </span>
        <span className="text-2xl xl:text-3xl 2xl:text-3xl flex items-center">
        ฿{offer}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            ราคาซื้อ
          </span>
        </span>
      </div>
    </Card>
  );
};

export default Overview;
