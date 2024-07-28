import { ChevronLeft, Loader2 } from "lucide-react";
import TicketTableOption from "../TicketTableOption";
import { TicketStepsProps } from ".";
import { useBookingMatrixQuery } from "@/api/query/useBookingMatrixQuery";
import { formatDate } from "@/utils";
import { useCartQuery } from "@/api/query/useCartQuery";
import { useMemo } from "react";
import { AxiosError } from "axios";

export const BookingStep = ({
  eventsData,
  onBack,
  onStepChange,
}: TicketStepsProps) => {
  const {
    bookingMatrix: { data, isLoading, isError },
  } = useBookingMatrixQuery(eventsData!!.eventId, eventsData!!.eventStart);
  const { cartData, cartMutation } = useCartQuery(
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

  const error = useMemo(() => {
    if (cartMutation.error instanceof AxiosError) {
      return (
        cartMutation.error?.response?.data.message ||
        "An error occurred. Please try again"
      );
    } else {
      return "An error occurred. Please try again";
    }
  }, [cartMutation.isError]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      <div>
        <span className="flex items-center gap-2">
          <button onClick={onBack}>
            <ChevronLeft className="size-6" />
          </button>
          <h2 className="text-2xl font-thin">Tickets</h2>
        </span>
        {isLoading && (
          <p className="flex gap-2 items-center text-gray-600">
            Loading
            <Loader2 className="animate-spin size-4" />
          </p>
        )}
        {cartMutation.isError && <span className="ml-2 text-sm text-red-500">{error}</span>}
        {!isLoading &&
          data &&
          data.ticketCategories &&
          data.ticketCategories.map((ticket: any) => (
            <TicketTableOption
              currentBasket={cartData?.basket}
              ticket={ticket}
              key={ticket._id}
              pending={cartMutation.isPending}
              onTicketUpdate={(v) => {
                cartMutation.mutate({
                  eventDate: eventsData?.eventStart.split(" ")[0],
                  basket: {
                    noOfPersons: v,
                    categoryName: ticket.categoryName,
                    categoryType: ticket.categoryType,
                  },
                });
              }}
            />
          ))}
        {isError && <p>There are no tickets available</p>}
      </div>

      <div className="bg-white p-10 flex flex-col shadow-lg rounded-lg h-fit gap-2 items-center">
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
          {eventsData?.venueAddress.country}, {eventsData?.venueAddress.zipcode}
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
            <span>
              ${cartData ? cartData.totalAmount - cartData.subTotal : "0.00"}
            </span>
          </p>

          <p className="flex items-center justify-between mt-4 text-black font-medium">
            <span>Total</span>
            <span>${cartData ? cartData.totalAmount : "0.00"}</span>
          </p>
        </div>

        <button
          disabled={noOfTickets === 0}
          className="mt-4 bg-black w-5/6 text-white font-medium py-2 rounded-md disabled:cursor-not-allowed"
          onClick={onStepChange}
        >
          Reserve
        </button>
      </div>
    </div>
  );
};
