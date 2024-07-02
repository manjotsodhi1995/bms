import { cn } from "@/utils";
import { Card, CardContent } from "@mui/material";
import { ReactNode } from "react";

interface FormCardProps {
  title?: string;
  onSaveChanges: () => void;
  children: ReactNode;
  className?: string;
}
export const FormCard = ({
  title,
  onSaveChanges,
  children,
  className,
}: FormCardProps) => {
  return (
    <Card
      className="max-w-3xl"
      sx={{ borderRadius: 4, backgroundColor: "#FFFFFF" }}
    >
      <CardContent>
        <div className="flex w-full flex-col gap-6">
          <div className={cn("px-4 max-w-xl flex flex-col gap-10", className)}>
            {title && <CardTitle>{title}</CardTitle>}
            {children}
          </div>
          <button
            className="bg-[#60769D] py-2 px-2 rounded-lg w-fit text-white place-self-center uppercase text-sm"
            onClick={onSaveChanges}
          >
            Save changes
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-2xl font-semibold", className)}>{children}</h3>
  );
};
