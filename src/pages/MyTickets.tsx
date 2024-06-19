import { Clock } from "lucide-react";
import Footer from "../components/Footer";
import TicketCard, { FAKE_TICKETS } from "../components/ticket/TicketCard";
import { Icons } from "@/components/Icons";

function MyTickets() {
  const tickets = FAKE_TICKETS;
  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full items-center justify-between px-20 lg:px-40">
        <h3 className="md:text-[1.6rem] 2xl:text-[2rem] text-[1.5rem] font-medium">
          Your Tickets
        </h3>
        <p className="flex flex-col items-center">
          <Clock className="size-6 fill-black text-white" />
          <span className="text-neutral-800">Past Bookings</span>
        </p>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col gap-4">
          {tickets.length === 0 ? (
            <p className="flex flex-col items-center gap-2">
              <Icons.twoTickets className="size-52" />
              <span className="text-sm text-neutral-500">
                You don't seem to have any recent bookings
              </span>
            </p>
          ) : (
            tickets.map((ticket, idx) => <TicketCard key={idx} {...ticket} />)
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyTickets;
