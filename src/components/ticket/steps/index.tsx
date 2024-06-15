import { Event } from "@/pages/eventPage";

export interface TicketStepsProps {
  onBack?: () => void;
  eventsData?: Event | null;
  onStepChange?: () => void;
}
