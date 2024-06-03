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
  return (
    <div className="w-full flex p-4 drop-shadow-md border-[1px] border-gray-500 rounded-3xl gap-4">
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
        <h1 className="font-medium md:text-[1.3rem] text-[0.9rem]">{name}</h1>

        <p className="text-[0.8rem] md:text-[1rem]">{location}</p>
      </div>
    </div>
  );
}

export default TicketCard;
