import Navbar from "../components/Navbar"
import TicketCard from "../components/ticket/TicketCard";
function MyTickets() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="md:w-[40%] w-[93%] gap-4 overflow-x-hidden  items-left text-left flex flex-col justify-left">
        <div className="md:text-[1.6rem] 2xl:text-[2rem] text-[1.5rem] font-medium">
          Your Tickets
        </div>
        <div className="flex flex-col gap-4">
          <TicketCard
            imageUrl="https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0"
            name="Fall Guy - Movie Screening"
            genre="Comedy"
            location="19a Koryun St, Yerevan 0009"
            date="Thu, 15th June - 17:00"
          />
          <TicketCard
            imageUrl="https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0"
            name="Fall Guy - Movie Screening"
            genre="Comedy"
            location="19a Koryun St, Yerevan 0009"
            date="Thu, 15th June - 17:00"
          />
          <TicketCard
            imageUrl="https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0"
            name="Fall Guy - Movie Screening"
            genre="Comedy"
            location="19a Koryun St, Yerevan 0009"
            date="Thu, 15th June - 17:00"
          />
        </div>
      </div>
    </div>
  );
}

export default MyTickets