"use client";
import { useState } from "react";
import qr from "../../../public/images/qr.PNG";
import dswd from "../../../public/images/dswd.PNG";
import Image from "next/image";

export default function SocialMediaCard() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div onClick={() => setShow(!show)} className="md:mx-4 cursor-pointer">
        <div
          className={`${
            show ? "" : "border-gray-200 border-b-2"
          }  py-2 text-lg text-gray-900`}
        >
          DSWD
        </div>
        <div
          className={` ${
            show ? "hidden" : "flex"
          }  flex-row justify-between py-4`}
        >
          <Image src={dswd} width={200} height={100} alt="qr" />
          <Image src={qr} width={70} height={70} alt="qr" />
        </div>
      </div>
    </>
  );
}
