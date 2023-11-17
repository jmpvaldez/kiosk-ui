"use client";
import { useState } from "react";
import qr from "../../../public/images/qr.PNG";
import dswd from "../../../public/images/dswd.PNG";
import Image from "next/image";

export default function SocialMediaCard({ categories }) {
  const [show, setShow] = useState(true);
  return (
    <>
      {categories.map((category) => (
        <div onClick={() => setShow(!show)} className="md:mx-4 cursor-pointer">
          <div
            className={`${
              show ? "" : "border-gray-200 border-b-2"
            }  py-2 text-lg text-gray-900`}
          >
            {category.name}
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
      ))}
    </>
  );
}

SocialMediaCard.defaultProps = {
  categories: [
    {
      name: "@DSWD",
      regions: [],
    },
    {
      name: "@DSWD",
      regions: ["Central Visayas"],
    },
    {
      name: "@DSWD Field Office || Cagayan Valley",
      regions: ["Cagayan Valley"],
    },
    {
      name: "@DSWD Field Office || Central Luzon",
      regions: ["Central Luzon"],
    },
    {
      name: "@DSWD Field Office |V-A CALABARZON",
      regions: ["V-A CALABARZON"],
    },
    {
      name: "@DSWD Field Office MIMAROPA",
      regions: ["MIMAROPA"],
    },
    {
      name: "@DSWD Field Office V Bicol Region",
      regions: ["Bicol Region"],
    },
    {
      name: "@DSWD Field Office V| Western Visayas",
      regions: ["Western Visayas"],
    },

    {
      name: "@DSWD Field Office V||| Eastern Visayas",
      regions: ["Eastern Visayas"],
    },
    {
      name: "@DSWD Field Office |X Zamboanga Peninsula",
      regions: ["Zamboanga Peninsula"],
    },
    {
      name: "@DSWD Field Office X Northern Mindanao",
      regions: ["Northern Mindanao"],
    },
    {
      name: "@DSWD Field Office X| Davao Region",
      regions: ["Davao Region"],
    },
    {
      name: "@DSWD Field Office X|| SOCCSKSARGEN",
      regions: ["SOCCSKSARGEN"],
    },
    {
      name: "@DSWD Field Office National Capital Region",
      regions: ["National Capital Region"],
    },
    {
      name: "@DSWD Field Office Caraga",
      regions: ["Caraga"],
    },
    {
      name: "@DSWD Field Office Cordillera Administrative Region",
      regions: ["Cordillera Administrative Region"],
    },
    {
      name: "@Pantawid Pamilyang Pilipino",
      regions: [],
    },
    {
      name: "@AICS",
      regions: [],
    },
    {
      name: "@Sustainable Livelihood Program",
      regions: [],
    },
    {
      name: "@DRMB",
      regions: [],
    },
    {
      name: "@KALAHI-CIDSS",
      regions: [],
    },
  ],
};
