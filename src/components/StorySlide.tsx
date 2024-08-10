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
    <div className="md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out lg:h-[40rem] 2xl:h-[50rem] 2xl:w-[30rem] min-[2000px]:h-[75rem] min-[2000px]:w-[45rem] lg:w-[26rem]  h-[30rem] w-[15rem]">
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
