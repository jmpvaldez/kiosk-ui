import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Start() {
  return (
    <main className=" h-screen flex flex-col items-start justify-start ">
      <header className="pt-12 pl-12 md:pr-36 md:pt-36 md:pl-36 flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <span className="text-4xl font-bold">DSWD</span>
        </div>
        <div className="flex  items-center">
          <input
            type="text"
            className="px-4 py-2 border-b border-gray-300 focus:outline-none bg-transparent"
          />
          <FaSearch className="text-xl" />
        </div>
      </header>
      <div className="flex flex-col bg-gray-200 md:w-1/2 h-1/2 rounded-r-2xl items-center w-full mt-16 space-y-3 md:space-y-4 p-9">
        <div className="flex items-center justify-center">
          <p className="text-gray-700 mb-4 text-2xl">Please select language</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-24">
          <Link
            href={"Menu"}
            className="px-24 md:px-16 py-1 bg-red-700 text-white z-50"
          >
            English
          </Link>
          <Link
            href={"Menu"}
            className="px-24 md:px-16 py-1 bg-red-700 text-white z-50"
          >
            Tagalog
          </Link>
        </div>

        <div className="flex items-center  justify-center">
          <p className="text-gray-600 mb-4 text-center text-xl md:text-4xl">
            Hi there! Welcome to the <br /> Department of Social Welfare and{" "}
            <br />
            Development's Interactive Kiosks! <br /> How can I help you today?
          </p>
        </div>
      </div>

      <main className="p-12  md:p-36 flex flex-row  items-center gap-3 justify-start w-full md:w-1/3  mt-auto">
        <IoIosArrowRoundBack />
        <Link href={"/"} className=" text-dark rounded-md mt-auto">
          Back
        </Link>
      </main>
    </main>
  );
}
