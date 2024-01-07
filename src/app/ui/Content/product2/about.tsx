import ButtonType from "@/app/common/Button/btn";
import Image from "next/image";
import React from "react";

const About = () => {
  const data = [
    {
      img: "/ab3.png",
      text: "Pet knowledge",
      qs: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      par: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
    },
    {
      img: "/ab2.png",
      text: "Pet knowledge",
      qs: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      par: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
    },
    {
      img: "/ab1.png",
      text: "Pet knowledge",
      qs: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      par: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
    },
  ];
  return (
    <>
      <div className="flex justify-center mt-8 ">
        <div className="w-[1440px] h-[600px] bg-transparent rounded-2xl">
          <div className="flex justify-between p-4">
            <div className="flex flex-col gap-1">
              <span className="text-base font-medium leading-6 text-black">
                Hard to choose right products for your pets?
              </span>
              <h1 className="text-2xl font-bold leading-9 text-[#003459]">
                Our Products
              </h1>
            </div>
            <div className="border border-[#003459] rounded-full w-[150px] flex items-center justify-center">
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
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20 p-7 ml-4">
            {data.map((items) => (
              <div className="flex flex-col gap-4 transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
                <Image
                  src={items.img}
                  alt=""
                  width={364}
                  height={243}
                  className="rounded-2xl "
                />
                <div
                  className="flex justify-start rounded-full bg-[yellow] w-[160px] gap-2 text-[12px]  leading-4 font-bold"
                  style={{ padding: "2px 10px" }}
                >
                  {items.text}
                </div>
                <h1 className="font-bold text-base leading-6 text-[#00171F]">
                  {items.qs}
                </h1>
                <p className="text-nowrap font-medium leading-5 text-ellipsis overflow-hidden">
                  {items.par}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
