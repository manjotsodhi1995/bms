import HomeContainerCard from "@/components/dashboard/HomeContainerCard";
import { Avatar } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const data = {
  image:
    "https://s3-alpha-sig.figma.com/img/6e1f/744a/fb76a9e104887043296183a0554f752f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYnKWJZiIumZIWj8EYZ5ySHYGstpz5~KQokS2amkXlDwJ-4ACE11f4ZYH8nJ07bbnAtzb4vGNNNisrkpM-RbZsW1S5HGNxVWD-GiBqZ4txmDKaWcsTNQLnF7rNrNrKEVSajRTSAy7WpDRi8gnmCn7J8rC~seSabiVjp9w9Y4bmWdG2eRUdHauMQr-Dpp5D4gm5O5DhydNEJs4Ca1D5BoPQ24iPkMrJPxaxY5Xj8rGKqe6FWMxce~x2WO~V1TgRqVAdKpm5Ig~pQSWkQy1iLio2MC~fr-NYE~YIi-6YAynKbjEdvTrAStBkn8Tg~PJbwePj54lFwp86C8YOcXCv1Qaw__",
  name: "Brooklyn Simmons",
  following: 2000,
  followers: 120,
  events: 20,
  about:
    "Lorem ipsum dolor sit amet consectetur. Rhoncus sollicitudin senectus elit amet. Risus eu morbi id non aliquam id tortor magnis. Orci arcu risus pulvinar mauris semper eget nascetur sed arcu. Non ultricies risus lectus convallis pretium id mattis purus odio. Lorem ipsum dolor sit amet consectetur. Rhoncus sollicitudin senectus elit amet. Risus eu morbi id non aliquam id tortor magnis. Orci arcu risus pulvinar mauris semper eget nascetur sed arcu. Non ultricies risus lectus convallis pretium id mattis purus odio. Lorem ipsum dolor sit amet consectetur. Rhoncus sollicitudin senectus elit amet. Risus eu morbi id non aliquam id tortor magnis. Orci arcu risus pulvinar mauris semper eget nascetur sed arcu. Non ultricies risus lectus convallis pretium id mattis purus odio.",
  commission_earned: 4300.0,
  revenue_generated: 6655.0,
};

const OrganizerDetails = () => {
  const { id } = useParams();

  return (
    <div className="h-full w-full px-4 md:px-12 flex flex-col gap-6 items-center">
      <Avatar
        src={data.image}
        sx={{
          width: 190,
          height: 190,
        }}
      />
      <h2 className="text-2xl md:text-4xl font-semibold">{data.name}</h2>

      <div className="flex gap-10 font-semibold text-lg">
        <p className="flex flex-col gap-1 items-center">
          <span className="text-xl">{data.following}</span>
          <span>Following</span>
        </p>

        <p className="flex flex-col gap-1 items-center">
          <span className="text-xl">{data.followers}</span>
          <span>Followers</span>
        </p>

        <p className="flex flex-col gap-1 items-center">
          <span className="text-xl">{data.events}</span>
          <span>Events</span>
        </p>
      </div>

      <button className="bg-[#60769D] px-4 py-2 text-white rounded-lg w-1/3">
        Follow
      </button>

      <div className="text-center">
        <h3 className="text-xl font-semibold">About</h3>
        <p className="text-md font-medium">{data.about}</p>
      </div>

      <div className="flex w-full flex-col md:flex-row gap-10">
        <HomeContainerCard className="flex w-full flex-col h-full justify-between p-14">
          <p className="font-medium text-xl">Comission Earned</p>
          <span className="text-[#60769D] font-[700] text-4xl">
            ${data.commission_earned}
          </span>
        </HomeContainerCard>
        <HomeContainerCard className="flex w-full flex-col h-full justify-between p-14">
          <p className="font-medium text-xl">Revenue generated</p>
          <span className="text-[#60769D] font-[700] text-4xl">
            ${data.revenue_generated}
          </span>
        </HomeContainerCard>
      </div>

      <Link
        to={`/dashboard/organizer/${id}/events`}
        className="w-1/3 bg-[#964B7D] text-center py-2 rounded-lg mt-10 mb-20 text-white"
      >
        View past & upcoming events
      </Link>
    </div>
  );
};

export default OrganizerDetails;
