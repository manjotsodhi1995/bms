import HomeContainerCard from "@/components/dashboard/HomeContainerCard";
import { useParams } from "react-router-dom";
import { fakeEventData } from "@/pages/events/fakedata";
import { useMemo } from "react";
import { formatDate } from "@/utils";
import { Avatar } from "@mui/material";
import TicketStructureTable from "@/components/dashboard/Events/TicketStructureTable";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const EventDetailPage = () => {
  const { eventId: _ } = useParams();
  const data = fakeEventData[0];

  const date = useMemo(() => {
    if (!data) return "Sat, Jun 12 - June 13 19:00";

    let start = formatDate(new Date(data.eventStart));
    let end = formatDate(new Date(data.eventEnd));

    return `${start} - ${end}`;
  }, [data]);

  return (
    <div className="flex w-full flex-col gap-10">
      <HomeContainerCard className="h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-14 p-8">
          <img
            src={data.posterUrl}
            className="w-full aspect-video rounded-b-xl object-fit"
          />

          <div className="flex flex-col gap-4">
            <span className="w-fit border border-black px-2 rounded-full py-1">
              {data.eventCategories[0].categoryName}
            </span>
            <span>{data.title}</span>
            <div className="flex flex-col gap-2 max-w-xl">
              <div className="flex items-center gap-4">
                <div>
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-[1.3rem]">
                    {data?.venueAddress.name}
                  </div>
                  <div className="text-gray-700">
                    {" "}
                    {data?.venueAddress.city},{data?.venueAddress.country},
                    {data?.venueAddress.zipcode}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 2H14.25V1.25C14.25 1.05109 14.171 0.860322 14.0303 0.71967C13.8897 0.579018 13.6989 0.5 13.5 0.5C13.3011 0.5 13.1103 0.579018 12.9697 0.71967C12.829 0.860322 12.75 1.05109 12.75 1.25V2H5.25V1.25C5.25 1.05109 5.17098 0.860322 5.03033 0.71967C4.88968 0.579018 4.69891 0.5 4.5 0.5C4.30109 0.5 4.11032 0.579018 3.96967 0.71967C3.82902 0.860322 3.75 1.05109 3.75 1.25V2H1.5C1.10218 2 0.720644 2.15804 0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5V18.5C0 18.8978 0.158035 19.2794 0.43934 19.5607C0.720644 19.842 1.10218 20 1.5 20H16.5C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2794 18 18.8978 18 18.5V3.5C18 3.10218 17.842 2.72064 17.5607 2.43934C17.2794 2.15804 16.8978 2 16.5 2ZM3.75 3.5V4.25C3.75 4.44891 3.82902 4.63968 3.96967 4.78033C4.11032 4.92098 4.30109 5 4.5 5C4.69891 5 4.88968 4.92098 5.03033 4.78033C5.17098 4.63968 5.25 4.44891 5.25 4.25V3.5H12.75V4.25C12.75 4.44891 12.829 4.63968 12.9697 4.78033C13.1103 4.92098 13.3011 5 13.5 5C13.6989 5 13.8897 4.92098 14.0303 4.78033C14.171 4.63968 14.25 4.44891 14.25 4.25V3.5H16.5V6.5H1.5V3.5H3.75ZM16.5 18.5H1.5V8H16.5V18.5Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text-gray-700">{date}</div>
              </div>
              <span className="font-medium text-[1.3rem]">
                Ticket price: 140$
              </span>

              <button className="flex items-center justify-center gap-2 bg-black w-full text-white py-2 px-4 rounded-xl">
                Rep this event{" "}
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.875 3H0.625C0.45924 3 0.300269 3.06585 0.183058 3.18306C0.0658481 3.30027 0 3.45924 0 3.625V14.875C0 15.0408 0.0658481 15.1997 0.183058 15.3169C0.300269 15.4342 0.45924 15.5 0.625 15.5H11.875C12.0408 15.5 12.1997 15.4342 12.3169 15.3169C12.4342 15.1997 12.5 15.0408 12.5 14.875V3.625C12.5 3.45924 12.4342 3.30027 12.3169 3.18306C12.1997 3.06585 12.0408 3 11.875 3ZM11.25 14.25H1.25V4.25H11.25V14.25ZM15 1.125V12.375C15 12.5408 14.9342 12.6997 14.8169 12.8169C14.6997 12.9342 14.5408 13 14.375 13C14.2092 13 14.0503 12.9342 13.9331 12.8169C13.8158 12.6997 13.75 12.5408 13.75 12.375V1.75H3.125C2.95924 1.75 2.80027 1.68415 2.68306 1.56694C2.56585 1.44973 2.5 1.29076 2.5 1.125C2.5 0.95924 2.56585 0.800269 2.68306 0.683058C2.80027 0.565848 2.95924 0.5 3.125 0.5H14.375C14.5408 0.5 14.6997 0.565848 14.8169 0.683058C14.9342 0.800269 15 0.95924 15 1.125Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </HomeContainerCard>

      <div className="grid w-full grid-cols-1 md:grid-cols-[42%_56%] gap-6 justify-between">
        <HomeContainerCard className="flex w-full flex-col h-full justify-between p-14">
          <p className="font-medium text-xl">Comission Earned</p>
          <span className="text-[#60769D] font-[700] text-4xl">$4300</span>
        </HomeContainerCard>
        <HomeContainerCard className="flex-row items-center h-full p-14 justify-between">
          <div className="space-y-6">
            <p className="font-medium text-xl">Organised by:</p>
            <div className="flex items-center gap-4 font-[600] text-xl text-[#60769D]">
              <Avatar
                src="https://s3-alpha-sig.figma.com/img/ba88/eb7b/4357ccf260ffcb69e9a74820541e8969?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XD00Jhbejlq8qAkPpqIC8x0sSWyQGJNhy0-fwurcyP~ZmCE1BGu51nBT~TwaIHunrZMCqPXpRuT6eY3EES18vJnp3sdjodYvuck9M~i7~Cxr8CWPZR69xpryT2T8dxN8K04rnvOZOlVpd~zlDMWQynNmWJrjhgXcnMwaG60x7f~i0EP9JKj8ScUJ9lHfaju~g~lqlIZRXglOs1JhuJV1S-1gFsks-nCptwqeRnWhU6pnwaVQ1iEIxjRiRUrM7gXXy4JOROJNKvXT2yfOKSwX1EGKzKjzs6GHrQzpIT9jTelvoTNLjSp3ni3rzweHp4Gh5fuF5sqrJ~5BEbeCrpWVgw__"
                sx={{
                  borderRadius: 0,
                }}
              />
              Brooklyn Simmons
            </div>
          </div>

          <button className="flex items-center justify-center bg-black w-fit h-fit text-white py-2 px-4 rounded-xl">
            Follow
          </button>
        </HomeContainerCard>
      </div>
      <TicketTable />
    </div>
  );
};
const TicketTable = () => {
  const data = [
    {
      id: "event-id",
      event: "Rozen Tal at Tone Lab",
      eventinfo: "19a Koryun St, Yerevan 0009",
      type: "Comedy",
      date: "12/05/23",
      price: 100,
      commission_rate: 100,
      rep_price: 134,
    },
    {
      id: "event-id",
      event: "Rozen Tal at Tone Lab",
      eventinfo: "19a Koryun St, Yerevan 0009",
      type: "Sport",
      date: "12/05/23",
      price: 100,
      commission_rate: 100,
      rep_price: 134,
    },
    {
      id: "event-id",
      event: "Rozen Tal at Tone Lab",
      eventinfo: "19a Koryun St, Yerevan 0009",
      type: "Movie",
      date: "12/05/23",
      price: 100,
      commission_rate: 100,
      rep_price: 134,
    },
    {
      id: "event-id",
      event: "Rozen Tal at Tone Lab",
      eventinfo: "19a Koryun St, Yerevan 0009",
      type: "Music",
      date: "12/05/23",
      price: 100,
      commission_rate: 100,
      rep_price: 134,
    },
  ];

  return (
    <div className="relative shadow-custom py-12 px-8 rounded-md w-full bg-blue-box">
      <Table>
        <TableHeader className="text-lg">
          <TableRow className="border-none">
            <TableHead className="w-2/4 text-[#60769D]">Ticket</TableHead>
            <TableHead className="text-[#60769D]">Ticket Price</TableHead>
            <TableHead className="text-[#60769D]">Rep price</TableHead>
            <TableHead className="text-[#60769D]">Commission</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, index) => {
            return (
              <TicketStructureTable
                key={index}
                id={data.id}
                event={data.event}
                eventinfo={data.eventinfo}
                price={data.price}
                rep_price={data.rep_price}
                commission_rate={data.commission_rate}
                commission_applicable={index !== 0}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default EventDetailPage;
