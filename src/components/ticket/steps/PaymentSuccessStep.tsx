import { TicketStepsProps } from ".";
import EventCard from "@/components/EventCard";
import { ChevronLeft, CircleCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "@/hooks/useStore";

export const PaymentSuccessStep = ({
  onStepChange,
  onBack,
}: TicketStepsProps) => {
  const {
    root: { event },
  } = useStore();
  const fetchEvents = async (location: string) => {
    return await event.fetchEvents(location);
  };
  const { data } = useQuery({
    queryKey: ["homepage", "Dublin, Ireland", "fetchAllEvents"],
    queryFn: () => fetchEvents("Dublin, Ireland"),
  });

  return (
    <>
      <button onClick={onBack}>
        <ChevronLeft className="size-6" />
      </button>
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="text-xl font-semibold">Payment successfull!</span>
          <CircleCheck className="size-20 text-green-500" />

          <div className="mt-2">
            <button
              className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"
              onClick={onStepChange}
            >
              View Ticket
            </button>

            <p className="underline text-sm mt-2">
              A ticket conformation has been sent to your email
            </p>
          </div>

          {/* <div className="flex w-full gap-4 font-thin text-sm"> */}
          {/*   <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"> */}
          {/*     Add to groupchat */}
          {/*   </button> */}
          {/*   <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"> */}
          {/*     Rep this event */}
          {/*   </button> */}
          {/* </div> */}
        </div>

        <div className="lg:px-[5%] xl:px-[7%] px-[8vw] py-[2rem] flex w-full">
          <div className="flex flex-col gap-4 w-full">
            <span className="font-medium lg:text-[1.4rem] text-[0.9rem] mt-4">
              Find more events
            </span>

            <div className="flex gap-2 justify-around">
              {data?.upcomingEvents.slice(0, 2).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
