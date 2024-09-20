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
  value = 0,
  pending = false,
}: TicketCounterProps) => {
  console.log(pending);
  const [value1, setValue] = useState(0);
  const [minus, setMinus] = useState(false);
  const [pen, setPen] = useState(false);

  useEffect(() => {
    setValue(value);
  }, []);
  useEffect(() => {
    if (value1 == 0) setMinus(true);
    else if (value1 > 0) setMinus(false);
  }, [value1]);
  // const [ticket, setTicket] = useState(value);
  const increaseTicket = () => {
    // setTicket((p) => p + 1);
    setValue(value1 + 1);
    onValueChange(value1 + 1);
    setPen(true);
    setTimeout(() => {
      setPen(false);
    }, 200);
  };
  const decreaseTicket = () => {
    // setTicket((p) => (p > 0 ? p - 1 : p));
    setValue(value1 > 0 ? value1 - 1 : value1);
    onValueChange(value1 - 1);
  };
  return (
    <div className={cn("flex items-center gap-4 mr-6", className)}>
      <button
        disabled={minus}
        className="flex bg-gray-200 hover:bg-[#738BB6] hover:text-white rounded-full size-6 items-center justify-center disabled:cursor-not-allowed"
        onClick={decreaseTicket}
      >
        <Minus className="size-5 stroke-1" />
      </button>

      <span>{value1 == 0 ? value : value1}</span>

      <button
        className="flex bg-gray-200 hover:bg-[#738BB6] hover:text-white rounded-full size-6 items-center justify-center disabled:cursor-not-allowed"
        onClick={increaseTicket}
        disabled={pen}
      >
        <Plus className="size-5  stroke-1" />
      </button>
    </div>
  );
};

export default TicketCounter;
