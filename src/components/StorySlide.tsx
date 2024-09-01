import { useEffect, useRef, useState } from "react";

interface StorySlidesProps {
  videoUrl: string;
  index: number;
  activeIndex: number;
  currentIndex: number;
}
function StorySlide({ videoUrl, index, currentIndex }: StorySlidesProps) {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log("isLoading", isLoading);
  console.log(videoUrl);
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
    <div className="md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out lg:h-[35rem] 2xl:h-[45rem] 2xl:w-[30rem] min-[2000px]:h-[75rem] min-[2000px]:w-[45rem] lg:w-[26rem]  h-[25rem] w-[13rem]">
      <video
        src={videoUrl}
        ref={videoRef}
        webkit-playsinline
        className="video h-full w-full object-cover"
        loop
        autoPlay
        playsInline
        onLoad={handleImageLoad}
        disablePictureInPicture
      ></video>
    </div>
  );
}

export default StorySlide;
