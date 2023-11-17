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
        <div
          key={category.id}
          onClick={() => setShow(!show)}
          className="md:mx-4 cursor-pointer"
        >
          <div
            className={`${
              show ? "" : "border-gray-200 border-b-2"
            }  py-2 text-lg text-gray-900`}
          >
            key={category.title}
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
      id: 9,
      title: "Person with Disability",
      description:
        "Programs and services catering to the needs of persons with disabilities.",
    },
    {
      id: 10,
      title: "Senior Citizens",
      description: "Support and assistance programs for senior citizens.",
    },
    {
      id: 11,
      title: "Women",
      description:
        "Initiatives focused on the empowerment and well-being of women.",
    },
    {
      id: 12,
      title: "Children",
      description:
        "Services and activities aimed at the welfare and development of children.",
    },
    {
      id: 13,
      title: "General Public",
      description:
        "Public programs and services accessible to the general population.",
    },
    {
      id: 14,
      title: "Travel Clearance for Minors",
      description:
        "Guidance and assistance for minors traveling alone or with someone other than their parents.",
    },
    {
      id: 15,
      title: "Registration, Licensing and Accreditation of SWDAs and SPs",
      description:
        "Procedures and support for social welfare and development agencies and service providers.",
    },
    {
      id: 16,
      title: "Assistance to Individuals in Crisis Situations (AICS)",
      description:
        "Emergency assistance and support for individuals facing crisis situations.",
    },
    {
      id: 17,
      title: "Pantawid Pamilyang Pilipino Program (4Ps)",
      description:
        "Conditional cash transfer program aimed at improving the health, nutrition, and education of poor households.",
    },
    {
      id: 18,
      title: "Sustainable Livelihood Program (SLP)",
      description:
        "Initiatives promoting sustainable livelihoods for marginalized individuals and communities.",
    },
    {
      id: 19,
      title:
        "Kapit-Bisig Laban sa Kahirapan-Comprehensive and Integrated Delivery of Social Services",
      description:
        "Holistic approach to poverty alleviation through comprehensive and integrated social services.",
    },
    {
      id: 20,
      title: "Supplementary Feeding Program (SFP)",
      description:
        "Program providing additional nutrition support to target beneficiaries.",
    },
  ],
};
