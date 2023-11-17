"use client";

import { useState } from "react";
import { MdOutlineMessage } from "react-icons/md";

export default function FaqsCard({ openDiv, onOpenDivChange }) {
  const handleButtonClick = () => {
    onOpenDivChange(!openDiv);
  };
  return (
    <span
      onClick={handleButtonClick}
      className={`${
        openDiv ? "w-full" : ""
      }   mx-14 border-b-2 text-gray-600 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 font-semibold md:text-2xl flex flex-row`}
    >
      <p>
        How to avail assistance from the Assistance to Individuals in Crisis
        Situation AICS
      </p>
      <MdOutlineMessage
        className={`${
          openDiv ? "block" : "hidden"
        } ml-auto text-4xl text-red-900 `}
      />
    </span>
  );
}
