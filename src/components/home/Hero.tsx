import HeroSlides from "../HeroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useRef, useEffect } from "react";
import type SwiperCore from "swiper";
import Stories from "../Stories";
// import { data } from "@/utils/stories"
import axios from "@/utils/middleware";
import type { EventType } from "@/stores/event";
import { useQuery } from "@tanstack/react-query";

// import v1 from "../../assets/v1.mp4"/

interface StoryItem {
  videoUrl: string;
  // Add other properties if needed
}

function Hero() {
  // Define an asynchronous function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://kafsbackend-106f.onrender.com/api/v1/home-page"
      );
      console.log(response);
      return response.data.data as EventType;
    } catch (err) {
      console.log("Failed to fetch data");
    }
  };

  const { data: eventData } = useQuery({
    queryKey: ["event"],
    queryFn: () => fetchData(),
  });
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
  // const [open, setOpen] = useState(false);
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
        urls={eventData?.stories.map((item: StoryItem) => ({
          videoUrl: item.videoUrl,
        }))}
      />
      <div className="flex flex-col items-center xl:mt-[-3rem] xl:gap-6 mt-[-2rem] lg:mt-[-2rem]">
        <div className="w-full flex items-center">
          <div className="hidden md:flex w-full">
            {" "}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                type: "bullets", // Ensure dots are displayed as bullets
              }}
              navigation={true}
              modules={[Autoplay, Navigation, Pagination]} // Include Pagination module
              className="custom-swiper"
            >
              {" "}
              {eventData?.carouselImages.webImages.map(
                (card: any, index: number) => (
                  <SwiperSlide key={index}>
                    <img
                      src={card}
                      className="h-[25vw] w-full object-cover"
                      alt=""
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
          <div className="lg:hidden flex w-full">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
                type: "bullets", // Ensure dots are displayed as bullets
              }}
              navigation={true}
              modules={[Autoplay, Navigation, Pagination]} // Include Pagination module
              className="custom-swiper"
            >
              {eventData?.carouselImages.mobileImages.map(
                (card: any, index: number) => (
                  <SwiperSlide key={index}>
                    <div>
                      <img
                        src={card}
                        className=" w-full h-[56.25vw] object-cover"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
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
              stretch: 2,
              depth: 14,
              modifier: 2,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[EffectCoverflow, Autoplay]}
            className="swiper_container sw1 py-8"
            onSwiper={(swiper) => (firstSwiper.current = swiper)}
          >
            {eventData?.stories.map((card: any, index: any) => (
              <SwiperSlide
                onClick={() => {
                  setOpen(true);
                  handleSlideClick(index);
                }}
              >
                <HeroSlides
                  key={index}
                  ImageUrl={card.posterUrl}
                  title={card.caption}
                  description={card.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Hero;
