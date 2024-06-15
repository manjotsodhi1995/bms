import { Fragment } from "react/jsx-runtime";
import { TicketStepsProps } from ".";
import { ChevronLeft } from "lucide-react";

export const CartStep = ({
  eventsData: _,
  onBack,
  onStepChange,
}: TicketStepsProps) => (
  <Fragment>
    <div className="flex items-center gap-2">
      <button onClick={onBack}>
        <ChevronLeft className="size-6" />
      </button>
      <h2 className="text-2xl font-thin">Cart</h2>
    </div>

    <div className="flex items-center justify-center">
      <div className="bg-white mt-10 p-10 flex flex-col shadow-lg rounded-lg h-fit gap-2 items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/1cd7/f4dc/9ab46b29cc668c7f4e50b65efdb52bd2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o0crmQPt9uL0ZTxKjXhzyemymy5kxqqNva1yOimUDBO2gfDMEnBGmnk81r~fTApreOI3MqUPoPAgCe3FIT1LopcJOG8EF3VDoB2rtWE8Cq-F4y4Hd0qZEKJZVOMCsGpwNuBtbTBA9V4EIKdj32ruPM1fJW1hypUMy9cx9FMjbbb2l9Ebts6OQEOVDkXU~-pc9Ky0Iba-YJIVGqvu~rCmIRrd9JqTZ~VYIHi2NSgWy2MhCoYUHBPAlAgtn9cbJ3KksGUe7Is-rag9vV3TGBG0Pktd40zUSjs~FGGc3OW9vR33gp0J4-T6VVGytBCJBOvTMyjEE~yqU5RT9tYbh96thw__"
          className="w-full h-52 object-fill rounded-lg"
        />
        <span className="leading-tight text-xl font-medium">
          Fall Guy - Movie Screening
        </span>
        <p className="ml-4 md:ml-2 text-sm">
          Wednesdays, 11 June
          <br />
          at Cinema Star, Great Eastern Street, London, UK.
        </p>

        <h3 className="mt-10 leading-tight text-xl font-medium w-full">
          Order Summary
        </h3>
        <p className="flex w-full items-center justify-between font-medium">
          <span>Table - 1(2)</span>
          <span>$60.00</span>
        </p>
        <hr className="w-full border-t border-1 border-neutral-300" />
        <div className="flex flex-col w-full px-4">
          <p className="flex items-center justify-between text-gray-600 text-sm">
            <span>Subtotal</span>
            <span>$60.00</span>
          </p>
          <p className="flex items-center justify-between text-gray-600 text-sm">
            <span>Fees</span>
            <span>$10.00</span>
          </p>

          <p className="flex items-center justify-between mt-4 text-black font-medium">
            <span>Total</span>
            <span>$70.00</span>
          </p>
        </div>

        <button className="mt-4 bg-black w-5/6 text-white font-medium py-2 rounded-md" onClick={onStepChange}>
          Continue to checkout
        </button>
      </div>
    </div>
  </Fragment>
);
