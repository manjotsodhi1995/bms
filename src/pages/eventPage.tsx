import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Like from "../assets/Like.png";
import Share from "../assets/share.png";
import axios from "../utils/middleware";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import EventCard from "../components/EventCard";
import EventSlides from "@/components/eventStory";
import BookTicketsDialog from "@/components/ticket/BookTicketsDialog";
import type { EventType } from "@/stores/event";
import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { cn, formatDate } from "@/utils";
import { ShareEventDialog } from "@/components/ShareEventDialog";
import { API } from "@/api";
import { Avatar, Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useLikesQuery } from "@/api/query/useLikesQuery";
import { useFollowingQuery } from "@/api/query/useFollowingQuery";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";
import EventStories from "@/components/EventStories";
import type SwiperCore from "swiper";
import { formatCurrency } from "@/utils";
const EventPage = observer(() => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchEvent = async (slug?: string) => {
    setIsLoading(true);
    const response = await axios.get(`${API.events.getByUrl}/${slug}`, {
      headers: {
        is_guest_user: "yes",
      },
    });
    setIsLoading(false);
    return response.data.data as EventType;
  };
  const {
    root: { event },
  } = useStore();
  const carouselRef = useRef(null);
  const { slug } = useParams();
  const { data: eventData } = useQuery({
    queryKey: ["event", slug],
    queryFn: () => fetchEvent(slug),
  });

  const organizerId = eventData?.organizer._id;
  const { data: isFollowing, mutation: followMutation } =
    useFollowingQuery(organizerId);

  const date = useMemo(() => {
    if (!eventData) return "Sat, Jun 12 - June 13 19:00";
    let start = formatDate(new Date(eventData.eventStart));
    let end = formatDate(new Date(eventData.eventEnd));

    const startTime =
      "" +
      new Date(eventData.eventStart).getHours() +
      ":" +
      new Date(eventData.eventStart).getMinutes();
    const endTime =
      "" +
      new Date(eventData.eventEnd).getHours() +
      ":" +
      new Date(eventData.eventEnd).getMinutes();
    return `${start}, ${startTime} - ${end}, ${endTime} (GMT+1)`;
  }, [eventData]);

  const canBookTicket = useMemo(() => {
    if (!eventData) return true;
    let closingDate = new Date(eventData.bookingClosingDate).getTime();
    return !eventData.isSoldOut && Date.now() < closingDate;
  }, [eventData]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
  };

  const firstSwiper = useRef<SwiperCore | null>(null);
  const handleNextClick = () => {
    if (firstSwiper.current) {
      firstSwiper.current.slideNext();
    }
  };
  console.log(isLoading);
  const handlePrevClick = () => {
    if (firstSwiper.current) {
      firstSwiper.current.slidePrev();
    }
  };
  const eventId = eventData?.eventId;
  const { data: isLiked, mutation: likesMutation } = useLikesQuery(eventId);
  return (
    <div className="w-full ">
      {/* <Navbar /> */}

      <EventStories
        onOpen={open}
        setOpen={setOpen}
        activeIndex={activeIndex}
        handleNextClick={handleNextClick} // Pass handleNextClick to SecondSwiper
        handlePrevClick={handlePrevClick}
      />
      <div className="relative h-[50vw] lg:h-full flex justify-center bg-gray-200">
        {!isLoading && (
          <>
            <img
              src={eventData?.posterUrl}
              className="w-full lg:h-[33vw] h-full"
              alt=""
            />
            <div className="flex gap-4 absolute bottom-4 right-4">
              <button
                disabled={likesMutation.isPending}
                onClick={() => {
                  toast.promise(likesMutation.mutateAsync(), {
                    loading: "Please wait",
                    success: isLiked
                      ? "Removed from favourites"
                      : "Added to favourites",
                    error: "An error occurred",
                  });
                }}
                className={cn(
                  "bg-white rounded-full w-[50px] h-[50px] bg-opacity-40 items-center flex justify-center hover:bg-blue-300",
                  {
                    "bg-pink-700 bg-opacity-100": isLiked,
                    "bg-pink-300": likesMutation.isPending,
                  }
                )}
              >
                {likesMutation.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <img src={Like} alt="" />
                )}
              </button>
              <div>
                {eventData && (
                  <ShareEventDialog
                    imageUrl={eventData.posterUrl}
                    link={`/event/${eventData.slug}`}
                  >
                    <div className="bg-white rounded-full w-[50px] h-[50px] items-center flex justify-center bg-opacity-40 cursor-pointer hover:bg-blue-300">
                      <img src={Share} alt="" />
                    </div>
                  </ShareEventDialog>
                )}

                {/* {eventData && (
              <ShareEventDialog
                imageUrl={eventData.posterUrl}
                link={/event/${eventData.slug}}
              >
                <div className="bg-white rounded-full w-[50px] h-[50px] items-center flex justify-center bg-opacity-40 cursor-pointer hover:bg-blue-300">
                  <img src={Share} alt="" />
                </div>
              </ShareEventDialog>
             )} */}
              </div>
            </div>
          </>
        )}{" "}
        {isLoading && (
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"100%"}
            sx={{
              borderRadius: 6,
            }}
          />
        )}
      </div>
      <div className="relative lg:px-[5%] xl:px-[7%] px-[8vw] py-[1.4rem] flex justify-between lg:flex-row flex-col gap-8 2xl:gap-16">
        <div className="flex flex-col gap-2 lg:w-[55%]">
          <div className="font-bold text-[2.5rem] flex flex-col gap-2">
            <div className="p-2 rounded-full border-2 border-black text-black text-[1rem] w-[7rem] text-center">
              {" "}
              {!isLoading && eventData?.genres}{" "}
              {isLoading && (
                <Skeleton variant="rounded" width={100} height={30} />
              )}
            </div>
            <div className="leading-tight text-[1.7rem] lg:text-[2.5rem]">
              {" "}
              {eventData?.title}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                  fill="#60769D"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium text-[1.1rem] lg:text-[1.3rem]">
                {eventData?.venueAddress.name}
              </div>
              <div className="text-gray-700 font-medium">
                {" "}
                {eventData?.venueAddress.city},{eventData?.venueAddress.country}
                ,{eventData?.venueAddress.zipcode}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <div>
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 2H14.25V1.25C14.25 1.05109 14.171 0.860322 14.0303 0.71967C13.8897 0.579018 13.6989 0.5 13.5 0.5C13.3011 0.5 13.1103 0.579018 12.9697 0.71967C12.829 0.860322 12.75 1.05109 12.75 1.25V2H5.25V1.25C5.25 1.05109 5.17098 0.860322 5.03033 0.71967C4.88968 0.579018 4.69891 0.5 4.5 0.5C4.30109 0.5 4.11032 0.579018 3.96967 0.71967C3.82902 0.860322 3.75 1.05109 3.75 1.25V2H1.5C1.10218 2 0.720644 2.15804 0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5V18.5C0 18.8978 0.158035 19.2794 0.43934 19.5607C0.720644 19.842 1.10218 20 1.5 20H16.5C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2794 18 18.8978 18 18.5V3.5C18 3.10218 17.842 2.72064 17.5607 2.43934C17.2794 2.15804 16.8978 2 16.5 2ZM3.75 3.5V4.25C3.75 4.44891 3.82902 4.63968 3.96967 4.78033C4.11032 4.92098 4.30109 5 4.5 5C4.69891 5 4.88968 4.92098 5.03033 4.78033C5.17098 4.63968 5.25 4.44891 5.25 4.25V3.5H12.75V4.25C12.75 4.44891 12.829 4.63968 12.9697 4.78033C13.1103 4.92098 13.3011 5 13.5 5C13.6989 5 13.8897 4.92098 14.0303 4.78033C14.171 4.63968 14.25 4.44891 14.25 4.25V3.5H16.5V6.5H1.5V3.5H3.75ZM16.5 18.5H1.5V8H16.5V18.5Z"
                  fill="#60769D"
                />
              </svg>
            </div>
            <div className="text-gray-900 font-medium text-sm">{date}</div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <svg
                width="16"
                height="22"
                viewBox="0 0 16 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75 1.25C5.75 1.05109 5.67098 0.860321 5.53033 0.719669C5.38968 0.579018 5.19891 0.5 5 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.939341C0.658035 1.22064 0.5 1.60217 0.5 2L0.5 20C0.5 20.3978 0.658035 20.7794 0.93934 21.0607C1.22064 21.342 1.60218 21.5 2 21.5H5C5.19891 21.5 5.38968 21.421 5.53033 21.2803C5.67098 21.1397 5.75 20.9489 5.75 20.75C5.75 20.1533 5.98705 19.581 6.40901 19.159C6.83097 18.7371 7.40326 18.5 8 18.5C8.59674 18.5 9.16903 18.7371 9.59099 19.159C10.0129 19.581 10.25 20.1533 10.25 20.75C10.25 20.9489 10.329 21.1397 10.4697 21.2803C10.6103 21.421 10.8011 21.5 11 21.5H14C14.3978 21.5 14.7794 21.342 15.0607 21.0607C15.342 20.7794 15.5 20.3978 15.5 20L15.5 2C15.5 1.60217 15.342 1.22064 15.0607 0.939341C14.7794 0.658035 14.3978 0.5 14 0.5H11C10.8011 0.5 10.6103 0.579018 10.4697 0.719669C10.329 0.860321 10.25 1.05109 10.25 1.25C10.25 1.84674 10.0129 2.41903 9.59099 2.84099C9.16903 3.26295 8.59674 3.5 8 3.5C7.40326 3.5 6.83097 3.26295 6.40901 2.84099C5.98705 2.41903 5.75 1.84674 5.75 1.25ZM11.675 20C11.5029 19.1523 11.043 18.3901 10.3732 17.8427C9.70343 17.2953 8.86502 16.9962 8 16.9962C7.13498 16.9962 6.29657 17.2953 5.62681 17.8427C4.95705 18.3901 4.49714 19.1523 4.325 20H2L2 14.75H14V20H11.675ZM11.675 2H14L14 13.25H2L2 2H4.325C4.49714 2.84772 4.95705 3.60986 5.62681 4.15728C6.29657 4.70471 7.13498 5.00376 8 5.00376C8.86502 5.00376 9.70343 4.70471 10.3732 4.15728C11.043 3.60986 11.5029 2.84772 11.675 2Z"
                  fill="#60769D"
                />
              </svg>
            </div>
            <div className="text-gray-900 font-medium text-sm">
              Starts at just{" "}
              {formatCurrency(
                eventData?.lowestTicketPrice,
                eventData?.currency ? eventData.currency : "EUR"
              )}
            </div>
          </div>
          <div className="mt-4 flex lg:hidden justify-between gap-10">
            <div className="flex flex-col text-center items-center">
              <div className="font-medium text-[1.2rem]">
                {eventData?.duration ? `${eventData.duration}` : "--"}
              </div>
              <div className="text-gray-700 text-[0.9rem]">Duration</div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="font-medium text-[1.2rem]">
                {eventData?.genres[0]}{" "}
              </div>
              <div className="text-gray-700 text-[0.9rem]">Genre</div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="font-medium text-[1.2rem]">
                {eventData?.ageRestriction}
              </div>
              <div className="text-gray-700 text-[0.9rem]">Age Restriction</div>
            </div>
          </div>
          <div className="lg:hidden grid grid-cols-3 lg:grid-cols-3 gap-2 mt-4">
            {eventData?.stories.map((card: any, index: any) => (
              <div
                key={index}
                className="snap-center w-full"
                ref={carouselRef}
                onClick={() => {
                  setOpen(true);
                  handleSlideClick(index);
                }}
              >
                <EventSlides title={card.caption} posterUrl={card.posterUrl} />
              </div>
            ))}
          </div>{" "}
          <div className="flex flex-col mt-4 gap-2">
            <div className="font-medium text-[1.4rem]">About</div>{" "}
            {eventData?.description?.includes("\n") ? (
              <div className="font-sans max-w-[100%] whitespace-pre-wrap flex">
                {eventData?.description}
              </div>
            ) : (
              <div>{eventData?.description}</div>
            )}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="font-medium text-[1.4rem]">Timings</div>
            <div className="flex gap-2">
              <div className="w-[30px] items-center flex justify-center">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.75 18.4375H18.3125V1.75C18.3125 1.4019 18.1742 1.06806 17.9281 0.821922C17.6819 0.575781 17.3481 0.4375 17 0.4375H5C4.6519 0.4375 4.31806 0.575781 4.07192 0.821922C3.82578 1.06806 3.6875 1.4019 3.6875 1.75V18.4375H1.25C1.10082 18.4375 0.957742 18.4968 0.852252 18.6023C0.746763 18.7077 0.6875 18.8508 0.6875 19C0.6875 19.1492 0.746763 19.2923 0.852252 19.3977C0.957742 19.5032 1.10082 19.5625 1.25 19.5625H20.75C20.8992 19.5625 21.0423 19.5032 21.1477 19.3977C21.2532 19.2923 21.3125 19.1492 21.3125 19C21.3125 18.8508 21.2532 18.7077 21.1477 18.6023C21.0423 18.4968 20.8992 18.4375 20.75 18.4375ZM17.1875 1.75V18.4375H15.3125V1.5625H17C17.0497 1.5625 17.0974 1.58225 17.1326 1.61742C17.1677 1.65258 17.1875 1.70027 17.1875 1.75ZM4.8125 1.75C4.8125 1.70027 4.83225 1.65258 4.86742 1.61742C4.90258 1.58225 4.95027 1.5625 5 1.5625H14.1875V18.4375H4.8125V1.75ZM12.3125 10.375C12.3125 10.5604 12.2575 10.7417 12.1545 10.8958C12.0515 11.05 11.9051 11.1702 11.7338 11.2411C11.5625 11.3121 11.374 11.3307 11.1921 11.2945C11.0102 11.2583 10.8432 11.169 10.7121 11.0379C10.581 10.9068 10.4917 10.7398 10.4555 10.5579C10.4193 10.376 10.4379 10.1875 10.5089 10.0162C10.5798 9.84493 10.7 9.69851 10.8542 9.5955C11.0083 9.49248 11.1896 9.4375 11.375 9.4375C11.6236 9.4375 11.8621 9.53627 12.0379 9.71209C12.2137 9.8879 12.3125 10.1264 12.3125 10.375Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                Opens at{" "}
                {eventData && formatDate(new Date(eventData.eventStart))} at
                {"  "}
                {eventData && new Date(eventData.eventStart).getHours()}:
                {eventData && new Date(eventData.eventStart).getMinutes()}
                (GMT+1)
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[30px] items-center flex justify-center">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.0625 17.25C8.0625 17.3992 8.00324 17.5423 7.89775 17.6477C7.79226 17.7532 7.64918 17.8125 7.5 17.8125H1.5C1.35082 17.8125 1.20774 17.7532 1.10225 17.6477C0.996763 17.5423 0.9375 17.3992 0.9375 17.25V0.75C0.9375 0.600816 0.996763 0.457742 1.10225 0.352252C1.20774 0.246763 1.35082 0.1875 1.5 0.1875H7.5C7.64918 0.1875 7.79226 0.246763 7.89775 0.352252C8.00324 0.457742 8.0625 0.600816 8.0625 0.75C8.0625 0.899184 8.00324 1.04226 7.89775 1.14775C7.79226 1.25324 7.64918 1.3125 7.5 1.3125H2.0625V16.6875H7.5C7.64918 16.6875 7.79226 16.7468 7.89775 16.8523C8.00324 16.9577 8.0625 17.1008 8.0625 17.25ZM18.3975 8.6025L14.6475 4.8525C14.5409 4.75314 14.3998 4.69905 14.2541 4.70162C14.1084 4.70419 13.9693 4.76322 13.8663 4.86628C13.7632 4.96934 13.7042 5.10838 13.7016 5.25411C13.699 5.39983 13.7531 5.54087 13.8525 5.6475L16.6416 8.4375H7.5C7.35082 8.4375 7.20774 8.49676 7.10225 8.60225C6.99676 8.70774 6.9375 8.85082 6.9375 9C6.9375 9.14918 6.99676 9.29226 7.10225 9.39775C7.20774 9.50324 7.35082 9.5625 7.5 9.5625H16.6416L13.8525 12.3525C13.7972 12.404 13.7529 12.4661 13.7222 12.5351C13.6914 12.6041 13.6749 12.6786 13.6736 12.7541C13.6722 12.8296 13.6861 12.9047 13.7144 12.9747C13.7427 13.0447 13.7848 13.1084 13.8382 13.1618C13.8916 13.2152 13.9553 13.2573 14.0253 13.2856C14.0953 13.3139 14.1704 13.3278 14.2459 13.3264C14.3214 13.3251 14.3959 13.3086 14.4649 13.2778C14.5339 13.2471 14.596 13.2028 14.6475 13.1475L18.3975 9.3975C18.5028 9.29203 18.562 9.14906 18.562 9C18.562 8.85094 18.5028 8.70797 18.3975 8.6025Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                Closes at{" "}
                {eventData && formatDate(new Date(eventData.eventEnd))} at{" "}
                {"  "}
                {eventData && new Date(eventData.eventEnd).getHours()}:
                {eventData && new Date(eventData.eventEnd).getMinutes()}
                (GMT+)
              </div>
            </div>
            <div className="gap-2 items-center hidden">
              <div className="w-[30px] items-center flex justify-center">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.75 18.4375H18.3125V1.75C18.3125 1.4019 18.1742 1.06806 17.9281 0.821922C17.6819 0.575781 17.3481 0.4375 17 0.4375H5C4.6519 0.4375 4.31806 0.575781 4.07192 0.821922C3.82578 1.06806 3.6875 1.4019 3.6875 1.75V18.4375H1.25C1.10082 18.4375 0.957742 18.4968 0.852252 18.6023C0.746763 18.7077 0.6875 18.8508 0.6875 19C0.6875 19.1492 0.746763 19.2923 0.852252 19.3977C0.957742 19.5032 1.10082 19.5625 1.25 19.5625H20.75C20.8992 19.5625 21.0423 19.5032 21.1477 19.3977C21.2532 19.2923 21.3125 19.1492 21.3125 19C21.3125 18.8508 21.2532 18.7077 21.1477 18.6023C21.0423 18.4968 20.8992 18.4375 20.75 18.4375ZM4.8125 1.75C4.8125 1.70027 4.83225 1.65258 4.86742 1.61742C4.90258 1.58225 4.95027 1.5625 5 1.5625H17C17.0497 1.5625 17.0974 1.58225 17.1326 1.61742C17.1677 1.65258 17.1875 1.70027 17.1875 1.75V18.4375H4.8125V1.75ZM14.5625 10.375C14.5625 10.5604 14.5075 10.7417 14.4045 10.8958C14.3015 11.05 14.1551 11.1702 13.9838 11.2411C13.8125 11.3121 13.624 11.3307 13.4421 11.2945C13.2602 11.2583 13.0932 11.169 12.9621 11.0379C12.831 10.9068 12.7417 10.7398 12.7055 10.5579C12.6693 10.376 12.6879 10.1875 12.7589 10.0162C12.8298 9.84493 12.95 9.69851 13.1042 9.5955C13.2583 9.49248 13.4396 9.4375 13.625 9.4375C13.8736 9.4375 14.1121 9.53627 14.2879 9.71209C14.4637 9.8879 14.5625 10.1264 14.5625 10.375Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>Last Entry at Fri 5th Jul at 9:00 AM (GMT+)</div>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <h1 className="font-medium text-[1.3rem]">Location</h1>
            <iframe
              src={`https://maps.google.com/maps?q=${eventData?.venueLocation.coordinates[0]},${eventData?.venueLocation.coordinates[1]}&hl=en;z=14&amp&output=embed`}
              width="100%"
              height="290"
            />
            <Link
              to={`https://maps.google.com/?q=${eventData?.venueLocation.coordinates[0]},${eventData?.venueLocation.coordinates[1]}`}
              className="px-2 py-2 border-black border-2 2xl:w-[12rem] w-[10rem] hover:text-white hover:bg-black mt-2 flex items-center text-center justify-center text-[0.8rem]"
              target="_blank"
            >
              GET DIRECTIONS
            </Link>
          </div>
          {eventData?.organizer && (
            <div className="flex flex-col gap-2 mt-6">
              <span className="text-xl font-medium">Organized By</span>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                  <Avatar
                    src={eventData.organizer.logoUrl}
                    sx={{
                      width: 56,
                      height: 56,
                    }}
                  />
                  <Link
                    to={`/organization/${eventData.organizer._id}`}
                    className="font-medium lg:text-lg text-sm"
                  >
                    {eventData.organizer.name}
                  </Link>
                </div>
                <button
                  className="flex gap-2 px-4 py-1 border border-[#37548E] rounded-full text-[#60769D]"
                  onClick={() => followMutation.mutate()}
                  disabled={followMutation.isPending}
                >
                  {isFollowing ? "Following" : "Follow"}
                  {followMutation.isPending && (
                    <Loader2 className="animate-spin" />
                  )}
                </button>
              </div>
            </div>
          )}
          <div className="font-medium mt-4 cursor-pointer text-xl">
            Refund Policy
          </div>
          <div>No Refunds will be issued</div>
          {/* <div className="mt-20">
            <div className="font-medium text-[1.2rem]">
              Would you like to rep this event?
            </div>
            <div>Check out all the benefits and sign up to rep this event!</div>
            <div className="px-2 py-2 text-[0.8rem] bg-black text-white text-center rounded-lg mt-2 w-[10rem]">
              REP THIS EVENT
            </div>
          </div> */}
        </div>

        <div className="h-fit bg-white lg:bg-transparent py-4 fixed bottom-0 z-10 left-0 px-2 lg:sticky lg:top-[10vh] flex flex-col w-full lg:max-w-[30%]">
          <div className="hidden lg:grid grid-cols-3 lg:grid-cols-3 gap-2 mt-4">
            {eventData?.stories.map((card: any, index: any) => (
              <div
                key={index}
                className="snap-center w-full"
                ref={carouselRef}
                onClick={() => {
                  setOpen(true);
                  handleSlideClick(index);
                }}
              >
                <EventSlides title={card.caption} posterUrl={card.posterUrl} />
              </div>
            ))}
          </div>{" "}
          <div className="mt-4 hidden lg:flex justify-between gap-10">
            <div className="flex flex-col text-center items-center">
              <div className="font-medium text-[1.2rem]">
                {eventData?.duration ? `${eventData.duration}` : "4h"}
              </div>
              <div className="text-gray-700 text-[0.9rem]">Duration</div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="font-medium text-[1.2rem]">
                {eventData?.genres[0]}{" "}
              </div>
              <div className="text-gray-700 text-[0.9rem]">Genre</div>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="font-medium text-[1.2rem]">
                {eventData?.ageRestriction}
              </div>
              <div className="text-gray-700 text-[0.9rem]">Age Restriction</div>
            </div>
          </div>
          {canBookTicket && eventData && (
            <div className="lg:mt-4 space-y-2 bg-white">
              <BookTicketsDialog eventsData={eventData}>
                <button className="bg-black w-full text-white font-medium py-2 px-4 rounded">
                  Get Tickets
                </button>
              </BookTicketsDialog>
            </div>
          )}
          {!canBookTicket && (
            <div className="lg:mt-4 space-y-2">
              <div className="bg-black w-full text-white font-medium py-2 px-4 rounded text-center">
                Sold Out!
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="lg:px-[5%] xl:px-[7%] px-[8vw] py-[2rem] flex w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between mt-4">
            <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
              Check out more Events
            </div>
            <div className="hover:font-medium hover:underline ">
              <Link to="">See More</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:hidden gap-2">
            {event.upcomingEvents.slice(0, 1).map((card, index) => (
              <EventCard key={index} {...card} />
            ))}
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4 lg:hidden">
            {event.upcomingEvents.slice(0, 2).map((card, index) => (
              <EventCard key={index} {...card} />
            ))}
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-4 2xl:hidden">
            {event.upcomingEvents.slice(0, 4).map((card, index) => (
              <EventCard key={index} {...card} />
            ))}
          </div>
          <div className="hidden 2xl:grid grid-cols-4 gap-4">
            {event.upcomingEvents.slice(0, 4).map((card, index) => (
              <EventCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default EventPage;
