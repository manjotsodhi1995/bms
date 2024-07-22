import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal"
import Box from '@mui/material/Box';
import StorySlide from "./StorySlide";
import { Swiper, SwiperSlide} from "swiper/react";
import { Controller, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {data}  from "../utils/stories"



interface StoryProps {
  onOpen: boolean;
  setOpen: (open: boolean) => void;
  activeIndex: number
  // onSwiper: (swiper: SwiperCore) => void;
  // handleSlideChange: (swiper: SwiperCore) => void;
  handleNextClick: () => void; // Add handleNextClick to props
  handlePrevClick: () => void;
}

// const data = [
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
//     src:
//       "/v1.mp4",
//   },
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 810",
//     src:
//       "/v2.mp4",
//   },
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
//     src:
//       "/v3.mp4",
//   },
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
//     src:
//      "/v4.mp4",
//   },
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
//     src:
//       "/v5.mp4",
//   },
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
//     src:
//       "/v1.mp4",
//   },
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 810",
//     src:
//       "/v2.mp4",
//   },
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
//     src:
//       "/v3.mp4",
//   },
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
//     src:
//      "/v4.mp4",
//   },
//   {
//     title: "Match Events",
//     description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
//     src:
//       "/v5.mp4",
//   }
// ];
const style = {
  position: 'absolute',
  display:'flex',
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max',
  bgcolor: 'none',
  boxShadow: 'none',
  p: 4,
  border: 'none',
  outline: 'none'
};


const Stories: React.FC<StoryProps> = ({ onOpen, setOpen, activeIndex, handleNextClick,
  handlePrevClick,}) => {
  // const [childSwiper, setChildSwiper] = useState<SwiperCore | null>(null);

  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  useEffect(() => {
    setCurrentIndex(activeIndex);
  }, [activeIndex]);
  // const handleSlideChange = (swiper: SwiperCore) => {
  //   // setCurrentIndex(swiper.activeIndex);
  // };
  const handleNext = () => {
    handleNextClick();
    // Perform additional actions here
    setCurrentIndex((prev)=>(prev+11)%10)
  };

  const handlePrev = () => {
    handlePrevClick();
    // Perform additional actions here
    setCurrentIndex((prev)=>(prev+9)%10)
  };
const handleClose = () => setOpen(false);
  return (
    <Modal
    open={onOpen}
    onClose={handleClose}
    className="flex justify-center items-center"
    sx={{border:'none'}}
  >
    <Box sx={style}>
    <Swiper
          effect = {'coverflow'}
          // onSlideChange={handleSlideChange}
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
          className="swiper_container sw1 py-8 px-[10px] sm:px-[0] sm:w-[700px] w-screen p-10"
        //  onInit={setChildSwiper}
        //  controller={{
        //   by:"container",
        //   control: swiperInstance,
        // }}
        >
           {data.map((card, index) => (
            // onClick={() => setOpen(true)}
            <SwiperSlide>
              <StorySlide key={index} {...card} activeIndex={activeIndex} index={index} currentIndex={currentIndex}/>
            </SwiperSlide>
          ))}
        </Swiper>
     </Box>
    </Modal>
  );
};

export default Stories;
