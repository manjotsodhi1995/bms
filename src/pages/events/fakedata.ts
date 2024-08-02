import { EventType } from "@/stores/event";

const data = {
  venueAddress: {
    name: "IICC Dwarka - Godrej",
    city: "New Delhi",
    country: "India",
    zipcode: "110011",
  },
  venueLocation: {
    type: "Point",
    coordinates: ["77.0403003", "28.5488667"],
  },
  _id: "666f259d14116a6cced20b70",
  title: "India Health Expo August",
  organizer: {
    logoUrl: "",
    _id: "66488105413dec3b01552752",
    name: "My Test Organization",
  },
  eventCategories: [
    {
      _id: "6641ba8b3e5581b77253fb1a",
      categoryName: "Health",
    },
  ],
  genres: ["Health"],
  description:
    "The Indian healthcare sector is growing at a brisk pace due to its increasing coverage and expenditure as well as improved services by public and private players. \n\n India’s competitive advantage lies in its large pool of well-trained medical professionals, and is competitive in cost compared to its peers in Asian and Western countries. The cost of surgery in India is about one-tenth of that in the USA or Western Europe. \n\n India Health will offer a full-scale exhibition hosting more than 300 exhibitors with official country pavilions including the USA, Germany, South Africa, Korea, Taiwan, China and Poland. The show will be complimented by a robust 3-day educational programme in support of the country’s healthcare strategy, well-tailored by leading local associations and covering topics including imaging and diagnostics, PPP, primary care and more.",
  slug: "india_health_expo_august_1718560157",
  posterUrl:
    "https://kafscowavedevassets.s3.eu-west-1.amazonaws.com/1718371594068-event.jpeg",
  trailerUrls: [],
  timezone: "IST",
  eventStart: "2024-06-14",
  eventEnd: "2024-06-29",
  eventSchedule: [
    {
      startDate: "2024-06-14",
      endDate: "2024-06-29",
      startTime: "10:00",
      endTime: "13:00",
      byDay: [],
      byMonth: [],
      byMonthWeek: [],
      scheduleTimezone: "Asia/Calcutta",
      _id: "666f259d14116a6cced20b71",
    },
  ],
  eventMode: "offline",
  shareUrl: "https://kafsco.com/events/india_health_expo_august_1718560157",
} satisfies EventType;

export const fakeEventData = Array.from({ length: 20 }, () => ({
  ...data,
}));
