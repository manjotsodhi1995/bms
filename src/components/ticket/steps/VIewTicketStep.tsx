import { Fragment } from "react/jsx-runtime";
import { TicketStepsProps } from ".";
import { ChevronLeft } from "lucide-react";
import QrCode from "@/assets/payment-methods/qrcode.svg";
import ticket from "@/assets/payment-methods/ticket.svg";

interface ViewTicketStepProps extends TicketStepsProps {
  onDownloadClicked: () => void;
  onShareClicked: () => void;
}
export const ViewTicketStep = ({
  onDownloadClicked,
  onShareClicked,
  onBack,
}: ViewTicketStepProps) => {
  return (
    <Fragment>
      <div className="flex items-center gap-2">
        <button onClick={onBack}>
          <ChevronLeft className="size-6" />
        </button>
        <h2 className="text-2xl font-thin">Checkout</h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col p-10 rounded-2xl items-center justify-center mt-10 w-4/5 border border-gray-200 ">
          <div
            className="flex flex-col w-full bg-no-repeat bg-contain bg-center gap-20 py-20"
            style={{
              backgroundImage: `url(${ticket})`,
            }}
          >
            <img
              src={QrCode}
              alt=""
              className="size-32 place-self-center -translate-y-6"
            />

            <div className="place-self-center -translate-y-8 flex flex-col gap-4">
              <p className="flex flex-col">
                <span className="text-sm text-gray-300">Name</span>
                <span className="font-medium">Adam Smith</span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-300">Date</span>
                <span className="font-medium">December 17, 2022</span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-300">Time</span>
                <span className="font-medium">4:00 - 10:00 PM</span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-300">Location</span>
                <span className="font-medium">
                  Grand Avenue Center, Surabaya
                </span>
              </p>
            </div>
          </div>
          <div className="w-3/5 flex gap-2">
            <button
              className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"
              onClick={onDownloadClicked}
            >
              Download
            </button>
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
