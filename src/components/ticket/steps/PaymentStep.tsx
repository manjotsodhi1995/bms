import { ChevronLeft, Loader2 } from "lucide-react";
import { Fragment, useState } from "react";
import { TicketStepsProps } from ".";
import { useCart } from "@/stores/cart";
import { useCartQuery } from "@/api/query/useCartQuery";
import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/middleware";
import { API } from "@/api";
import PreviewCard from "./PreviewCard";
import { countries } from "../../Country";

interface PaymentBody {
  amount: string;
  cardNumber: string;
  cardExpiryMonth: string;
  cardExpiryYear: string;
  cardCVV: string;
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  customerPostCode: string;
  basketId: string;
}

// const sendPaymentDetails = async (body: PaymentBody) => {
//   const response = await axios.post(API.payments.direct, body);
//   return response.data;
// };

export const PaymentStep = ({
  eventsData,
  onBack,
  onStepChange,
  setIframeData,
}: TicketStepsProps) => {
  const sendPaymentDetails = async (body: PaymentBody) => {
    console.log(cartData?.basket);
    const response = await axios.post(API.payments3ds.direct, body);
    return response.data;
  };
  const {
    firstName,
    lastName,
    email,
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    country,
    setCountry,
    cvv,
    setCvv,
    basketId,
    zip,
    setZip,
    address,
    setAddress,
  } = useCart();
  const [error, setError] = useState("");
  const { cartData } = useCartQuery(
    eventsData?.eventId,
    eventsData?.eventStart
  );
  const { mutate, isPending, isError } = useMutation({
    mutationFn: sendPaymentDetails,
    onSuccess: (data: any) => {
      setIframeData(data);
      onStepChange!!();
      // if (data.transaction.bookingStatus === "SUCCESS") {
      //   setBookingId(data.transaction.bookingId);
      //   onStepChange?.();
      // }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = () => {
    if (clearNumber(cardNumber).length < 16) {
      setError("Enter a card number");
      return;
    }
    if (cvv.length === 0) {
      setError("Enter a cvv");
      return;
    }

    if (expiryDate.length === 0) {
      setError("Enter a expiry date");
      return;
    }
    if (Number(expiryDate.split("/")[1]) < new Date().getFullYear() % 100) {
      setError("The card is expired. Add a new one");
      return;
    }
    setError("");

    mutate({
      amount: cartData.basket.netPayableAmount,
      cardNumber: cardNumber,
      cardExpiryMonth: expiryDate.split("/")[0],
      cardExpiryYear: expiryDate.split("/")[1],
      cardCVV: cvv,
      customerName: `${firstName} ${lastName}`,
      customerEmail: email,
      customerAddress: address,
      customerPostCode: zip,
      // customerAddress: country,
      // customerPostCode: country,
      basketId: basketId,
    });
  };

  const clearNumber = (value = "") => {
    return value.replace(/\D+/g, "");
  };
  const handleCardNumberChange = (cardNumber: string) => {
    if (!cardNumber) {
      setCardNumber(cardNumber);
    }

    const clearValue = clearNumber(cardNumber);
    let nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
      4,
      8
    )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
    nextValue = nextValue.trim();
    setCardNumber(nextValue);
  };

  const handleExpiryDateChange = (expiry: string) => {
    const clearValue = clearNumber(expiry);
    if (clearValue.length >= 3) {
      setExpiryDate(
        (_) => `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
      );
      return;
    }
    setExpiryDate(clearValue);
  };

  return (
    <Fragment>
      <div className="flex items-center gap-2 absolute left-4 top-4">
        <button onClick={onBack}>
          <ChevronLeft className="size-6" />
        </button>
        <h2 className="text-lg font-thin">Back</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="w-full flex flex-col gap-2">
          <h3 className="mb-6 text-xl font-bold max-md:ml-1">Payment</h3>
          <div>
            <label
              htmlFor="cardNumber"
              className="text-sm font-medium relative"
            >
              Card Number
              <input
                id="cardNumber"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => handleCardNumberChange(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
              <VisaIcon className="absolute right-2 top-1/2 translate-y-1.5" />
            </label>
          </div>
          <div className="flex w-full gap-4">
            <div>
              <label htmlFor="expiry" className="text-sm font-medium">
                Expiry
              </label>
              <input
                id="expiry"
                type="text"
                placeholder="MM / YY"
                value={expiryDate}
                onChange={(e) => handleExpiryDateChange(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="cvc" className="text-sm font-medium">
                CVC
              </label>
              <input
                id="cvc"
                type="text"
                placeholder="CVC"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>{" "}
          <div className="flex w-full gap-4">
            <div>
              <label htmlFor="expiry" className="text-sm font-medium">
                Address
              </label>
              <input
                id="expiry"
                type="text"
                placeholder=""
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="cvc" className="text-sm font-medium">
                Postal Code
              </label>
              <input
                id="cvc"
                type="text"
                placeholder="Postal Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="country" className="text-sm font-medium">
              Country
              <select
                id="country"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="block md:hidden">
            <PreviewCard cartData={cartData} eventsData={eventsData} />
          </div>
          <div className="flex flex-col mt-10 gap-4">
            {isError && (
              <p className="text-red-400 text-sm font-medium">
                Couldn't complete payment. Please try again
              </p>
            )}
            {error.length > 0 && (
              <p className="text-red-400 text-sm font-medium">{error}</p>
            )}
            <button
              disabled={isPending}
              className="flex w-full justify-center items-center gap-2 bg-black 6 text-white font-thin py-3 rounded-md shadow-md disabled:cursor-not-allowed"
              onClick={onSubmit}
            >
              PAY NOW
              {isPending && <Loader2 className="animate-spin size-4" />}
            </button>

            <button
              className="bg-gray-100 w-full text-black font-thin py-3 rounded-md shadow-md"
              onClick={onBack}
            >
              CANCEL
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <PreviewCard cartData={cartData} eventsData={eventsData} />
        </div>
      </div>
    </Fragment>
  );
};

const VisaIcon = ({ className }: { className: string }) => (
  <svg
    width="30"
    height="20"
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clip-path="url(#clip0_1594_30067)">
      <path
        d="M28 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18L0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L28 0C28.5304 0 29.0391 0.210714 29.4142 0.585786C29.7893 0.960859 30 1.46957 30 2V18C30 18.5304 29.7893 19.0391 29.4142 19.4142C29.0391 19.7893 28.5304 20 28 20ZM14.8667 12.3017L14.5675 14.1767C15.3321 14.4984 16.1577 14.6495 16.9867 14.6192H16.9775C17.9489 14.6758 18.9109 14.4018 19.7067 13.8417L19.6925 13.8508C20.0174 13.612 20.2816 13.3002 20.4637 12.9405C20.6458 12.5807 20.7407 12.1832 20.7408 11.78V11.7675C20.7408 10.8508 20.1275 10.09 18.9183 9.50167C18.5884 9.34244 18.2728 9.15508 17.975 8.94167L17.9942 8.955C17.911 8.90113 17.8417 8.82836 17.7921 8.74262C17.7424 8.65688 17.7137 8.56061 17.7083 8.46167V8.46C17.7146 8.35679 17.7468 8.25683 17.802 8.16942C17.8572 8.082 17.9336 8.00996 18.0242 7.96L18.0275 7.95833C18.3072 7.79696 18.6286 7.72242 18.9508 7.74417H18.9458H19.0125L19.0767 7.74333C19.6133 7.74333 20.1225 7.85917 20.5817 8.06667L20.5583 8.0575L20.7533 8.16167L21.0525 6.3525C20.4475 6.11789 19.8039 5.99862 19.155 6.00083H19.1142H19.1167C18.1777 5.95972 17.2519 6.23304 16.4858 6.7775L16.4992 6.76833C16.1808 6.99307 15.921 7.29096 15.7416 7.63695C15.5622 7.98294 15.4685 8.36694 15.4683 8.75667V8.76083C15.46 9.6425 16.095 10.4042 17.3567 11.0275C17.69 11.1733 17.9775 11.3517 18.235 11.5658L18.2292 11.5608C18.3035 11.6233 18.3639 11.7007 18.4065 11.788C18.4492 11.8752 18.4731 11.9705 18.4767 12.0675V12.0708C18.4767 12.3367 18.3183 12.565 18.09 12.6675L18.0858 12.6692C17.8358 12.8008 17.5392 12.8775 17.2242 12.8775H17.1858H17.1875H17.125C16.4108 12.8775 15.7342 12.7192 15.1275 12.4358L15.1567 12.4483L14.8708 12.305L14.8667 12.3017ZM23.3042 13.2525H26.0667C26.1111 13.4431 26.1981 13.8597 26.3275 14.5025H28.3333L26.5883 6.14333H24.9217C24.6834 6.12222 24.4447 6.17852 24.241 6.30388C24.0372 6.42923 23.8794 6.61696 23.7908 6.83917L23.7883 6.84667L20.5883 14.5025H22.855L23.31 13.2533L23.3042 13.2525ZM12.4092 6.14333L11.0542 14.5025H13.2158L14.57 6.14333H12.4092ZM4.10167 7.84917L5.86 14.4892H8.13833L11.5342 6.14333H9.24583L7.13417 11.8467L6.9125 10.6875L6.15917 6.84667C6.11878 6.62513 5.99392 6.42795 5.81092 6.29673C5.62793 6.16551 5.40111 6.11051 5.17833 6.14333L5.18333 6.1425H1.69417L1.66833 6.31167C4.355 6.99417 6.12 8.46667 6.915 10.6867C6.6707 10.0523 6.294 9.47732 5.81 9L5.80917 8.99917C5.33368 8.51095 4.76492 8.12327 4.13667 7.85917L4.10333 7.84667L4.10167 7.84917ZM25.7158 11.5333H23.9158C24.0375 11.2122 24.3242 10.4344 24.7758 9.2L24.8142 9.0825L24.9475 8.74417C25.0025 8.60583 25.0392 8.4925 25.0642 8.40583L25.2208 9.12167L25.715 11.53L25.7158 11.5333Z"
        fill="#545454"
      />
    </g>
    <defs>
      <clipPath id="clip0_1594_30067">
        <rect width="30" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
