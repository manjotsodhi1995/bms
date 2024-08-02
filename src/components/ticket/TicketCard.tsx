import { useState } from "react";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import { ViewTicketStep } from "./steps/ViewTicketStep";
import { formatDate } from "@/utils";
import { Download, Eye, X } from "lucide-react";
import { EventType } from "@/stores/event";

interface TicketCardProps {
  [key: string]: any;
}
function TicketCard(props: TicketCardProps) {
  const [open, setOpen] = useState(false);
  const [download, setDownload] = useState(false);
  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        setDownload(false);
      }}
    >
      <div className="relative w-full bg-white flex p-4 shadow-xl rounded-3xl gap-4 border">
        <div className="absolute flex  items-center gap-2 right-10">
          <Eye
            onClick={() => setOpen(true)}
            className="size-8 text-gray-400 hover:text-black"
          />
          <Download
            className="size-8 text-gray-400 hover:text-black"
            onClick={() => {
              setDownload(true);
              setOpen(true);
            }}
          />
        </div>
        <div className="w-[10rem] h-[10rem] rounded-2xl">
          {props?.event?.posterUrl ? (
            <img
              src={props?.event.posterUrl}
              alt="Event Logo"
              className="object-cover w-full h-full rounded-2xl"
            />
          ) : (
            <div className="bg-gray-200 w-full h-full rounded-2xl" />
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
            <span className="font-medium">{props?.venueAddress.name}</span>
            <br />
            {props?.venueAddress.city}, {props?.venueAddress.country},{" "}
            {props?.venueAddress.zipcode}
          </p>

          <p className="font-medium">${props?.totalAmount}</p>
        </div>
      </div>
      <DialogContent className="overflow-y-auto p-1 max-w-screen-lg max-h-[calc(100dvh)]">
        <div className=" p-12 backdrop-blur-md">
          <DialogClose className="absolute right-4 top-4 opacity-70 rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="size-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <ViewTicketStep
            eventsData={props as EventType}
            onShareClicked={() => {}}
            showTitle={false}
            instantDownload={download}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TicketCard;
