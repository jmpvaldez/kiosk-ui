import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/image.PNG";
import { FaArrowRightLong } from "react-icons/fa6";

export default function NewsCard() {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow mb-4">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="">
        <a href="#">
          <Image src={correct} width={400} height={200} alt="image" />
        </a>

        <p className="p-2 mb-3 font-normal text-gray-700 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          <FaArrowRightLong />
        </p>
      </div>
    </div>
  );
}
