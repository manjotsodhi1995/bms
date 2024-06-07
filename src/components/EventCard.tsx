import { useState } from "react"
import { Link } from "react-router-dom";
interface HeroSlidesProps {
  title: String;
  description: string;
    imageUrl: string;
    location: string;
    date: string;
}
function EventCard({ title, description, imageUrl, location, date }: HeroSlidesProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="rounded-3xl shadow:lg transition-transform duration-300 ease-in-out  bg-white pb-2 md:w-[25vw] lg:w-[19vw] border-[#BCBCBC36] border-2 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.02)" : "scale(1)" }}
    >
      <Link to="/event/1">
        {" "}
        <div className="w-full">
          <img
            src={imageUrl}
            alt=""
            className="w-[100rem] h-[7rem] lg:rounded-2xl md:h-[12rem] 2xl:h-[15rem]"
          />
          <div className="absolute md:top-4 md:right-4 top-2 right-2">
            <svg
              width="20"
              height="16"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 6.5625C21.5 13.125 11.7697 18.4369 11.3553 18.6562C11.2461 18.715 11.124 18.7458 11 18.7458C10.876 18.7458 10.7539 18.715 10.6447 18.6562C10.2303 18.4369 0.5 13.125 0.5 6.5625C0.501737 5.02146 1.11468 3.54404 2.20436 2.45436C3.29404 1.36468 4.77146 0.751737 6.3125 0.75C8.24844 0.75 9.94344 1.5825 11 2.98969C12.0566 1.5825 13.7516 0.75 15.6875 0.75C17.2285 0.751737 18.706 1.36468 19.7956 2.45436C20.8853 3.54404 21.4983 5.02146 21.5 6.5625Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="p-2 flex w-full md:gap-4 gap-2 justify-center align-middle items-center">
            <div className="text-center font-medium 2xl:text-[1.5rem] lg:text-[1.2rem] text-[0.9rem] w-[20%] flex justify-center items-center">
              {date}
            </div>
            <div className="w-[2px] md:h-[70px] h-[50px] bg-black flex justify-center"></div>
            <div>
              <div className="flex gap-2 justify-left font-medium text-[0.5rem] md:text-[0.7rem] 2xl:text-[1.2rem]">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 0.333374C8.0913 0.333374 9.61742 0.965515 10.7426 2.09073C11.8679 3.21595 12.5 4.74208 12.5 6.33337C12.5 8.38271 11.3827 10.06 10.2053 11.2634C9.61701 11.858 8.97519 12.3971 8.288 12.874L8.004 13.0674L7.87067 13.156L7.61933 13.316L7.39533 13.4527L7.118 13.614C6.92967 13.7212 6.7167 13.7776 6.5 13.7776C6.2833 13.7776 6.07033 13.7212 5.882 13.614L5.60467 13.4527L5.258 13.2394L5.13 13.156L4.85667 12.974C4.11532 12.4723 3.42471 11.8993 2.79467 11.2634C1.61733 10.0594 0.5 8.38271 0.5 6.33337C0.5 4.74208 1.13214 3.21595 2.25736 2.09073C3.38258 0.965515 4.9087 0.333374 6.5 0.333374ZM6.5 1.66671C5.26232 1.66671 4.07534 2.15837 3.20017 3.03354C2.325 3.90871 1.83333 5.0957 1.83333 6.33337C1.83333 7.88137 2.68133 9.24004 3.74733 10.3307C4.20575 10.7946 4.70116 11.2205 5.22867 11.604L5.534 11.8214C5.63267 11.89 5.72733 11.954 5.81867 12.0134L6.07867 12.18L6.30733 12.3194L6.5 12.432L6.80333 12.2527L7.048 12.0994C7.178 12.0167 7.318 11.924 7.466 11.8214L7.77133 11.604C8.29884 11.2205 8.79425 10.7946 9.25267 10.3307C10.3187 9.24071 11.1667 7.88137 11.1667 6.33337C11.1667 5.0957 10.675 3.90871 9.79983 3.03354C8.92466 2.15837 7.73768 1.66671 6.5 1.66671ZM6.5 3.66671C7.20724 3.66671 7.88552 3.94766 8.38562 4.44776C8.88572 4.94785 9.16667 5.62613 9.16667 6.33337C9.16667 7.04062 8.88572 7.7189 8.38562 8.21899C7.88552 8.71909 7.20724 9.00004 6.5 9.00004C5.79276 9.00004 5.11448 8.71909 4.61438 8.21899C4.11428 7.7189 3.83333 7.04062 3.83333 6.33337C3.83333 5.62613 4.11428 4.94785 4.61438 4.44776C5.11448 3.94766 5.79276 3.66671 6.5 3.66671ZM6.5 5.00004C6.14638 5.00004 5.80724 5.14052 5.55719 5.39057C5.30714 5.64061 5.16667 5.97975 5.16667 6.33337C5.16667 6.687 5.30714 7.02613 5.55719 7.27618C5.80724 7.52623 6.14638 7.66671 6.5 7.66671C6.85362 7.66671 7.19276 7.52623 7.44281 7.27618C7.69286 7.02613 7.83333 6.687 7.83333 6.33337C7.83333 5.97975 7.69286 5.64061 7.44281 5.39057C7.19276 5.14052 6.85362 5.00004 6.5 5.00004Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
                {location}
              </div>
              <div className="flex text-[#A48A00] justify-left font-medium text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem] 2xl:text-[1.6rem]">
                {title}
              </div>
              <div className="flex justify-left text-[0.4rem] md:text-[0.6rem] 2xl:text-[0.9rem]">
                {description}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventCard;
