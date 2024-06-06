import { useState } from "react"
interface HeroSlidesProps {
  title: String,
  description: string,
  imageUrl: string,
}
function HeroSlides({ title, description, imageUrl }: HeroSlidesProps) {
  const [isHovered, setIsHovered] = useState(false);
<<<<<<< Updated upstream
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  console.log("isLoading", isLoading)
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when image loads
  };
=======
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    const handleImageLoad = () => {
      setIsLoading(false); 
      console.log(isLoading);
    };
>>>>>>> Stashed changes
  return (
    <div
      className="md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
    >
      <div className="w-full rounded-3xl relative">
        <div className="absolute bg-white rounded-lg text-center ml-4 mt-4 p-1 font-medium text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] 2xl:text-[1.5rem] 2xl:p-2">
          23 <br /> DEC
        </div>

        <img
          src={imageUrl}
          alt=""
          className="w-full md:rounded-3xl rounded-xl"
          onLoad={handleImageLoad}
        />
        <div className="bg-[rgb(255,255,255,0.2)] backdrop-blur-xl md:p-4 py-1 absolute bottom-[0rem] z-20 w-full flex flex-col gap-1 md:rounded-b-3xl rounded-b-xl border b-1">
          <div className="flex justify-center font-medium text-[0.9rem] md:text-[0.9rem] lg:text-[1.4rem] 2xl:text-[1.9rem] text-white">
            {title}
          </div>
          <div className="text-white flex justify-center text-center text-[0.6rem] md:text-[0.9rem] 2xl:text-[1.6rem]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlides