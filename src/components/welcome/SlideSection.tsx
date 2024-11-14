import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import easy from "../../assets/friends/features/icon1.png";
import sa from "../../assets/friends/features/icon2.png";
import pay from "../../assets/friends/features/icon3.png";
import pig from "../../assets/friends/features/icon4.png";

// Feature data
const features = [
  {
    icon: easy,
    title: "No Fees for Organizers",
    description:
      "Organizing an event should be about creating amazing experiences, not worrying about extra costs. That’s why we offer a no-fee policy for creators.",
  },
  {
    icon: sa,
    title: "Real-Time Analytics",
    description:
      "Stay ahead with real-time insights. Our platform provides comprehensive analytics that allow you to track ticket sales, audience engagement, and more.",
  },
  {
    icon: pay,
    title: "Seamless Communication",
    description:
      "Message effortlessly with your attendees and affiliates.  Send updates, share important information, and engage directly with your audience.",
  },
  {
    icon: pig,
    title: "Organizer App",
    description:
      "Manage your events on-the-go. Whether you’re checking ticket sales, sending messages, or accessing real-time analytics, everything you need is just a tap away.",
  },
  {
    icon: pig,
    title: "Email and WhatsApp Text Blasts",
    description: (
      <div className="text-sm md:text-lg">
        <span className="font-semibold">Email Blasts:</span> Reach your
        attendees directly with personalized email campaigns. <br />
        <span className="font-semibold">WhatsApp Text Blasts:</span> Send
        real-time updates, special offers, and important announcements straight
        to their mobile devices.
      </div>
    ),
  },
  {
    icon: pig,
    title: "Dynamic Pricing: Surge and Reduce Prices Automatically",
    description:
      "Maximize revenue by automatically increasing ticket prices as demand rises or encourage last-minute sales by automatically reducing prices as the event date approaches or in response to lower demand.",
  },
  {
    icon: pig,
    title: "In-Depth Event Traffic Monitoring",
    description:
      "Understand when and where your traffic is coming from to optimize your marketing efforts. Identify which channels—social media, email campaigns, affiliate links—are driving the most traffic and conversions.",
  },
  {
    icon: pig,
    title: "Participant Discussion per Event",
    description:
      "Foster a sense of community and enhance attendee experience with dedicated group chats for each event. Encourage discussions, answer questions, and share updates in real time.",
  },
  {
    icon: pig,
    title: "Website Integration",
    description:
      "Integrate Kafsco with your existing website effortlessly. Embed your event listings, ticketing options, and promotional content directly onto your site.",
  },
  {
    icon: pig,
    title: "Design Email Campaign",
    description:
      "Design stunning email campaigns with our professionally crafted templates. Customize them to match your branding and event theme.",
  },
];

// Component
const SlideSection: React.FC = () => {
  return (
    <section>
      <div
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, rgba(216, 227, 255, 0.2) 100%)",
        }}>
        <h2 className="text-5xl font-semibold text-center mb-14">Features</h2>
        <Swiper
          effect={"coverflow"}
          // slidesPerView={3}
          spaceBetween={50}
          centeredSlides={true}
          // loop={true} // Enable loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          grabCursor={true} // For better user interaction
          className="swiper-container px-4 md:px-8 lg:px-12"
          modules={[Autoplay, EffectCoverflow]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2.8, spaceBetween: 40 },
            1280: { slidesPerView: 3, spaceBetween: 40 },
          }}>
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="swiper-slide w-[90%]">
              <div
                style={{
                  maxWidth: "500px",
                  border: "1px solid rgba(229, 244, 242, 1)",
                }}
                className="p-6 py-10 mx-4 lg:mx-1 xl:mx-4 h-[500px] md:h-[600px] rounded-3xl shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="h-20 w-20"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center ">
                    <h3 className="text-lg lg:text-2xl xl:text-3xl text-center font-semibold text-gray-800 mb-5">
                      {feature.title}
                    </h3>
                    <p className="text-black text-center text-sm lg:text-lg overflow-hidden text-ellipsis whitespace-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-center">
                  <a
                    href="#"
                    className="text-xl font-medium flex items-center justify-center "
                    style={{ color: "rgba(96, 118, 157, 1)" }}>
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SlideSection;
