import { Fragment } from "react/jsx-runtime";
import { TicketStepsProps } from ".";
import { ChevronLeft } from "lucide-react";
import ticket from "@/assets/payment-methods/ticket.svg";
import { usePDF } from "react-to-pdf";
import { useEffect } from "react";
import { formatDate } from "@/utils";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
interface ViewTicketStepProps extends TicketStepsProps {
  onShareClicked: () => void;
  showTitle?: boolean;
  instantDownload?: boolean;
}
export const ViewTicketStep = ({
  eventsData,
  onShareClicked,
  onBack,
  showTitle = true,
  instantDownload = false,
}: ViewTicketStepProps) => {
  const { toPDF, targetRef } = usePDF({
    filename: eventsData?.event?.title + "_ticket.pdf",
  });
  useEffect(() => {
    if (instantDownload) {
      toPDF();
    }
  }, []);
  function getTimeFromDate(date: any) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  return (
    <Fragment>
      {showTitle && (
        <div className="flex items-center gap-2">
          <button onClick={onBack}>
            <ChevronLeft className="size-6" />
          </button>
          <h2 className="text-2xl font-thin">Checkout</h2>
        </div>
      )}
      <div className="flex items-center justify-center">
        <div className="flex flex-col p-10 rounded-2xl items-center justify-center mt-10 w-4/5 border border-gray-200 ">
          <div
            ref={targetRef}
            className="flex flex-col w-full bg-no-repeat bg-contain bg-center gap-20 py-20 "
            style={{
              backgroundImage: `url(${ticket})`,
            }}
          >
            <QRCode
              className="place-self-center -translate-y-0"
              style={{ height: "7rem", width: "7rem" }}
              value={eventsData?.qrCode || "NOT IMPLEMENTED"}
            />

            <div className="place-self-center -translate-y-8 flex flex-col gap-4 max-w-[277px]">
              <p className="flex flex-col">
                <span className="text-sm text-gray-300">Event Name</span>
                <span className="font-medium">
                  {eventsData?.title || eventsData?.event?.title}
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-300">Date</span>
                <span className="font-medium">
                  {formatDate(new Date(eventsData?.eventDate)) || "NA"}
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-300">Time</span>
                <span className="font-medium">
                  {getTimeFromDate(new Date(eventsData?.event.eventStart)) ||
                    "NA"}
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-300">Location</span>
                <span className="font-medium">
                  {eventsData?.venueAddress.name},
                  {eventsData?.venueAddress.city}
                </span>
              </p>
            </div>
          </div>
          <div className="w-3/5 flex gap-2">
            <Link
              to={eventsData?.ticketPdf}
              className="w-full flex items-center justify-center"
            >
              <div className="mt-4 bg-black w-full text-center text-white font-medium py-2 rounded-md">
                Download
              </div>
            </Link>
            <button
              className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"
              onClick={onShareClicked}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
