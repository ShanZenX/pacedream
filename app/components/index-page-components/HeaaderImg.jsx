import React from 'react'
import "@/app/globals.css";
import { Raleway } from 'next/font/google';

import { IoSearchCircle } from "react-icons/io5";

const fontRaleway = Raleway({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
function HeaaderImg() {
  return (
    <div className="header-main">
    <div className="header w-full h-[120vh] flex flex-col pt-48 items-center relative text-white">
      <div className="background-image"></div>
      <p className={`text-[5.5vw] ${fontRaleway.className} relative`}>Make Your Interior More </p>
      <p className={`text-[5.5vw] ${fontRaleway.className} relative`}>Minimalistic And Modern</p>
      <div className="mt-4 flex border-white border bg-[#dcdcdc2d] ps-3 py-2 pr-3 rounded-md">
      <input type="text" placeholder="Search furniture" className="   outline-none rounded-3xl bg-[#dcdcdc00] text-white placeholder-white  ">
</input><IoSearchCircle className='text-yellow-100 text-4xl ' />
</div>
    </div>
  </div>
  )
}

export default HeaaderImg
