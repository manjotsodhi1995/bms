import { useParams } from "react-router-dom";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { CalendarIcon } from "lucide-react";
import Calendar from "react-calendar";
import { useStore } from "@/hooks/useStore";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const EventsInLocationPage = () => {
  const { location } = useParams();

  const {
    root: { event },
  } = useStore();
  const fetchEvents = async () => {
    await event.fetchEvents(location);
  };

  // Dont care about data as it will be added to event directly
  const { data: _ } = useQuery({
    queryKey: ["filterEvents"],
    queryFn: fetchEvents,
  });
  const [calendarOpen, setCalendarOpen] = useState(false);
  const toggleCalendar = () => setCalendarOpen((p) => !p);

  return (
    <>
      <div className="lg:pr-[5%] xl:pr-[7%] pr-[8vw] min-h-[80vh] flex md:gap-2 2xl:gap-4 flex-col sm:flex-row text-lg">
        <div className="md:w-[35rem] w-[100vw] min-h-[80vh] flex flex-col mt-[10px] pt-[40px] h-fit rounded-3xl backdrop-blur-lg ml-2 bg-gray-300/10 border border-gray-200">
          {" "}
          {/* Fixed positioning and overflow */}
          <div className="border-gray-400 border-b mb-[30px] pl-[30px]">
            <h2 className="text-xl font-medium mt-[10px] mb-[20px]">
              Filter By:
            </h2>
          </div>
          <div className="border-gray-400 border-b mb-[50px] pl-[30px]">
            <p className="flex items-center w-full gap-2 mb-[20px] relative">
              <h3 className="font-medium">Day</h3>
              <CalendarIcon className="size-5" onClick={toggleCalendar} />
            </p>
            {calendarOpen && (
              <Calendar className="absolute !w-[100vw] md:!w-[25vw] 2xl:text-xl" />
            )}
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Today</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Tommorow</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>This Week</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex mb-[20px]">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>This Month</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
          </div>
          <div className="border-gray-400 border-b mb-[50px] pl-[30px]">
            <h3 className="font-medium mb-[20px]">Pricing</h3>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Free</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex mb-[20px]">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Paid</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
          </div>
          <div className="border-gray-400 border-b mb-[50px] pl-[30px]">
            <h3 className="font-medium mb-[20px]">Categories</h3>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Music</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Comedy</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Sports</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Food & Drinks</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Theater</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Dance</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Art</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex mb-[20px]">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Other</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
          </div>
          <div className="mb-[100px] pl-[30px]">
            <h3 className="font-medium mb-[20px]">Near By Cities</h3>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Ahmedabad</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Gandhinagar</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
            <div className="flex justify-between w-[200px]">
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>Surat</h2>
              </div>
              <h2 className="text-gray-600">32</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pb-10">
          <div className="flex justify-between mt-4">
            <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
              Events in {location}
            </div>
          </div>
          <div className="justify-center w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
            {event.upcomingEvents.map((card, index) => (
              <EventCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsInLocationPage;
