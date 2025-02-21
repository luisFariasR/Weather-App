import { useState } from "react";
export default function Modal({setModalOpen}) {
  
  return (
    <div className="bg-slate-900 flex flex-col w-full h-screen max-h-screen absolute z-50 ">
      <div className="flex justify-end px-12 pt-10 pb-6">
        <button onClick={() => setModalOpen(false)} className="text-white hover:cursor-pointer font-semibold text-xl">X</button>
      </div>
      <div className="flex justify-around">
        <div className="flex border-[2px] border-white ">
          <div className="p-2">
            <img src="/search.svg" alt="search-icon" className="h-8" />
          </div>
          <input
            className="text-white outline-none "
            type="text"
            placeholder="search location"
          />
        </div>
        <div className="">
          <button className="bg-blue-500 text-white hover:cursor-pointer h-13 px-4 font-semibold text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
