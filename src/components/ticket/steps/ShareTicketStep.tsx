import { X } from "lucide-react";

export const ShareTicketStep = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="bg-white w-full h-full">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
        <X className="size-6" />
      </button>
      <div className="flex items-center justify-center">Share Ticket</div>
    </div>
  );
};
