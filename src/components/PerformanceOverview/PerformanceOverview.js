import React from 'react'
import { BiDownArrowCircle, BiUpArrowCircle } from 'react-icons/bi'

export default function PerformanceOverview() {
  return (
    <div className="w-full md:max-w-[360px] ">
    <h1 className="text-gray-300 font-semibold text-xs ">
      PERFORMANCE OVERVIEW
    </h1>
    <div className="bg-secondary flex flex-col md:flex-row px-4 py-3 rounded-xl mt-2 ">
      <div className="w-full p-4 rounded-xl flex flex-row items-center justify-evenly bg-primary">
      <div>
          <h1 className="flex flex-row items-center text-gray-300 font-semibold text-xl ">~210 <BiUpArrowCircle size={24} className="ml-1" /> </h1>
          <span className="text-xs text-gray-300">CS AVG.</span>
        </div>
        <div>
        <h1 className="flex flex-row items-center text-gray-300 font-semibold text-xl ">84% <BiDownArrowCircle size={24} className="ml-1" /> </h1>
          <span className="text-xs text-gray-300">CS ACCURACY</span>
        </div>
      </div>
    </div>
  </div>
  )
}
