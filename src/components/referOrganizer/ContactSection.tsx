import React from "react";
import con from "../../assets/friends/contact.png";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r mb-20 md:mb-40 ">
      <div className=" p-8 max-w-lg w-full mx-4 lg:mx-8">
        <h1 className="text-5xl font-medium mb-10">Get in touch!</h1>
        <form className="space-y-9">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Placeholder"
              className="mt-1 block w-full p-6 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Placeholder"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Placeholder"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={4}
            />
          </div>
          <div className="flex items-center ">
            <input
              type="checkbox"
              id="agree"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="agree"
              className="ml-2 block text-xs md:text-sm text-gray-900"
            >
              I agree to{" "}
              <a href="#" className="text-black font-semibold">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-black font-semibold">
                Terms of Use
              </a>
            </label>
          </div>
          <button
            type="submit"
            style={{ backgroundColor: "rgba(150, 75, 125, 1)" }}
            className="w-full text-white p-3 rounded-3xl hover:bg-color transition duration-300"
          >
            Contact with us now
          </button>
        </form>
      </div>
      <div className="hidden lg:flex items-center justify-center lg:w-1/2 p-8">
        <img src={con} alt="Contact" loading="lazy" />
      </div>
    </div>
  );
};

export default ContactSection;
