import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
export default function Home() {
  return (
    <main className=" h-screen flex flex-col items-start justify-start p-12 md:p-36">
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <span className="text-4xl font-bold">DSWD</span>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="px-4 py-2 border-b border-gray-300 focus:outline-none bg-transparent"
          />
          <FaSearch className="text-xl" />
        </div>
      </header>

      <main className="flex flex-col items-start justify-start w-full md:w-1/3 mt-16">
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </main>
      <main className="flex flex-col items-start justify-start w-full md:w-1/3 mt-auto">
        <Link
          href={"/Start"}
          className="px-16 py-2 bg-red-700 text-white mt-auto"
        >
          Click to Start
        </Link>
      </main>
    </main>
  );
}
