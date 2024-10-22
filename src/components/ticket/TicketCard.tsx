import { EventType } from "@/stores/event";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import { ViewTicketStep } from "./steps/ViewTicketStep";
import { formatCurrency, formatDate } from "@/utils";
import { Download, Eye, X } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

interface TicketCardProps {
  [key: string]: any;
}

function TicketCard(props: TicketCardProps) {
  const [open, setOpen] = useState(false);
  console.log(props);
  const handleShare = () => {
    if (props.shareUrl) {
      if (navigator.share) {
        navigator
          .share({
            title: "Check out this ticket!",
            url: props.shareUrl,
          })
          .catch(console.error);
      } else {
        window.open(props.shareUrl, "_blank");
      }
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
      }}
    >
      <div
        className="relative w-full bg-white flex p-4 shadow-xl rounded-3xl gap-4 border"
        onClick={() => setOpen(true)}
      >
        <div className="absolute flex items-center gap-2 right-10">
          <Tooltip title="VIEW" placement="top" arrow>
            <Eye
              onClick={() => setOpen(true)}
              className="size-8 text-gray-400 hover:text-black"
            />
          </Tooltip>
          <Tooltip title="DOWNLOAD" placement="top" arrow>
            <Link to={props.ticketPdf} target="blank">
              <Download className="size-8 text-gray-400 hover:text-black" />
            </Link>
          </Tooltip>
        </div>
        <div className="max-w-[10rem] max-h-[10rem] object-cover rounded-2xl">
          {props?.event?.posterUrl ? (
            <img
              src={props?.event.posterUrl}
              alt="Event Logo"
              className="object-cover w-full h-full rounded-2xl"
              loading="lazy"
            />
          ) : (
            <div className="bg-gray-200 w-full h-full rounded-2xl" />
          )}
        </div>
        <div className="">
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

          <p className="font-medium">
            {formatCurrency(
              props?.totalAmount,
              props?.currency ? props.currency : "EUR"
            )}
          </p>
        </div>
      </div>
      <DialogContent className="overflow-y-auto p-1 max-w-screen-lg max-h-[calc(100dvh)]">
        <div className="p-12 backdrop-blur-md">
          <DialogClose className="absolute right-4 top-4 opacity-70 rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="size-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <ViewTicketStep
            eventsData={props as EventType}
            onShareClicked={handleShare}
            showTitle={false}
            instantDownload={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TicketCard;
