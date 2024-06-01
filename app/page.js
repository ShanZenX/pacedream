import Image from "next/image";
import { metadata } from "./layout";
import "@/app/globals.css";
import { Raleway } from 'next/font/google';
import HeaaderImg from "./components/index-page-components/HeaaderImg";
import Chossingus from "./components/index-page-components/Chossingus";

const fontRaleway = Raleway({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});


export default function Home() {
  return (<>
  <HeaaderImg />
  <Chossingus />
  </>
  );
}
