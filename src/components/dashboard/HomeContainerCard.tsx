import { cn } from "@/utils";

function HomeContainerCard({ children, className }: any) {
  return (
    <div
      className={cn(
        "h-[400px] rounded-lg px-6 py-4 flex flex-col gap-1 bg-blue-box shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export default HomeContainerCard;
