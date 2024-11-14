// src/components/EventFeatures.tsx
import React from "react";
import ticket from "../../assets/organizer/setupevent.png";
import ellipse from "../../assets/welcome/ellipse.svg";
import bgImage from "../../assets/welcome/pricing.svg";
import icon from "../../assets/welcome/icon2.svg";
import { FaTimes, FaCheck } from "react-icons/fa";
import bg from "../../assets/welcome/event.png";
const MidSection: React.FC = () => {
  return (
    <>
      <div
        className="flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute top-0 left-0 ml-[20px] hidden lg:block">
          <img src={icon} alt="icon" />
        </div>
        <div className="max-w-screen-xl w-full pt-40 mb-6">
          <h2 className="title text-3xl md:text-[38px] text-[#964B7D] font-semibold mb-4 md:mb-16 text-center">
            Amplify Your Event's Reach
          </h2>
          <section className="p-8 mb-10 flex flex-col md:flex-row items-center rounded-lg ">
            <div className="hidden mr-6 lg:mr-20 text-center md:text-right md:flex flex-col items-end">
              <img src={ellipse} className="text-right" />
              <p className="font-medium text-lg lg:text-xl my-4">
                Immersive Experience with stories
              </p>
              <p className="text-[10px] lg:text-[14px] font-normal mb-10">
                Bring your event to life with interactive stories that engage
                and captivate your audience. Extend the event experience beyond
                the day itself.
              </p>
              <img src={ellipse} />
              <p className="font-medium text-lg lg:text-xl my-4">
                Participant Discussion
              </p>
              <p className="text-[10px] lg:text-[14px] font-normal">
                Foster a sense of community with our inbuilt chat per event. We
                create a dedicated space for each event where attendees can
                connect, share experiences, and build anticipation.
              </p>
            </div>
            <div className="md:hidden text-left flex flex-col mb-8">
              <img src={ellipse} className="text-left w-3 h-3" />
              <p className="font-medium text-xl my-4">
                Immersive Experience with stories
              </p>
              <p className="text-[14px] font-normal mb-10">
                Bring your event to life with interactive stories that engage
                and captivate your audience. Extend the event experience beyond
                the day itself.
              </p>
              <img src={ellipse} className="text-left h-3 w-3" />
              <p className="font-medium text-xl my-4">Participant Discussion</p>
              <p className="text-[14px] font-normal">
                Foster a sense of community with our inbuilt chat per event. We
                create a dedicated space for each event where attendees can
                connect, share experiences, and build anticipation.
              </p>
            </div>
            <img
              src={ticket}
              alt="ticketing"
              className="hidden md:block w-2/3 h-2/3 rounded-3xl mb-8 md:mb-0"
            />
            <div className="sm:ml-6 lg:ml-20 text-left">
              <img src={ellipse} />
              <p className="font-medium text-xl my-4">Rep Portal</p>
              <p className="sm:text-[10px] lg:text-[14px] font-normal mb-10">
                 Partner with representatives who can promote your events to
                their networks. Tap into new audiences and boost ticket sales by
                leveraging the influence of trusted affiliates.
              </p>

              <img src={ellipse} />
              <p className="font-medium text-xl my-4">
                Social Media Integration
              </p>
              <p className="sm:text-[10px] lg:text-[14px] font-normal">
                Maximize your event’s visibility. Share event updates, stories,
                and highlights directly to your social media channels.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div
        className="flex justify-center py-16 sm:py-24 md:py-32"
        style={{
          background: `linear-gradient(to top, transparent 10%, #ffffff 50%), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          minHeight: "50vh",
        }}>
        <div className="max-w-screen-xl w-full px-4 sm:px-8 md:px-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 sm:mb-6 md:mb-8">
            Affordable Pricing to Boost Your Event's Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Competitors Card */}
            <div className="bg-gray-100 py-8 px-8 sm:px-12 lg:px-16 rounded-2xl shadow-md">
              <h3 className="text-xl sm:text-[22px] md:text-[24px] font-medium mb-2">
                Our competitors
              </h3>
              <p className="text-xs sm:text-sm text-[#4B4B4B] mb-4 sm:mb-6">
                Moderate convenience rate
              </p>
              <hr className="border-t-2 border-gray-300 mb-6 sm:mb-8 md:mb-10" />
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div>
                    <h4 className="font-medium text-lg">High fees</h4>
                    <p className="text-sm sm:text-lg text-[#4B4B4B] mb-6 sm:mb-8 mt-2">
                      Higher fees, reducing your profit margins.
                    </p>
                  </div>
                  <FaTimes className="text-red-500 text-xl ml-auto" />
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-medium text-lg">Delayed payments</h4>
                    <p className="text-sm sm:text-lg text-[#4B4B4B] mb-6 sm:mb-8 mt-2">
                      Delayed payouts, often taking several days or weeks.
                    </p>
                  </div>
                  <FaTimes className="text-red-500 text-xl ml-auto" />
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-medium text-lg">No free offers</h4>
                    <p className="text-sm sm:text-lg text-[#4B4B4B]">
                      No such offers, immediate charges apply.
                    </p>
                  </div>
                  <FaTimes className="text-red-500 text-xl ml-auto" />
                </div>
              </div>
            </div>

            {/* Working with Us Card */}
            <div
              className="border-3xl py-8 px-8 sm:px-12 lg:px-16 rounded-2xl"
              style={{
                border: "3px solid",
                borderImageSource:
                  "linear-gradient(180deg, #964B7D 0%, #60769D 100%)",
                borderImageSlice: 1,
              }}>
              <h3
                className="text-xl sm:text-[22px] md:text-[24px] font-medium mb-2"
                style={{
                  background:
                    "linear-gradient(270deg, #F0C808 0%, #8C3E87 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                Working with Us
              </h3>
              <p className="text-xs sm:text-sm text-[#4B4B4B] mb-4 sm:mb-6">
                High Convenience rate
              </p>
              <hr className="border-t-2 border-gray-300 mb-6 sm:mb-8 md:mb-10" />
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div>
                    <h4 className="font-medium text-lg">
                      Low Cost Fees on Tickets
                    </h4>
                    <p className="text-sm sm:text-lg text-[#4B4B4B] mb-6 sm:mb-8 mt-2">
                      Significantly lower fees, maximizing your revenue.
                    </p>
                  </div>
                  <FaCheck className="text-green-500 text-xl ml-auto" />
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-medium text-lg">24-Hour Payouts</h4>
                    <p className="text-sm sm:text-lg text-[#4B4B4B] mb-6 sm:mb-8 mt-2">
                      Get paid within 24 hours after your event concludes.
                    </p>
                  </div>
                  <FaCheck className="text-green-500 text-xl ml-auto" />
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-medium">Free for First 6 Months</h4>
                    <p className="text-sm sm:text-lg text-[#4B4B4B]">
                      Get paid within 24 hours after your event concludes.
                    </p>
                  </div>
                  <FaCheck className="text-green-500 text-xl ml-auto" />
                </div>
              </div>
              <div className="mt-6 sm:mt-8 flex items-center justify-center">
                <button
                  className="text-white px-8 sm:px-12 md:px-16 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium"
                  onClick={() =>
                    (window.location.href =
                      "https://organizer-dashboard-bms.vercel.app/login")
                  }
                  style={{
                    background:
                      "linear-gradient(90deg, #60769D 0%, #964B7D 100%)",
                  }}>
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidSection;
