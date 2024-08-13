import { useSearchParams } from "react-router-dom";
import EventCard from "../components/EventCard";
// import { useStore } from "@/hooks/useStore";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
// import { data } from "@/utils/stories";
import axios from "@/utils/middleware";
function SearchPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  const fetchEvents = async () => {
    const response = await axios.get(
      `https://kafsbackend-106f.onrender.com/api/v1/events/fetch?city=Dublin&title=${title}`
    );
    return response.data.data.upcomingEvents;
  };

  const { data: events } = useQuery({
    queryKey: ["searchEvents", title],
    queryFn: fetchEvents,
    enabled: !!title,
  });

  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] min-h-[80vh]">
      <div className="font-medium flex gap-2 items-center">
        See all results for {`"${title}"`}
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7806 8.53061L11.0306 15.2806C10.8899 15.4213 10.699 15.5004 10.5 15.5004C10.301 15.5004 10.1101 15.4213 9.96937 15.2806C9.82864 15.1399 9.74958 14.949 9.74958 14.75C9.74958 14.551 9.82864 14.3601 9.96937 14.2194L15.4397 8.74999H0.75C0.551088 8.74999 0.360322 8.67097 0.21967 8.53032C0.0790178 8.38967 0 8.1989 0 7.99999C0 7.80108 0.0790178 7.61031 0.21967 7.46966C0.360322 7.32901 0.551088 7.24999 0.75 7.24999H15.4397L9.96937 1.78061C9.82864 1.63988 9.74958 1.44901 9.74958 1.24999C9.74958 1.05097 9.82864 0.860095 9.96937 0.719365C10.1101 0.578634 10.301 0.499573 10.5 0.499573C10.699 0.499573 10.8899 0.578634 11.0306 0.719365L17.7806 7.46936C17.8504 7.53902 17.9057 7.62174 17.9434 7.71278C17.9812 7.80383 18.0006 7.90143 18.0006 7.99999C18.0006 8.09855 17.9812 8.19615 17.9434 8.2872C17.9057 8.37824 17.8504 8.46096 17.7806 8.53061Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-2 pb-10">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem] flex items-center gap-4">
            <Link to="/filter">
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M14.6663 3.8335H7.16634M9.66634 12.1668H2.16634M9.66634 12.1668C9.66634 13.5475 10.7856 14.6668 12.1663 14.6668C13.5471 14.6668 14.6663 13.5475 14.6663 12.1668C14.6663 10.7861 13.5471 9.66683 12.1663 9.66683C10.7856 9.66683 9.66634 10.7861 9.66634 12.1668ZM6.33301 3.8335C6.33301 5.21421 5.21372 6.3335 3.83301 6.3335C2.4523 6.3335 1.33301 5.21421 1.33301 3.8335C1.33301 2.45278 2.4523 1.3335 3.83301 1.3335C5.21372 1.3335 6.33301 2.45278 6.33301 3.8335Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Link>
            Events
          </div>
        </div>
        <div className="justify-center w-full grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {events &&
            events.map((event: any, index: any) => (
              <EventCard key={index} {...event} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
