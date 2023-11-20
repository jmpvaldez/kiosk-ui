import Image from "next/image";
import Link from "next/link";
import correct from "../../../public/images/image.PNG";

export default function FeaturedCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg mt-12 md:mt-2">
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
        <p className="absolute p-1 mb-0 font-normal text-white bg-[#1e40af] text-sm opacity-60 bottom-0 w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dos
          eiusmod
        </p>
      </div>
    </div>
  );
}
