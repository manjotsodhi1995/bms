import { useState } from "react";
interface ExpandableBoxProps {
  title: string;
  content: string;
}
const ExpandableBox = ({ title, content }: ExpandableBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full rounded-xl shadow-md overflow-hidden md:px-2 md:py-5 border-2 border-gray-300">
      <div
        className="flex justify-between items-center px-10 py-6 cursor-pointer"
        onClick={handleClick}>
        <p className={`${isOpen ? "text" : ""} 2xl:text-[1.5rem] text-lg`}>
          {title}
        </p>
        <svg
          className={`${
            isOpen ? "transform rotate-45" : ""
          } w-6 h-6 text-gray-600`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="px-10 py-6 prose 2xl:text-[1.2rem] text-lg">
          {content}
        </div>
      )}
    </div>
  );
};

export default ExpandableBox;
