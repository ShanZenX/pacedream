import React from "react";
import { Raleway, Poppins } from "next/font/google";
import Choosingpara from "./Choosingpara";

const fontRaleway = Raleway({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const fontPoppins = Poppins({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

const choosingUsData = [
  {
    title: "Luxury Facilities",
    para: "The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.",
  },
  {
    title: "Affordable Price",
    para: "You can get a workspace of the quality at an affordable price and still enjoy the facilities that are only here.",
  },
  {
    title: "Many Choices",
    para: "We provide many unique workspace choices so that you can choose the workspace to your liking.",
  },
];

export default function Choosingus(props) {
  return (
    <div className=" flex flex-wrap justify-evenly md:h-80 md:px-20 ">
      <div
        className={`md:w-1/4 p-4 flex items-center ${fontPoppins.className}`}
      >
        <h1 className={` ${fontRaleway.className} text-[42px] font-bold`}>Why Choosing Us</h1>
      </div>
      <div className="md:w-3/4  flex flex-wrap justify-evenly">
        {choosingUsData.map((item, index) => (
          <Choosingpara
            key={index}
            title={item.title}
            para={item.para}
            className={fontRaleway.className}
          />
        ))}
      </div>
    </div>
  );
}