import ButtonType from "@/app/common/Button/btn";
import Image from "next/image";
import React from "react";
import MiddlePage from "./middlePage";
import Link from "next/link";

export const data = [
  {
    img: "/image2.png",
    name: "MO231 - Pomeranian White",
    sex: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    img: "/image3.png",
    name: "MO502 - Poodle Tiny Yellow",
    sex: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    img: "/image4.png",
    name: "MO102 - Poodle Tiny Sepia",
    sex: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    img: "/image5.png",
    name: "MO512 - Alaskan Malamute Grey",
    sex: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    img: "/image6.png",
    name: "MO102 - Poodle Tiny Sepia",
    sex: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    img: "/image7.png",
    name: "MO512 - Alaskan Malamute Grey",
    sex: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    img: "/image8.png",
    name: "MO231 - Pembroke Corgi Cream",
    sex: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    img: "/image9.png",
    name: "MO512 - Poodle Tiny Dairy Cow",
    sex: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
];
const Content = () => {
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="w-[1440px]">
          <div className="flex justify-between p-5">
            <div className="flex flex-col gap-1">
              <span className="text-base font-medium leading-6 text-black">
                What's New?
              </span>
              <h1 className="text-2xl font-bold leading-9 text-[#003459]">
                Take a look at some of our pets
              </h1>
            </div>
            <div className="border border-[#003459] rounded-full w-[150px] flex items-center justify-center">
              <Link href={"/category"}>
                <ButtonType
                  title="View More"
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
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-14 p-7">
            {data.map((item) => (
              <div className="bg-white-400 rounded-2xl w-[300px] h-[400px] shadow-lg cursor-pointer">
                <div className="flex justify-center mt-2">
                  <Link href={`/category/${item.name}`}>
                    <Image
                      src={item.img}
                      alt="img1"
                      width={264}
                      height={264}
                      className="rounded-2xl border-none  transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h1 className="items-stretch text-base leading-6 font-bold text-black">
                    {item.name}
                  </h1>
                  <div className="flex gap-5">
                    <div>
                      <p className="font-normal text-xs leading-4 text-[#667479]">
                        Gene:{" "}
                        <span className="font-bold text-xs leading-4 text-[#667479]">
                          {item.sex}
                        </span>
                      </p>
                    </div>
                    <div className="font-normal text-xs leading-4 text-[#667479]">
                      -
                    </div>
                    <div>
                      <p className="font-normal text-xs leading-4 text-[#667479]">
                        Age:{" "}
                        <span className="font-bold text-xs leading-4 text-[#667479]">
                          {item.age}
                        </span>
                      </p>
                    </div>
                  </div>
                  <h1 className="font-bold text-base leading-5 text-black">
                    {item.price}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MiddlePage />
    </>
  );
};

export default Content;
