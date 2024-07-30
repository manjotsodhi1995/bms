import { Fragment } from "react/jsx-runtime";
import { TicketStepsProps } from ".";
import { ChevronLeft } from "lucide-react";
import PaymentMethodCard, {
  PaymentMethods,
} from "@/components/ticket/PaymentMethodCard";
import { useMemo, useState } from "react";
import { useCartQuery } from "@/api/query/useCartQuery";
import { formatDate } from "@/utils";
import { useCart } from "@/stores/cart";

export const CheckoutStep = ({
  eventsData,
  onBack,
  onStepChange,
}: TicketStepsProps) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    // confirmEmail,
    // setConfirmEmail,
    voucherCode,
    setVoucherCode,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods | null>(
    "card"
  );
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
        <h2 className="text-2xl font-thin">Checkout</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="w-4/5 flex flex-col gap-2">
          <div className="flex w-full gap-4">
            <div>
              <label htmlFor="first-name" className="text-sm font-medium">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="text-sm font-medium">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          {/* <div> */}
          {/*   <label htmlFor="confirm-email" className="text-sm font-medium"> */}
          {/*     Confirm Email */}
          {/*   </label> */}
          {/*   <input */}
          {/*     id="confirm-email" */}
          {/*     type="text" */}
          {/*     value={confirmEmail} */}
          {/*     onChange={(e) => setConfirmEmail(e.target.value)} */}
          {/*     className="w-full p-2 mt-1 border border-gray-300 rounded-md" */}
          {/*   /> */}
          {/* </div> */}
          <div>
            <label htmlFor="voucher-code" className="text-sm font-medium">
              Add voucher code
            </label>
            <input
              id="confirm-email"
              type="text"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-medium">Pay with</span>
            <PaymentMethodCard
              title="Credit/Debit Card"
              selected={paymentMethod === "card"}
              onSelectedChange={(selected) =>
                setPaymentMethod(selected ? "card" : null)
              }
            />
            {/* <PaymentMethodCard */}
            {/*   title="Paypal" */}
            {/*   logo={PaymentMethodIcons.paypal()} */}
            {/*   selected={paymentMethod === "paypal"} */}
            {/*   onSelectedChange={(selected) => */}
            {/*     setPaymentMethod(selected ? "paypal" : null) */}
            {/*   } */}
            {/* /> */}
            {/* <PaymentMethodCard */}
            {/*   title="Google Pay" */}
            {/*   logo={PaymentMethodIcons.google()} */}
            {/*   selected={paymentMethod === "googlepay"} */}
            {/*   onSelectedChange={(selected) => */}
            {/*     setPaymentMethod(selected ? "googlepay" : null) */}
            {/*   } */}
            {/* /> */}
            {/* <PaymentMethodCard */}
            {/*   title="Apple Pay" */}
            {/*   logo={PaymentMethodIcons.apple()} */}
            {/*   selected={paymentMethod === "applepay"} */}
            {/*   onSelectedChange={(selected) => */}
            {/*     setPaymentMethod(selected ? "applepay" : null) */}
            {/*   } */}
            {/* /> */}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex gap-4 items-center text-sm">
            <input className="size-5 accent-black" type="checkbox" id="keep-updated" />
            <label htmlFor="keep-updated">
              Keep me updated on more events and news from event organizer.
            </label>
          </p>

          <p className="flex gap-4 items-center text-sm">
            <input className="size-5 accent-black" type="checkbox" id="send-emails" />
            <label htmlFor="send-emails">
              Send me emails about the best events happening nearby or online.
            </label>
          </p>
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
              at {eventsData?.venueAddress.name},{" "}
              {eventsData?.venueAddress.city},{" "}
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
                <span className="mr-[1.6rem]">
                  $
                  {cartData ? cartData.totalAmount - cartData.subTotal : "0.00"}
                </span>
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
              Continue
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
