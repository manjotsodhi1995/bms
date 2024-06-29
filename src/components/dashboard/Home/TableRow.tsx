const TableRow: React.FC<any> = ({
  event,
  eventinfo,

  price,
  totalTicket,
  amount,
  //   stdout,
}) => {
  return (
    <tr className=" border-b border-b-black">
      <th scope="row" className="py-4 font-medium text-gray-900 flex gap-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/6603/a5bf/f482f58968c5e12726e5790d7c654b7b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wn3dqMX4h62rZsLU5lXxauVINmtj1StQMPMGjVeM9tOq-tTF650a~v2qXoW8sYzl~9UBmK4MxUoHBNUzrr3d6pioaUkPEv53RZO2B4KuurbUhBaO2v-l-qfOM2Z8Z8WB5nA7bc1Wo8BHs5MsyHEz9~SRSZD-pRV6j5apDwlgwjab17F740RqA~JpNMvKnjTRL79VIYG5OdIfaHvYrvmVV3KSPJZRLaEgdBT82KVYHghdpdhakG4ZvtcBPiVYU-meO4PFX2CLdUsUspVugAn9wlAm9MuISko-AwomGWXDD6d0wBiv1riUvokQi7MzyEQwAscWTbIOfSmFWcPXc4luSg__"
          alt="random"
          className="size-12 object-cover rounded-md"
        />
        <div>
          <h1 className="font-semibold">{event}</h1>
          <p className="text-xs text-gray-800">{eventinfo}</p>
        </div>
        {/* {event} */}
      </th>
      <td className="px-6 py-4 ">${price}</td>
      <td className="px-6 py-4">{totalTicket}</td>
      <td className="px-6 py-4">${amount}</td>
      {/* {stdout && <td className="px-6 py-4">{stdout}</td>} */}
    </tr>
  );
};

export default TableRow;
