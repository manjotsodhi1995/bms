import axios from "@/utils/middleware";
import { API } from "..";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useLikesQuery = (eventId?: string) => {
  const queryClient = useQueryClient();

  const { data: isLiked } = useQuery({
    queryKey: ["event", eventId, "likeStatus"],
    queryFn: () => checkLikedStatus(eventId),
    enabled: !!eventId,
  });

  const likesMutation = useMutation({
    mutationFn: () => {
      return isLiked ? unlikeEvent(eventId) : likeEvent(eventId);
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["event", eventId, "likeStatus"],
      });
    },
  });

  return {
    data: isLiked,
    mutation: likesMutation,
  };
};

const checkLikedStatus = async (eventId?: string) => {
  if (!eventId) return false;
  const response = await axios.get(API.users.getAllLikedEvents);
  const likedEventsIds: string[] = response.data.data.likedEvents.map(
    (e: any) => e._id
  );
  return likedEventsIds.includes(eventId);
};

const likeEvent = async (eventId?: string) => {
  if (!eventId) throw Error("No eventId provided");
  const response = await axios.post(`${API.users.likeEvent}/${eventId}`);
  return response.data.message as string;
};

const unlikeEvent = async (eventId?: string) => {
  if (!eventId) throw Error("No eventId provided");
  const response = await axios.post(`${API.users.unlikeEvent}/${eventId}`);
  return response.data.message as string;
};
