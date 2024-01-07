import ButtonType from "@/app/common/Button/btn";
import { HeaderOne, H1 } from "@/app/common/Font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Content from "../content";
import Products from "../product2/product";
import BottonCt from "../botCo";
import MiddlePage from "../middlePage";
import About from "../product2/about";

const Header = () => {
  return (
    <>
      <div className="w-full h-[500px] flex-shrink-0 bg-[#FCEED5] ">
        <div className="p-6 flex justify-center ml-[294px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <H1 title="One more friend" textColor="text-[#002A48]" />
              <H1 title="Thousands more fun!" textColor="text-[#002A48]" />
            </div>
            <p className="font-medium leading-6 text-base text-[#242B33] space-y-10">
              Having a pet means you have more joy, a new friend, a happy <br />{" "}
              person who will always be with you to have fun. We have 200+
              <br /> different pets that can meet your needs!
            </p>
            <div className="flex gap-3 items-center mt-5">
              <div className="border border-[#003459] rounded-full">
                <ButtonType
                  title="View Intro"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
                  }
                />
              </div>
              <div className="bg-[#003459]  px-2 py-4 w-[150px] rounded-full flex justify-center items-center cursor-pointer">
                <p className="text-white transition duration-300 ease-in-out hover:scale-110 text-base font-medium leading-5">
                  Explore Now
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src={"/img1.png"}
              alt="logo"
              width={826}
              height={600}
              className="relative bottom-[80px]"
            />
          </div>
        </div>
      </div>
      <Content />
      <Products />
      <BottonCt />
      <MiddlePage />
      <About />
    </>
  );
};

export default Header;
