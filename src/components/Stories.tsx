import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import StorySlide from "./StorySlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { X } from "lucide-react";

interface StoryProps {
  onOpen: boolean;
  setOpen: (open: boolean) => void;
  activeIndex: number;
  // onSwiper: (swiper: SwiperCore) => void;
  // handleSlideChange: (swiper: SwiperCore) => void;
  handleNextClick: () => void; // Add handleNextClick to props
  handlePrevClick: () => void;
  urls: object[];
}

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max",
  bgcolor: "none",
  boxShadow: "none",
  p: 4,
  border: "none",
  outline: "none",
};

const Stories: React.FC<StoryProps> = ({
  onOpen,
  setOpen,
  activeIndex,
  handleNextClick,
  handlePrevClick,
  urls,
}) => {
  console.log(urls);
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  useEffect(() => {
    setCurrentIndex(activeIndex);
  }, [activeIndex]);
  const handleNext = () => {
    handleNextClick();
    setCurrentIndex((prev) => (prev + 1) % urls.length);
  };

  const handlePrev = () => {
    handlePrevClick();
    setCurrentIndex((prev) => (prev + (urls.length - 1)) % urls.length);
  };
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={onOpen}
      onClose={handleClose}
      className="flex justify-center items-center"
      sx={{ border: "none" }}
    >
      <Box sx={style}>
        <X
          className="text-white size-12 cursor-pointer absolute top-4 md:right-4 right-16 text-right z-20"
          onClick={handleClose}
        />
        <Swiper
          effect={"coverflow"}
          onNavigationNext={handleNext}
          onNavigationPrev={handlePrev}
          initialSlide={activeIndex}
          spaceBetween={60}
          navigation={true}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          autoplay={false}
          allowTouchMove={false}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 365,
            modifier: 1.5,
          }}
          modules={[EffectCoverflow, Navigation, Controller]}
          className="swiper_container sw2 sm:w-[600px] lg:w-[900px] min-[2000px]:w-[1400px] w-[108vw]"
        >
          {urls?.map((card: any, index) => (
            <SwiperSlide>
              <StorySlide
                key={index}
                VideoUrl={card.videoUrl}
                activeIndex={activeIndex}
                index={index}
                currentIndex={currentIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Modal>
  );
};

export default Stories;
