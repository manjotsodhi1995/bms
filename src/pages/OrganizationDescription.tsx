import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utils/middleware";
import Navbar from "../components/Navbar";
import { useStore } from "../hooks/useStore";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Footer from "../components/Footer";
interface od{
  name: string;
  slug: string;
  logoUrl: string;
}
const OrganizationProfile = observer(() => {
  const { orgId } = useParams();
  const navigate = useNavigate();
  const [organizationData, setOrganizationData] = useState<od|null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    root: { auth },
  } = useStore();
  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/");
    }
  });
  const accessToken = auth.accessToken;
  const eventData = [
    {
      title: "Rhythms Live",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
      date: "DEC 24",
      location: "Boston",
    },
    {
      title: "Rhythms Live",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
      date: "DEC 24",
      location: "Boston",
    },
    {
      title: "Rhythms Live",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
      date: "DEC 24",
      location: "Boston",
    },
    {
      title: "Rhythms Live",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      imageUrl:
        "https://th.bing.com/th/id/R.17764304cf7ef9020b506960d52d2471?rik=NQouPpwX1%2bVVOA&pid=ImgRaw&r=0",
      date: "DEC 24",
      location: "Boston",
    },
  ];
  useEffect(() => {
    const fetchOrg = async () => {
      try {
        const response = await axios.get(
          `http://3.253.146.194:3001/api/v1/organizers/getorgbyid/${orgId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setOrganizationData(response.data.data);
      } catch (error: any) {
        setError(error.message || "An error occurred while fetching data");
      } finally {
        setIsLoading(false);
      }
    };
    console.log(error);
    fetchOrg();
  }, [orgId]);
  return (
    <div>
      <Navbar />
      {!isLoading && organizationData && (
        <div className="lg:px-[5%] xl:px-[7%] px-[8vw] w-screen flex flex-col gap-4 overflow-x-hidden">
          <div className="w-full flex flex-col items-center text-center gap-6">
            <div className="flex flex-col gap-4">
              <div className="items-center flex justify-center">
                <img src={`${organizationData.logoUrl}`} alt="" />
              </div>
              <div className="font-bold text-[1.5rem] md:text-[2rem]">
                {organizationData.name}
              </div>
            </div>
            <div className="lg:w-[60%]">{organizationData.slug}</div>
          </div>
          <div className="flex justify-center gap-6">
            <button className="md:px-16 px-8 py-2 bg-gray-200 rounded-lg">
              Follow
            </button>
            <button className="md:px-16 px-8 py-2 bg-black rounded-lg text-white">
              Message
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between mt-4">
              <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
                Upcoming Events
              </div>
              <div className="hover:font-medium hover:underline ">
                <Link to="">See More</Link>
              </div>
            </div>
            <div className="flex justify-around md:hidden gap-2">
              {eventData.slice(0, 2).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
            <div className="justify-around hidden md:flex lg:hidden">
              {eventData.slice(0, 3).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
            <div className="justify-around hidden lg:flex">
              {eventData.slice(0, 4).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 pb-10">
            <div className="flex justify-between mt-4">
              <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
                Past Events
              </div>
              <div className="hover:font-medium hover:underline ">
                <Link to="">See More</Link>
              </div>
            </div>
            <div className="flex justify-around md:hidden gap-2">
              {eventData.slice(0, 2).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
            <div className="justify-around hidden md:flex lg:hidden">
              {eventData.slice(0, 3).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
            <div className="justify-around hidden lg:flex">
              {eventData.slice(0, 4).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
});

export default OrganizationProfile;
