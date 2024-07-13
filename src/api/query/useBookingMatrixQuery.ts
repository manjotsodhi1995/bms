import axios from "@/utils/middleware";
import { API } from "..";
import { useMutation } from "@tanstack/react-query";

interface TicketCategory {
  categoryType: string;
  categoryName: string;
  totalSeats: number;
  totalSeatsBooked: number;
  categoryPricePerPerson: string;
  maxPersonAllowedPerBooking: string;
}

export interface BookingMatrix {
  event: string;
  ticketCategories: TicketCategory[];
  eventDate: string;
  eventTime: string;
}
export const useBookingMatrixQuery = (eventId?: string) => {
  const createBookingMatrix = async (body: Partial<BookingMatrix>) => {
    if (!eventId) return false;
    const response = await axios.post(API.bookingmatrix.create, body);
    return response.data;
  };

  const updateBookingMatrix = async (body: TicketCategory[]) => {
    if (!eventId) return false;
    const response = await axios.post(
      `${API.bookingmatrix.update}/${eventId}`,
      {
        ticketCategories: body,
      }
    );
    return response.data;
  };

  const createMutation = useMutation({
    mutationFn: createBookingMatrix,
  });

  const updateMutation = useMutation({
    mutationFn: updateBookingMatrix,
  });
  return {
    createMutation,
    updateMutation,
  };
};
