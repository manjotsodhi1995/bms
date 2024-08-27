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
import { Link } from "react-router-dom";
// import v1 from "../../assets/v1.mp4"/
import { Skeleton } from "@mui/material";

function DivSkeleton() {
  return (
    <Skeleton
      variant="rounded"
      width={"100%"}
      height={"100%"}
      sx={{
        borderRadius: 6,
      }}
    />
  );
}

interface StoryItem {
  videoUrl: string;
  // Add other properties if needed
}

function Hero() {
  // Define an asynchronous function to fetch data
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.kafsco.com/api/v1/home-page"
      );
      setLoading(false);
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
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
  };

  const firstSwiper = useRef<SwiperCore | null>(null);
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

  const [links, setLinks] = useState<string[]>([]);
  const [mobileLinks, setMobileLinks] = useState<string[]>([]);

  useEffect(() => {
    if (eventData) {
      const mobileLinks = eventData.carouselImages.mobileImages.map(
        (item: any) => item?.link || ""
      );
      setMobileLinks(mobileLinks);

      const links = eventData.carouselImages.webImages.map(
        (item: any) => item?.link || ""
      );
      setLinks(links);
    }
  }, [eventData]);

  return (
    <>
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
          <div className="hidden lg:flex w-full">
            {" "}
            {loading && (
              <div className="w-[100vw] h-[25vw]">
                <DivSkeleton />
              </div>
            )}
            {!loading && (
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
                      <Link to={links[index] || "#"}>
                        <img
                          src={card.img}
                          className="h-[25vw] w-full object-cover"
                          alt=""
                        />
                      </Link>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            )}
          </div>
          <div className="lg:hidden flex w-full">
            {loading && (
              <div className="w-[100vw] h-[56.25vw]">
                <DivSkeleton />
              </div>
            )}
            {!loading && (
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
                      <Link to={mobileLinks[index] || "#"}>
                        <div>
                          <img
                            src={card.img}
                            className=" w-full h-[56.25vw] object-cover"
                            alt=""
                          />
                        </div>
                      </Link>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            )}
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
            autoplay={{ delay: 30000 }}
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
            {loading &&
              [...Array(10)].map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="md:rounded-3xl rounded-xl transition-transform duration-300 ease-in-out lg:h-[18rem] lg:w-[15rem] 2xl:w-[18rem] 2xl:h-[21rem] h-[12rem] md:h-[12rem] md:w-[10rem]">
                    <DivSkeleton />
                  </div>
                </SwiperSlide>
              ))}
            {!loading &&
              eventData?.stories.map((card: any, index: any) => (
                <SwiperSlide
                  onClick={() => {
                    setOpen(true);
                    handleSlideClick(index);
                  }}
                >
                  <HeroSlides
                    key={index}
                    videoUrl={card.videoUrl}
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
