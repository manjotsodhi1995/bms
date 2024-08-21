import type { EventType } from "@/stores/event";
import { cn, formatDate } from "@/utils";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ShareEventDialog } from "./ShareEventDialog";
import { useLikesQuery } from "@/api/query/useLikesQuery";
import toast from "react-hot-toast";
import Tooltip from "@mui/material/Tooltip";

function EventCard(event: Partial<EventType>) {
  const [isHovered, setIsHovered] = useState(false);
  const date = event.eventStart
    ? formatDate(new Date(event?.eventStart))
    : null;
  const [openShareDialog, setOpenShareDialog] = useState(false);

  const { data: isLiked, mutation } = useLikesQuery(event._id);
  const onLikeClicked = (
    e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    mutation.mutateAsync();
    toast.promise(mutation.mutateAsync(), {
      loading: "Please wait",
      success: isLiked ? "Removed from favourites" : "Added to favourites",
      error: "An error occurred",
    });
  };

  const onShareClicked = (
    e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setOpenShareDialog(true);
  };
  return (
    <div
      className="max-h-[330px] shadow-md w-[370px] md:w-[350px] 2xl:w-[450px] md:h-full md:max-h-[420px] 2xl:max-h-[500px] place-self-center rounded-3xl shadow:lg transition-transform duration-300 ease-in-out  bg-white pb-2 border-[#BCBCBC36] border-2 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "scale(1.02)" : "scale(1)" }}
    >
      <Link to={`/event/${event.slug}`}>
        {" "}
        <div className="w-full">
          <div className="relative">
            <img
              src={event.posterUrl}
              alt=""
              className="w-full rounded-2xl h-[14rem] md:h-[18rem] object-cover -z-10"
            />
            <Tooltip title="SHARE" placement="top" arrow>
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 absolute md:top-4 md:right-4 top-2 right-2 fill-white hover:fill-blue-300"
                onClick={onShareClicked}
              >
                <path d="M17.8767 17.75C17.8767 18.2426 17.7689 18.7292 17.5609 19.1758C17.3529 19.6223 17.0496 20.0178 16.6724 20.3347C16.2952 20.6515 15.8533 20.8819 15.3775 21.0098C14.9018 21.1376 14.4039 21.1598 13.9187 21.0747C13.4335 20.9896 12.9728 20.7993 12.5689 20.5172C12.1651 20.2351 11.8279 19.8681 11.581 19.4418C11.3342 19.0155 11.1836 18.5403 11.1399 18.0497C11.0963 17.559 11.1605 17.0647 11.3282 16.6015L6.35947 13.4094C5.88492 13.8748 5.28347 14.1898 4.63058 14.3148C3.97769 14.4398 3.30243 14.3692 2.68953 14.1118C2.07662 13.8545 1.55335 13.4219 1.18537 12.8683C0.817396 12.3147 0.621094 11.6647 0.621094 11C0.621094 10.3352 0.817396 9.6853 1.18537 9.1317C1.55335 8.5781 2.07662 8.14549 2.68953 7.88815C3.30243 7.63081 3.97769 7.56019 4.63058 7.68516C5.28347 7.81013 5.88492 8.12512 6.35947 8.59061L11.3282 5.40311C11.0437 4.62128 11.0572 3.76202 11.3662 2.98953C11.6752 2.21704 12.258 1.58547 13.0032 1.21551C13.7484 0.845556 14.6038 0.763147 15.4059 0.984032C16.2081 1.20492 16.9007 1.71361 17.3515 2.41291C17.8022 3.1122 17.9796 3.95308 17.8495 4.77485C17.7195 5.59662 17.2912 6.34167 16.6466 6.86763C16.0019 7.39359 15.1861 7.6636 14.3549 7.62604C13.5238 7.58848 12.7356 7.24601 12.141 6.66405L7.17228 9.85623C7.44082 10.5983 7.44082 11.411 7.17228 12.1531L12.141 15.3453C12.6154 14.881 13.2162 14.5669 13.8682 14.4423C14.5202 14.3177 15.1944 14.3882 15.8066 14.6448C16.4188 14.9015 16.9417 15.333 17.3099 15.8853C17.678 16.4376 17.8752 17.0862 17.8767 17.75Z" />
              </svg>
            </Tooltip>
            <Tooltip title="LIKE" placement="top" arrow>
              <svg
                width="20"
                height="16"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onLikeClicked}
                className={cn(
                  "size-6 absolute md:top-4 md:right-12 top-2 right-10 fill-white hover:fill-pink-700",
                  {
                    "fill-pink-700": isLiked,
                    "fill-pink-100": mutation.isPending,
                  }
                )}
              >
                <path d="M21.5 6.5625C21.5 13.125 11.7697 18.4369 11.3553 18.6562C11.2461 18.715 11.124 18.7458 11 18.7458C10.876 18.7458 10.7539 18.715 10.6447 18.6562C10.2303 18.4369 0.5 13.125 0.5 6.5625C0.501737 5.02146 1.11468 3.54404 2.20436 2.45436C3.29404 1.36468 4.77146 0.751737 6.3125 0.75C8.24844 0.75 9.94344 1.5825 11 2.98969C12.0566 1.5825 13.7516 0.75 15.6875 0.75C17.2285 0.751737 18.706 1.36468 19.7956 2.45436C20.8853 3.54404 21.4983 5.02146 21.5 6.5625Z" />
              </svg>
            </Tooltip>
          </div>
          <div className="p-2 flex w-full md:gap-4 gap-2 justify-start align-middle items-center">
            <div className="text-center font-medium 2xl:text-[1.5rem] lg:text-[1.2rem] text-[0.9rem] w-[3rem] flex justify-center items-center">
              {date}
            </div>
            <div className="w-[2px] md:h-[70px] h-[50px] bg-black flex justify-center"></div>
            <div>
              <div className="flex gap-2 justify-left font-medium text-[0.5rem] md:text-[0.7rem] 2xl:text-[1.2rem] items-center">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.5 0.333374C8.0913 0.333374 9.61742 0.965515 10.7426 2.09073C11.8679 3.21595 12.5 4.74208 12.5 6.33337C12.5 8.38271 11.3827 10.06 10.2053 11.2634C9.61701 11.858 8.97519 12.3971 8.288 12.874L8.004 13.0674L7.87067 13.156L7.61933 13.316L7.39533 13.4527L7.118 13.614C6.92967 13.7212 6.7167 13.7776 6.5 13.7776C6.2833 13.7776 6.07033 13.7212 5.882 13.614L5.60467 13.4527L5.258 13.2394L5.13 13.156L4.85667 12.974C4.11532 12.4723 3.42471 11.8993 2.79467 11.2634C1.61733 10.0594 0.5 8.38271 0.5 6.33337C0.5 4.74208 1.13214 3.21595 2.25736 2.09073C3.38258 0.965515 4.9087 0.333374 6.5 0.333374ZM6.5 1.66671C5.26232 1.66671 4.07534 2.15837 3.20017 3.03354C2.325 3.90871 1.83333 5.0957 1.83333 6.33337C1.83333 7.88137 2.68133 9.24004 3.74733 10.3307C4.20575 10.7946 4.70116 11.2205 5.22867 11.604L5.534 11.8214C5.63267 11.89 5.72733 11.954 5.81867 12.0134L6.07867 12.18L6.30733 12.3194L6.5 12.432L6.80333 12.2527L7.048 12.0994C7.178 12.0167 7.318 11.924 7.466 11.8214L7.77133 11.604C8.29884 11.2205 8.79425 10.7946 9.25267 10.3307C10.3187 9.24071 11.1667 7.88137 11.1667 6.33337C11.1667 5.0957 10.675 3.90871 9.79983 3.03354C8.92466 2.15837 7.73768 1.66671 6.5 1.66671ZM6.5 3.66671C7.20724 3.66671 7.88552 3.94766 8.38562 4.44776C8.88572 4.94785 9.16667 5.62613 9.16667 6.33337C9.16667 7.04062 8.88572 7.7189 8.38562 8.21899C7.88552 8.71909 7.20724 9.00004 6.5 9.00004C5.79276 9.00004 5.11448 8.71909 4.61438 8.21899C4.11428 7.7189 3.83333 7.04062 3.83333 6.33337C3.83333 5.62613 4.11428 4.94785 4.61438 4.44776C5.11448 3.94766 5.79276 3.66671 6.5 3.66671ZM6.5 5.00004C6.14638 5.00004 5.80724 5.14052 5.55719 5.39057C5.30714 5.64061 5.16667 5.97975 5.16667 6.33337C5.16667 6.687 5.30714 7.02613 5.55719 7.27618C5.80724 7.52623 6.14638 7.66671 6.5 7.66671C6.85362 7.66671 7.19276 7.52623 7.44281 7.27618C7.69286 7.02613 7.83333 6.687 7.83333 6.33337C7.83333 5.97975 7.69286 5.64061 7.44281 5.39057C7.19276 5.14052 6.85362 5.00004 6.5 5.00004Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>
                {event.venueAddress?.city}
              </div>
              <div className="text-[#A48A00] font-medium text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] 2xl:text-[1.4rem] pr-4 hover:line-clamp-none line-clamp-2 leading-tight">
                {event.title}
              </div>
              <div className="text-[0.6rem] md:text-[0.8rem] 2xl:text-[1rem]">
                {event.venueAddress?.name}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {event && openShareDialog && (
        <ShareEventDialog
          open
          onOpenChange={setOpenShareDialog}
          imageUrl={event.posterUrl}
          link={`/event/${event.slug}`}
        >
          <button>open dialog</button>
        </ShareEventDialog>
      )}
    </div>
  );
}

export default EventCard;
