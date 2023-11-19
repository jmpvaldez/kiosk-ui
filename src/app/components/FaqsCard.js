import { MdOutlineMessage } from "react-icons/md";

export default function FaqsCard({
  openDiv,
  onOpenDivChange,
  onItemNoChange, // assuming this is a function to update the item number in the main page
  categories = [
    {
      id: 1,
      title:
        "How to avail assistance from the Assistance to Individuals in Crisis Situation AICS",
      content: `
      How to avail assistance from the Assistance to Individuals in
           
    `,
    },
    {
      id: 2,
      title: "How to acquire Travel Clearance?",
      content: `
      B How to avail assistance from the Assistance to Individuals in
     `,
    },
    {
      id: 3,
      title: "How to join the Pantawid Pamilyang Pilipino Program (4ps)?",
      content: `
      C How to avail assistance from the Assistance to Individuals in
     `,
    },
    {
      id: 4,
      title:
        "How to avail assistance from the Sustainable Livelihood Program(SLP)?",
      content: `
      D How to avail assistance from the Assistance to Individuals in
     `,
    },
  ],
}) {
  const handleButtonClick = (categoryId) => {
    onOpenDivChange(false);
    onItemNoChange(categoryId);
  };

  return (
    <>
      {categories.map((category) => (
        <span
          key={category.id}
          onClick={() => handleButtonClick(category.id)}
          className={`${
            openDiv ? "w-full" : ""
          }  mx-14 border-b-2 text-gray-600 items-center  p-3 hover:cursor-pointer hover:text-red-900 font-semibold md:text-2xl flex flex-row`}
        >
          <p>{category.title}</p>
          <MdOutlineMessage
            className={`${
              openDiv ? "flex" : "hidden"
            } ml-auto text-4xl text-red-900 `}
          />
        </span>
      ))}
    </>
  );
}
