import { cn } from "@/utils";
import { Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";
interface TicketCounterProps {
  value: number;
  className?: string;
  onValueChange: (v: number) => void;
  pending: boolean;
}

const TicketCounter = ({
  className,
  onValueChange,
  pending = false,
}: TicketCounterProps) => {
  const [value, setValue] = useState(0);
  const [minus, setMinus] = useState(true);
  useEffect(() => {
    if (value == 0) setMinus(true);
    else if (value > 0) setMinus(false);
  }, [value]);
  // const [ticket, setTicket] = useState(value);
  const increaseTicket = () => {
    // setTicket((p) => p + 1);
    setValue(value + 1);
    onValueChange(value + 1);
  };
  const decreaseTicket = () => {
    // setTicket((p) => (p > 0 ? p - 1 : p));
    setValue(value > 0 ? value - 1 : value);
    onValueChange(value - 1);
  };
  return (
    <div className={cn("flex items-center gap-4 mr-6", className)}>
      <button
        disabled={pending || minus}
        className="flex bg-gray-200 hover:bg-[#738BB6] hover:text-white rounded-full size-6 items-center justify-center disabled:cursor-not-allowed"
        onClick={decreaseTicket}
      >
        <Minus className="size-5 stroke-1" />
      </button>

      <span>{value}</span>

      <button
        disabled={pending}
        className="flex bg-gray-200 hover:bg-[#738BB6] hover:text-white rounded-full size-6 items-center justify-center disabled:cursor-not-allowed"
        onClick={increaseTicket}
      >
        <Plus className="size-5  stroke-1" />
      </button>
    </div>
  );
};

export default TicketCounter;
