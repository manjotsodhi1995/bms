import { useEffect, useRef, useState } from "react"

interface StorySlidesProps {
  title: String,
  description: string,
  src: string,
  index: number;
  activeIndex: number;
  currentIndex: number;
}
function StorySlide({ src, index, currentIndex }: StorySlidesProps) {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log("isLoading", isLoading)
  console.log(src)
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when image loads
  };

  useEffect(() => {
    if (videoRef.current) {
      if (currentIndex === index) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentIndex, index]);
  return (
    <div
      className="md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out lg:h-[35rem] 2xl:h-[35rem] lg:w-[20rem] 2xl:w-[23rem] h-[400px] w-[250px]"
    >
      <div className="w-full rounded-3xl relative h-full">
       {/* {!isPlaying&& <div className="absolute bg-white rounded-lg text-center ml-4 mt-4 p-1 font-medium text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] 2xl:text-[1.5rem] 2xl:p-2">
          24 <br /> DEC
        </div>} */}
        <video
          src={src}
          ref={videoRef}
          className="w-full md:rounded-3xl rounded-xl h-full object-cover"
          loop
          autoPlay
          onLoad={handleImageLoad}
        ></video>
      </div>
    </div>
  );
}

export default StorySlide;