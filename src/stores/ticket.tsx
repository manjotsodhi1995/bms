import { makeObservable, observable, action } from "mobx";
import { Root, iRoot } from "./root";

export type TicketStep =
  | "booking"
  | "cart"
  | "checkout"
  | "payment"
  | "payment-success"
  | "view-ticket"
  | "buy-another-tickets"
  | "share-ticket";

export class TicketStore {
  root: iRoot;
  currentStep: TicketStep = "booking";
  dialogOpen: boolean = false;

  constructor(root: Root) {
    makeObservable(this, {
      currentStep: observable,
      dialogOpen: observable,
      setStep: action,
      toggleDialog: action,
    });
    this.root = root;
  }

  setStep(step: TicketStep) {
    this.currentStep = step;
  }

  toggleDialog(v: boolean) {
    console.log("toggleDialog", v);
    this.dialogOpen = v;
  }
}
