import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TicketCounter from "./TicketCounter";
import { Slider } from "../ui/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TicketTableOptionProps {
  title: string;
}
const TicketTableOption = ({ title }: TicketTableOptionProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full bg-white rounded-md px-4 m-2 shadow-md">
          <div className="flex w-full items-center justify-between">
            <p className="flex flex-col items-start ">
              <span className="text-lg">{title}</span>
              <span className="text-gray-600 font-normal text-sm">$30.00</span>
            </p>

            <TicketCounter />
          </div>
        </AccordionTrigger>
        <AccordionContent className="ml-2 w-11/12">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">For first table</h3>

            <div className="flex flex-col gap-4 py-10 px-14 bg-gray-200/25 rounded-2xl">
              <p className="flex w-full items-center justify-between text-lg">
                <span>
                  No of <strong>Ladies</strong>
                </span>
                <TicketCounter className="mr-0" />
              </p>

              <p className="flex w-full items-center justify-between text-lg">
                <span>
                  No of <strong>Gentlemen</strong>
                </span>
                <TicketCounter className="mr-0" />
              </p>

              <span>Choose your table&apos; minimum spend</span>
              <Slider defaultValue={[33]} max={100} step={1} />
              <p className="flex items-center justify-between text-lg font-medium">
                <span>$500</span>
                <span>$1500</span>
              </p>

              <p className="flex w-full items-center justify-center">
                <ChevronLeft className="size-8 stroke-1" />
                <ChevronRight className="size-8 stroke-1" />
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TicketTableOption;
