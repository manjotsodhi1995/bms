import axios from "@/utils/middleware";
import { API } from "..";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface TicketCategory {
  categoryType: string;
  categoryName: string;
  totalSeats: number;
  totalSeatsBooked: number;
  categoryPricePerPerson: string;
  maxPersonAllowedPerBooking: string;
}

export interface BookingMatrix {
  event: any;
  ticketCategories: TicketCategory[];
  eventDate: string;
  eventTime: string;
}
export const useBookingMatrixQuery = (eventId?: string, eventDate?: string) => {
  const queryClient = useQueryClient();
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

  const fetchBookingMatrix = async () => {
    if (!eventId) return false;
    const response = await axios.get(`${API.bookingmatrix.fetch}/${eventId}`, {
      params: {
        eventDate: eventDate ? eventDate.split(" ")[0] : null,
      },
    });
    console.log(response.data.data);
    return response.data.data;
  };

  const bookingMatrix = useQuery({
    queryKey: ["bookingMatrix", eventId],
    queryFn: fetchBookingMatrix,
    enabled: !!eventId && !!eventDate,
    retry: 2,
  });

  const createMutation = useMutation({
    mutationFn: createBookingMatrix,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["bookingMatrix", eventId],
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateBookingMatrix,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["bookingMatrix", eventId],
      });
    },
  });

  return {
    bookingMatrix,
    createMutation,
    updateMutation,
  };
};
