import { Fragment } from "react/jsx-runtime";
import { TicketStepsProps } from ".";
import { ChevronLeft } from "lucide-react";
import { useCartQuery } from "@/api/query/useCartQuery";
import { formatDate } from "@/utils";
import { useMemo } from "react";

export const CartStep = ({
  eventsData,
  onBack,
  onStepChange,
}: TicketStepsProps) => {
  const { cartData } = useCartQuery(
    eventsData?.eventId,
    eventsData?.eventStart
  );
  const noOfTickets = useMemo(() => {
    if (!cartData) return 0;
    const tickets = cartData.basket
      ? cartData.basket.reduce((acc: number, d: any) => acc + d.noOfPersons, 0)
      : 0;
    return tickets;
  }, [cartData]);
  return (
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
            src={eventsData?.posterUrl}
            className="w-full h-52 object-fill rounded-lg"
          />
          <span className="leading-tight text-xl font-medium">
            {eventsData?.title}
          </span>
          <p className="ml-4 md:ml-2 text-sm">
            Wednesdays, {formatDate(new Date(eventsData?.eventStart!!))}
            <br />
            at {eventsData?.venueAddress.name}, {eventsData?.venueAddress.city},{" "}
            {eventsData?.venueAddress.country},{" "}
            {eventsData?.venueAddress.zipcode}
          </p>

          <h3 className="mt-10 leading-tight text-xl font-medium w-full">
            Order Summary
          </h3>
          <p className="flex w-full items-center justify-between font-medium">
            <span>Ticket - {noOfTickets}</span>
            <span>${cartData ? cartData.subTotal : "0.00"}</span>
          </p>
          <hr className="w-full border-t border-1 border-neutral-300" />
          <div className="flex flex-col w-full px-4">
            <p className="flex items-center justify-between text-gray-600 text-sm">
              <span>Subtotal</span>
              <span>${cartData ? cartData.subTotal : "0.00"}</span>
            </p>
            <p className="flex items-center justify-between text-gray-600 text-sm">
              <span>Fees</span>
              <span>${cartData ? cartData.totalTax : "0.00"}</span>
            </p>

            <p className="flex items-center justify-between mt-4 text-black font-medium">
              <span>Total</span>
              <span>${cartData ? cartData.totalAmount : "0.00"}</span>
            </p>
          </div>

          <button
            className="mt-4 bg-black w-5/6 text-white font-medium py-2 rounded-md"
            onClick={onStepChange}
          >
            Continue to checkout
          </button>
        </div>
      </div>
    </Fragment>
  );
};
