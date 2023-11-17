"use client";

import { useState } from "react";
import { MdOutlineMessage } from "react-icons/md";

export default function FaqsCard() {
  const [openDiv, setOpenDiv] = useState(false);
  console.log(openDiv);
  return (
    <span
      onClick={() => setOpenDiv(true)}
      className={`mx-14 border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row`}
    >
      <p>
        How to avail assistance from the Assistance to Individuals in Crisis
        Situation AICS
      </p>
      <MdOutlineMessage className="ml-auto text-4xl text-red-900 " />
    </span>
  );
}
