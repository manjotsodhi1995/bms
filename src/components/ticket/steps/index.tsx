import type { EventType } from "@/stores/event";

export interface TicketStepsProps {
  onBack?: () => void;
  eventsData?: EventType | null;
  onStepChange?: () => void;
}
