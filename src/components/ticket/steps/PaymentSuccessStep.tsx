import { TicketStepsProps } from ".";
import EventCard from "@/components/EventCard";


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
  
export const PaymentSuccessStep = ({
  onStepChange,
}: TicketStepsProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-10">
        <span className="text-xl font-semibold">Payment successfull!</span>

        <div className="mt-10">
          <button
            className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md"
            onClick={onStepChange}
          >
            View Ticket
          </button>

          <p className="underline text-sm mt-2">
            A ticket conformation has been sent to your email
          </p>
        </div>

        <div className="flex w-full gap-4 font-thin text-sm">
          <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md">
            Add to groupchat
          </button>
          <button className="mt-4 bg-black w-full text-white font-medium py-2 rounded-md">
            Rep this event
          </button>
        </div>
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
  );
};
