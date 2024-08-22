import { useState } from "react";

interface HeroSlidesProps {
  title: string;
  videoUrl: string;
}

function EventSlides({ title, videoUrl }: HeroSlidesProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-[8rem] md:h-[12rem] md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
    >
      <div className="w-full rounded-3xl relative h-full">
        {/* {!isHovered && (
          <div className="absolute bg-white rounded-lg text-center ml-4 mt-4 p-1 font-medium text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] 2xl:text-[1.2rem] 2xl:p-2">
            24 <br /> DEC
          </div>
        )} */}
        <video
          src={videoUrl}
          className="w-full md:rounded-3xl rounded-xl h-full object-cover"
          autoPlay
          muted
          loop
        />
        <div className="bg-[rgb(255,255,255,0.2)] backdrop-blur-2xl md:p-2 py-1 absolute bottom-[0rem] z-20 w-full flex flex-col md:rounded-b-3xl rounded-b-xl border b-1">
          <div className="font-medium text-[0.8rem] md:text-[0.7rem] lg:text-[0.9rem] 2xl:text-[1.0rem] text-white line-clamp-1 break-words text-center">
            {title}
          </div>
          {/* <div className="text-white px-2 text-center text-[0.4rem] md:text-[0.6rem] 2xl:text-[0.7rem] line-clamp-1">
            {description}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default EventSlides;
