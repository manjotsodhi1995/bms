import { Clock } from "lucide-react";
import Footer from "../components/Footer";
import TicketCard from "../components/ticket/TicketCard";
import { Icons } from "@/components/Icons";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useQuery } from "@tanstack/react-query";
import axios from "@/utils/middleware";
import { API } from "@/api";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import UpcomingEvents from "../components/UpcomingEvents";

const fetchTickets = async () => {
  const response = await axios(API.bookingRoutes.getTicket);
  return response.data.data;
};

function MyTickets() {
  const { data } = useQuery({
    queryKey: ["tickets"],
    queryFn: fetchTickets,
  });
  const [value, onChange] = useState<Dayjs | null>(dayjs());

  return (
    <>
      <div className="flex flex-col gap-8 px-4 lg:px-40 mb-10">
        <div className="flex w-full items-center justify-between">
          <h3 className="md:text-[1.6rem] 2xl:text-[2rem] text-[1.5rem] font-medium">
            Your Tickets
          </h3>
          <p className="flex flex-col items-center">
            <Clock className="size-6 fill-black text-white" />
            <span className="text-neutral-800">Past Bookings</span>
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-10">
          <div className="flex w-full flex-col items-center">
            <div className="flex w-full flex-col gap-4">
              {data?.eventTitle && data.eventTitle.length === 0 ? (
                <p className="flex flex-col items-center gap-2">
                  <Icons.twoTickets className="size-52" />
                  <span className="text-sm text-neutral-500">
                    You don't seem to have any recent bookings
                  </span>
                </p>
              ) : (
                data?.eventTitle.map((ticket: any, idx: number) => (
                  <TicketCard key={idx} {...ticket} />
                ))
              )}
            </div>
          </div>
          <div className="space-y-6">
            {" "}
            <div className="rounded-3xl h-fit top-[10vh] bg-white">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  className="md:!w-[25vw]"
                  onChange={(newDate) =>
                    onChange(newDate ? dayjs(newDate) : null)
                  }
                  value={value}
                />
              </LocalizationProvider>
            </div>
            <div>
              <UpcomingEvents />
            </div>
          </div>
          {/* 
          <div className="sticky h-fit top-[10vh] bg-red-500">
            <Calendar
              className="!w-[100vw] md:!w-[25vw] 2xl:text-xl"
              onChange={onChange}
              value={value}
            />
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyTickets;
