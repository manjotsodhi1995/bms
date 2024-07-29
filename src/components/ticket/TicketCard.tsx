import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ViewTicketStep } from "./steps/VIewTicketStep";
import { formatDate } from "@/utils";

interface TicketCardProps {
  [key: string]: any;
}
function TicketCard(props: TicketCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-full bg-white flex p-4 shadow-xl rounded-3xl gap-4 border">
          <div className="w-[10rem] h-[10rem] rounded-2xl">
            {props?.posterUrl ? (
              <img
                src={props?.posterUrl}
                alt="Event Logo"
                className="object-cover w-full h-full rounded-2xl"
              />
            ) :(
              <div
                className="bg-gray-200 w-full h-full rounded-2xl"
              />
            )}
          </div>
          <div className="">
            {/* <div className="p-2 rounded-full border-2 border-black w-[9rem] text-center"> */}
            {/*   {genre} */}
            {/* </div> */}
            <p className="text-[#B8B8B8] mt-4">
              {formatDate(new Date(props?.eventDate!!))}
            </p>
            <h1 className="font-medium md:text-[1.3rem] text-[0.9rem]">
              {props?.event?.title}
            </h1>

            <p className="text-[0.8rem] md:text-[1rem]">
              {props?.venueAddress.name},{props?.venueAddress.city},
              {props?.venueAddress.country}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto p-1 max-w-screen-lg max-h-[calc(100dvh)]">
        <div className=" p-12 backdrop-blur-md">
          <ViewTicketStep
            eventsData={null}
            onShareClicked={() => {}}
            showTitle={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TicketCard;
