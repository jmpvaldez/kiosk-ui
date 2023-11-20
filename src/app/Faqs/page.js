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
  const [itemNo, setItemNo] = useState(0);
  const handleOpenDivChange = (value) => {
    setOpenDiv(value);
  };
  const handleItemNoChange = (itemId) => {
    setItemNo(itemId);
    console.log(itemNo);
  };

  const contentData = [
    {
      id: 1,
      title:
        "How to avail assistance from the Assistance to Individuals in Crisis Situation AICS",
      content: `
      How to avail assistance from the Assistance to Individuals in Crisis Situation AICS How to avail Situation AICS How to avail assistance assistance from the Assistance to Individuals in
           
    `,
    },
    {
      id: 2,
      title: "How to acquire Travel Clearance?",
      content: `
      Bin Crisis Situation AICS How to avail assistance from the Assistance to Individuals in Situation AICS How to avail assistance  How to avail assistance from the Assistance to Individuals in
     `,
    },
    {
      id: 3,
      title: "How to join the Pantawid Pamilyang Pilipino Program (4ps)?",
      content: `
      Situation AICS How to avail assistance C How to avail assistance from theSituation AICS How to avail assistance  Situation AICS How to avail assistance Situation AICS How to avail assistance Assistance to Individuals in
     `,
    },
    {
      id: 4,
      title:
        "How to avail assistance from the Sustainable Livelihood Program(SLP)?",
      content: `
      D How to avail assistance from the Assistance to Individuals in
     `,
    },
    {
      id: 5,
      title:
        "How to avail assistance from the Sustainable Livelihood Program(SLP)?",
      content: `
      D How to avail assistance from the Assistance to Individuals in
     `,
    },
    {
      id: 6,
      title:
        "How to avail assistance from the Sustainable Livelihood Program(SLP)?",
      content: `
      D How to avail assistance from the Assistance to Individuals in
     `,
    },
    {
      id: 7,
      title:
        "How to avail assistance from the Sustainable Livelihood Program(SLP)?",
      content: `
      D How to avail assistance from the Assistance to Individuals in
     `,
    },
  ];

  return (
    <main className="h-screen flex flex-col items-start justify-start p-12 md:py-14  lg:px-36 ">
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={350}
            height={100}
            alt="logo"
            priority={true}
          />
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
        <div className=" text-gray-500 font-bold items-center gap-6 p-3  md:text-5xl flex flex-row">
          <Image
            width={80}
            height={80}
            src={icons}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p>PFAQs</p>
        </div>
        <span className="md:w-1/2 lg:w-2/3">
          <h2
            className={`${
              openDiv ? "hidden" : "block"
            } font-semibold text-gray-500 text-xl`}
          >
            How to avail assistance from the Assistance to Individuals in Crisis
            Situation AICS
          </h2>
        </span>
      </div>
      <div className="flex flex-row w-full overflow-y-auto custom-scrollbar-hidden">
        <div
          className={`${
            openDiv ? "w-full " : "lg:w-1/3 "
          } flex flex-col gap-2 mt-5 md:mt-2  `}
        >
          <FaqsCard
            openDiv={openDiv}
            onOpenDivChange={handleOpenDivChange}
            onItemNoChange={handleItemNoChange}
          />
        </div>
        <main className="hidden md:flex flex-col md:w-2/3 w-full mt-5 md:mt-2 ">
          <div className="fixed  max-w-5xl flex flex-row gap-3 items-start  justify-start">
            <MdOutlineMessage
              className={`${
                openDiv ? "hidden" : "block"
              } ml-auto text-4xl text-red-900`}
            />
            <div className={`${openDiv ? "hidden" : "block"} `}>
              {contentData.map((item) =>
                item.id === itemNo ? <p key={item.id}>{item.content}</p> : null
              )}
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
