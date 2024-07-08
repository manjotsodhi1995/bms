import { useParams } from "react-router-dom";
import { fakeEventData } from "./fakedata";
import EventCard from "@/components/EventCard";

const EventsInLocationPage = () => {
  const { location } = useParams();

  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] min-h-[80vh]">
      <div className="flex flex-col gap-2 pb-10">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
            Events in {location}
          </div>
        </div>
        <div className="justify-center w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
          {fakeEventData.map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsInLocationPage;
