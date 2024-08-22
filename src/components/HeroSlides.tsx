import { useState, useRef } from "react";

interface HeroSlidesProps {
  title: string;
  description: string;
  ImageUrl: string;
  videoUrl: string;
}

function HeroSlides({
  title,
  description,
  ImageUrl,
  videoUrl,
}: HeroSlidesProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track if the video is playing
  const videoRef = useRef(null);

  // const handleImageLoad = () => {
  //   setIsLoading(false);
  // };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
    console.log(ImageUrl);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div
      className="md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out lg:h-[18rem] lg:w-[15rem] 2xl:w-[18rem] 2xl:h-[21rem] h-[12rem] md:h-[12rem] md:w-[10rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
    >
      {isVideoLoading && isVideoPlaying && <div></div>}
      <div className="w-full rounded-3xl relative h-full">
        {/* {!isHovered && (
          <div className="absolute bg-white rounded-lg text-center ml-4 mt-4 p-1 font-medium text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] 2xl:text-[1.2rem] 2xl:p-2">
            24 <br /> DEC
          </div>
        )} */}
        {/* {!isHovered && (
          <img
            src={ImageUrl}
            className={`w-full md:rounded-3xl rounded-xl h-full object-cover`} // Hide image when video is playing
            onLoad={handleImageLoad}
          />
        )} */}

        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full md:rounded-3xl rounded-xl h-full object-cover"
          onLoad={handleVideoLoad}
          onPlay={handleVideoPlay} // Track when the video starts playing
          autoPlay
          muted
          loop
        />

        {!isHovered && (
          <div className="bg-[rgb(255,255,255,0.2)] backdrop-blur-2xl md:p-4 py-1 absolute bottom-[0rem] z-20 w-full flex flex-col gap-1 md:rounded-b-3xl rounded-b-xl">
            <div className="flex justify-center font-medium text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] 2xl:text-[1.5rem] text-white">
              {title}
            </div>
            <div className="text-white px-2 2xl:px-4 flex justify-center text-center text-[0.6rem] md:text-[0.6rem] 2xl:text-[1rem]">
              {description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSlides;
