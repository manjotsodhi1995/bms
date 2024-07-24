import axios from "@/utils/middleware";
import { API } from "..";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface UpdateCart {
  eventDate: string;
  basket: {
    categoryType: string;
    categoryName: string;
    noOfPersons: number;
  };
}

export const useCartQuery = (eventId?: string, eventDate?: string) => {
  const queryClient = useQueryClient();

  const updateCart = async (body: Partial<UpdateCart>) => {
    if (!eventId) return false;
    const response = await axios.post(`${API.basket.update}/${eventId}`, body);
    return response.data;
  };

  const fetchCart = async () => {
    if (!eventId) return false;
    const response = await axios.post(`${API.basket.fetch}/${eventId}`, {
      eventDate: eventDate ? eventDate.split(" ")[0] : null,
    });
    return response.data.data;
  };

  const { data: cartData } = useQuery({
    queryKey: ["cart", eventId],
    queryFn: fetchCart,
    enabled: !!eventId && !!eventDate,
  });

  const cartMutation = useMutation({
    mutationFn: updateCart,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["cart", eventId],
      });
    },
  });

  return {
    cartData,
    cartMutation,
  };
};
