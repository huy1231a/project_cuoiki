import ButtonType from "@/app/common/Button/btn";
import Image from "next/image";
import React from "react";

const BottonCt = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1438px] h-[300px] rounded-2xl bg-white">
        <div className="flex justify-between p-5 items-center">
          <div>
            Proud to be part of{" "}
            <span className="cursor-pointer font-bold text-2xl capitalize text-[#003459] hover:underline">
              Pet Sellers
            </span>
          </div>
          <ButtonType
            title="View all our sellers"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
                  stroke="#003459"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <div className="flex gap-32 p-6 items-center ml-3 cursor-pointer">
          <div className="bg-transparent transition duration-300 ease-in-out hover:scale-110">
            <Image src={"/sheba.png"} alt="logo" width={88} height={64} />
          </div>
          <div className=" bg-transparent transition duration-300 ease-in-out hover:scale-110">
            <Image src={"/s1.png"} alt="logo" width={88} height={64} />
          </div>
          <div className=" bg-transparent transition duration-300 ease-in-out hover:scale-110">
            <Image src={"/s2.png"} alt="logo" width={88} height={64} />
          </div>
          <div className=" bg-transparent transition duration-300 ease-in-out hover:scale-110">
            <Image src={"/s3.png"} alt="logo" width={88} height={64} />
          </div>
          <div className=" bg-transparent transition duration-300 ease-in-out hover:scale-110">
            <Image src={"/s4.png"} alt="logo" width={88} height={64} />
          </div>
          <div className=" bg-transparent transition duration-300 ease-in-out hover:scale-110">
            <Image src={"/s5.png"} alt="logo" width={130} height={64} />
          </div>
          <div className=" bg-transparent transition duration-300 ease-in-out hover:scale-110">
            <Image src={"/s6.png"} alt="logo" width={88} height={64} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottonCt;
