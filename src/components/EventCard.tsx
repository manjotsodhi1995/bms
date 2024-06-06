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
      className="rounded-3xl shadow:lg transition-transform duration-300 ease-in-out  bg-white pb-2 md:w-[25vw] lg:w-[19vw] border-[#BCBCBC36] border-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
    >
      <Link to="/event/1">
        {" "}
        <div className="w-full">
          <img src={imageUrl} alt="" className="w-[100rem] h-[7rem] lg:rounded-2xl md:h-[12rem] 2xl:h-[15rem]" />
          <div className="p-2 flex w-full md:gap-4 gap-2 justify-center align-middle items-center">
            <div className="text-center font-medium 2xl:text-[1.5rem] lg:text-[1.2rem] text-[0.9rem] w-[20%] flex justify-center items-center">
              {date}
            </div>
            <div className="w-[2px] md:h-[70px] h-[50px] bg-black flex justify-center"></div>
            <div>
              <div className="flex justify-left font-medium text-[0.5rem] md:text-[0.7rem] 2xl:text-[1.2rem]">
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
