import { Fragment } from "react/jsx-runtime";
import { TicketStepsProps } from ".";
import { ChevronLeft, Loader2 } from "lucide-react";
import PaymentMethodCard, {
  PaymentMethods,
} from "@/components/ticket/PaymentMethodCard";
import { useEffect, useState } from "react";
import { useCartQuery } from "@/api/query/useCartQuery";
import { useCart } from "@/stores/cart";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import PreviewCard from "./PreviewCard";
import { Link } from "react-router-dom";
import axios from "@/utils/middleware";
import { API } from "@/api";
import { useQuery } from "@tanstack/react-query";

interface ErrorResponse {
  message: string;
}

const fetchProfile = async () => {
  const response = await axios.get(API.users.profile);
  return response.data.data;
};

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

  const { data, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  useEffect(() => {
    if (!data) return;
    setFirstName(data?.fname);
    setLastName(data?.lname);
    setEmail(data?.email);
  }, [data, isSuccess]);

  const [checked, setChecked] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  const [error, setError] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods | null>(
    "card"
  );
  const { cartData, promoCodeMutation, removePromoCodeMutation } = useCartQuery(
    eventsData?.eventId,
    eventsData?.eventStart
  );
  useEffect(() => {
    console.log(cartData.basket.discountTotal);
    cartData.basket.discountTotal > 0
      ? setPromoApplied(true)
      : setPromoApplied(false);
  }, []);
  const onContinueClicked = () => {
    if (firstName.length === 0) {
      setError("Please enter your first name");
      return;
    }
    if (lastName.length === 0) {
      setError("Please enter your last name");
      return;
    }

    if (email.length === 0) {
      setError("Please enter your email");
      return;
    }
    setError("");
    onStepChange!!();
  };

  return (
    <Fragment>
      <div className="flex items-center gap-2 absolute left-4 top-4">
        <button onClick={onBack}>
          <ChevronLeft className="size-6" />
        </button>
        <h2 className="text-lg font-thin">Back</h2>
      </div>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {" "}
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-2xl font-bold mt-4 w-full">Checkout</h2>
          {!accessToken && (
            <p className="text-xs">
              Already a user ?{" "}
              <span>
                <Link to={"/login"} className="text-[#8C3E87] font-medium">
                  Login
                </Link>
              </span>
            </p>
          )}
          {error.length > 0 && (
            <p className="text-red-400 text-sm font-medium">{error}</p>
          )}
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
          <label htmlFor="voucher-code" className="-mb-2 text-sm font-medium">
            Add voucher code
          </label>
          <div className="flex gap-2 items-center">
            <input
              id="confirm-email"
              type="text"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              disabled={promoApplied}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
            {!promoApplied && (
              <button
                className="flex items-center gap-2 bg-black w-fit px-[0.5rem] py-[0.5rem] text-white font-medium rounded-md "
                onClick={() => {
                  toast
                    .promise(promoCodeMutation.mutateAsync(), {
                      loading: "Applying Promo Code",
                      success: "Promo code applied successfully",
                      error: (error) => {
                        const axiosError = error as AxiosError<ErrorResponse>;
                        const errorMessage =
                          axiosError.response?.data?.message ||
                          "An error occurred";
                        return errorMessage;
                      },
                    })
                    .then(() => {
                      setPromoApplied(true);
                    });
                }}
              >
                Apply
                {promoCodeMutation.isPending && (
                  <Loader2 className="size-4 animate-spin" />
                )}
              </button>
            )}

            {promoApplied && (
              <button
                className="flex items-center gap-2 bg-black w-fit px-[0.5rem] py-[0.5rem] text-white font-medium rounded-md"
                onClick={() => {
                  toast
                    .promise(removePromoCodeMutation.mutateAsync(), {
                      loading: "Removing Promo Code",
                      success: "Promo code removed successfully",
                      error: (error) => {
                        const axiosError = error as AxiosError<ErrorResponse>;
                        const errorMessage =
                          axiosError.response?.data?.message ||
                          "An error occurred";
                        return errorMessage;
                      },
                    })
                    .then(() => {
                      setPromoApplied(false);
                      setVoucherCode("")
                    });
                }}
              >
                Remove
                {removePromoCodeMutation.isPending && (
                  <Loader2 className="size-4 animate-spin" />
                )}
              </button>
            )}
          </div>
          <div className="flex flex-col w-full gap-2 mt-3 mb-2">
            <p className="flex gap-4 items-center text-sm">
              <input
                className="size-4 accent-black"
                type="checkbox"
                id="send-emails"
              />
              <label htmlFor="send-emails" className="text-[0.8rem]">
                Send me emails about the best events happening nearby or online.
              </label>
            </p>
            <p className="flex gap-4 items-center text-sm">
              <input
                className="size-4 accent-black"
                type="checkbox"
                id="terms-condition"
                defaultChecked
                onChange={(e) => setChecked(e.target.checked)}
              />
              <label htmlFor="terms-condition" className="text-[0.8rem]">
                I agree to the T&C and Privacy policy
              </label>
            </p>
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
        <PreviewCard cartData={cartData} eventsData={eventsData}>
          <button
            disabled={
              !checked ||
              email.length === 0 ||
              firstName.length === 0 ||
              lastName.length === 0
            }
            className="mt-4 bg-black w-5/6 text-white font-medium py-2 rounded-md disabled:cursor-not-allowed disabled:bg-gray-500"
            onClick={onContinueClicked}
          >
            Continue
          </button>
        </PreviewCard>
      </div>
    </Fragment>
  );
};
