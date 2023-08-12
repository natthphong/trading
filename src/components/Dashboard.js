import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import Header from "./Header";

import { fetchStockDetails, fetchTopUp } from "../utils/api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  const [history, setHistory] = useState()

  const [per, setper] = useState(0)

  const [stockDetails, setStockDetails] = useState({
    "history":[{
      "price":0,
      "date":null
  }]
  });

  const updateStockDetails = async () => {
    try {
      const result = await fetchStockDetails();
      setHistory(result.history);
      setStockDetails(result);
    } catch (error) {
      setStockDetails({});
      console.log(error);
    }
  };

  useEffect(() => {
    updateStockDetails();
  }, []);

  const topUp =  async()=>{
    try {
       await fetchTopUp();
      updateStockDetails();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={"diamond"} topUpFunc= {topUp} />
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart tempData={history}/>;
      </div>
      <div>
        <Overview
          symbol={"diamond"}          
          bid={history!==undefined?history[history.length-1].price/100:0}
          offer={history!==undefined?history[history.length-1].price*1.03 /100:0}
        />  
      </div>
      <div className="row-span-2 xl:row-span-3">;
        <Details money={stockDetails.money} diamond={stockDetails.diamond} />;
      </div>;
    </div>
  );
    }

export default Dashboard;
