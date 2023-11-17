import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import correct from "../../../public/images/correct.png";

export default function Aics() {
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

      <main className="md:grid md:grid-cols-2 gap-4 items-start justify-start w-full mt-5 md:mt-14 ">
        <Link
          href={"/Programs"}
          className=" border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row"
        >
          <Image width={80} height={80} src={correct} alt="pic" />
          <p>Program Categories</p>
        </Link>
        <Link
          href={"/Programs"}
          className=" border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row"
        >
          <Image width={80} height={80} src={correct} alt="pic" />
          <p>Featured Stories</p>
        </Link>
        <Link
          href={"/Programs"}
          className=" border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row"
        >
          <Image width={80} height={80} src={correct} alt="pic" />
          <p>Service Listings</p>
        </Link>
        <Link
          href={"/Programs"}
          className=" border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row"
        >
          <Image width={80} height={80} src={correct} alt="pic" />
          <p>Emergency Information</p>
        </Link>
        <Link
          href={"/Programs"}
          className=" border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row"
        >
          <Image width={80} height={80} src={correct} alt="pic" />
          <p>
            Frequently Asked <br /> Questions (FAQS)
          </p>
        </Link>
        <Link
          href={"/Programs"}
          className=" border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row"
        >
          <Image width={80} height={80} src={correct} alt="pic" />
          <p>Social Media Integration</p>
        </Link>
        <Link
          href={"/Programs"}
          className=" border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row"
        >
          <Image width={80} height={80} src={correct} alt="pic" />
          <p>Promotions and News</p>
        </Link>
        <Link
          href={"/Programs"}
          className=" border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row"
        >
          <Image width={80} height={80} src={correct} alt="pic" />
          <p>Help and Support</p>
        </Link>
      </main>
      <main className="items-center text-red-900 font-semibold flex flex-row   gap-3  w-full mt-12s md:mt-auto">
        <IoIosArrowRoundBack />
        <Link href={"/"} className=" text-dark rounded-md mt-auto">
          Back to home
        </Link>
      </main>
    </main>
  );
}
