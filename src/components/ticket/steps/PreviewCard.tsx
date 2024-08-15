import { EventType } from "@/stores/event";
import { formatCurrency, formatDate } from "@/utils";

interface PreviewCardProps {
  eventsData?: EventType | null;
  cartData: any;
  children?: React.ReactNode;
}
const PreviewCard = ({ eventsData, cartData, children }: PreviewCardProps) => {
  return (
    <div className="bg-white p-10 flex flex-col shadow-lg rounded-lg h-fit gap-2 items-center">
      <img
        src={eventsData?.posterUrl}
        className="w-full h-52 object-cover rounded-lg md:flex hidden"
      />
      <span className="leading-tight text-xl font-medium md:flex hidden">
        {eventsData?.title}
      </span>
      <p className="ml-4 md:ml-2 text-sm md:flex hidden">
        Wednesdays, {formatDate(new Date(eventsData?.eventStart!!))}
        <br />
        at {eventsData?.venueAddress.name}, {eventsData?.venueAddress.city},{" "}
        {eventsData?.venueAddress.country}, {eventsData?.venueAddress.zipcode}
      </p>

      <h3 className="mt-10 leading-tight text-xl font-medium w-full">
        Order Summary
      </h3>
      <div className="flex w-full flex-col font-medium">
        {cartData?.basket?.basket &&
          cartData.basket.basket.map((ticket: any) => (
            <p className="flex w-full items-center justify-between">
              <span>
                {ticket.noOfPersons} {ticket.categoryName}
              </span>
              <span>
                {formatCurrency(ticket.totalPrice, cartData.currency)}
              </span>
            </p>
          ))}
      </div>
      <hr className="w-full border-t border-1 border-neutral-300" />
      <div className="flex flex-col w-full">
        <p className="flex items-center justify-between text-gray-600 text-sm">
          <span>Subtotal</span>
          <span>
            {cartData &&
              formatCurrency(cartData?.basket?.subTotal, cartData?.currency)}
          </span>
        </p>
        {cartData?.basket.totalAmount - cartData?.basket.subTotal != 0 && (
          <p className="flex items-center justify-between text-gray-600 text-sm">
            <span>Fees</span>
            <span>
              {cartData &&
                formatCurrency(
                  Number(
                    cartData.basket.totalAmount - cartData.basket.subTotal
                  ),
                  cartData.currency
                )}
            </span>
          </p>
        )}
        {cartData && cartData?.basket?.promotionsApplied.length > 0 && (
          <p className="flex items-center justify-between text-gray-600 text-sm">
            <span>Disount Applied</span>
            <span className="text-black font-medium">
              {Number(
                cartData.basket.promotionsApplied[0].promotionDiscountValue
              ).toFixed(2)}
              %
            </span>
          </p>
        )}

        <p className="flex items-center justify-between mt-4 text-black font-medium">
          <span>Total</span>
          <span>
            {cartData &&
              formatCurrency(
                cartData.basket.netPayableAmount,
                cartData.currency
              )}
          </span>
        </p>
      </div>
      {children}
    </div>
  );
};

export default PreviewCard;
