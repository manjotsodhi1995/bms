import BarChartHome from "./Charts/BarChart";
import AreaChartHome from "./Charts/AreaChart";
import Payouts from "./Home/Payouts";
import TicketSold from "./Home/TicketSold";
import CurrentlyEvent from "./Home/CurrentlyEvent";

const Home = () => {
  const dummyData = [
    { name: "Category 1", value: 10 },
    { name: "Category 2", value: 50 },
    { name: "Category 3", value: 30 },
    { name: "Category 4", value: 40 },
    { name: "Category 5", value: 10 },
    { name: "Category 6", value: 70 },
    { name: "Category 6", value: 90 },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 2xl:gap-4">
      <BarChartHome data={dummyData} />
      <AreaChartHome data={dummyData} />
      <AreaChartHome data={dummyData} />

      <Payouts />
      <TicketSold />
      <CurrentlyEvent />
      {/* <DTable /> */}
    </div>
  );
};

export default Home;
