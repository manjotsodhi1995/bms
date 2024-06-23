import TableRow from "./TableRow";

const TableP = () => {
  const data = [
    {
      event: "Rozen Tal at Tone Lab",
      eventinfo: "19a Koryun St, Yerevan 0009",
      price: 100,
      totalTicket: 100,
      amount: 120,
    },
    {
      event: "Rozen Tal at Tone Lab",
      eventinfo: "19a Koryun St, Yerevan 0009",
      price: 100,
      totalTicket: 100,
      amount: 120,
    },
    {
      event: "Rozen Tal at Tone Lab",
      eventinfo: "19a Koryun St, Yerevan 0009",
      price: 100,
      totalTicket: 100,
      amount: 120,
    },
    {
      event: "Rozen Tal at Tone Lab",
      eventinfo: "19a Koryun St, Yerevan 0009",
      price: 100,
      totalTicket: 100,
      amount: 120,
    },
    {
      event: "Rozen Tal at Tone Lab",
      eventinfo: "19a Koryun St, Yerevan 0009",
      price: 100,
      totalTicket: 100,
      amount: 120,
    },
  ];
  //   const [submissions, getSubmissions] = useState<any[]>([]);
  //   const [isLoading, setLoading] = useState<boolean>(false);
  //   useEffect(() => {
  //     const fetchSubmission = async () => {
  //       try {
  //         setLoading(true);
  //         const response = await fetch("api");
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch data");
  //         }
  //         const jsonResponse = await response.json();
  //         getSubmissions(jsonResponse.submissions);
  //         setLoading(false);
  //       } catch (err) {
  //         setLoading(false);
  //         // toast.error("Internal server error");
  //         console.error(err);
  //       }
  //     };
  //     fetchSubmission();
  //   }, []);

  //   if (isLoading) {
  //     return <div className="pt-20 text-xl">Loading...</div>;
  //   }

  return (
    <div className="relative shadow-custom p-6 rounded-md w-full overflow-y-auto  bg-blue-box">
      <table className=" text-sm w-full text-left  text-gray-800 ">
        <thead className="text-xs text-[#60769D] uppercase ">
          <tr>
            <th scope="col" className="px-1 py-3">
              Event
            </th>
            <th scope="col" className="px-1 py-3">
              Date
            </th>
            <th scope="col" className="px-1 py-3">
              Payment amount
            </th>
            <th scope="col" className="px-1 py-3">
              Tickets sold
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
            return (
              <TableRow
                key={index}
                event={data.event}
                eventinfo={data.eventinfo}
                price={data.price}
                totalTicket={data.totalTicket}
                amount={data.amount}
                // stdout={submission.stdout}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableP;
