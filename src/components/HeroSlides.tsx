import { useState } from "react"

interface HeroSlidesProps {
  title: String,
  description: string,
  imageUrl: string,
}
function HeroSlides({ title, description, imageUrl }: HeroSlidesProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  console.log("isLoading", isLoading)
  console.log(imageUrl)
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when image loads
  };
  return (
    <div
      className="md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out lg:h-[25rem] 2xl:h-[35rem] lg:w-[16rem] 2xl:w-[23rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
    >
      <div className="w-full rounded-3xl relative h-full">
       <div className="absolute bg-white rounded-lg text-center ml-4 mt-4 p-1 font-medium text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] 2xl:text-[1.5rem] 2xl:p-2">
          24 <br /> DEC
        </div>
        {/* <video
          src={v1}
          className="w-full md:rounded-3xl rounded-xl h-full object-cover"
          controls
          autoPlay
          onClick={() => {
            setIsPlaying(true);
          }}
          onLoad={handleImageLoad}
        ></video> */}
        <img src={imageUrl} className="w-full md:rounded-3xl rounded-xl h-full object-cover" onLoad={handleImageLoad}/>
        
          <div className="bg-[rgb(255,255,255,0.2)] backdrop-blur-2xl md:p-4 py-1 absolute bottom-[0rem] z-20 w-full flex flex-col gap-1 md:rounded-b-3xl rounded-b-xl">
            <div className="flex justify-center font-medium text-[0.9rem] md:text-[0.9rem] lg:text-[1.6rem] 2xl:text-[2rem] text-white">
              {title}
            </div>
            <div className="text-white px-2 2xl:px-4 flex justify-center text-center text-[0.6rem] md:text-[0.9rem] 2xl:text-[1.4rem]">
              {description}
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default HeroSlides