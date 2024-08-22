// import EventSlides from "@/components/eventStory";
import { fakeEventData } from "@/pages/events/fakedata";
// import { useRef } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OrganizerEventsHistoryTable from "@/components/dashboard/Organizer/OrganizerEventsHistoryTable";
import EventCard from "@/components/EventCard";

const data = [
  {
    id: "event-id",
    event: "Rozen Tal at Tone Lab",
    eventinfo: "19a Koryun St, Yerevan 0009",
    type: "Comedy",
    date: "12/05/23",
    price: 100,
    commission_rate: 100,
  },
  {
    id: "event-id",
    event: "Rozen Tal at Tone Lab",
    eventinfo: "19a Koryun St, Yerevan 0009",
    type: "Sport",
    date: "12/05/23",
    price: 100,
    commission_rate: 100,
  },
  {
    id: "event-id",
    event: "Rozen Tal at Tone Lab",
    eventinfo: "19a Koryun St, Yerevan 0009",
    type: "Movie",
    date: "12/05/23",
    price: 100,
    commission_rate: 100,
  },
  {
    id: "event-id",
    event: "Rozen Tal at Tone Lab",
    eventinfo: "19a Koryun St, Yerevan 0009",
    type: "Music",
    date: "12/05/23",
    price: 100,
    commission_rate: 100,
  },
];

const OrganizerEventsHistory = () => {
  const { id: _ } = useParams();
  const eventsData = fakeEventData;

  // const carouselRef = useRef(null);
  return (
    <div className="flex flex-col mt-8 md:mt-16 gap-6">
      {/* <div className="max-w-xl grid grid-cols-3 md:grid-cols-3 gap-6">
        {eventsData.slice(0, 3).map((card, index) => (
          // <div key={index} className="snap-center w-full" ref={carouselRef}>
          //   <EventSlides {...card} />
          // </div>
        ))}
      </div> */}

      <div className="relative shadow-custom py-12 px-8 rounded-md w-full bg-blue-box">
        <p className="text-lg md:text-2xl font-medium ml-4 mb-4">
          Event details organized by the organizer
        </p>
        <Table>
          <TableHeader className="text-lg">
            <TableRow className="border-none">
              <TableHead className="w-2/4 text-[#60769D]">
                Events organized
              </TableHead>
              <TableHead className="text-[#60769D]">
                Commissions earned
              </TableHead>
              <TableHead className="text-[#60769D]">
                Revenue generated
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, index) => {
              return (
                <OrganizerEventsHistoryTable
                  key={index}
                  eventinfo={data.eventinfo}
                  event={data.event}
                  commission={data.commission_rate}
                  revenue={134}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-4 pb-10">
        <div className="mt-10 font-medium lg:text-[1.4rem] text-[0.9rem]">
          Upcoming Events
        </div>
        <div className="grid grid-cols-2 justify-between md:hidden gap-2">
          {eventsData.slice(0, 2).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-between hidden md:grid md:grid-cols-3 lg:hidden gap-2">
          {eventsData.slice(0, 3).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-between hidden lg:grid lg:grid-cols-4 gap-2">
          {eventsData.slice(0, 4).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>

        {/* Past Events */}

        <div className="mt-10 font-medium lg:text-[1.4rem] text-[0.9rem]">
          Past Events
        </div>
        <div className="grid grid-cols-2 justify-between md:hidden gap-2">
          {eventsData.slice(0, 2).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-between hidden md:grid md:grid-cols-3 lg:hidden gap-2">
          {eventsData.slice(0, 3).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
        <div className="justify-between hidden lg:grid lg:grid-cols-4 gap-2">
          {eventsData.slice(0, 4).map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizerEventsHistory;
