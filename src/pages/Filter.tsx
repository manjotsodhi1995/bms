import { useStore } from "@/hooks/useStore";
import EventCard from "../components/EventCard";
import { useQuery } from "@tanstack/react-query";
import Calendar from "react-calendar";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import axios from "@/utils/middleware";
import FilterAccordian from "../components/FilterAccordian";

interface DayResult {
  liveEvents: Event[];
  upcomingEvents: Event[];
}

interface Filters {
  day: string[];
  pricing: string[];
  category: string[];
}

function Filter() {
  const {
    root: { event },
  } = useStore();
  const fetchEvents = async () => {
    await event.fetchEvents();
  };

  const [filters, setFilters] = useState<Filters>({
    day: [],
    pricing: [],
    category: [],
  });

  console.log(filters.category);

  const [dayResult, setDayResult] = useState<DayResult>({
    liveEvents: [],
    upcomingEvents: [],
  });

  const [categories, setCategories] = useState<any[]>([]);

  console.log(categories);

  const fetchCategory = async () => {
    try {
      const res = await axios.get(
        `https://kafsbackend-106f.onrender.com/api/v1/categories/getallcategories`
      );
      setCategories(res.data.data);
    } catch (error) {
      console.log("Error fetching categories", error);
    }
  };

  const fetchData = async () => {
    const dayParam =
      filters.day.length > 0 ? `day=${filters.day.join("&day=")}` : "";

    const pricingQuery =
      filters.pricing.length > 0
        ? `pricing=${filters.pricing.join("&pricing=")}`
        : "";

    const categoryQuery =
      filters.category.length > 0
        ? filters.category.map((id: string) => `category=${id}`).join("&")
        : "";

    try {
      const response = await axios.get(
        `https://kafsbackend-106f.onrender.com/api/v1/events/fetch?city=Dublin${
          dayParam ? `&${dayParam}` : ""
        }${pricingQuery ? `&${pricingQuery}` : ""}${
          categoryQuery ? `&${categoryQuery}` : ""
        }`
      );

      setDayResult({
        liveEvents: response.data.data.liveEvents,
        upcomingEvents: response.data.data.upcomingEvents,
      });
    } catch (error) {
      console.log("Error while fetching", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  useEffect(() => {
    fetchData();
  }, [filters]);

  const { data: _ } = useQuery({
    queryKey: ["filterEvents"],
    queryFn: fetchEvents,
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const toggleCalendar = () => setCalendarOpen((p) => !p);

  return (
    <div className="lg:pr-[5%] xl:pr-[7%] pr-[0vw] flex md:gap-2 2xl:gap-10 flex-col sm:flex-row text-lg">
      <div className="z-10 md:w-[25rem] w-[100vw] flex flex-col mt-[50px] pt-[40px] h-[1005] rounded-r-xl backdrop-blur-2xl max-sm:p-4 sm:ml-1 sm:pl-2 bg-white/10 border-r border-t border-b border-white/20 shadow-lg">
        {" "}
        <div className="border-gray-400 border-b mb-[30px] pl-[30px] ">
          <h2 className="text-xl font-medium mt-[10px] mb-[20px]">
            Filter By:
          </h2>
        </div>
        <div>
          <FilterAccordian
            categories={categories}
            setFilters={setFilters}
            filters={filters}
          />
        </div>
        <div className="hidden sm:block border-gray-400 border-b space-y-3 mb-[50px] pl-[30px]">
          <p className="flex items-center w-full gap-2 mb-[20px] relative">
            <h3 className="font-medium text-xl">Day</h3>
            <CalendarIcon className="size-5" onClick={toggleCalendar} />
          </p>
          {calendarOpen && (
            <Calendar className="absolute !w-[100vw] md:!w-[25vw] 2xl:text-xl" />
          )}
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                checked={filters.day.includes("Today")}
                onChange={(e) => {
                  setFilters((prev: any) => {
                    const updatedDay = e.target.checked
                      ? [...prev.day, "Today"]
                      : prev.day.filter((day: any) => day !== "Today");

                    return {
                      ...prev,
                      day: updatedDay,
                    };
                  });
                }}
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Today</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                checked={filters.day.includes("Tomorrow")}
                onChange={(e) => {
                  setFilters((prev: any) => {
                    const updatedDay = e.target.checked
                      ? [...prev.day, "Tomorrow"]
                      : prev.day.filter((day: any) => day !== "Tomorrow");

                    return {
                      ...prev,
                      day: updatedDay,
                    };
                  });
                }}
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Tommorow</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                checked={filters.day.includes("ThisWeek")}
                onChange={(e) => {
                  setFilters((prev: any) => {
                    const updatedDay = e.target.checked
                      ? [...prev.day, "ThisWeek"]
                      : prev.day.filter((day: any) => day !== "ThisWeek");

                    return {
                      ...prev,
                      day: updatedDay,
                    };
                  });
                }}
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>This Week</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex mb-[20px]">
              <input
                type="checkbox"
                checked={filters.day.includes("ThisMonth")}
                onChange={(e) => {
                  setFilters((prev: any) => {
                    const updatedDay = e.target.checked
                      ? [...prev.day, "ThisMonth"]
                      : prev.day.filter((day: any) => day !== "ThisMonth");

                    return {
                      ...prev,
                      day: updatedDay,
                    };
                  });
                }}
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>This Month</h2>
            </div>
          </div>
        </div>
        <div className="hidden sm:block border-gray-400 border-b space-y-3 mb-[50px] pl-[30px]">
          <h3 className="font-medium mb-[20px] text-xl">Pricing</h3>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex">
              <input
                type="checkbox"
                checked={filters.pricing.includes("Free")}
                onChange={(e) => {
                  setFilters((prev: any) => {
                    const updatedPricing = e.target.checked
                      ? [...prev.pricing, "Free"]
                      : prev.pricing.filter((day: any) => day !== "Free");

                    return {
                      ...prev,
                      pricing: updatedPricing,
                    };
                  });
                }}
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Free</h2>
            </div>
          </div>
          <div className="max-sm:text-sm flex justify-between w-[200px]">
            <div className="flex mb-[20px]">
              <input
                type="checkbox"
                checked={filters.pricing.includes("Paid")}
                onChange={(e) => {
                  setFilters((prev: any) => {
                    const updatedPricing = e.target.checked
                      ? [...prev.pricing, "Paid"]
                      : prev.pricing.filter((day: any) => day !== "Paid");

                    return {
                      ...prev,
                      pricing: updatedPricing,
                    };
                  });
                }}
                className="mr-[10px] w-[17px] border-black"
              />
              <h2>Paid</h2>
            </div>
          </div>
        </div>
        <div className="hidden sm:block border-gray-400 border-b space-y-3 mb-[50px] pl-[30px]">
          <h3 className="font-medium mb-[20px] text-xl">Categories</h3>
          <div className="max-sm:text-sm flex space-y-3 flex-col justify-between w-[200px]">
            {categories.map((data: any) => (
              <div className="flex" key={data.categoryId}>
                <input
                  type="checkbox"
                  value={data.categoryId}
                  onChange={(e) => {
                    setFilters((prev: any) => {
                      const updatedCategory = e.target.checked
                        ? [...prev.category, e.target.value]
                        : prev.category.filter(
                            (categoryId: any) => categoryId !== e.target.value
                          );

                      return {
                        ...prev,
                        category: updatedCategory,
                      };
                    });
                  }}
                  className="mr-[10px] w-[17px] border-black"
                />
                <h2>{data.categoryName}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full md:ml-4 mt-14">
        {" "}
        <div className="flex justify-center items-center sm:justify-normal">
          <div className="font-medium text-[1.4rem]">Events</div>
        </div>
        <div className="flex flex-wrap gap-6 md:gap-6 md:justify-start justify-center">
          {dayResult.liveEvents.length > 0 ||
          dayResult.upcomingEvents.length > 0 ? (
            <>
              {dayResult.liveEvents.map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
              {dayResult.upcomingEvents.map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </>
          ) : (
            <div className="max-sm:text-center">No events found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
