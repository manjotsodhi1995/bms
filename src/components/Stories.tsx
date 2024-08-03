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
  handlePrevClick, urls}) => {
  // const [childSwiper, setChildSwiper] = useState<SwiperCore | null>(null);
    console.log(urls)
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
    setCurrentIndex((prev)=>(prev+1)%10)
  };

  const handlePrev = () => {
    handlePrevClick();
    // Perform additional actions here
    setCurrentIndex((prev)=>(prev+9)%10)
  };
  // console.log(urls)
const handleClose = () => setOpen(false);
  return (
    <Modal
    open={onOpen}
    onClose={handleClose}
    className="flex justify-center items-center"
    sx={{border:'none'}}
  >
         <Box sx={style}>
        {" "}
        <X
          className="text-white size-12 cursor-pointer text-right"
          onClick={handleClose}
        />
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
           {urls.map((card:any, index) => (
            // onClick={() => setOpen(true)}
            <SwiperSlide>
              <StorySlide key={index} VideoUrl={card.videoUrl} activeIndex={activeIndex} index={index} currentIndex={currentIndex}/>
            </SwiperSlide>
          ))}
        </Swiper>
     </Box>
    </Modal>
  );
};

export default Stories;
