import { DialogProps } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { TicketStep } from "@/stores/ticket";
import { BookingStep } from "./steps/BookingStep";
import { CheckoutStep } from "./steps/CheckoutStep";
import { PaymentStep } from "./steps/PaymentStep";
import { PaymentSuccessStep } from "./steps/PaymentSuccessStep";
import { ViewTicketStep } from "./steps/ViewTicketStep";
import { BuyAnotherTicketsStep } from "./steps/BuyAnotherTicketStep";
import { ShareTicketStep } from "./steps/ShareTicketStep";
import type { EventType } from "@/stores/event";
import CartProvider from "@/stores/cart";
import { X } from "lucide-react";
import { useCartQuery } from "@/api/query/useCartQuery";

interface BookTicketsDialogProps extends DialogProps {
  eventsData: EventType | null;
}

const BookTicketsDialog = observer(
  ({ eventsData, children }: BookTicketsDialogProps) => {
    return (
      <CartProvider>
        <BookTicketsDialogContent eventsData={eventsData}>
          {children}
        </BookTicketsDialogContent>
      </CartProvider>
    );
  }
);

interface BookTicketsDialogContentProps extends BookTicketsDialogProps {}

const BookTicketsDialogContent = ({
  eventsData,
  children,
}: BookTicketsDialogContentProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [ticketStep, setTicketStep] = useState<TicketStep>("booking");
  const { resetCartMutation } = useCartQuery(
    eventsData?.eventId,
    eventsData?.eventStart
  );
  const closeDialog = (value: boolean) => {
    if (!value) {
      resetCartMutation.mutate();
    }
    setTicketStep("booking");
    setDialogOpen(value);
  };
  return (
    <Dialog open={dialogOpen} onOpenChange={closeDialog}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto p-1 max-w-screen-lg max-h-[calc(100dvh)]">
        <div className=" p-6 py-8 backdrop-blur-md">
          <DialogClose className="absolute right-4 top-4 opacity-70 rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="size-6" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {ticketStep === "booking" && (
            <BookingStep
              onBack={() => setDialogOpen(false)}
              eventsData={eventsData}
              onStepChange={() => setTicketStep("checkout")}
            />
          )}
          {/* {ticketStep === "cart" && ( */}
          {/*   <CartStep */}
          {/*     onBack={() => setTicketStep("booking")} */}
          {/*     eventsData={eventsData} */}
          {/*     onStepChange={() => setTicketStep("checkout")} */}
          {/*   /> */}
          {/* )} */}
          {ticketStep === "checkout" && (
            <CheckoutStep
              onBack={() => setTicketStep("booking")}
              eventsData={eventsData}
              onStepChange={() => setTicketStep("payment")}
            />
          )}
          {ticketStep === "payment" && (
            <PaymentStep
              onBack={() => setTicketStep("checkout")}
              eventsData={eventsData}
              onStepChange={() => setTicketStep("payment-success")}
            />
          )}
          {ticketStep === "payment-success" && (
            <PaymentSuccessStep
              onBack={() => setTicketStep("payment")}
              eventsData={eventsData}
              onStepChange={() => setTicketStep("view-ticket")}
            />
          )}
          {ticketStep === "view-ticket" && (
            <ViewTicketStep
              onBack={() => setTicketStep("payment-success")}
              eventsData={eventsData}
              onShareClicked={() => setTicketStep("share-ticket")}
            />
          )}
          {ticketStep === "buy-another-tickets" && (
            <BuyAnotherTicketsStep
              onBack={() => setTicketStep("view-ticket")}
              onStepChange={() => {}}
              eventsData={eventsData}
            />
          )}
          {ticketStep === "share-ticket" && (
            <ShareTicketStep
              onClose={() => {
                setDialogOpen(false);
                setTicketStep("booking");
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookTicketsDialog;
