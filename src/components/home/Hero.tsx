import HeroSlides from "../HeroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useRef, useEffect } from "react";
import type SwiperCore from "swiper";
import Stories from "../Stories";
import c1 from "@/assets/c1.jpeg";
import c2 from "@/assets/c2.jpeg";

// import v1 from "../../assets/v1.mp4"/
function Hero() {
  const data = [
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v1.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v2.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v3.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v4.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v5.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v1.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v2.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v5.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v5.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl: "/v5.jpg",
    },
  ];
  const [open, setOpen] = useState(false);
  // const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  // const handleSetChildSwiper = (swiper: SwiperCore | null) => {
  //   setChildSwiper(swiper);
  // };
  // const swiperControl = useCallback((swiper: SwiperCore) => {
  //   setSwiperInstance(swiper);
  // }, []);

  // interface SwiperRefs {
  //   swiperRef1: React.MutableRefObject<typeof Swiper | null>;
  //   swiperRef2: React.MutableRefObject<typeof Swiper | null>;
  // }
  // const swiperRef1 = useRef<typeof Swiper | null>(null);
  // const swiperRef2 = useRef<typeof Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [clicked, setClicked] = useState(true);

  const handleSlideClick = (index: number) => {
    // setTimeout(() => {
    //   setClicked(false);
    // }, 15000);
    setActiveIndex(index);
    // if (firstSwiper.current) {
    //   firstSwiper.current.slideTo(activeIndex);
    // }
  };

  const firstSwiper = useRef<SwiperCore | null>(null);
  // const secondSwiper = useRef<SwiperCore | null>(null);
  // const handleFirstSlideChange = (swiper: SwiperCore) => {
  //   const { activeIndex } = swiper;
  //   // Navigate to the corresponding slide in the second swiper
  //   if (secondSwiper.current && secondSwiper.current.activeIndex !== activeIndex) {
  //     secondSwiper.current.slideTo(activeIndex);
  //   }
  // };
  // const handleSecondSlideChange = (swiper: SwiperCore) => {
  //   const { activeIndex } = swiper;
  //   // Navigate to the corresponding slide in the first swiper
  //   if (firstSwiper.current && firstSwiper.current.activeIndex !== activeIndex && open==true) {
  //     firstSwiper.current.slideTo(activeIndex);
  //   }
  // };
  const handleNextClick = () => {
    if (firstSwiper.current) {
      firstSwiper.current.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (firstSwiper.current) {
      firstSwiper.current.slidePrev();
    }
  };
  useEffect(() => {
    if (firstSwiper.current) {
      if (open) {
        firstSwiper.current.autoplay.stop();
      } else {
        firstSwiper.current.autoplay.start();
      }
    }
  }, [open]);

  // useEffect(() => {
  //   if (swiperInstance) {
  //     swiperInstance.update(); // Update swiper instance when modal is opened/closed
  //   }
  // }, [open, swiperInstance]);
  return (
    <>
      {/* swiperInstance={swiperInstance} activeIndex={activeIndex}  handleSlideChange={handleSecondSlideChange}*/}
      <Stories
        onOpen={open}
        setOpen={setOpen}
        activeIndex={activeIndex}
        handleNextClick={handleNextClick} // Pass handleNextClick to SecondSwiper
        handlePrevClick={handlePrevClick}
      />
      <div className="flex flex-col items-center xl:mt-[0rem] xl:gap-6 mt-[-2rem] lg:mt-[1rem]">
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className=""
          >
            <SwiperSlide>
              <div>
                <img
                  src={c1}
                  className="w-full h-[15rem] md:h-[28rem] object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src={c2}
                  className="w-full h-[15rem] md:h-[28rem] object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="">
          <Swiper
            initialSlide={activeIndex}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{ delay: 3000 }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 30,
              modifier: 3,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[EffectCoverflow, Autoplay]}
            className="swiper_container sw1 py-8"
            // onInit={(swiper) =>setSwiperInstance(swiper)}
            onSwiper={(swiper) => (firstSwiper.current = swiper)}
            // onSlideChange={handleSeoSlideChange}
          >
            {data.map((card, index) => (
              <SwiperSlide
                onClick={() => {
                  setOpen(true);
                  handleSlideClick(index);
                }}
              >
                <HeroSlides key={index} {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Hero;
