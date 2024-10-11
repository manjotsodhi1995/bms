import type { EventType } from "@/stores/event";

export interface TicketStepsProps {
  onBack?: () => void;
  eventsData?: EventType | null;
  onStepChange?: () => void;
  onClose?: () => void;
  setIframeData?: any;
  data?: any;
}
