import axios from "@/utils/middleware";
import { API } from "..";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCart } from "@/stores/cart";

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
  const { setBasketId, voucherCode, basketId } = useCart();

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

    if (response.status === 200) {
      setBasketId(response.data.data.basket._id);
    }
    return response.data.data;
  };

  const applyPromoCode = async () => {
    const response = await axios.post(`${API.promo.apply}/${basketId}`, {
      promoId: voucherCode,
    });
    return response.data.data;
  };

  const promoCodeMutation = useMutation({
    mutationFn: applyPromoCode,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["cart", eventId],
      });
    },
  });

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
    promoCodeMutation,
  };
};
