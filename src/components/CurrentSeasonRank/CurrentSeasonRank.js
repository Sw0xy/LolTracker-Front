import React from "react";
import rankimg from "../../assets/images/Emblem_Master.png";
export default function CurrentSeasonRank() {
  return (
    <div className="w-full md:max-w-[360px] ">
      <h1 className="text-gray-300 font-semibold text-xs ">
        CURRENT SEASON RANK
      </h1>
      <div className="bg-secondary flex flex-col md:flex-row px-4 py-3 rounded-xl mt-2 ">
        <div className="w-full p-4 rounded-xl flex flex-row items-center justify-evenly bg-primary">
          <div className="h-14 w-14 bg-secondary rounded-full">
            <img src={rankimg} alt="rank" className="w-full" />
          </div>
          <div>
            <h1 className="text-gray-300 font-semibold text-xl ">Master</h1>
            <span className="text-xs text-gray-300">RANKED SOLO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
