import React, { useState } from "react";
import CustomerReviewCard from "./CustomerReviewCard";
import bp from "../../assets/organizer/Manager.png";
import ic from "../../assets/organizer/consultant.png";
import aw from "../../assets/organizer/Manager2.png";
import mt from "../../assets/organizer/music-coordinator.png";
import er from "../../assets/organizer/conference-planner.png";

const reviews = [
  {
    text: "I love sharing great events with my friends, and Kafsco makes it so easy! The referral program is fantastic—I earn commissions just by recommending events I know my friends will enjoy. Plus, the platform is so user-friendly, I can track everything in real-time. It’s a win-win!",
    rating: 5,
    name: "Briana Patton",
    role: "Manager",
    imgSrc: bp,
  },
  {
    text: "Kafsco has revolutionized how I promote events. The ability to refer events to my network and earn commissions is amazing. The real-time analytics and easy-to-use interface make managing multiple events a breeze.",
    rating: 5,
    name: "Imelda Cowen",
    role: "Consultant",
    imgSrc: ic,
  },
  {
    text: "Referring my workshops to friends through Kafsco has been a game-changer. The platform is intuitive, and the referral program has helped me reach a wider audience. I also love the quick payouts—I get my earnings within 24 hours after the event.",
    rating: 5,
    name: "Alfred Walton",
    role: "Manager",
    imgSrc: aw,
  },

  {
    text: "Using Kafsco has made event planning so much simpler. The step-by-step process for creating events and tickets is clear and straightforward. We’ve seen a significant increase in ticket sales thanks to the integrated promotion tools and affiliate program. Plus, the 24-hour payouts are a huge bonus!",
    rating: 5,
    name: "Mark T.",
    role: "Music festival coordinator",
    imgSrc: mt,
  },
  {
    text: "Kafsco offers all the tools we need to run successful events in one convenient platform. From customizing event pages to managing ticket sales and monitoring performance, everything is at our fingertips. The customer support is also fantastic – they are always ready to help with any questions we have.",
    rating: 5,
    name: "Emiley R.",
    role: "Conference planner",
    imgSrc: er,
  },
  {
    text: "Kafsco has been a game-changer for us. The low ticket fees mean we can invest more into our festivals, and the real-time analytics have given us insights we never had before. Plus, getting payouts within 24 hours after the event helps us manage our finances better. Highly recommend Kafsco!",
    rating: 5,
    name: "Srah. M",
    role: "Event coordinator",
    imgSrc: aw,
  },
];

const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleReviews = 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - visibleReviews : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - visibleReviews ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-24 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Customer reviews
        </h2>
        <div className="flex justify-center space-x-4 overflow-hidden">
          {reviews
            .slice(currentIndex, currentIndex + visibleReviews)
            .map((review, index) => (
              <CustomerReviewCard
                key={index}
                text={review.text}
                rating={review.rating}
                name={review.name}
                role={review.role}
                imgSrc={review.imgSrc}
              />
            ))}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-200 rounded-full p-2"
          onClick={handlePrevClick}>
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-200 rounded-full p-2"
          onClick={handleNextClick}>
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
