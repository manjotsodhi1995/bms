import { cn } from "@/utils";
import { Plus, Minus, Loader2 } from "lucide-react";

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
  // const [ticket, setTicket] = useState(value);
  const increaseTicket = () => {
    // setTicket((p) => p + 1);
    onValueChange(value + 1);
  };
  const decreaseTicket = () => {
    // setTicket((p) => (p > 0 ? p - 1 : p));
    onValueChange(value > 0 ? value - 1 : value);
  };
  return (
    <div className={cn("flex items-center gap-4 mr-6", className)}>
      <button
        disabled={pending}
        className="flex bg-gray-200 hover:bg-[#738BB6] hover:text-white rounded-full size-6 items-center justify-center disabled:cursor-not-allowed"
        onClick={decreaseTicket}
      >
        <Minus className="size-5 stroke-1" />
      </button>
      {pending ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <span>{value}</span>
      )}
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
