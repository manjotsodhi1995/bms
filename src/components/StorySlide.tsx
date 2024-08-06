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
    <div className="md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out lg:h-[30rem] 2xl:h-[55rem] lg:w-[22rem] 2xl:w-[27rem] h-[55vh] w-[70vw]">
      <video
        src={VideoUrl}
        ref={videoRef}
        className="video h-full w-full object-cover"
        loop
        autoPlay
        controls
        controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
        onLoad={handleImageLoad}
        disablePictureInPicture
      ></video>
    </div>
  );
}

export default StorySlide;
