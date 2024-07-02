import type { EventType } from "@/stores/event";
import { useState } from "react";

function EventSlides({ title, description, posterUrl: imageUrl }: EventType) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  console.log("isLoading", isLoading);
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when image loads
  };
  return (
    <div
      className="h-[30vh] md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
    >
      <img
        src={imageUrl}
        alt=""
        className="w-full md:rounded-3xl rounded-xl h-full object-cover"
        onLoad={handleImageLoad}
      />
      <div className="bg-[rgb(255,255,255,0.2)] backdrop-blur-2xl md:p-2 py-1 absolute bottom-[0rem] z-20 w-full flex flex-col md:rounded-b-3xl rounded-b-xl border b-1">
        <div className="font-medium text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] 2xl:text-[1.2rem] text-white line-clamp-1 break-words">
          {title}
        </div>
        <div className="text-white px-2 text-center text-[0.4rem] md:text-[0.6rem] 2xl:text-[0.7rem] line-clamp-1">
          {description}
        </div>
      </div>
    </div>
  );
}

export default EventSlides;
