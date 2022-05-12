import React from "react";
import RecentMatches from "../components/RecentMatches/RecentMatches";

import { BsYoutube, BsTwitter } from "react-icons/bs";
import { FaTiktok, FaFacebookF, FaDiscord } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";
import CurrentSeasonRank from "../components/CurrentSeasonRank/CurrentSeasonRank";
import PerformanceOverview from "../components/PerformanceOverview/PerformanceOverview";
import TopPerformance from "../components/TopPerformance/TopPerformance";
export default function SummonerPage() {
  return (
    <div className="container mx-auto w-full ">
      <div className="my-14 p-4 md:p-8 ">
        <div className="flex flex-col  rounded-xl p-6 bg-background bg-opacity-60 backdrop-blur-lg ">
          <div className="flex flex-col sm:flex-row my-4">
            <span className="text-xs text-gray-400 bg-gray-900 p-1 rounded mr-2 mt-2 sm:mt-0">
              S2021 Challenger
            </span>
            <span className="text-xs text-gray-400 bg-gray-900 p-1 rounded mr-2 mt-2 sm:mt-0">
              S2020 Challenger
            </span>
            <span className="text-xs text-gray-400 bg-gray-900 p-1 rounded mr-2 mt-2 sm:mt-0">
              S9 Challenger
            </span>
          </div>
          <div className="w-full h-[0.2px] bg-gray-700 mb-4"></div>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="text-center">
                  <img
                    className="w-24 rounded-xl"
                    src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon3556.jpg?image=q_auto&image=q_auto,f_webp,w_auto&v=1652259904560"
                    alt="sa"
                  />
                  <h1 className="font-bold text-gray-100 bg-gray-500 px-2 rounded-full mt-1">
                    <span className="text-gray-100 font-normal ">LVL</span> 238
                  </h1>
                </div>
               <div className="ml-4 flex flex-col">
               <h1 className=" text-white font-semibold text-base lg:text-2xl">
                  NEKROFİLİKAISER
                </h1>
                <span className="text-xs text-gray-500">Last updated: 37 minutes ago</span>
               </div>
              </div>
              
            </div>
            <div className="flex flex-col justify-evenly items-center">
              <button className="flex flex-row items-center justify-center my-4 md:my-0 w-[10rem] md:w-full text-center p-2 md:px-4 md:py-2 bg-gray-800 text-white rounded ">
                <BiRefresh size={24} className="text-white mr-2" />
                <span>Refresh</span>
              </button>
              <div className="flex flex-row w-[200px] md:w-[220px] justify-between mt-3 md:mt-0 ">
                <BsYoutube
                  size={24}
                  className="text-white hover:text-red-500"
                />
                <BsTwitter
                  size={24}
                  className=" text-white hover:text-blue-500"
                />
                <FaTiktok size={24} className="text-white hover:text-black" />
                <FaFacebookF
                  size={24}
                  className=" text-white hover:text-blue-500"
                />
                <FaDiscord
                  size={24}
                  className=" text-white hover:text-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
        <RecentMatches />
       <div className="flex flex-col md:flex-row justify-between items-center mt-6">
       <CurrentSeasonRank />
       <PerformanceOverview />
       <TopPerformance />
       </div>
      </div>
    </div>
  );
}
