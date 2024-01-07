"use client";

import Image from "next/image";
import React from "react";
import Slide from "./slideShow";

const DogInfo = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[1180px] bg-[#EBEEEF] rounded-2xl h-[600px] p-5">
          <div className="flex">
            <div className="w-[590px] h-[500px] bg-orange-200 rounded-2xl">
              <div className="">
                <Slide />
              </div>
            </div>
            <div className="w-[590px] h-[500px] bg-red-400 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogInfo;
