import HeroSlides from "../HeroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow,Pagination,Navigation,Autoplay } from "swiper/modules";
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
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/00b1/5f93/9bcbb9d3005d27235028760f95c63384?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dlzSUe5S9XOETCYwHkkDKYfbXipoQwSIBeemQC3AGQGxXUaFIM~dDMqZLaF2mwwzFyvBnlPMMR3GCKAemszZ9-38USpyRE3mXpT~1XKev2m5CGIqe9SXY-eWCur8DW2dXFEZ6tINrrBNRdvXWGVtQxKc3tbxIwedMfrSLV1G2YHCfdVMJT62lSXFQU-dXS90joslWZNppL-orO~0hnKm1enZuXKnDBM50h02hKIl-1MCg9jTYOYIntHBYvT5X15ytleGF2E8kRgC6TrV87N3WS8~vRee4VGk7w9jNVyTOlMDCn3riM81eH-zUkib4-pN08-nfdAl~1oHdvpE-mDU0Q__",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6b57/3e9f/f11b382ddad846f8ed7d0e8060d59a6c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=caYrTruV5GKmYLYTmYZirXLsPVS12fzjwNjuZix-ABCHomIX~~caZRzvP2oHtw22gZn-6O8QF4glZsYPUnOPjeftfiR-p9YblRzkj-fTFQZMm1uHOHPKQ~wGpi4Wr0qsVdYKNQ~BGrvfjob9TUB2sd0aiT~68-eps7X0f4SOqearPR0pI5o4AOE85NeZg835zgqXpCRGLvmV4NhtEuEfgnz3mQmmYl0OC9MsGDh5QQh3voH72XwKFhnNm8f~QaS8v8wf60XhIu8iGdXhPF9V9gLSxgZO2toNGeisfE4pfcFN8GxHNRoB1W2ZGL7TvhITHk-zJlaabEPFcL6BP~ZtsA__",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6b57/3e9f/f11b382ddad846f8ed7d0e8060d59a6c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=caYrTruV5GKmYLYTmYZirXLsPVS12fzjwNjuZix-ABCHomIX~~caZRzvP2oHtw22gZn-6O8QF4glZsYPUnOPjeftfiR-p9YblRzkj-fTFQZMm1uHOHPKQ~wGpi4Wr0qsVdYKNQ~BGrvfjob9TUB2sd0aiT~68-eps7X0f4SOqearPR0pI5o4AOE85NeZg835zgqXpCRGLvmV4NhtEuEfgnz3mQmmYl0OC9MsGDh5QQh3voH72XwKFhnNm8f~QaS8v8wf60XhIu8iGdXhPF9V9gLSxgZO2toNGeisfE4pfcFN8GxHNRoB1W2ZGL7TvhITHk-zJlaabEPFcL6BP~ZtsA__",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/88e5/f86d/24834c9146c642c5b635c09a906461f7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeZ27kiPUWQrZUsItDUhnyP5NK9MjX7em510p8QfrUxj25uPCRNXdFWux0vpk~t9ZizEiT7tGgF67TL0EjjMez8eWCMXYSSIWSHPufn2CjHM1OddrdD7Cu2p6a3H~5q15E0z2nF0u4v8pj8XDU0IdF5M7pjKdFFKXZ0OJro6H~EvFgaCHwl~ulj7k-QVcR1qW2oovKAKsehUzDSvKTEe3GEYMXC~GsqVxDTZx5oFtAs~~uD-uz9yiLHQjy6JjLYbL9BX5S40JeejtFJiWZQaOGRvVkKxEHAv0Cu-2dw0cO4R~QNK2kdCZ7YMLQR3ko58cAVw72-eaD8MmIGouibp4g__",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/716c/e89c/34c9f005aecf0fce773e8f5c86341198?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sb-5TOfzOEI0Su-IA-e4ZcdccmgJjLXWz-iJratlcsYF8hz3HubCusa9fmSGFlyUfRWrSMmPCGuhFSyLpk5MB6QPG00s0j2-KOpvREbz417YBETTG-2ct454b78PT5yNXmQL805qb9M4lYU7~qNwMyhrDiVG9cDVOQAo0EaTABqHlCe59W~s9ra0YkxYRsvgAcOuGIduRZgXpQ~woX61WzCBCpdJs7J~dQmKW-2lKIu8dOz3tZbVKWT-V-HZWcy11PkxwkxhA-Y7pHPUQH3I22F-3Jg4TILfAHc1an1JEKxh~dy5wkQZe5qJ468XVmtk6W81959FGAswsgzLH78Tbg__",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6b57/3e9f/f11b382ddad846f8ed7d0e8060d59a6c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=caYrTruV5GKmYLYTmYZirXLsPVS12fzjwNjuZix-ABCHomIX~~caZRzvP2oHtw22gZn-6O8QF4glZsYPUnOPjeftfiR-p9YblRzkj-fTFQZMm1uHOHPKQ~wGpi4Wr0qsVdYKNQ~BGrvfjob9TUB2sd0aiT~68-eps7X0f4SOqearPR0pI5o4AOE85NeZg835zgqXpCRGLvmV4NhtEuEfgnz3mQmmYl0OC9MsGDh5QQh3voH72XwKFhnNm8f~QaS8v8wf60XhIu8iGdXhPF9V9gLSxgZO2toNGeisfE4pfcFN8GxHNRoB1W2ZGL7TvhITHk-zJlaabEPFcL6BP~ZtsA__",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6b57/3e9f/f11b382ddad846f8ed7d0e8060d59a6c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=caYrTruV5GKmYLYTmYZirXLsPVS12fzjwNjuZix-ABCHomIX~~caZRzvP2oHtw22gZn-6O8QF4glZsYPUnOPjeftfiR-p9YblRzkj-fTFQZMm1uHOHPKQ~wGpi4Wr0qsVdYKNQ~BGrvfjob9TUB2sd0aiT~68-eps7X0f4SOqearPR0pI5o4AOE85NeZg835zgqXpCRGLvmV4NhtEuEfgnz3mQmmYl0OC9MsGDh5QQh3voH72XwKFhnNm8f~QaS8v8wf60XhIu8iGdXhPF9V9gLSxgZO2toNGeisfE4pfcFN8GxHNRoB1W2ZGL7TvhITHk-zJlaabEPFcL6BP~ZtsA__",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e920/0a79/3bd63e987d7be88465fe00e7513f4ad9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pUt3jT72IjFbUeWaKhhwK34a228qi47P8OOVkbxWJYhbuHXNhJEoNkrl8RDux84a4aYVV1~ZJVsjjNykh67QlzfHY0lEX~z5s3ajG6OJPAFBzt1qDubEdM8x467s-Go4rud4NHBrzf8S8JuB01mDdgK7aUeK9Dyvyyk5G8CSjjZWzsRaZ5DGlebANY6MsTUrpv6ZOPTArqfapEEEqX1u3pYb-1Bg-f-Oht8ZmgdtvlcILiGDBjZzM0Bw2p7x4pi1RvSDf83TplFeqlgtHA7t-~oejdHRtpjYBXC7vSgWItNXCvJjL8hPJDPgxfyM~~GbyihwH1xToKvIEba-ahekHQ__",
  },
  {
    title: "Match Events",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6b57/3e9f/f11b382ddad846f8ed7d0e8060d59a6c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=caYrTruV5GKmYLYTmYZirXLsPVS12fzjwNjuZix-ABCHomIX~~caZRzvP2oHtw22gZn-6O8QF4glZsYPUnOPjeftfiR-p9YblRzkj-fTFQZMm1uHOHPKQ~wGpi4Wr0qsVdYKNQ~BGrvfjob9TUB2sd0aiT~68-eps7X0f4SOqearPR0pI5o4AOE85NeZg835zgqXpCRGLvmV4NhtEuEfgnz3mQmmYl0OC9MsGDh5QQh3voH72XwKFhnNm8f~QaS8v8wf60XhIu8iGdXhPF9V9gLSxgZO2toNGeisfE4pfcFN8GxHNRoB1W2ZGL7TvhITHk-zJlaabEPFcL6BP~ZtsA__",
  },
];
  return (
    <div className="flex flex-col items-center xl:mt-16 xl:gap-6 mt-[-2rem] lg:mt-[1rem]">
      <div className="w-full h-fit">
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
          modules={[EffectCoverflow,Autoplay]}
          className="swiper_container sw1 py-8"
        >
          {data.map((card, index) => (
            <SwiperSlide>
              {" "}
              <HeroSlides key={index} {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
