import { AreaChart, Area, Tooltip } from "recharts";

type ArCharPayoutProps = {
  color: string;
};
const ArCharPayout = ({ color }: ArCharPayoutProps) => {
  const data = [
    {
      name: "Page A",
      value: 400,
    },
    {
      name: "Page B",
      value: 3000,
    },
    {
      name: "Page C",
      value: 2000,
    },
    {
      name: "Page D",
      value: 2780,
    },
  ];
  return (
    <div className="flex rounded-md justify-between items-center h-[220px] bg-blue-box rounded-xl shadow-xl w-full p-6">
      <div className="flex flex-col h-full justify-between">
        <p className="text-sm">Total ticket Sold</p>
        <p className="font-bold text-3xl text-[#60769D]">$43,000</p>

        <p className="text-sm">All past events</p>
      </div>
      <AreaChart
        width={260}
        height={120}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" />
        <YAxis /> */}
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke={color} fill={color} />
      </AreaChart>
    </div>
  );
};

export default ArCharPayout;
