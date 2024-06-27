import { FollowingTable } from "@/components/dashboard/Following/FollowingTable";
import HomeContainerCard from "@/components/dashboard/HomeContainerCard";
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

const FollowingPage = () => {
  const data = [
    { name: "Repped organizer", value: 400, color: "#964B7D" },
    { name: "Following organizer", value: 600, color: "#60769D" },
  ];

  const LegendText = (value: string, _entry: any) => (
    <span
      style={{
        color: "#596579",
        fontWeight: 500,
        padding: "10px",
      }}
    >
      {value}
    </span>
  );

  return (
    <div className="flex flex-col gap-6 p-2 md:p-10">
      <div className="flex flex-col  md:flex-row gap-4 md:gap-6">
        <HomeContainerCard className="h-full min-w-[30vw] p-4 md:p-14">
          <div className="flex flex-col w-full h-full items-center gap-20">
            <p className="text-2xl lg:text-4xl">Following organizers count</p>
            <span className="font-semibold text-4xl lg:text-6xl">432</span>
          </div>
        </HomeContainerCard>

        <HomeContainerCard className="min-w-[35vw] h-full p-4 md:p-14">
          <span className="text-xl font-medium text-center">Total Revenue</span>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Legend
                height={36}
                iconType="circle"
                layout="vertical"
                verticalAlign="middle"
                align="right"
                iconSize={10}
                className="ml-4"
                formatter={LegendText}
              />
              <Pie
                data={data}
                innerRadius="60%"
                dataKey="value"
                outerRadius="100%"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="" />
                ))}
                <Label
                  width={30}
                  position="center"
                  className="text-lg font-semibold"
                  fill="black"
                >
                  $564.00
                </Label>
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </HomeContainerCard>

        {/* Table */}
      </div>
      <div className="relative shadow-custom p-6 rounded-md w-full overflow-y-auto  bg-blue-box">
        <FollowingTable />
      </div>
    </div>
  );
};

export default FollowingPage;
// <div className="flex grow flex-col text-lg font-medium">
//     Total Revenue
//     <div>
//         {data.map((entry) => (
//             <p className="flex gap-1 items-center">
//                 <span
//                     className="size-3 rounded-full"
//                     style={{
//                         backgroundColor: entry.color,
//                     }}
//                 />
//                 <span>{entry.name}</span>
//             </p>
//         ))}
//     </div>
// </div>
