import { DialogProps } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Event } from "@/pages/eventPage";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import CardPaymentsDialog from "./CardPaymentsDialog";

interface CheckoutDialogProps extends DialogProps {
  eventsData: Event | null;
}

type PaymentMethods = "card" | "paypal" | "googlepay" | "applepay";

const paymentMethodIcons = {
  paypal: () => (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1594_29736)">
        <path
          d="M18.0837 1.86811C16.9764 0.605962 14.9747 0.0648499 12.4139 0.0648499H4.98188C4.72851 0.0648592 4.48346 0.15525 4.29078 0.319772C4.0981 0.484294 3.97043 0.712154 3.93073 0.962386L0.836155 20.5889C0.774646 20.9759 1.07433 21.3264 1.46659 21.3264H6.05488L7.2072 14.0174L7.17144 14.2463C7.25353 13.7297 7.69539 13.3486 8.21862 13.3486H10.399C14.6822 13.3486 18.0361 11.6089 19.0158 6.57608C19.0449 6.42723 19.0701 6.28236 19.0919 6.14082C18.9682 6.07534 18.9682 6.07534 19.0919 6.14082C19.3836 4.28066 19.0899 3.01447 18.0837 1.86811Z"
          fill="#27346A"
        />
        <path
          d="M8.96286 5.47073C9.0883 5.411 9.22549 5.38005 9.36442 5.38013H15.191C15.881 5.38013 16.5245 5.42504 17.1126 5.51968C17.2772 5.54592 17.4409 5.57725 17.6035 5.61362C17.834 5.66448 18.0618 5.72673 18.2861 5.80013C18.5753 5.89669 18.8445 6.00914 19.092 6.14082C19.3836 4.27995 19.0899 3.01447 18.0837 1.86811C16.9758 0.605962 14.9747 0.0648499 12.4139 0.0648499H4.98124C4.45793 0.0648499 4.01274 0.44583 3.93073 0.962386L0.836156 20.5882C0.774646 20.9758 1.07433 21.3258 1.46596 21.3258H6.05489L8.44559 6.1653C8.46909 6.01628 8.52845 5.87521 8.61856 5.75422C8.70867 5.63323 8.82682 5.53594 8.96286 5.47073Z"
          fill="#27346A"
        />
        <path
          d="M19.0192 6.57607C18.0395 11.6081 14.6857 13.3486 10.4024 13.3486H8.22137C7.69814 13.3486 7.25621 13.7297 7.17491 14.2463L5.74135 23.3341C5.68778 23.6728 5.94972 23.9797 6.29239 23.9797H10.1602C10.3818 23.9797 10.596 23.9006 10.7645 23.7566C10.9329 23.6127 11.0445 23.4134 11.0791 23.1946L11.1168 22.9975L11.8458 18.3774L11.8927 18.1221C11.9274 17.9032 12.0389 17.7039 12.2073 17.56C12.3758 17.4161 12.59 17.337 12.8116 17.3369H13.3904C17.1372 17.3369 20.071 15.8147 20.9283 11.4124C21.2862 9.57265 21.101 8.03665 20.1544 6.95776C19.8673 6.63098 19.5107 6.3611 19.0953 6.14081C19.0728 6.28306 19.0484 6.42722 19.0192 6.57607Z"
          fill="#2790C3"
        />
        <path
          d="M18.0664 5.73201C17.9136 5.6874 17.7594 5.64791 17.604 5.6136C17.4413 5.57783 17.2776 5.54671 17.1131 5.5203C16.5244 5.42502 15.8813 5.38004 15.1907 5.38004H9.36486C9.22582 5.37972 9.08852 5.41094 8.96329 5.47135C8.8271 5.53636 8.70881 5.63359 8.61867 5.75462C8.52852 5.87564 8.46923 6.01682 8.44594 6.16592L7.20764 14.0174L7.17188 14.2463C7.25333 13.7297 7.69519 13.3486 8.2185 13.3486H10.3995C14.6828 13.3486 18.0366 11.6088 19.0163 6.57606C19.0454 6.42722 19.0699 6.28298 19.0924 6.14081C18.8443 6.00984 18.5758 5.89667 18.2866 5.80075C18.2136 5.77656 18.1401 5.75364 18.0664 5.73201Z"
          fill="#1F264F"
        />
      </g>
      <defs>
        <clipPath id="clip0_1594_29736">
          <rect
            width="20.35"
            height="24"
            fill="white"
            transform="translate(0.824219)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  google: () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6726 8.36791H18.0013V8.33332H10.5013V11.6667H15.2109C14.5238 13.6071 12.6776 15 10.5013 15C7.74005 15 5.5013 12.7612 5.5013 9.99999C5.5013 7.23874 7.74005 4.99999 10.5013 4.99999C11.7759 4.99999 12.9355 5.48082 13.8184 6.26624L16.1755 3.90916C14.6871 2.52207 12.6963 1.66666 10.5013 1.66666C5.89922 1.66666 2.16797 5.39791 2.16797 9.99999C2.16797 14.6021 5.89922 18.3333 10.5013 18.3333C15.1034 18.3333 18.8346 14.6021 18.8346 9.99999C18.8346 9.44124 18.7771 8.89582 18.6726 8.36791Z"
        fill="#FFC107"
      />
      <path
        d="M3.12891 6.12124L5.86682 8.12916C6.60766 6.29499 8.40182 4.99999 10.5014 4.99999C11.776 4.99999 12.9356 5.48082 13.8185 6.26624L16.1756 3.90916C14.6872 2.52207 12.6964 1.66666 10.5014 1.66666C7.30057 1.66666 4.52474 3.47374 3.12891 6.12124Z"
        fill="#FF3D00"
      />
      <path
        d="M10.5008 18.3333C12.6533 18.3333 14.6091 17.5096 16.0879 16.17L13.5087 13.9875C12.6439 14.6452 11.5872 15.0009 10.5008 15C8.33328 15 6.49286 13.6179 5.79953 11.6892L3.08203 13.7829C4.4612 16.4817 7.26203 18.3333 10.5008 18.3333Z"
        fill="#4CAF50"
      />
      <path
        d="M18.6712 8.36793H18V8.33334H10.5V11.6667H15.2096C14.8809 12.5902 14.2889 13.3972 13.5067 13.9879L13.5079 13.9871L16.0871 16.1696C15.9046 16.3354 18.8333 14.1667 18.8333 10C18.8333 9.44126 18.7758 8.89584 18.6712 8.36793Z"
        fill="#1976D2"
      />
    </svg>
  ),
  apple: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2067 16.9C13.39 17.6917 12.4983 17.5667 11.64 17.1917C10.7317 16.8083 9.89835 16.7917 8.94001 17.1917C7.74001 17.7083 7.10668 17.5583 6.39001 16.9C2.32335 12.7083 2.92335 6.325 7.54001 6.09167C8.66501 6.15 9.44835 6.70833 10.1067 6.75833C11.09 6.55833 12.0317 5.98333 13.0817 6.05833C14.34 6.15833 15.29 6.65833 15.915 7.55833C13.315 9.11667 13.9317 12.5417 16.315 13.5C15.84 14.75 15.2233 15.9917 14.1983 16.9083L14.2067 16.9ZM10.0233 6.04167C9.89835 4.18333 11.4067 2.65 13.14 2.5C13.3817 4.65 11.19 6.25 10.0233 6.04167Z"
        fill="black"
      />
    </svg>
  ),
};
const CheckoutDialog = ({
  children,
  eventsData,
  ...rest
}: CheckoutDialogProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [voucherCode, setVoucherCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods | null>(
    null
  );
  const [openPaymentsDialog, setOpenPaymentsDialog] = useState(false);
  return (
    <Dialog {...rest}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto p-1 max-w-screen-lg max-h-[calc(100dvh)]">
        <div className="p-12 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <DialogClose>
              <ChevronLeft className="size-6" />
            </DialogClose>
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
              <div>
                <label htmlFor="confirm-email" className="text-sm font-medium">
                  Confirm Email
                </label>
                <input
                  id="confirm-email"
                  type="text"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
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
                <span className="text-lg font-medium">Pay with</span>
                <PaymentMethodsCard
                  title="Credit/Debit Card"
                  selected={paymentMethod === "card"}
                  onSelectedChange={(selected) =>
                    setPaymentMethod(selected ? "card" : null)
                  }
                />
                <PaymentMethodsCard
                  title="Paypal"
                  logo={paymentMethodIcons.paypal()}
                  selected={paymentMethod === "paypal"}
                  onSelectedChange={(selected) =>
                    setPaymentMethod(selected ? "paypal" : null)
                  }
                />
                <PaymentMethodsCard
                  title="Google Pay"
                  logo={paymentMethodIcons.google()}
                  selected={paymentMethod === "googlepay"}
                  onSelectedChange={(selected) =>
                    setPaymentMethod(selected ? "googlepay" : null)
                  }
                />
                <PaymentMethodsCard
                  title="Apple Pay"
                  logo={paymentMethodIcons.apple()}
                  selected={paymentMethod === "applepay"}
                  onSelectedChange={(selected) =>
                    setPaymentMethod(selected ? "applepay" : null)
                  }
                />
              </div>
            </div>

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

              <CardPaymentsDialog
                open={openPaymentsDialog && paymentMethod === "card"}
                onOpenChange={setOpenPaymentsDialog}
                modal={true}
                eventsData={eventsData}
              >
                <button className="mt-4 bg-black w-5/6 text-white font-medium py-2 rounded-md">
                  Continue
                </button>
              </CardPaymentsDialog>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface PaymentMethodsCardProps {
  title: string;
  logo?: React.ReactNode;
  selected: boolean;
  onSelectedChange: (selected: boolean) => void;
}

const PaymentMethodsCard = ({
  title,
  logo,
  selected,
  onSelectedChange,
}: PaymentMethodsCardProps) => {
  return (
    <label
      htmlFor={`${title}-radio`}
      className="flex items-center gap-2 p-5 border border-gray-600  justify-around rounded-xl cursor-pointer"
    >
      <div className="flex w-3/5 gap-2">
        {logo}
        <span>{title}</span>
      </div>
      <input
        id={`${title}-radio`}
        className=" accent-gray-500 size-5"
        type="radio"
        checked={selected}
        onChange={(e) => onSelectedChange(e.target.checked)}
      />
    </label>
  );
};

export default CheckoutDialog;
