import Image from "next/image";
import { metadata } from "./layout";
import "@/app/globals.css";
import { Raleway } from 'next/font/google';
import HeaaderImg from "./components/index-page-components/HeaaderImg";
import Choosingus from "./components/index-page-components/Choosingus";

const fontRaleway = Raleway({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});


export default function Home() {
  return (<>
  <HeaaderImg />
  <Choosingus />
  </>
  );
}
