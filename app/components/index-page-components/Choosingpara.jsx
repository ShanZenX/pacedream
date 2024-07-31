import React from 'react'
import { Raleway, Poppins } from "next/font/google";

const fontRaleway = Raleway({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});
const fontPoppins = Poppins({
  weight: "200",
  style: "normal",
  subsets: ["latin"],
});
export default function Choosingpara({ title, para }) {
  return (
    <div className='md:w-2/6  p-4 justify-center flex flex-col'>
    <h2 className={`pb-2 text-3xl ${fontRaleway.className}`}>{title}</h2>
      <p className={`${fontPoppins.className}`}>{para}</p>
      <p className={`text-orange-500 font-normal pt-2 ${fontPoppins.className}`}>More Info ---</p>
    </div>
  )
}
