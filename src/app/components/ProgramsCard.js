import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.PNG";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProgramsCard({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={"Aics"}
          className="border font-semibold whitespace-norma rounded-3xl mx-auto text-blue-900 mb-5 min-w-1/4 md:w-10/12 md:mb-0 items-center max-h-52 gap-1 px-4 py-2 justify-start  hover:cursor-pointer hover:text-red-900 md:text-lg flex flex-col text-center"
        >
          <Image
            width={65}
            height={65}
            src={icons}
            alt={category.title}
            className="mt-1"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="whitespace-normal text-sm">{category.title}</p>
          <FaArrowRightLong />
        </Link>
      ))}
    </>
  );
}

ProgramsCard.defaultProps = {
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
        "Holistic approach to poverty alleviation through comprehensive and integrated social services. (KALAHI-CIDSS)",
    },
    {
      id: 20,
      title: "Supplementary Feeding Program (SFP)",
      description:
        "Program providing additional nutrition support to target beneficiaries.",
    },
  ],
};
