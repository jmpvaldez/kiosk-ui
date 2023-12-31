import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.PNG";
import { IoIosArrowRoundBack } from "react-icons/io";
import ProgramsCard from "../components/ProgramsCard";
import Logo from "../../../public/images/Logo.PNG";

export default function Programs() {
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
        <div className="flex items-center lg:text-3xl md:text-2xl text-blue-900 font-sans font-bold">
          <p>#BawatBuhayMahalagaSaDSWD</p>
        </div>
      </header>
      <div className="flex mt-6 items-start  md:items-center flex-col md:flex-row justify-between w-full mb-4">
        <div className=" text-gray-500 font-bold items-center gap-6 p-3  md:text-5xl flex flex-row">
          <Image
            width={80}
            height={80}
            src={icons}
            alt="pic"
            style={{ width: "auto", height: "auto" }}
          />
          <p>Program Categories</p>
        </div>
      </div>
      <main className="md:grid  md:grid-cols-3 lg:grid-cols-6 gap-4   w-full mt-5 md:mt-4 ">
        <ProgramsCard />
      </main>
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
