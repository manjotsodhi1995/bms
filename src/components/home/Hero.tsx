import HeroSlides from "../HeroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../../assets/home/swiper/Group 165.png"
function Hero() {
  const data = [
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl: "https://img.freepik.com/premium-psd/esports-match-day-gaming-event-social-media-flyer-template_584197-1920.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center xl:mt-16 xl:gap-6 mt-[-2rem] lg:mt-[1rem]">
      <div className="w-full h-full ">
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
          modules={[Autoplay]}
          className="my bg-transparent"
        >
          <SwiperSlide>
            <img src={img} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} className="w-full" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container sw1 py-8"
        >
          {data.map((card, index) => (
            <SwiperSlide>
              <HeroSlides key={index} {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
