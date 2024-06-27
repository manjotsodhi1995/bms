import EventOrganizersTable from "@/components/dashboard/Events/EventOrganizersTable";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "wkfjhi2h32ihi24hnit342",
    user: {
      email: "jackson.graham@example.com",
      name: "Brooklyn Simmons",
    },
    total_events_organized: 45,
    ticket_price: 190,
    commission_rate: 190,
    revenue: 134,
  },
  {
    id: "wkfjhi2h32ihi24hnit342",
    user: {
      email: "jackson.graham@example.com",
      name: "Brooklyn Simmons",
    },
    total_events_organized: 45,
    ticket_price: 190,
    commission_rate: 190,
    revenue: 134,
  },
  {
    id: "wkfjhi2h32ihi24hnit342",
    user: {
      email: "jackson.graham@example.com",
      name: "Brooklyn Simmons",
    },
    total_events_organized: 45,
    ticket_price: 190,
    commission_rate: 190,
    revenue: 134,
  },
  {
    id: "wkfjhi2h32ihi24hnit342",
    user: {
      email: "jackson.graham@example.com",
      name: "Brooklyn Simmons",
    },
    total_events_organized: 45,
    ticket_price: 190,
    commission_rate: 190,
    revenue: 134,
  },
  {
    id: "wkfjhi2h32ihi24hnit342",
    user: {
      email: "jackson.graham@example.com",
      name: "Brooklyn Simmons",
    },
    total_events_organized: 45,
    ticket_price: 190,
    commission_rate: 190,
    revenue: 134,
  },
];

const AvailableToRepOrganizer = () => {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <h1 className="text-3xl font-medium">Available to REP</h1>

      <div className="relative shadow-custom py-12 px-8 rounded-md w-full bg-blue-box">
        <Table>
          <TableHeader className="text-lg">
            <TableRow className="border-none">
              <TableHead className="w-2/4 text-[#60769D]">Event</TableHead>
              <TableHead className="text-[#60769D]">
                Total events organized
              </TableHead>
              <TableHead className="text-[#60769D]">Ticket price</TableHead>
              <TableHead className="text-[#60769D]">
                Commission per ticket
              </TableHead>
              <TableHead className="text-[#60769D]">Revenue</TableHead>
              <TableHead />
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, index) => {
              return (
                <EventOrganizersTable
                  key={index}
                  id={data.id}
                  user={data.user}
                  total_events_organized={data.total_events_organized}
                  ticket_price={data.ticket_price}
                  commission_rate={data.commission_rate}
                  revenue={data.revenue}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AvailableToRepOrganizer;
