import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.PNG";
import { IoIosArrowRoundBack } from "react-icons/io";
import SocialMediaCard from "../components/SocialMediaCard";
import { FaSearch } from "react-icons/fa";
import Logo from "../../../public/images/Logo.PNG";

export default function SocialMedia() {
  return (
    <main className=" h-screen flex flex-col items-start justify-start p-12 lg:p-36">
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
          className=" text-red-500 font-bold items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-4xl flex flex-row"
        >
          <Image width={80} height={80} src={icons} alt="pic" />
          <p>Social Media Integration</p>
        </Link>
      </div>
      <div className="md:mx-28 py-2 border-b-2 w-full lg:text-3xl md:text-2xl text-blue-900 font-sans font-bold">
        <p>facebook</p>
      </div>
      <main className="md:grid md:px-24 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-1 w-full mt-5 md:mt-4 ">
        <SocialMediaCard />
      </main>
      <main className="items-center justify-between p-12 text-red-900 font-semibold flex flex-row   gap-3  w-full mt-12 md:mt-auto">
        <div></div>
        <div className="flex flex-row justify-center  items-center gap-3">
          <IoIosArrowRoundBack />
          <Link
            href={"Menu"}
            className=" text-dark rounded-md mt-auto float-right"
          >
            Back
          </Link>
        </div>
      </main>
    </main>
  );
}
