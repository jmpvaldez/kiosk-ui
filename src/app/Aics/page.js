import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import correct from "../../../public/images/correct.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Aics() {
  return (
    <main className=" h-screen flex flex-col items-start justify-start p-12 md:p-36">
      <header className="flex items-start md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className="flex items-center">
          <span className="text-4xl font-bold">DSWD</span>
        </div>
        <div className="flex items-center lg:text-3xl md:text-2xl text-blue-900 font-sans font-bold">
          <p>#BawatBuhayMahalagaSaDSWD</p>
        </div>
      </header>

      <div className="flex flex-row mt-5 md:mt-4 gap-8">
        <div className="w-1/3 border-r-2 px-12 items-center  flex flex-col justify-between">
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
        <main className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-start justify-start w-full mt-5 md:mt-4 ">
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>
          <span className=" border rounded-3xl text-blue-900 mb-5  w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>
              Senior <br /> Citizens
            </p>
            <FaArrowRightLong />
          </span>
          <span className=" border rounded-3xl text-blue-900 mb-5  w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>{" "}
          <span className=" border rounded-3xl text-blue-900 mb-5  w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>{" "}
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>
              General <br /> Public
            </p>
            <FaArrowRightLong />
          </span>{" "}
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>
              Travel Clearance <br /> for Minors
            </p>
            <FaArrowRightLong />
          </span>{" "}
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>{" "}
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>{" "}
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>{" "}
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>{" "}
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>{" "}
          <span className=" border rounded-3xl text-blue-900 mb-5 w-10/12 md:mb-0 items-center gap-1 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col  justify-center text-center">
            <Image width={65} height={65} src={correct} alt="pic" />
            <p>Person with Disability</p>
            <FaArrowRightLong />
          </span>
        </main>
      </div>

      <main className="items-center justify-between p-12 text-red-900 font-semibold flex flex-row   gap-3  w-full mt-12s md:mt-auto">
        <div></div>
        <div className="flex flex-row justify-center  items-center gap-3">
          <IoIosArrowRoundBack />
          <Link
            href={"Programs"}
            className=" text-dark rounded-md mt-auto float-right"
          >
            Back
          </Link>
        </div>
      </main>
    </main>
  );
}
