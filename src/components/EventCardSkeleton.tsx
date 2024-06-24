import { Skeleton } from "@mui/material";

function EventCardSkeleton() {
  return (
    <Skeleton
      variant="rounded"
      width={"100%"}
      height={312}
      sx={{
        borderRadius: 6,
      }}
    />
  );
}

export default EventCardSkeleton;
