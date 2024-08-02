import { makeObservable, action } from "mobx";
import axios from "../utils/middleware";
import { Root } from "./root";
import { iRoot } from "./root";
import { API } from "@/api";

export type EventType = {
  venueAddress: {
    name: string;
    city: string;
    country: string;
    zipcode: string;
  };
  venueLocation: {
    type: string;
    coordinates: [string, string];
  };
  _id: string;
  title: string;

  organizer: {
    _id: string;
    name: string;
    logoUrl: string;
  };
  eventCategories: [
    {
      _id: string;
      categoryName: string;
    }
  ];
  genres: string[];
  description: string;
  slug: string;
  posterUrl: string;
  trailerUrls: [];
  timezone: string;
  eventStart: string;
  eventEnd: string;
  eventSchedule: [
    {
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
      byDay: [];
      byMonth: [];
      byMonthWeek: [];
      scheduleTimezone: string;
      _id: string;
    }
  ];
  eventMode: string;
  shareUrl: string;
  ageRestriction?: string;
  [key: string]: any;
};

export interface FetchEventsResponse {
  currentCity: string;
  liveEvents: EventType[];
  nearestEventCity: string;
  trendingCategories: any[];
  upcomingEvents: EventType[];
}
export class Event {
  root: iRoot;
  liveEvents: EventType[] = [];
  upcomingEvents: EventType[] = [];
  trendingCategories: any[] = [];
  currentCity: string = "";
  nearestCity: string = "";
  constructor(root: Root) {
    makeObservable(this, {
      fetchEvents: action,
    });
    this.root = root;
  }
  async fetchEvents(location: string = "Dublin") {
    try {
      if (location.includes(",")) {
        location = location.split(",")[0];
      }
      if (location.length === 0) {
        location = "Dublin";
      }
      const response = await axios.get(
        `${API.events.fetchAllEvents}?city=${location}`
      );
      this.liveEvents = response.data.data.liveEvents;
      this.upcomingEvents = response.data.data.upcomingEvents;
      this.trendingCategories = response.data.data.trendingCategories;
      this.currentCity = response.data.data.currentCity;
      this.nearestCity = response.data.data.nearestEventCity;
      return response.data.data as FetchEventsResponse;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data || error.message);
      } else {
        throw new Error(`Unexpected Error: ${error}`);
      }
    }
  }
}
