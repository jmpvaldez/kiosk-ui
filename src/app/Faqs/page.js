import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import FaqsCard from "../components/FaqsCard";
import Image from "next/image";
import correct from "../../../public/images/correct.png";
import { MdOutlineMessage } from "react-icons/md";

export default function Faqs() {
  return (
    <main className=" h-screen flex flex-col items-start justify-start p-12 md:p-36">
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <Link href={"/"} className="text-4xl font-bold">
            DSWD
          </Link>
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
          <Image width={80} height={80} src={correct} alt="pic" />
          <p>PFAQs</p>
        </Link>
        <span className="w-2/3">
          <h2 className="font-semibold text-gray-500 text-2xl">
            How to avail assistance from the Assistance to Individuals in Crisis
            Situation AICS
          </h2>
        </span>
      </div>
      <div className="flex flex-row">
        <main className="flex flex-col gap-2 md:w-1/3 w-full mt-5 md:mt-2 ">
          <FaqsCard />
          <FaqsCard />
          <FaqsCard />
          <FaqsCard />
          <FaqsCard />
        </main>{" "}
        <main className="flex flex-col  md:w-2/3 w-full mt-5 md:mt-2 ">
          <div className="flex flex-row gap-3 items-start  justify-start">
            <MdOutlineMessage className="ml-auto text-4xl text-red-900 " />
            <div>
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
