import HeroSlides from "../HeroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay,Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useRef, useEffect } from "react";
import type SwiperCore from "swiper";
import Stories from "../Stories";
// import v1 from "../../assets/v1.mp4"/
function Hero() {
  const data = [
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl:
        "/v1.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl:
        "/v2.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl:
        "/v3.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl:
        "/v4.jpg",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Dublin 81063",
      imageUrl:
        "/v5.jpg",
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

  const handleSlideClick = (index:number) => {
      // setTimeout(() => {
      //   setClicked(false);
      // }, 15000);
      setActiveIndex(index);
      // if (firstSwiper.current) {
      //   firstSwiper.current.slideTo(activeIndex);
      // }
    }

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
        <Stories onOpen={open} setOpen={setOpen} activeIndex={activeIndex} handleNextClick={handleNextClick} // Pass handleNextClick to SecondSwiper
        handlePrevClick={handlePrevClick} />
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
          modules={[Autoplay,Navigation]}
          className=""
        >
          <SwiperSlide>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/9a3c/ca2b/08128bf0c2322a262c5907c6e2c32e94?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oi5G3YAAm~AnObLHsWHvb8cithuONxSn3ho3rSij4SxFUmXctUMav9CWDH4J2ISFz7YLBon~bzVYPi8kLumZWcaijNPU9f4qtH8OgDgI5rdBShYn67n0eN9JoBK4B1dBKyaQKE9~V8R-PLIdLuQ8kiBkmxWihQVU-tJIHHbZWouB2pEwbvqGjpi1JGarfgqDJfoo-kzHYpR-urjqdnUeyA8tlql6zxo~djmWD5e~T2P36uRI4t~1HyzfNYglbkZOBXmX6S05NJ~kSIDrvjgS44pqV1t780WCxi76E4kcGJX6vilVtShXEZow3dY6DHlei04aEZXBWTEt2J1tGbJGOw__"
                className="w-full h-[10rem] md:h-[20rem] object-cover"
                alt=""
              />
              <div className="h-full w-full bg-black bg-opacity-30 text-white font-medium absolute top-0 leading-tight justify-center items-center flex px-[15vw] text-center text-[0.8rem] md:text-[1.1rem] lg:text-[1.7rem]">
                Take the reins of event planning into your hands with our
                organizer platform, where creativity meets simplicity for your
                perfect event execution .{" "}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/1f20/4113/88b925b9ed900e2c321a53f7ccf7686e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i6TLq7rxa2FJ7S-AfJFdoUtqT6krQQU9TzeklpNKyWRpVXQKVptxuNH2StIwocMjhezKUjabwci8w5~QdXFFRYphNTQ2LExSge~6EZjKSDOkYGxRkjU2ZT9kPCIkIuLVxHA31pNAahBbjTSnoTAYo9bZ0BMn4sC7iu9nYH7fvQpIXQbawsnDfx12X~QDkXlH-fE0POjSt67WSNAHQednI6VePn8dQ0glI-D9a~8PDgH~FZ8wxQqnK1MgncnsJxdj4jyCSm7qzOyxfeVoxLPS2Y74YnLaY3UYrTAh89uYcBwhE32fSw3xwPO85kRAOsS6vpGiJV~wWJNBUVWroFRi4w__"
                className="w-full h-[10rem] md:h-[20rem] object-cover"
                alt=""
              />
              <div className="h-full w-full bg-black bg-opacity-30 text-white font-medium lg:text-[1.7rem] text-[0.8rem] md:text-[1.1rem] absolute top-0 leading-tight justify-center items-center flex px-[15vw] text-center">
                Connect instantly with fellow attendees and event organizers in
                our interactive group chat
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/a2ce/1db7/d5f7b2ac96fe470fa8c8833d4a5568ef?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dqaVcVWVf~PQfC0gswSidAlq3vaAfUiV0dCu8gpIaQAc9HsbmbqbtZ2ufgwxD9Be3hqg4gAOneJv8CdivGxg-YIi9ClsKtc6A4yDUXBN8ByIGOUM20jU-UN~idz4uoxwlcAYdPX4mikHAL874oAXTLD5hvlGAcNQs8vdRJGNldBkUcfV0m1Mqo9Is76Cfp4OOvQ2zVKE-lCuBsAO5D3g1Gr5UtMtt2vmhBnGjh~2Bjh8ZtJiLZWxsqW9SN8Ak~-i73KLJTrpzlY8JwmLoJKsvhnE7R1o3sCtjNv39UmUQBnubBHhHh3~MKtqzUYDriQGZx-4jyioWkWG592c8uHJMQ__"
                className="w-full h-[10rem] md:h-[20rem] object-cover"
                alt=""
              />{" "}
              <div className="h-full w-full bg-black bg-opacity-30 text-white font-medium lg:text-[1.7rem] text-[0.8rem] md:text-[1.1rem] absolute top-0 leading-tight justify-center items-center flex px-[15vw] text-center">
                Dive into captivating narratives and relive the magic of past
                events through stories shared by our dedicated reps and
                organizers
              </div>
            </div> 
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="" >
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
            depth: 160,
            modifier: 1.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container sw1 py-8"
          // onInit={(swiper) =>setSwiperInstance(swiper)}
          onSwiper={(swiper) => (firstSwiper.current = swiper)}
          // onSlideChange={handleSeoSlideChange}
        >
          {data.map((card, index) => (
            <SwiperSlide onClick={() => {setOpen(true);  handleSlideClick(index)}}>
              <HeroSlides key={index} {...card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );
}

export default Hero;
