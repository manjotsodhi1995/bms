import HeroSlides from "../HeroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
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
        "https://s3-alpha-sig.figma.com/img/00b1/5f93/9bcbb9d3005d27235028760f95c63384?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP4DkBnN7OBnFvFqHq~aasPHhQTA~v2Z00IcUlf8pLjc0WaZE9hZ18YI7eTOu8p0L64rpm~AB389zpc~6HJGqw1HLoMfMrxFay2GM3tKmkPHwkLydeRFYPbz5Ckv7jBXnvR5P91fPk1euzjQPrFcMuItirrYqTAlzUr0rreV8mpSHdPwkRF0OzWiYZOymbSrwTAVQvu6VIdaugigHhKV1-1K0LT1iJwYLl4v2~Ljqf3LWsEkBzZDByVz7oauuU3eN5xpJzQbCgE9fSAg~lMoqMIFnGc52qmTjvrF~fAFkPTC5dX9JkVYYDdHsArtjxdkfUsJNxtfRQEBLOTKHfuiTg__",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/e920/0a79/3bd63e987d7be88465fe00e7513f4ad9?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INZa5DwcpoeZ0rceS5eZhRoO~k6-7e~E4rS1wBrpd74U8eUcSiNpwtpf58CwqDFlWNJmSTF-8RietDq4tK7QYABtO-dZmzSEuL9Vl-DHNCiLLrEc23GQXkTbBqFh8gngIfv9qeOjIQoM5b9MjFU8rlGSi1EL4tDvI~vAjvPDWNvr1zLcX2WqCYanKAHkdbCNPgS4cPV1Q9ybGjQ7Adv7MjyJbbiLIqFRZj3aFkhE543zp27x19doqwxDBSAr-WwI93RtTH404BG~np7Zhj4mDlPMxxZISKDGehNEkQGdAzz2ANsjlnsd0VfrxwZtS06x9uauVqKFaHV1SMIRnYLodg__",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/00b1/5f93/9bcbb9d3005d27235028760f95c63384?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP4DkBnN7OBnFvFqHq~aasPHhQTA~v2Z00IcUlf8pLjc0WaZE9hZ18YI7eTOu8p0L64rpm~AB389zpc~6HJGqw1HLoMfMrxFay2GM3tKmkPHwkLydeRFYPbz5Ckv7jBXnvR5P91fPk1euzjQPrFcMuItirrYqTAlzUr0rreV8mpSHdPwkRF0OzWiYZOymbSrwTAVQvu6VIdaugigHhKV1-1K0LT1iJwYLl4v2~Ljqf3LWsEkBzZDByVz7oauuU3eN5xpJzQbCgE9fSAg~lMoqMIFnGc52qmTjvrF~fAFkPTC5dX9JkVYYDdHsArtjxdkfUsJNxtfRQEBLOTKHfuiTg__",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/00b1/5f93/9bcbb9d3005d27235028760f95c63384?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP4DkBnN7OBnFvFqHq~aasPHhQTA~v2Z00IcUlf8pLjc0WaZE9hZ18YI7eTOu8p0L64rpm~AB389zpc~6HJGqw1HLoMfMrxFay2GM3tKmkPHwkLydeRFYPbz5Ckv7jBXnvR5P91fPk1euzjQPrFcMuItirrYqTAlzUr0rreV8mpSHdPwkRF0OzWiYZOymbSrwTAVQvu6VIdaugigHhKV1-1K0LT1iJwYLl4v2~Ljqf3LWsEkBzZDByVz7oauuU3eN5xpJzQbCgE9fSAg~lMoqMIFnGc52qmTjvrF~fAFkPTC5dX9JkVYYDdHsArtjxdkfUsJNxtfRQEBLOTKHfuiTg__",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/6b57/3e9f/f11b382ddad846f8ed7d0e8060d59a6c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aF2-DpLFLEjsG234dvP~914xlx5T~cm7whUtoxSnJOPyutrTPvxWX8QJUoYoYv7IAu4JIg9vMAEqzYQe65IPQHh34WuB4VHm43o~y~q~U7BZILeHRXiTt~C~hwT-GvEa1MBoJhwhyXM~vFQc7oz02NdcP3~od~1gPE4vqSoVodWB~xFC1jObIYVPNc18h-ts~XRb-4HjtRnpH~2OEABokQA7DuLA~1InmaCOkaiDDhkSoNNaTGtMz1g5oHNihs0eG3tNiCOwojb8hQq5Ksn5MQoZNeOxjUQQRGED5Z3S2emPw0RRM9VxzRQESiw9l2AE5hO5IAMq~OCInMqKx7n8Ug__",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/00b1/5f93/9bcbb9d3005d27235028760f95c63384?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP4DkBnN7OBnFvFqHq~aasPHhQTA~v2Z00IcUlf8pLjc0WaZE9hZ18YI7eTOu8p0L64rpm~AB389zpc~6HJGqw1HLoMfMrxFay2GM3tKmkPHwkLydeRFYPbz5Ckv7jBXnvR5P91fPk1euzjQPrFcMuItirrYqTAlzUr0rreV8mpSHdPwkRF0OzWiYZOymbSrwTAVQvu6VIdaugigHhKV1-1K0LT1iJwYLl4v2~Ljqf3LWsEkBzZDByVz7oauuU3eN5xpJzQbCgE9fSAg~lMoqMIFnGc52qmTjvrF~fAFkPTC5dX9JkVYYDdHsArtjxdkfUsJNxtfRQEBLOTKHfuiTg__",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/88e5/f86d/24834c9146c642c5b635c09a906461f7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhqaSNgTr7yxwil2RfV4XWWNnUAUdJjnONHMvFOTa5B1CAulm8DCEiGYHzpH2RyrxTc1~179fk8bPa9Qs5Y5kAimJl0TI7twrRoz-p9bFMWKTJBZsqdAKQ1Au10trbx232pMyJyvSst~bWUnIlEX1IVwdMmg76NvE5~7r6TuqZIHLJXAs4reVmcmN~nlWyuBNYOKVn98wnTAi5eWrV9PrOXPNax23M9P1sEgsEgo8yKGH23L6DK5CBvsZ0TrnxC8V~txMeioItj37t9KxCbOCtCQ37Ia1Zl5nm1kjwnzkOGJ5eUXgskrJLo7Skf8VW7Odz5MuBROiXCrowsjjRgI4Q__",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/00b1/5f93/9bcbb9d3005d27235028760f95c63384?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP4DkBnN7OBnFvFqHq~aasPHhQTA~v2Z00IcUlf8pLjc0WaZE9hZ18YI7eTOu8p0L64rpm~AB389zpc~6HJGqw1HLoMfMrxFay2GM3tKmkPHwkLydeRFYPbz5Ckv7jBXnvR5P91fPk1euzjQPrFcMuItirrYqTAlzUr0rreV8mpSHdPwkRF0OzWiYZOymbSrwTAVQvu6VIdaugigHhKV1-1K0LT1iJwYLl4v2~Ljqf3LWsEkBzZDByVz7oauuU3eN5xpJzQbCgE9fSAg~lMoqMIFnGc52qmTjvrF~fAFkPTC5dX9JkVYYDdHsArtjxdkfUsJNxtfRQEBLOTKHfuiTg__",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/716c/e89c/34c9f005aecf0fce773e8f5c86341198?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5T282TI0CuZT3tRWbM-iGg0HjhkzfRZExnBRQEYgibEs4iDj8Z4Pq1N4Bhd1l-32mQ-X5xiQRyVAqAg4eS5SQOcu0vigwNmW8zq1b6FI5UDkBP9PxSXHEcyuywqO-d9-TdQHFnQwta29iWsjMuhHUYSYu1DQhOkKbScmXc5lSgXszqV0gmQfyNKRa36GvB9YltUjZ18FB5sGfqYIlzoh9S92yCImbB~kN9RYjiCL28k5URqEdPjxTbxtXWv-6NdDLku2H5FDCq8TrB9tFtYKgQjoJEiM93rASL2pGImmPS1XSjQjlcvMK9EgRSyPhO~2LrX1pXc0L6A04oigFugAA__",
    },
    {
      title: "Match Events",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/716c/e89c/34c9f005aecf0fce773e8f5c86341198?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5T282TI0CuZT3tRWbM-iGg0HjhkzfRZExnBRQEYgibEs4iDj8Z4Pq1N4Bhd1l-32mQ-X5xiQRyVAqAg4eS5SQOcu0vigwNmW8zq1b6FI5UDkBP9PxSXHEcyuywqO-d9-TdQHFnQwta29iWsjMuhHUYSYu1DQhOkKbScmXc5lSgXszqV0gmQfyNKRa36GvB9YltUjZ18FB5sGfqYIlzoh9S92yCImbB~kN9RYjiCL28k5URqEdPjxTbxtXWv-6NdDLku2H5FDCq8TrB9tFtYKgQjoJEiM93rASL2pGImmPS1XSjQjlcvMK9EgRSyPhO~2LrX1pXc0L6A04oigFugAA__",
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
          className=""
        >
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/9a3c/ca2b/08128bf0c2322a262c5907c6e2c32e94?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oi5G3YAAm~AnObLHsWHvb8cithuONxSn3ho3rSij4SxFUmXctUMav9CWDH4J2ISFz7YLBon~bzVYPi8kLumZWcaijNPU9f4qtH8OgDgI5rdBShYn67n0eN9JoBK4B1dBKyaQKE9~V8R-PLIdLuQ8kiBkmxWihQVU-tJIHHbZWouB2pEwbvqGjpi1JGarfgqDJfoo-kzHYpR-urjqdnUeyA8tlql6zxo~djmWD5e~T2P36uRI4t~1HyzfNYglbkZOBXmX6S05NJ~kSIDrvjgS44pqV1t780WCxi76E4kcGJX6vilVtShXEZow3dY6DHlei04aEZXBWTEt2J1tGbJGOw__"
              className="w-full h-[20rem] object-cover"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/1f20/4113/88b925b9ed900e2c321a53f7ccf7686e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i6TLq7rxa2FJ7S-AfJFdoUtqT6krQQU9TzeklpNKyWRpVXQKVptxuNH2StIwocMjhezKUjabwci8w5~QdXFFRYphNTQ2LExSge~6EZjKSDOkYGxRkjU2ZT9kPCIkIuLVxHA31pNAahBbjTSnoTAYo9bZ0BMn4sC7iu9nYH7fvQpIXQbawsnDfx12X~QDkXlH-fE0POjSt67WSNAHQednI6VePn8dQ0glI-D9a~8PDgH~FZ8wxQqnK1MgncnsJxdj4jyCSm7qzOyxfeVoxLPS2Y74YnLaY3UYrTAh89uYcBwhE32fSw3xwPO85kRAOsS6vpGiJV~wWJNBUVWroFRi4w__"
              className="w-full h-[20rem] object-cover"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/a2ce/1db7/d5f7b2ac96fe470fa8c8833d4a5568ef?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dqaVcVWVf~PQfC0gswSidAlq3vaAfUiV0dCu8gpIaQAc9HsbmbqbtZ2ufgwxD9Be3hqg4gAOneJv8CdivGxg-YIi9ClsKtc6A4yDUXBN8ByIGOUM20jU-UN~idz4uoxwlcAYdPX4mikHAL874oAXTLD5hvlGAcNQs8vdRJGNldBkUcfV0m1Mqo9Is76Cfp4OOvQ2zVKE-lCuBsAO5D3g1Gr5UtMtt2vmhBnGjh~2Bjh8ZtJiLZWxsqW9SN8Ak~-i73KLJTrpzlY8JwmLoJKsvhnE7R1o3sCtjNv39UmUQBnubBHhHh3~MKtqzUYDriQGZx-4jyioWkWG592c8uHJMQ__"
              className="w-full h-[20rem] object-cover"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://s3-alpha-sig.figma.com/img/9a3c/ca2b/08128bf0c2322a262c5907c6e2c32e94?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oi5G3YAAm~AnObLHsWHvb8cithuONxSn3ho3rSij4SxFUmXctUMav9CWDH4J2ISFz7YLBon~bzVYPi8kLumZWcaijNPU9f4qtH8OgDgI5rdBShYn67n0eN9JoBK4B1dBKyaQKE9~V8R-PLIdLuQ8kiBkmxWihQVU-tJIHHbZWouB2pEwbvqGjpi1JGarfgqDJfoo-kzHYpR-urjqdnUeyA8tlql6zxo~djmWD5e~T2P36uRI4t~1HyzfNYglbkZOBXmX6S05NJ~kSIDrvjgS44pqV1t780WCxi76E4kcGJX6vilVtShXEZow3dY6DHlei04aEZXBWTEt2J1tGbJGOw__"
              className="w-full h-[20rem] object-cover"
              alt=""
            />
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
