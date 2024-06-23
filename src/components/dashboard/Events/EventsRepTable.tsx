import { MapPin } from "lucide-react";

const EventsRepTable: React.FC<any> = ({
  event,
  eventinfo,
  type,
  date,
  price,
  commission_rate,
}) => {
  return (
    <tr className="  ">
      <th scope="row" className=" py-4  font-medium text-gray-900 flex gap-2 ">
        <img
          src="https://s3-alpha-sig.figma.com/img/6603/a5bf/f482f58968c5e12726e5790d7c654b7b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wn3dqMX4h62rZsLU5lXxauVINmtj1StQMPMGjVeM9tOq-tTF650a~v2qXoW8sYzl~9UBmK4MxUoHBNUzrr3d6pioaUkPEv53RZO2B4KuurbUhBaO2v-l-qfOM2Z8Z8WB5nA7bc1Wo8BHs5MsyHEz9~SRSZD-pRV6j5apDwlgwjab17F740RqA~JpNMvKnjTRL79VIYG5OdIfaHvYrvmVV3KSPJZRLaEgdBT82KVYHghdpdhakG4ZvtcBPiVYU-meO4PFX2CLdUsUspVugAn9wlAm9MuISko-AwomGWXDD6d0wBiv1riUvokQi7MzyEQwAscWTbIOfSmFWcPXc4luSg__"
          alt="random"
          className="size-14 object-cover rounded-md"
        />
        <div>
          <span className="border border-black px-2 rounded-full py-1">
            {type}
          </span>
          <h1 className=" font-semibold mt-2">{event}</h1>
          <p className="text-xs text-gray-800 flex items-start gap-1">
            <MapPin className="size-3" />
            {eventinfo}
          </p>
        </div>
      </th>
      <td className="py-4 ">{date}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">${commission_rate}</td>
      <td>
        <button className="bg-[#60769D] text-white px-2 py-1 rounded-md">
          Full details
        </button>
      </td>
      <td>
        <button className="bg-[#A05C8A] text-white px-2 py-1 rounded-md">
          Rep this event
        </button>
      </td>
    </tr>
  );
};

export default EventsRepTable;
