import { TableCell, TableHead, TableRow } from "@/components/ui/table";

const TicketStructureTable: React.FC<any> = ({
  event,
  eventinfo,
  price,
  commission_rate,
  rep_price,
  commission_applicable,
}) => {
  return (
    <TableRow className="border-none">
      <TableHead
        scope="row"
        className="w-full py-2 font-medium text-gray-900 flex gap-2 h-full"
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/6603/a5bf/f482f58968c5e12726e5790d7c654b7b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wn3dqMX4h62rZsLU5lXxauVINmtj1StQMPMGjVeM9tOq-tTF650a~v2qXoW8sYzl~9UBmK4MxUoHBNUzrr3d6pioaUkPEv53RZO2B4KuurbUhBaO2v-l-qfOM2Z8Z8WB5nA7bc1Wo8BHs5MsyHEz9~SRSZD-pRV6j5apDwlgwjab17F740RqA~JpNMvKnjTRL79VIYG5OdIfaHvYrvmVV3KSPJZRLaEgdBT82KVYHghdpdhakG4ZvtcBPiVYU-meO4PFX2CLdUsUspVugAn9wlAm9MuISko-AwomGWXDD6d0wBiv1riUvokQi7MzyEQwAscWTbIOfSmFWcPXc4luSg__"
          alt="random"
          className="size-14 object-cover rounded-md"
        />
        <div>
          <h1 className="font-semibold">{event}</h1>
          <p className="text-xs text-gray-800 flex items-start gap-1">
            {eventinfo}
          </p>
        </div>
      </TableHead>

      <TableCell className="py-4 px-4">${price}</TableCell>
      <TableCell className="px-6 py-4">${rep_price}</TableCell>
      <TableCell className="px-6 py-4">
        {commission_applicable ? (
          <span>${commission_rate}</span>
        ) : (
          <span className="bg-[#60769D] text-white px-2 py-1 rounded-md">
            not applicable
          </span>
        )}
      </TableCell>
    </TableRow>
  );
};

export default TicketStructureTable;
