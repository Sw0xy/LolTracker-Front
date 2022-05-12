import React from "react";
import { RiSkull2Fill } from "react-icons/ri";
import rankimg from "../../assets/images/Emblem_Master.png";
export default function TopPerformance() {
  return (
    <div className="w-full md:max-w-[360px] ">
      <h1 className="text-gray-300 font-semibold text-xs ">
       TOP PERFORMANCE
      </h1>
      <div className="bg-secondary flex flex-col md:flex-row px-4 py-3 rounded-xl mt-2 ">
        <div className="w-full p-4 rounded-xl flex flex-row items-center justify-evenly bg-primary">
          <div className="h-14 w-14 bg-secondary rounded-full">
            <img src={rankimg} alt="rank" className="w-full" />
          </div>
          <div className="flex flex-col">
            <h1 className="flex flex-row items-center text-gray-300 font-semibold text-xl ">4.21 <RiSkull2Fill size={24} className="ml-2" /> </h1>
            <span className="text-xs text-gray-300">KDA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
