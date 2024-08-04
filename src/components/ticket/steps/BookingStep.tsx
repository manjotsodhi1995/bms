import { ChevronLeft, Loader2 } from "lucide-react";
import TicketTableOption from "../TicketTableOption";
import { TicketStepsProps } from ".";
import { useBookingMatrixQuery } from "@/api/query/useBookingMatrixQuery";
import { useCartQuery } from "@/api/query/useCartQuery";
import { useMemo } from "react";
import { AxiosError } from "axios";
import PreviewCard from "./PreviewCard";

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
    const tickets = cartData.basket.basket
      ? cartData.basket.basket.reduce(
          (acc: number, d: any) => acc + d.noOfPersons,
          0
        )
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
        <span className="flex items-center gap-2 absolute left-4 top-4">
          <button onClick={onBack}>
            <ChevronLeft className="size-6" />
          </button>
          <h2 className="text-lg font-thin">Back</h2>
        </span>
        <h2 className="text-2xl font-bold mt-6 w-full">Tickets</h2>
        {isLoading && (
          <p className="flex gap-2 items-center text-gray-600">
            Loading
            <Loader2 className="animate-spin size-4" />
          </p>
        )}
        {cartMutation.isError && (
          <span className="ml-2 text-sm text-red-500">{error}</span>
        )}
        {!isLoading &&
          data &&
          data?.matrix?.ticketCategories &&
          data?.matrix?.ticketCategories.map((ticket: any) => (
            <TicketTableOption
              currency={data.currency}
              currentBasket={cartData?.basket?.basket}
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
      <PreviewCard cartData={cartData} eventsData={eventsData}>
        <button
          disabled={noOfTickets === 0}
          className="mt-4 bg-black w-5/6 text-white font-medium py-2 rounded-md disabled:cursor-not-allowed"
          onClick={onStepChange}
        >
          Reserve
        </button>
      </PreviewCard>
    </div>
  );
};
