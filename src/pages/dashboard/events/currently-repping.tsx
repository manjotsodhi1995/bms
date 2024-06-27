import ReppingTable from "@/components/dashboard/Events/ReppingTable";

const data = [
  {
    id: "event-id",
    event: "Rozen Tal at Tone Lab",
    eventinfo: "19a Koryun St, Yerevan 0009",
    type: "Comedy",
    date: "12/05/23",
    price: 100,
    commission_rate: 100,
  },
  {
    id: "event-id",
    event: "Rozen Tal at Tone Lab",
    eventinfo: "19a Koryun St, Yerevan 0009",
    type: "Sport",
    date: "12/05/23",
    price: 100,
    commission_rate: 100,
  },
  {
    id: "event-id",
    event: "Rozen Tal at Tone Lab",
    eventinfo: "19a Koryun St, Yerevan 0009",
    type: "Movie",
    date: "12/05/23",
    price: 100,
    commission_rate: 100,
  },
  {
    id: "event-id",
    event: "Rozen Tal at Tone Lab",
    eventinfo: "19a Koryun St, Yerevan 0009",
    type: "Music",
    date: "12/05/23",
    price: 100,
    commission_rate: 100,
  },
];

const CurrentlyRepping = () => {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <h1 className="text-3xl font-medium">Currently Repping</h1>

      <div className="relative shadow-custom p-6 rounded-md w-full overflow-y-auto  bg-blue-box">
        <table className=" text-sm w-full text-left  text-gray-800 ">
          <thead className="text-xs text-[#60769D] uppercase border-b border-[#6F6F6F6B]">
            <tr>
              <th scope="col" className="px-1 py-3">
                Event
              </th>
              <th scope="col" className="px-1 py-3">
                Date
              </th>
              <th scope="col" className="px-1 py-3">
                Tickets sold
              </th>
              <th scope="col" className="px-1 py-3">
                Commission earned
              </th>
              <th scope="col" className="px-1 py-3">
                {" "}
              </th>
              <th scope="col" className="px-1 py-3">
                {" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => {
              return (
                <ReppingTable
                  key={index}
                  id={data.id}
                  event={data.event}
                  eventinfo={data.eventinfo}
                  type={data.type}
                  date={data.date}
                  price={data.price}
                  commission_rate={data.commission_rate}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentlyRepping;
