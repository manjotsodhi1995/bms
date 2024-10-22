import HomeContainerCard from "@/components/dashboard/HomeContainerCard";
import { fakeEventData } from "@/pages/events/fakedata";
import { formatDate } from "@/utils";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const ReppedInPastDetails = () => {
  const { eventId: _ } = useParams();

  const data = fakeEventData[0];

  const date = useMemo(() => {
    if (!data) return "Sat, Jun 12 - June 13 19:00";

    let start = formatDate(new Date(data.eventStart));
    let end = formatDate(new Date(data.eventEnd));

    return `${start} - ${end}`;
  }, [data]);

  return (
    <div className="flex w-full flex-col gap-6 p-2 md:p-10">
      <HomeContainerCard className="h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-24 md:p-8">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/1cd7/f4dc/9ab46b29cc668c7f4e50b65efdb52bd2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b3G3VQBBMsUKRGyMAsYgNPxkQSxlxUn2Ed8ZPXXECJm19wizFnhVjMQ2cyjeVUubwKZB8cKtL-8NGsZup8AFZOyIc5C-eVNwA5We4IOkDVwZHdi0qoRRCpOfwSO6A-pSmwtMy4ds92B1KsZiUuafeTcmnY5qeqYI5C5g3YZYurpDkYfTepAq25sQi9MO7EDtRqKPecy4OGoW5j3KNcp7Fsq6SLv95LjAlWZefmRQSQe1d8VmMtE0P7Mqr7GMi0YGqethkfIajjureZ4gJDRFElnD93w~uEpmASq7nFC1MHlwiy33AB41c2hmO0tkrz2uw-QnUKawD1qz-GVOm4sqDw__"
              className="w-full h-[40vh] object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6 justify-center 2xl:text-xl">
            <span className="w-fit border border-black px-2 rounded-full py-1">
              {data.eventCategories[0].categoryName}
            </span>
            <span>{data.title}</span>
            <div className="flex flex-col gap-2 max-w-xl">
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
                      fill="black"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-[1.3rem]">
                    {data?.venueAddress.name}
                  </div>
                  <div className="text-gray-700">
                    {" "}
                    {data?.venueAddress.city},{data?.venueAddress.country},
                    {data?.venueAddress.zipcode}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
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
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text-gray-700">{date}</div>
              </div>
              <p className="mt-4 flex w-full gap-4 items-center font-medium text-[1.3rem]">
                <span>Total commission earned:</span>
                <span>$456.00</span>
              </p>
              <button className="mt-2 flex items-center justify-center gap-2 bg-black w-full text-white py-2 px-4 rounded-lg">
                View participant discussion
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5003 13.5 19.5003C13.301 19.5003 13.1101 19.4213 12.9694 19.2806C12.8286 19.1398 12.7496 18.949 12.7496 18.7499C12.7496 18.5509 12.8286 18.36 12.9694 18.2193L18.4397 12.7499H3.75C3.55109 12.7499 3.36032 12.6709 3.21967 12.5303C3.07902 12.3896 3 12.1988 3 11.9999C3 11.801 3.07902 11.6103 3.21967 11.4696C3.36032 11.3289 3.55109 11.2499 3.75 11.2499H18.4397L12.9694 5.78055C12.8286 5.63982 12.7496 5.44895 12.7496 5.24993C12.7496 5.05091 12.8286 4.86003 12.9694 4.7193C13.1101 4.57857 13.301 4.49951 13.5 4.49951C13.699 4.49951 13.8899 4.57857 14.0306 4.7193L20.7806 11.4693C20.8504 11.539 20.9057 11.6217 20.9434 11.7127C20.9812 11.8038 21.0006 11.9014 21.0006 11.9999C21.0006 12.0985 20.9812 12.1961 20.9434 12.2871C20.9057 12.3782 20.8504 12.4609 20.7806 12.5306Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </HomeContainerCard>
      <h2 className="text-2xl md:text-3xl font-semibold">Tickets</h2>

      <HomeContainerCard className="flex w-full flex-col h-full justify-between p-4 md:p-14">
        <div className="flex w-full items-center justify-between">
          <p className="text-[#60769D] font-medium text-2xl">Final Round</p>
          <span className="bg-[#BA1818] text-white px-4 py-1 rounded-lg">
            Exipred
          </span>
        </div>

        <div className="flex w-full font-[600] text-xl items-center justify-between mt-4">
          <span>Price</span>
          <span className="text-[#989898]">$34.00</span>
        </div>

        <div className="flex w-full font-[600] text-xl items-center justify-between">
          <span>Tickets Sold</span>
          <span className="text-[#989898]">23/56</span>
        </div>

        <div className="flex w-full font-[600] text-xl items-center justify-between">
          <span>Revenue</span>
          <span>$654.00</span>
        </div>
      </HomeContainerCard>

      <HomeContainerCard className="flex w-full flex-col h-full justify-between p-4 md:p-14">
        <div className="flex w-full items-center justify-between">
          <p className="text-[#60769D] font-medium text-2xl">Final Round</p>
          <span className="bg-[#BA1818] text-white px-4 py-1 rounded-lg">
            Exipred
          </span>
        </div>

        <div className="flex w-full font-[600] text-xl items-center justify-between mt-4">
          <span>Price</span>
          <span className="text-[#989898]">$34.00</span>
        </div>

        <div className="flex w-full font-[600] text-xl items-center justify-between">
          <span>Tickets Sold</span>
          <span className="text-[#989898]">23/56</span>
        </div>

        <div className="flex w-full font-[600] text-xl items-center justify-between">
          <span>Revenue</span>
          <span>$654.00</span>
        </div>
      </HomeContainerCard>

      <HomeContainerCard className="flex w-full flex-col h-full justify-between p-4 md:p-14">
        <div className="flex w-full items-center justify-between">
          <p className="text-[#60769D] font-medium text-2xl">Final Round</p>
          <span className="bg-[#BA1818] text-white px-4 py-1 rounded-lg">
            Exipred
          </span>
        </div>

        <div className="flex w-full font-[600] text-xl items-center justify-between mt-4">
          <span>Price</span>
          <span className="text-[#989898]">$34.00</span>
        </div>

        <div className="flex w-full font-[600] text-xl items-center justify-between">
          <span>Tickets Sold</span>
          <span className="text-[#989898]">23/56</span>
        </div>

        <div className="flex w-full font-[600] text-xl items-center justify-between">
          <span>Revenue</span>
          <span>$654.00</span>
        </div>
      </HomeContainerCard>
    </div>
  );
};

export default ReppedInPastDetails;
