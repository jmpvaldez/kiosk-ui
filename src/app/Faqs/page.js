"use client";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import FaqsCard from "../components/FaqsCard";
import Image from "next/image";
import icons from "../../../public/images/icons.PNG";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from "react";
import Logo from "../../../public/images/Logo.PNG";

export default function Faqs() {
  const [openDiv, setOpenDiv] = useState(true);
  const handleOpenDivChange = (value) => {
    setOpenDiv(value);
  };
  return (
    <main className="h-screen flex flex-col items-start justify-start p-12 md:py-14 md:px-36 ">
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <Image src={Logo} width={400} height={100} alt="logo" />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="px-4 py-2 border-b border-gray-300 focus:outline-none bg-transparent"
          />
          <FaSearch className="text-xl" />
        </div>
      </header>
      <div className="flex mt-6 items-start  md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <Link
          href={"/Programs"}
          className=" text-gray-500 font-bold items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-4xl flex flex-row"
        >
          <Image width={80} height={80} src={icons} alt="pic" />
          <p>PFAQs</p>
        </Link>
        <span className="w-2/3">
          <h2
            className={`${
              openDiv ? "hidden" : "block"
            } font-semibold text-gray-500 text-2xl`}
          >
            How to avail assistance from the Assistance to Individuals in Crisis
            Situation AICS
          </h2>
        </span>
      </div>
      <div className="flex flex-row w-full">
        <main
          className={`${
            openDiv ? "w-full" : "w-1/3"
          } flex flex-col gap-2 mt-5 md:mt-2 `}
        >
          <FaqsCard openDiv={openDiv} onOpenDivChange={handleOpenDivChange} />
        </main>
        <main className="flex flex-col md:w-2/3 w-full mt-5 md:mt-2 ">
          <div className="flex flex-row gap-3 items-start  justify-start">
            <MdOutlineMessage
              className={`${
                openDiv ? "hidden" : "block"
              } ml-auto text-4xl text-red-900`}
            />
            <div className={`${openDiv ? "hidden" : "block"}`}>
              <p>
                How to avail assistance from the Assistance to Individuals in
                Crisis Situation AICS How to avail assistance from the
                Assistance to Individuals in Crisis Situation AICS How to avail
                assistance from the Assistance to Individuals in Crisis
                Situation AICS
              </p>
              <br />
              <br />
              <p>
                How to avail assistance from the Assistance to Individuals in
                Crisis Situation AICS How to avail assistance from the
                Assistance to Individuals in Crisis Situation AICS <br /> How to
                avail assistance from the Assistance to Individuals in Crisis
                Situation AICS
              </p>
              <br />
              <p>
                How to avail assistance from the Assistance to Individuals in
                Crisis Situation AICS How to avail assistance from the
                Assistance to Individuals in Crisis Situation AICS <br /> How to
                avail assistance from the Assistance to Individuals in Crisis
                Situation AICS
              </p>
            </div>
          </div>
        </main>
      </div>

      <main className="items-center text-red-900 font-semibold flex flex-row   gap-3  w-full mt-12s md:mt-auto">
        <IoIosArrowRoundBack />
        <Link href={"/"} className=" text-dark rounded-md mt-auto">
          Back to home
        </Link>
      </main>
    </main>
  );
}
