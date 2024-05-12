import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../EventCard";
function Trending() {
 const [selectedLocation, setSelectedLocation] = useState("Bengaluru");
 const [locationOptions, setLocationOptions] = useState([]);
useEffect(() => {
  const fetchLocationOptions = async () => {
    try {
      const response = await fetch("/api/locations");
        const data = await response.json();
      setLocationOptions(data);
    } catch (error) {
      console.error("Error fetching location options:", error);
    }
  };

  fetchLocationOptions();
}, []); // Fetch options only once on component mount
const categories = [
  "Movies",
  "Theater",
  "Comedy",
  "Music",
  "Sports",
  "Food & Drinks",
  "Art",
    ];
    const eventData = [
      {
        title: "Rhythms Live",
        description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        imageUrl:
          "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
        date: "DEC 24",
        location: "Boston",
      },
      {
        title: "Rhythms Live",
        description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        imageUrl:
          "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
        date: "DEC 24",
        location: "Boston",
      },
      {
        title: "Rhythms Live",
        description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        imageUrl:
          "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
        date: "DEC 24",
        location: "Boston",
      },
      {
        title: "Rhythms Live",
        description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
        imageUrl:
          "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
        date: "DEC 24",
        location: "Boston",
      },
    ];
const handleLocationChange = (event:any) => {
  setSelectedLocation(event.target.value);
};
  return (
    <div className="lg:px-[8%] px-[8vw] mt-[7vh] flex flex-col gap-8">
      <div className="flex items-center mb-4">
        <div className="lg:text-[1.2rem] text-[0.7rem] font-medium">
          Discover events in
        </div>
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          className="ml-4 py-1 px-4 bg-transparent border border-gray-800 rounded-md shadow-sm focus:outline-none lg:text-[1rem] text-[0.7rem]  font-medium text-blue-700"
        >
          <option value="Bengaluru">Bengaluru</option>
          {locationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-medium mb-2 lg:text-[1.4rem] text-[0.9rem]">
          <span className="inline-block transform -rotate-90 mr-2">▼</span>{" "}
          Trending Categories
        </h2>

        <div className="flex space-x-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              className="lg:w-[200px] md:w-[20vw] py-1 min-w-[84px] font-medium md:text-[1rem] text-[0.7rem] rounded-full border-2 hover:bg-[#EBEBEBB2] bg-white text-gray-800 shadow-lg transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
            Events in Yerevan
          </div>
          <div className="hover:font-medium hover:underline ">
            <Link to="">See More</Link>
          </div>
        </div>
        <div className="flex justify-around md:hidden gap-2">
          {eventData.slice(0, 2).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-around hidden md:flex lg:hidden">
          {eventData.slice(0, 3).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-around hidden lg:flex">
          {eventData.slice(0, 4).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 pb-10">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
            Upcoming Events
          </div>
          <div className="hover:font-medium hover:underline ">
            <Link to="">See More</Link>
          </div>
        </div>
        <div className="flex justify-around md:hidden gap-2">
          {eventData.slice(0, 2).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-around hidden md:flex lg:hidden">
          {eventData.slice(0, 3).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-around hidden lg:flex">
          {eventData.slice(0, 4).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
