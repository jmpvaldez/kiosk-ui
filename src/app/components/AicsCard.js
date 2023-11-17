import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/correct.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AicsCard() {
  return (
    <Link
      href={"Aics"}
      className="border rounded-3xl mx-auto text-blue-900 mb-5 min-w-1/4 md:w-10/12 md:mb-0 items-center gap-1 py-4  hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col justify-center text-center"
    >
      <Image width={65} height={65} src={correct} alt="pic" />
      <p>
        Person with <br /> Disability
      </p>
      <FaArrowRightLong />
    </Link>
  );
}
