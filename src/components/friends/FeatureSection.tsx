import React from "react";
import easy from "../../assets/friends/features/icon1.png";
import sa from "../../assets/friends/features/icon2.png";
import pay from "../../assets/friends/features/icon3.png";
import pig from "../../assets/friends/features/icon4.png";

const features = [
  {
    icon: easy,
    title: "Easy to use",
    description:
      "Our user-friendly platform is designed with simplicity in mind. Our intuitive interface requires no technical expertise, allowing you to focus on what matters most.",
  },
  {
    icon: sa,
    title: "Sales Analytics",
    description:
      "Stay informed with our comprehensive sales analytics. Track ticket sales in real-time, analyze trends, and make data-driven decisions to optimize your strategy. ",
  },
  {
    icon: pay,
    title: "24-Hour Payouts",
    description:
      "Enjoy the financial flexibility with our fast payout system. With us, you receive your earnings within 24 hours after the event concludes. This quick access to funds helps you manage your finances effectively and plan future events with ease.",
  },
  {
    icon: pig,
    title: "Performance Insights and Graphics",
    description:
      "Visualize your event’s performance with our intuitive insights and graphics. Our platform offers a range of visual tools, including charts and graphs, that make it easy to interpret data and identify key performance indicators.",
  },
  {
    icon: pig,
    title: "Communicate Directly with Event Organizer",
    description:
      "Maintain a direct line of communication with your affiliates through our messaging system. Send personalized messages, updates, and important information directly to your affiliates to keep them engaged and informed.",
  },
  {
    icon: pig,
    title: "Source Tracking",
    description:
      "We monitor the effectiveness of your efforts with detailed source tracking. Understand which social media channels are driving the most traffic and sales to optimize your promotional strategies.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-6">
        <h2 className="bg-color text-5xl md:text-6xl font-bold text-center mb-14">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ border: "1px solid rgba(229, 244, 242, 1)" }}
              className="bg-white p-6 py-10 rounded-3xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-20 w-20"
                    loading="lazy"
                  />{" "}
                </div>
                <div className="flex flex-col items-center justify-center mb-4">
                  <h3 className="text-2xl md:text-3xl text-center font-semibold text-gray-800 mb-5">
                    {feature.title}
                  </h3>
                  <p className="text-black mb-4 text-center text-sm md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-center">
                <a
                  href="#"
                  className=" text-xl font-medium flex items-center justify-center"
                  style={{ color: "rgba(96, 118, 157, 1)" }}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
