import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Start() {
  return (
    <main className="bg-gray-100 h-screen flex flex-col items-start justify-start p-12 md:p-24">
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
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
      <div className="flex flex-col bg-gray-500 md:w-1/2 h-1/2 rounded-r-2xl items-center w-full mt-16 space-y-3 md:space-y-4 p-9">
        <div className="flex items-center justify-center">
          <p className="text-gray-700 mb-4 text-2xl">Please select language</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-24">
          <button className="px-24 md:px-16 py-1 bg-red-700 text-white z-50">
            English
          </button>
          <button className="px-24 md:px-16 py-1 bg-red-700 text-white z-50">
            Tagalog
          </button>
        </div>

        <div className="flex items-center  justify-center">
          <p className="text-gray-600 mb-4 text-center text-4   xl">
            Hi there! Welcome to the <br /> Department of Social Welfare and{" "}
            <br />
            Development's Interactive Kiosks! <br /> How can I help you today?
          </p>
        </div>
      </div>

      <main className="flex flex-col items-start justify-start w-full md:w-1/3 mt-auto">
        <Link
          href={"/"}
          className="px-16 py-2 bg-red-700 text-white rounded-md mt-auto"
        >
          Back
        </Link>
      </main>
    </main>
  );
}
