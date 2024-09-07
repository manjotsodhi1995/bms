import axios from "@/utils/middleware";
import { API } from "..";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useStore } from "@/hooks/useStore";
import { useNavigate } from "react-router-dom";

export const useLikesQuery = (eventId?: string) => {
  const {
    root: { auth },
  } = useStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return {
    data: false,
    mutation: false,
  };
  const { data: isLiked } = useQuery({
    queryKey: ["event", eventId, "likeStatus"],
    queryFn: () => checkLikedStatus(eventId, auth.isAuthenticated),
    enabled: !!eventId && auth.isAuthenticated,
  });

  const likesMutation = useMutation({
    mutationFn: () => {
      if (!auth.isAuthenticated) {
        navigate("/login");
      }
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

const checkLikedStatus = async (eventId?: string, isAuth?: boolean) => {
  if (!isAuth) return false;
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
