import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.PNG";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Logo from "../../../public/images/Logo.PNG";

export default function Service() {
  return (
    <main className=" h-screen flex flex-col items-start justify-start p-12 md:py-14 md:px-36">
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={350}
            height={100}
            alt="logo"
            priority={true}
            style={{ width: "auto", height: "auto" }}
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
      <div className="flex md:flex-col my-6 items-start  md:items-start flex-col lg:flex-row justify-between w-full mb-4">
        <div className="md:w-full lg:w-1/3">
          <div className=" text-gray-700 font-bold items-center gap-6 p-3  md:text-5xl flex flex-row">
            <Image
              width={80}
              height={80}
              src={icons}
              alt="pic"
              style={{ width: "auto", height: "auto" }}
            />
            <p>Service Listings</p>
          </div>
          <div className="font-semibold items-center p-3 lg:ml-24 md:ml-0 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam,
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 text-gray-500 font-sans font-semibold items-start gap-6 p-3 text-4xl ">
          <p className="border-b-2 p-4 text-gray-700 tracking-wider">
            DSWD Policies
          </p>
          <p className="border-b-2 p-4 text-gray-700 tracking-wider">
            DSWD Memorandum
          </p>
          <p className="border-b-2 p-4 text-gray-700 tracking-wider">
            IATFRM Requirements
          </p>
          <p className="border-b-2 p-4 text-gray-700 tracking-wider">
            ARTA Advisories
          </p>
          <p className=" p-4 text-gray-700 text-lg italic w-2/3 tracking-wider">
            Detailed listings of services within each category Service names,
            descriptions and possibly images Links to related forms, guidlines,
            and information
          </p>
        </div>
      </div>

      <main className="items-center justify-between p-12 text-red-900 font-semibold flex flex-row   gap-3  w-full mt-12s md:mt-auto">
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
