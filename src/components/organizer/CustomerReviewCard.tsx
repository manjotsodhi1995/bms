import React from "react";

interface CustomerReviewProps {
  text: string;
  rating: number;
  name: string;
  role: string;
  imgSrc: string;
}

const CustomerReviewCard: React.FC<CustomerReviewProps> = ({
  text,
  rating,
  name,
  role,
  imgSrc,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg shadow-gray-400 mx-4 min-w-[300px] max-w-xs">
      <div className="flex items-center mt-4 mb-4">
        <img
          className="w-14 h-14 rounded-full mr-4"
          src={imgSrc}
          alt={`${name} profile`}
        />
        <div className="text-center">
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
      <p className="text-gray-700 text-center mb-4">{text}</p>
      <div className="flex items-center">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M9.049 2.927C9.3 2.132 10.7 2.132 10.951 2.927l1.566 4.83h5.084c.95 0 1.348 1.16.577 1.637l-4.11 2.973 1.566 4.83c.251.795-.64 1.448-1.28.96L10 13.758l-4.11 2.973c-.64.487-1.531-.165-1.28-.96l1.566-4.83-4.11-2.973c-.77-.477-.373-1.637.577-1.637h5.084L9.049 2.927z" />
            </svg>
          ))}
      </div>
    </div>
  );
};

export default CustomerReviewCard;
