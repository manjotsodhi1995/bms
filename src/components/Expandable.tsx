import { useEffect, useState, useRef, ReactNode } from "react";
interface ExpandableBoxProps {
  title: string;
  content: ReactNode;
  className?: string;
}
const ExpandableBox = ({ title, content, className }: ExpandableBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`w-full rounded-lg shadow-md overflow-hidden px-2 py-5 border-2 border-gray-300 transform transition-all duration-300  ${className}`}
    >
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer transform transition-all duration-300 "
        onClick={handleClick}
      >
        <p
          className={`${
            isOpen ? "text-[#009961]" : ""
          } 2xl:text-[1.5rem] text-lg ${className}`}
        >
          {title}
        </p>
        <svg
          className={`${
            isOpen
              ? "transform rotate-90 transform transition-all duration-300 "
              : ""
          } w-6 h-6 text-gray-600`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        className="px-4 overflow-hidden transition-max-height duration-300 ease-in-out"
      >
        {isOpen && (
          <div
            className={`px-4 py-6 prose 2xl:text-[1.2rem] transform transition-all duration-300 ${className}`}
          >
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandableBox;
