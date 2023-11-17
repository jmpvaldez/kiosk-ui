import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.PNG";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AicsCard({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={"Faqs"}
          className="border hover:bg-teal-100 rounded-3xl mx-auto text-gray-900 mb-5 min-w-1/4 md:w-10/12 md:mb-0 items-center gap-1 py-4  hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-xl flex flex-col justify-center text-center"
        >
          <Image width={65} height={65} src={icons} alt="pic" />
          <p>{category.title}</p>
          <FaArrowRightLong />
        </Link>
      ))}
    </>
  );
}

AicsCard.defaultProps = {
  categories: [
    {
      id: 21,
      title: "Educational Assistance",
      description:
        "Support programs providing financial assistance for education-related expenses.",
    },
    {
      id: 22,
      title: "Medical Assistance",
      description:
        "Assistance programs covering medical expenses and healthcare needs.",
    },
    {
      id: 23,
      title: "Burial Assistance",
      description:
        "Support for funeral and burial expenses during times of bereavement.",
    },
    {
      id: 24,
      title: "Food Assistance",
      description:
        "Programs providing food support to individuals and families in need.",
    },
    {
      id: 25,
      title: "Transportation Assistance",
      description:
        "Assistance for transportation expenses, facilitating travel for various purposes.",
    },
    {
      id: 26,
      title: "Psychological Assistance",
      description: "Support services focusing on mental health and well-being.",
    },
    {
      id: 27,
      title: "Cash Relief Assistance",
      description:
        "Financial aid programs offering direct cash relief to those in need.",
    },
    {
      id: 28,
      title: "Referral",
      description:
        "Guidance and assistance in connecting individuals with relevant services and resources.",
    },
  ],
};
