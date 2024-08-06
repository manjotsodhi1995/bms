const svg = (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.75 1.25C5.75 1.05109 5.67098 0.860321 5.53033 0.719669C5.38968 0.579018 5.19891 0.5 5 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.939341C0.658035 1.22064 0.5 1.60217 0.5 2L0.5 20C0.5 20.3978 0.658035 20.7794 0.93934 21.0607C1.22064 21.342 1.60218 21.5 2 21.5H5C5.19891 21.5 5.38968 21.421 5.53033 21.2803C5.67098 21.1397 5.75 20.9489 5.75 20.75C5.75 20.1533 5.98705 19.581 6.40901 19.159C6.83097 18.7371 7.40326 18.5 8 18.5C8.59674 18.5 9.16903 18.7371 9.59099 19.159C10.0129 19.581 10.25 20.1533 10.25 20.75C10.25 20.9489 10.329 21.1397 10.4697 21.2803C10.6103 21.421 10.8011 21.5 11 21.5H14C14.3978 21.5 14.7794 21.342 15.0607 21.0607C15.342 20.7794 15.5 20.3978 15.5 20L15.5 2C15.5 1.60217 15.342 1.22064 15.0607 0.939341C14.7794 0.658035 14.3978 0.5 14 0.5H11C10.8011 0.5 10.6103 0.579018 10.4697 0.719669C10.329 0.860321 10.25 1.05109 10.25 1.25C10.25 1.84674 10.0129 2.41903 9.59099 2.84099C9.16903 3.26295 8.59674 3.5 8 3.5C7.40326 3.5 6.83097 3.26295 6.40901 2.84099C5.98705 2.41903 5.75 1.84674 5.75 1.25ZM11.675 20C11.5029 19.1523 11.043 18.3901 10.3732 17.8427C9.70343 17.2953 8.86502 16.9962 8 16.9962C7.13498 16.9962 6.29657 17.2953 5.62681 17.8427C4.95705 18.3901 4.49714 19.1523 4.325 20H2L2 14.75H14V20H11.675ZM11.675 2H14L14 13.25H2L2 2H4.325C4.49714 2.84772 4.95705 3.60986 5.62681 4.15728C6.29657 4.70471 7.13498 5.00376 8 5.00376C8.86502 5.00376 9.70343 4.70471 10.3732 4.15728C11.043 3.60986 11.5029 2.84772 11.675 2Z"
        fill="none" // Set fill to none to remove any fill color
        stroke="black" // Set stroke to black to make the border black
      ></path>
    </svg>
  );

const upcomingEventsData = [
  {
    month: "Jun",
    date: "12",
    title: "Hurts live in yerevan",
    ticket: svg,
  },
  {
    month: "Jun",
    date: "12",
    title: "Ninze - dens N05 by RAMBALKOSHE",
    ticket: "",
  },
  {
    month: "Jun",
    date: "12",
    title: "Mike Cole Live at the Venue",
    ticket: svg,
  },
  {
    month: "Jun",
    date: "12",
    title: "Ninze - dens N05 by RAMBALKOSHE",
    ticket: "",
  },
  {
    month: "Jun",
    date: "12",
    title: "Mike Cole Live at the Venue",
    ticket: "",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-white rounded-3xl space-y-2 pb-4">
      <h1 className="px-6 py-4 font-semibold">Upcoming events</h1>
      {upcomingEventsData.map((data, index) => (
        <RowComponent
          key={index}
          month={data.month}
          date={data.date}
          title={data.title}
          ticket={data.ticket}
        />
      ))}
    </div>
  );
};

export default UpcomingEvents;

const RowComponent = ({ month, date, title, ticket }: any) => {
  return (
    <div>
      <div className="grid grid-cols-6 items-center font-medium px-4">
        <div className="col-span-1">
          <p className="text-sm text-center">{month}</p>
          <p className="text-2xl text-center font-semibold">{date}</p>
        </div>
        <div className="text-sm col-span-4 ml-2">{title}</div>
        <div className="col-span-1 ml-6">{ticket}</div>
      </div>
    </div>
  );
};
