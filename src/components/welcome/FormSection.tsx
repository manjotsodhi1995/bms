import React from "react";
import bgImage from "../../assets/welcome/formbg.svg";
import flag from "../../assets/welcome/flag.svg";
import icon from "../../assets/welcome/icon.svg";

const FormSection: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen relative px-4 py-12 md:py-60 bg-gray-50"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f2f6fc",
      }}>
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>

      {/* Form Container */}
      <div className="relative bg-white rounded-3xl shadow-lg p-8 md:p-16 max-w-4xl w-full z-10">
        {/* Circle Design */}
        <div className="absolute top-0 right-0 mt-[-30px] mr-[-30px] hidden lg:block">
          <img src={icon} alt="icon" className="h-24 w-24" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4">
          Interested in using FIXR?
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-6 md:mb-8">
          Fill in the form to ask a question or book a demo.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Address */}
          <input
            type="email"
            placeholder="Email address"
            className="p-4 sm:p-5 font-medium border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black"
          />
          {/* Company Name */}
          <input
            type="text"
            placeholder="Company Name"
            className="p-4 sm:p-5 font-medium border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black"
          />
          {/* Phone Number with Flag */}
          <div className="flex items-center p-4 sm:p-5 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img src={flag} alt="flag Icon" className="h-6 w-6 mr-2" />
            <input
              type="text"
              placeholder="Phone number"
              className="font-medium border-none focus:outline-none w-full placeholder:text-black"
            />
          </div>
          {/* Description */}
          <input
            type="text"
            placeholder="What best describes you?"
            className="p-4 sm:p-5 font-medium border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black"
          />
          {/* Message Box */}
          <textarea
            placeholder="Message"
            rows={4}
            className="p-4 sm:p-5 font-medium border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black col-span-1 sm:col-span-2"></textarea>
        </form>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-black text-white py-3 px-6 sm:py-4 sm:px-10 rounded-md hover:bg-gray-900">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
