import { ChevronLeft } from "lucide-react";
import TicketTableOption from "../TicketTableOption";
import { TicketStepsProps } from ".";
import { useBookingMatrixQuery } from "@/api/query/useBookingMatrixQuery";
import { formatDate } from "@/utils";

export const BookingStep = ({
  eventsData,
  onBack,
  onStepChange,
}: TicketStepsProps) => {
  const {
    bookingMatrix: { data, isLoading },
  } = useBookingMatrixQuery(eventsData!!.eventId);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      <div>
        <span className="flex items-center gap-2">
          <button onClick={onBack}>
            <ChevronLeft className="size-6" />
          </button>
          <h2 className="text-2xl font-thin">Tickets</h2>
        </span>
        {!isLoading &&
          data &&
          data.data.map((ticket: any) => <TicketTableOption ticket={ticket} />)}

        <TicketTableOption
          ticket={{
            categoryName: "CLASSIC",
            categoryType: "INR",
            categoryPricePerPerson: "100",
          }}
        />
        <TicketTableOption
          ticket={{
            categoryName: "PREMIUM",
            categoryType: "GBP",
            categoryPricePerPerson: "500",
          }}
        />
        <TicketTableOption
          ticket={{
            categoryName: "CLASSIC",
            categoryType: "INR",
            categoryPricePerPerson: "100",
          }}
        />
        <TicketTableOption
          ticket={{
            categoryName: "CLASSIC",
            categoryType: "INR",
            categoryPricePerPerson: "100",
          }}
        />
        {/* <TicketTableOption title="Round 2" /> */}
        {/* <TicketTableOption title="Table 3" /> */}
        {/* <TicketTableOption title="Table 4" /> */}
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

        <button
          className="mt-4 bg-black w-5/6 text-white font-medium py-2 rounded-md"
          onClick={onStepChange}
        >
          Reserve
        </button>
      </div>
    </div>
  );
};
