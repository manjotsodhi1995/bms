import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import axios from "axios";

const fetchUpcomingEvents = async () => {
  try {
    const response = await axios.get(
      `https://api.kafsco.com/api/v1/events/upcoming-events?city=Dublin`
    );
    const events = response.data.data;
    const today = dayjs();

    const highlightedDates = {
      bookedDates: events
        .filter((event: any) => event.isBooked)
        .map((event: any) =>
          dayjs(`${event.year}-${event.month}-${event.day}`)
        ),
      likedDates: events
        .filter((event: any) => event.isLiked)
        .map((event: any) =>
          dayjs(`${event.year}-${event.month}-${event.day}`)
        ),
      todayDate: today,
    };

    return highlightedDates;
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    return {
      bookedDates: [],
      likedDates: [],
      todayDate: dayjs(),
    };
  }
};

function ServerDay(
  props: PickersDayProps<Dayjs> & {
    highlightedDays?: {
      bookedDates: Dayjs[];
      likedDates: Dayjs[];
      todayDate: Dayjs;
    };
  }
) {
  const {
    highlightedDays = { bookedDates: [], likedDates: [], todayDate: dayjs() },
    day,
    outsideCurrentMonth,
    ...other
  } = props;

  const isBooked =
    !outsideCurrentMonth &&
    highlightedDays.bookedDates.some((date) => date.isSame(day, "day"));

  const isLiked =
    !outsideCurrentMonth &&
    highlightedDays.likedDates.some((date) => date.isSame(day, "day"));

  return (
    <PickersDay
      {...other}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
      sx={{
        backgroundColor: isBooked ? "purple" : isLiked ? "#677497" : undefined,
        color: isBooked || isLiked ? "white" : undefined,
        "&:hover": {
          backgroundColor: isBooked
            ? "purple"
            : isLiked
            ? "#677497"
            : undefined,
        },
      }}
    />
  );
}

export function Calender() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState<{
    bookedDates: Dayjs[];
    likedDates: Dayjs[];
    todayDate: Dayjs;
  }>({
    bookedDates: [],
    likedDates: [],
    todayDate: dayjs(),
  });

  React.useEffect(() => {
    setIsLoading(true);

    fetchUpcomingEvents().then((highlightedDates) => {
      setHighlightedDays(highlightedDates);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="bg-white border-2  rounded-3xl flex items-center flex-col p-4">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{ margin: "0px" }}
          loading={isLoading}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            } as any,
          }}
        />
        <div className="flex justify-center gap-14 pb-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#677497]"></div>
            <div className="text-sm">Liked</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#700f71]"></div>
            <div className="text-sm">Purchased</div>
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
}
