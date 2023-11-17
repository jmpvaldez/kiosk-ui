import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/images/icons.PNG";
import { FaArrowRightLong } from "react-icons/fa6";

export default function MenuCard({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.link}
          className="card border-b-2 text-gray-800 items-center gap-6 p-3 hover:cursor-pointer hover:text-red-900 hover:font-semibold md:text-2xl flex flex-row"
        >
          <Image width={80} height={80} src={icons} alt="pic" />
          <p>{category.title}</p>
        </Link>
      ))}
    </>
  );
}
MenuCard.defaultProps = {
  categories: [
    {
      id: 1,
      title: "Program Categories",
      description: "Explore various program categories for our services.",
      link: "Programs",
    },
    {
      id: 2,
      title: "Featured Stories",
      description:
        "Read our featured stories and stay updated with inspiring content.",
      link: "/featured-stories",
    },
    {
      id: 3,
      title: "Service Listings",
      description:
        "Find detailed listings of the services we offer to assist you.",
      link: "/service-listings",
    },
    {
      id: 4,
      title: "Emergency Information",
      description:
        "Access emergency information to stay prepared and informed.",
      link: "/emergency-information",
    },
    {
      id: 5,
      title: "Frequently Asked Questions (FAQs)",
      description:
        "Get answers to common questions about our programs and services.",
      link: "Faqs",
    },
    {
      id: 6,
      title: "Social Media Integration",
      description:
        "Connect with us on social media for the latest updates and news.",
      link: "SocialMedia",
    },
    {
      id: 7,
      title: "Promotions and News",
      description:
        "Stay informed about promotions, events, and news from our organization.",
      link: "News",
    },
    {
      id: 8,
      title: "Help and Support",
      description:
        "Find resources and support to address your needs and concerns.",
      link: "Support",
    },
  ],
};
