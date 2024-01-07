"use client";
import React from "react";
import Image from "next/image";
import { H1, H2 } from "../common/Font";
import ButtonType from "../common/Button/btn";
import Link from "next/link";

interface Filter {
  id: number;
  name: string;
  value: string;
  sex: string;
  bg: string;
}
interface FilterSex {
  id: number;
  sex: string;
  value: string;
}

interface DataList {
  id: string;
  img: string;
  name: string;
  type: string;
  sex: string;
  age: string;
  price: string;
}

const Category = () => {
  const filterSex = [
    {
      id: 1,
      sex: "Male",
      value: "male",
    },
    {
      id: 2,
      sex: "Female",
      value: "female",
    },
  ];
  const filter = [
    {
      id: 1,
      name: "Red",
      value: "red",
      sex: "Male",
      bg: "bg-[#FF564F]",
    },
    {
      id: 2,
      name: "Apricot",
      value: "apricot",
      sex: "Male",
      bg: "bg-[#FFB672]",
    },
    {
      id: 3,
      name: "Black",
      value: "black",
      sex: "Female",
      bg: "bg-[black]",
    },
    {
      id: 4,
      name: "Silver",
      value: "silver",
      sex: "Female",
      bg: "bg-[#CECECE]",
    },
    {
      id: 5,
      name: "Tan",
      value: "tan",
      sex: "Male",
      bg: "bg-[#FFF7CE]",
    },
  ];
  const data = [
    {
      id: "1",
      img: "/image2.png",
      name: "MO231 - Pomeranian White",
      type: "red",
      sex: "Male",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "2",
      img: "/image3.png",
      name: "MO502 - Poodle Tiny Yellow",
      sex: "Female",
      type: "tan",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "3",
      img: "/image4.png",
      name: "MO102 - Poodle Tiny Sepia",
      sex: "Male",
      type: "tan",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "4",
      img: "/image5.png",
      name: "MO512 - Alaskan Malamute Grey",
      sex: "Female",
      type: "tan",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "5",
      img: "/image6.png",
      name: "MO102 - Poodle Tiny Sepia",
      sex: "Male",
      type: "tan",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "6",
      img: "/image7.png",
      name: "MO512 - Alaskan Malamute Grey",
      sex: "Male",
      type: "tan",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "7",
      img: "/image8.png",
      name: "MO231 - Pembroke Corgi Cream",
      sex: "Female",
      type: "tan",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "8",
      img: "/image9.png",
      name: "MO512 - Poodle Tiny Dairy Cow",
      sex: "Male",
      type: "tan",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "9",
      img: "/image9.png",
      name: "MO512 - Poodle Tiny Dairy Cow",
      sex: "Male",
      type: "tan",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "10",
      img: "/image9.png",
      name: "MO512 - Poodle Tiny Dairy Cow",
      sex: "Female",
      type: "tan",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: "11",
      img: "/image9.png",
      name: "MO512 - Poodle Tiny Dairy Cow",
      sex: "Male",
      age: "02 months",
      type: "silver",
      price: "6.900.000 VND",
    },
    {
      id: "12",
      img: "/image9.png",
      name: "MO512 - Poodle Tiny Dairy Cow",
      sex: "Male",
      age: "02 months",
      type: "silver",
      price: "6.900.000 VND",
    },
  ];

  const [filterList, setFilterList] = React.useState<Filter[]>(filter);
  const [filterSexS, setFilterSexSs] = React.useState<FilterSex[]>(filterSex);
  const [dataList] = React.useState<DataList[]>(data);
  const [activeFilter, setActiveFilter] = React.useState<string[]>([]);

  const onFilterChangeSex = (filter: string) => {
    if (activeFilter.includes(filter)) {
      const filterIndex = activeFilter.indexOf(filter);
      const newFilter = [...activeFilter];
      newFilter.splice(filterIndex, 1);
      setActiveFilter(newFilter);
    } else {
      setActiveFilter([...activeFilter, filter]);
    }
  };

  const onFilterChangeColor = (filter: string) => {
    if (activeFilter.includes(filter)) {
      const filterIndex = activeFilter.indexOf(filter);
      const newFilter = [...activeFilter];
      newFilter.splice(filterIndex, 1);
      setActiveFilter(newFilter);
    } else {
      setActiveFilter([...activeFilter, filter]);
    }
  };

  // const onFilterChange = (data:) => {
  //   if()
  // };

  return (
    <>
      <div className="mt-6">
        <div></div>
        <div className="flex justify-center">
          <div className="w-[1400px] h-[400px] bg-[#003459] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-center gap-8 p-8">
              <Image
                src={"/banner.png"}
                alt="logo"
                width={513}
                height={342}
                className="relative top-[100px]"
              />
              <div className="flex flex-col gap-3">
                <H1 title="One more friend" textColor="text-white" />
                <H2 title="Thousands more fun!" textColor={"text-white"} />
                <p className="font-medium leading-6 text-base text-[white] space-y-10">
                  Having a pet means you have more joy, a new friend, a happy{" "}
                  <br /> person who will always be with you to have fun. We have
                  200+
                  <br /> different pets that can meet your needs!
                </p>
                <div className="flex gap-3 items-center mt-5">
                  <div className="border border-[#003459] rounded-full">
                    <div className="flex">
                      <button
                        className="flex justify-center items-center border border-[white] rounded-full text-white "
                        style={{ padding: "14px 28px 10px 28px" }}
                      >
                        <div className="flex items-center justify-center gap-3 transition duration-300 ease-in-out hover:scale-110">
                          View More
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
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="bg-[white]  px-2 py-4 w-[150px] rounded-full flex justify-center items-center cursor-pointer">
                    <p className="text-[#003459] transition duration-300 ease-in-out hover:scale-110 text-base font-medium leading-5">
                      Explore Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-end relative">
              <div className="w-[782.292px] h-[635px] bg-[#FCEED5] rounded-[99px] relative transform rotate-45 bottom-[450px] left-[170px]">
                <div className="flex justify-end">
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-[1400px] h-full bg-transparent rounded-2xl">
          <div className="flex">
            <div className="w-[400px] h-screen bg-transparent rounded-2xl">
              <div className="p-5 flex flex-shrink-0 flex-col gap-3">
                <h1 className="font-bold leading-9 text-2xl text-[#003459]">
                  Filter
                </h1>
                <span className="font-bold leading-6 text-base text-[#003459]">
                  Gender
                </span>

                {filterSexS.map((item) => (
                  <div className="flex gap-3 items-center">
                    <input
                      type="checkbox"
                      name=""
                      id={item.id.toString()}
                      checked={activeFilter.includes(item.value)}
                      className="w-4 h-4 accent-amber-500"
                      onClick={() => onFilterChangeSex(item.value)}
                    />
                    <label htmlFor={item.id.toString()}>{item.sex}</label>
                  </div>
                ))}
                <div className="border border-[#CCD1D2] w-[300px] ml-5"></div>
                <h1 className="font-bold leading-6 text-base text-[#003459]">
                  Color
                </h1>
                {filterList.map((item) => (
                  <React.Fragment key={item.id}>
                    <div className="flex gap-3 items-center ">
                      <input
                        type="checkbox"
                        id={item.id.toString()}
                        className="w-4 h-4 accent-amber-500"
                        checked={activeFilter.includes(item.value)}
                        onClick={() => onFilterChangeColor(item.value)}
                        // onClick={onFilterChange}
                      />
                      <div className={`w-4 h-4 ${item.bg} rounded-full`}></div>
                      <label htmlFor={item.id.toString()}>{item.name}</label>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="w-[1000px] h-full bg-transparent rounded-2xl">
              <div className="flex justify-between p-5">
                <div className="flex gap-3 items-center">
                  <h1 className="font-bold leading-9 text-2xl text-[#003459]">
                    Small Dog
                  </h1>
                  <span className="font-normal text-sm text-[#667479]">
                    52 puppies{" "}
                  </span>
                </div>
                <button
                  className="border border-[#CCD1D2] rounded-2xl flex justify-center items-center"
                  style={{ padding: "6px 10px 4px 20px" }}
                >
                  Sort by:
                  <select
                    id="cars"
                    className="bg-transparent border-none outline-none cursor-pointer"
                  >
                    <option value="volvo">Popular</option>
                    <option value="saab">Sale</option>
                  </select>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-14 p-7">
                {dataList
                  .filter(
                    (item) =>
                      activeFilter.length === 0 ||
                      activeFilter.includes(item.type) ||
                      activeFilter.includes(item.sex)
                  )
                  .map((item) => (
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
              <div className="flex items-center gap-6 justify-center p-5 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 12L7 12M7 12L11 16M7 12L11 8"
                    stroke="#002A48"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div
                  className="w-[34px] bg-[#003459] text-[white] rounded-xl flex items-center justify-center cursor-pointer"
                  style={{ padding: "6px 13px 4px 13px" }}
                >
                  1
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>...</div>
                <div>28</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 12L17 12M17 12L13 16M17 12L13 8"
                    stroke="#002A48"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
