import { DialogProps } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Event } from "@/pages/eventPage";
import EventCard from "../EventCard";

interface LastPaymentsDialogProps extends DialogProps {
  eventsData: Event | null;
}

const eventData = [
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
    date: "DEC 24",
    location: "Boston",
  },
];

const LastPaymentsDialog = ({
  children,
  eventsData,
  ...rest
}: LastPaymentsDialogProps) => {
  return (
    <Dialog {...rest}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto p-1 max-w-screen-lg max-h-[calc(100dvh)]">
        <div className="p-12 backdrop-blur-md">
          <div className="mt-6 w-full flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center gap-4">
              <button className="bg-black w-3/4 text-white font-thin py-2 rounded-md">
                Participant Discussion
              </button>

              <button className="bg-white w-3/4 text-black font-thin py-2 rounded-md border border-gray-400">
                Rep this event
              </button>
              <span className="text-3xl font-medium mt-10">
                Buy another tickets!
              </span>
            </div>

            <div className="lg:px-[5%] xl:px-[7%] px-[8vw] py-[2rem] flex w-full">
              <div className="flex flex-col gap-4 w-full">
                <span className="font-medium lg:text-[1.4rem] text-[0.9rem] mt-4">
                  Find more events
                </span>

                <div className="flex gap-2 justify-around">
                  {eventData.slice(0, 2).map((card, index) => (
                    <EventCard key={index} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LastPaymentsDialog;
