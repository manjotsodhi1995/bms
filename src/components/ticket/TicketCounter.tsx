import { cn } from "@/utils";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const TicketCounter = ({ className }: { className?: string }) => {
  const [ticket, setTicket] = useState(0);
  const increaseTicket = () => setTicket((p) => p + 1);
  const decreaseTicket = () => setTicket((p) => (p > 0 ? p - 1 : p));
  return (
    <div className={cn("flex gap-4 mr-6", className)}>
      <button
        className="flex bg-gray-200 hover:bg-[#738BB6] hover:text-white rounded-full size-6 items-center justify-center"
        onClick={decreaseTicket}
      >
        <Minus className="size-5 stroke-1" />
      </button>
      <span>{ticket}</span>
      <button
        className="flex bg-gray-200 hover:bg-[#738BB6] hover:text-white rounded-full size-6 items-center justify-center"
        onClick={increaseTicket}
      >
        <Plus className="size-5  stroke-1" />
      </button>
    </div>
  );
};

export default TicketCounter;
