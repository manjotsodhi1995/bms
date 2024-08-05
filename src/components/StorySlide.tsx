import { useEffect, useRef, useState } from "react";

interface StorySlidesProps {
  VideoUrl: string;
  index: number;
  activeIndex: number;
  currentIndex: number;
}
function StorySlide({ VideoUrl, index, currentIndex }: StorySlidesProps) {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log("isLoading", isLoading);
  console.log(VideoUrl);
  const handleImageLoad = () => {
    setIsLoading(false);
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
    <div className="md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out lg:h-[35rem] 2xl:h-[55rem] lg:w-[22rem] 2xl:w-[23rem] h-[60vh] w-[70vw]">
      <div className="w-full rounded-3xl relative h-full">
        <video
          src={VideoUrl}
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
