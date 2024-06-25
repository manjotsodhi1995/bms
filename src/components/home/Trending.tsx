import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../EventCard";
import axios from "../../utils/middleware";
import { useStore } from "../../hooks/useStore";
import EventCardSkeleton from "../EventCardSkeleton";
import { API } from "@/api";
interface Category {
  categoryName: string;
}
function Trending() {
  const {
    root: { event },
  } = useStore();
  const [categories, setCategories] = useState([]); // Array of strings
  const [selectedLocation, setSelectedLocation] = useState("Dublin");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLocationOptions = async () => {
      try {
      } catch (error) {
        console.error("Error fetching location options:", error);
      }
    };
    const fetchCategories = async () => {
      const response = await axios.get(API.categories.getAllCategories);
      setCategories(response.data.data);
      console.log(categories);
    };
    const fetchEvents = async () => {
      await event.fetchEvents("28.4262481", "77.0581663");
      setLoading(false);
      console.log(event);
    };
    fetchCategories();
    fetchLocationOptions();
    fetchEvents();
  }, []);
  const handleLocationChange = (event: any) => {
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
          <option value="Bengaluru">{selectedLocation}</option>
          {/* {locationOptions.map(() => (
            // <option key={option.value} value={option.value}>
            //   {option.label}
            // </option>
          ))} */}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-medium mb-2 lg:text-[1.4rem] text-[0.9rem]">
          <span className="inline-block transform -rotate-90 mr-2">▼</span>{" "}
          Trending Categories
        </h2>

        <div className="flex space-x-4 overflow-x-auto">
          {categories.slice(0, 7).map((category: Category) => (
            <a
              href={`/search?query=${category.categoryName}`}
              className="text-center lg:w-[200px] md:w-[20vw] py-1 min-w-[84px] font-medium md:text-[1rem] text-[0.7rem] rounded-full border-2 bg-[#EBEBEBB2] text-gray-800 transition-colors duration-200"
            >
              {category.categoryName}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem] flex gap-2 items-center">
            <Link to="/filter">
              {" "}
              <svg
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.9243 1.99774C25.7752 1.65325 25.5281 1.36018 25.2138 1.155C24.8994 0.949814 24.5317 0.841568 24.1563 0.84372H2.84384C2.46885 0.844459 2.10213 0.954001 1.78817 1.15906C1.47422 1.36411 1.22651 1.65587 1.0751 1.99894C0.9237 2.342 0.875102 2.72163 0.935208 3.09177C0.995315 3.46191 1.16154 3.80666 1.41372 4.08419L1.42341 4.09509L9.62509 12.8526V22.1562C9.62501 22.5069 9.72009 22.851 9.90021 23.1519C10.0803 23.4527 10.3387 23.6991 10.6478 23.8646C10.9569 24.0302 11.3052 24.1088 11.6555 24.0919C12.0057 24.0751 12.3448 23.9636 12.6367 23.7692L16.5117 21.185C16.7773 21.0081 16.9951 20.7683 17.1458 20.4869C17.2964 20.2055 17.3752 19.8913 17.3751 19.5721V12.8526L25.578 4.09509L25.5877 4.08419C25.8425 3.80793 26.0103 3.46272 26.0702 3.09167C26.1301 2.72061 26.0793 2.34014 25.9243 1.99774ZM15.7016 11.8124C15.534 11.9901 15.4397 12.2245 15.4376 12.4687V19.5721L11.5626 22.1562V12.4687C11.5627 12.2227 11.4692 11.9859 11.301 11.8063L2.84384 2.78122H24.1563L15.7016 11.8124Z"
                  fill="black"
                />
              </svg>
            </Link>
            Events in {selectedLocation}
          </div>
          <div className="hover:font-medium hover:underline">
            <Link to={`/events/${selectedLocation}`}>See More</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between md:hidden gap-2">
          {loading && [...Array(2)].map((_) => <EventCardSkeleton />)}
          {!loading &&
            event.liveEvents
              .slice(0, 2)
              .map((card, index) => <EventCard key={index} {...card} />)}
        </div>
        <div className="justify-between hidden md:grid md:grid-cols-3 lg:hidden gap-2">
          {loading && [...Array(3)].map((_) => <EventCardSkeleton />)}
          {!loading &&
            event.liveEvents
              .slice(0, 3)
              .map((card, index) => <EventCard key={index} {...card} />)}
        </div>
        <div className="justify-between hidden lg:grid lg:grid-cols-4 gap-2">
          {loading && [...Array(4)].map((_) => <EventCardSkeleton />)}
          {!loading &&
            event.liveEvents
              .slice(0, 4)
              .map((card, index) => <EventCard key={index} {...card} />)}
        </div>
      </div>
      <div className="flex flex-col gap-4 pb-10">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
            Upcoming Events
          </div>
          <div className="hover:font-medium hover:underline">
            <Link to={`/upcoming-events/${selectedLocation}`}>See More</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between md:hidden gap-2">
          {loading && [...Array(2)].map((_) => <EventCardSkeleton />)}
          {!loading &&
            event.upcomingEvents
              .slice(0, 2)
              .map((card, index) => <EventCard key={index} {...card} />)}
        </div>
        <div className="justify-between hidden md:grid md:grid-cols-3 lg:hidden gap-2">
          {loading && [...Array(3)].map((_) => <EventCardSkeleton />)}
          {!loading &&
            event.upcomingEvents
              .slice(0, 3)
              .map((card, index) => <EventCard key={index} {...card} />)}
        </div>
        <div className="justify-between hidden lg:grid lg:grid-cols-4 gap-2">
          {loading && [...Array(4)].map((_) => <EventCardSkeleton />)}
          {!loading &&
            event.upcomingEvents
              .slice(0, 4)
              .map((card, index) => <EventCard key={index} {...card} />)}
        </div>
      </div>
    </div>
  );
}

export default Trending;
