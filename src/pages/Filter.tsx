import { useStore } from "@/hooks/useStore";
import EventCard from "../components/EventCard";
import { useQuery } from "@tanstack/react-query";

function Filter() {
  const {
    root: { event },
  } = useStore();
  const fetchEvents = async () => {
    await event.fetchEvents("28.4262481", "77.0581663");
  };

  // Dont care about data as it will be added to event directly
  const { data: _ } = useQuery({
    queryKey: ["filterEvents"],
    queryFn: fetchEvents,
  });

  return (
    <div className="lg:pr-[2.5%] xl:pr-[3.5%] sm:pr-[4vw] min-h-[80vh] flex justify-between flex-col sm:flex-row text-xl">
      <div className="lg:w-[15vw] sm:w-[35vw] w-[100vw] min-h-[80vh] flex flex-col mt-[10px] pt-[40px] border h-fit min-w-max rounded-3xl bg-[#B1B1B152] drop-shadow-lg ml-2">
        {" "}
        {/* Fixed positioning and overflow */}
        <div className="border-gray-400 border-b mb-[30px] pl-[30px]">
          <h2 className="text-xl font-medium mt-[10px] mb-[20px]">
            Filter By:
          </h2>
        </div>
        <div className="border-gray-400 border-b mb-[50px] pl-[30px]">
          <h3 className="font-medium mb-[20px]">Day</h3>
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

      <div className="flex flex-col gap-2 pb-10 lg:w-[75vw] w-[100vw]">
        {" "}
        {/* Adjusted margin-left */}
        <div className="flex w-screen justify-center mt-4 sm:justify-normal">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem] sm:ml-[50px]">
            Events
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 gap-4 p-4">
          {event.upcomingEvents.map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
