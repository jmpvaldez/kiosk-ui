import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/image.PNG";
import { FaArrowRightLong } from "react-icons/fa6";

export default function NewsCard() {
  return (
    <div className="max-w-sm mx-auto bg-white border rounded-lg mt-12 md:mt-2">
      <div className="relative">
        <Link href="#">
          <Image
            src={correct}
            width={400}
            height={200}
            objectFit="cover"
            alt="image"
          />
        </Link>

        <p className="p-2 mb-3 font-normal text-gray-700 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          <FaArrowRightLong />
        </p>
      </div>
    </div>
  );
}
