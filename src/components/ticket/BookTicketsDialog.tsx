import { DialogProps } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { TicketStep } from "@/stores/ticket";
import { BookingStep } from "./steps/BookingStep";
import { CartStep } from "./steps/CartStep";
import { CheckoutStep } from "./steps/CheckoutStep";
import { PaymentStep } from "./steps/PaymentStep";
import { PaymentSuccessStep } from "./steps/PaymentSuccessStep";
import { ViewTicketStep } from "./steps/VIewTicketStep";
import { BuyAnotherTicketsStep } from "./steps/BuyAnotherTicketStep";
import { ShareTicketStep } from "./steps/ShareTicketStep";
import type { EventType } from "@/stores/event";

interface BookTicketsDialogProps extends DialogProps {
  eventsData: EventType | null;
}

const BookTicketsDialog = observer(
  ({ eventsData, children }: BookTicketsDialogProps) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [ticketStep, setTicketStep] = useState<TicketStep>("booking");

    return (
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="overflow-y-auto p-1 max-w-screen-lg max-h-[calc(100dvh)]">
          <div className=" p-12 backdrop-blur-md">
            {ticketStep === "booking" && (
              <BookingStep
                onBack={() => setDialogOpen(false)}
                eventsData={eventsData}
                onStepChange={() => setTicketStep("cart")}
              />
            )}
            {ticketStep === "cart" && (
              <CartStep
                onBack={() => setTicketStep("booking")}
                eventsData={eventsData}
                onStepChange={() => setTicketStep("checkout")}
              />
            )}
            {ticketStep === "checkout" && (
              <CheckoutStep
                onBack={() => setTicketStep("cart")}
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
                onDownloadClicked={() => setTicketStep("buy-another-tickets")}
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
  }
);

export default BookTicketsDialog;
