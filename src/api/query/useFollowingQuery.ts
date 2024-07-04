import axios from "@/utils/middleware";
import { API } from "..";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFollowingQuery = (organizerId?: string) => {
  const queryClient = useQueryClient();

  const { data: isFollowing } = useQuery({
    queryKey: ["organizer", organizerId, "followingStatus"],
    queryFn: () => checkFollowingStatus(organizerId),
    enabled: !!organizerId,
  });

  const followMutation = useMutation({
    mutationFn: () => {
      if (isFollowing) {
        return unfollowOrganizer(organizerId);
      } else {
        return followOrganizer(organizerId);
      }
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: ["organizer", organizerId, "followingStatus"],
      });
    },
  });

  return {
    data: isFollowing,
    mutation: followMutation,
  };
};

const checkFollowingStatus = async (organizerId?: string) => {
  if (!organizerId) return false;
  const response = await axios.get(API.users.getAllFollowedOrganizers);
  const followedOrganizersIds: string[] =
    response.data.data.followedOrganizers.map((e: any) => e._id);
  return followedOrganizersIds.includes(organizerId);
};

const followOrganizer = async (organizerId?: string) => {
  if (!organizerId) throw Error("No organizerId provided");
  const response = await axios.post(
    `${API.users.followOrganizer}/${organizerId}`
  );
  return response.data.message as string;
};

const unfollowOrganizer = async (organizerId?: string) => {
  if (!organizerId) throw Error("No organizerId provided");
  const response = await axios.post(
    `${API.users.unfollowOrganizer}/${organizerId}`
  );
  return response.data.message as string;
};
