import HeroSlides from "../HeroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow,Pagination,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Hero() {
const data = [
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3aX_kBiG6LMnE1F9FEWPgQHaJZ?rs=1&pid=ImgDetMain",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3aX_kBiG6LMnE1F9FEWPgQHaJZ?rs=1&pid=ImgDetMain",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3aX_kBiG6LMnE1F9FEWPgQHaJZ?rs=1&pid=ImgDetMain",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3aX_kBiG6LMnE1F9FEWPgQHaJZ?rs=1&pid=ImgDetMain",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3aX_kBiG6LMnE1F9FEWPgQHaJZ?rs=1&pid=ImgDetMain",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3aX_kBiG6LMnE1F9FEWPgQHaJZ?rs=1&pid=ImgDetMain",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3aX_kBiG6LMnE1F9FEWPgQHaJZ?rs=1&pid=ImgDetMain",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3aX_kBiG6LMnE1F9FEWPgQHaJZ?rs=1&pid=ImgDetMain",
  },
];
  return (
    <div className="flex flex-col items-center xl:mt-16 xl:gap-6 mt-[-2rem] lg:mt-[1rem]">
      <div className="md:w-[50%] xl:w-[43%] w-[90%]">
        <div className="2xl:text-[2.8rem] lg:text-[2rem] md:text-[1.7rem] text-[1.3rem] flex text-center font-semibold">
          Discover events and experiences Book Tickets
        </div>
        <div className="2xl:text-[1.7rem] lg:text-[1.1rem] text-[0.9rem] flex justify-center font-medium">
          Discover and enjoy
        </div>
      </div>
      <div className="">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {data.map((card, index) => (
           <SwiperSlide> <HeroSlides key={index} {...card} /></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
