import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ViewTicketStep } from "./steps/VIewTicketStep";

export const FAKE_TICKETS: TicketCardProps[] = [
  {
    imageUrl:
      "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
    name: "Fall Guy - Movie Screening",
    genre: "Comedy",
    location: "19a Koryun St, Yerevan 0009",
    date: "Thu, 15th June - 17:00",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
    name: "Fall Guy - Movie Screening",
    genre: "Comedy",
    location: "19a Koryun St, Yerevan 0009",
    date: "Thu, 15th June - 17:00",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
    name: "Fall Guy - Movie Screening",
    genre: "Comedy",
    location: "19a Koryun St, Yerevan 0009",
    date: "Thu, 15th June - 17:00",
  },
];

interface TicketCardProps {
  imageUrl: string;
  genre: string;
  date: string;
  name: string;
  location: string;
}

function TicketCard({
  imageUrl,
  genre,
  date,
  name,
  location,
}: TicketCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-full bg-white flex p-4 shadow-xl rounded-3xl gap-4 border">
          <div className="w-[10rem] h-[10rem] rounded-2xl">
            <img
              src={imageUrl}
              alt="Event Logo"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div className="">
            <div className="p-2 rounded-full border-2 border-black w-[9rem] text-center">
              {genre}
            </div>
            <p className="text-[#B8B8B8] mt-4">{date}</p>
            <h1 className="font-medium md:text-[1.3rem] text-[0.9rem]">
              {name}
            </h1>

            <p className="text-[0.8rem] md:text-[1rem]">{location}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto p-1 max-w-screen-lg max-h-[calc(100dvh)]">
        <div className=" p-12 backdrop-blur-md">
          <ViewTicketStep
            eventsData={null}
            onShareClicked={() => {}}
            showTitle={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TicketCard;
