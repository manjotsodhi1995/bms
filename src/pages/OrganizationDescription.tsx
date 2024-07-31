import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utils/middleware";
import { useStore } from "../hooks/useStore";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Footer from "../components/Footer";
import { API } from "@/api";
import { Loader2 } from "lucide-react";
import { useFollowingQuery } from "@/api/query/useFollowingQuery";
interface od {
  name: string;
  slug: string;
  logoUrl: string;
}
const OrganizationProfile = observer(() => {
  const {
    root: { event },
  } = useStore();
  const { orgId } = useParams();
  const navigate = useNavigate();
  const [organizationData, setOrganizationData] = useState<od | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    root: { auth },
  } = useStore();
  const { data: isFollowing, mutation: followMutation } =
    useFollowingQuery(orgId);
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
        const response = await axios.get(`${API.organizers.getById}/${orgId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
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
      {/* <Navbar /> */}
      {!isLoading && organizationData && (
        <div className="lg:px-[5%] xl:px-[7%] px-[8vw] w-screen flex flex-col gap-4 overflow-x-hidden">
          <div className="w-full flex flex-col items-center text-center gap-2">
            <div className="flex flex-col gap-4">
              <div className="items-center flex justify-center ">
                <img
                  src={`${organizationData.logoUrl}`}
                  className="w-[200px] h-[200px] rounded-full"
                  alt=""
                />
              </div>
              <div className="font-bold text-[1.5rem] md:text-[2rem]">
                {organizationData.name}
              </div>
            </div>
            <div className="lg:w-[60%]">{organizationData.slug}</div>
          </div>
          <div className="flex justify-center gap-6">
            <button
              className="flex gap-2 px-12 py-2 rounded-lg border bg-black text-white"
              onClick={() => followMutation.mutate()}
              disabled={followMutation.isPending}
            >
              {isFollowing ? "Following" : "Follow"}
              {followMutation.isPending && <Loader2 className="animate-spin" />}
            </button>
          </div>
          <div className="flex flex-col gap-4 w-full py-8">
            <div className="flex justify-between mt-4">
              <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
                Upcoming Events
              </div>
              <div className="hover:font-medium hover:underline ">
                <Link to="">See More</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:hidden gap-2">
              {event.upcomingEvents.slice(0, 2).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
            <div className="hidden md:grid grid-cols-3 lg:hidden">
              {event.upcomingEvents.slice(0, 3).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
            <div className="hidden lg:grid grid-cols-4">
              {event.upcomingEvents.slice(0, 4).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full py-8">
            <div className="flex justify-between mt-4">
              <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
                Check out more Events
              </div>
              <div className="hover:font-medium hover:underline ">
                <Link to="">See More</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:hidden gap-2">
              {event.upcomingEvents.slice(0, 2).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
            <div className="hidden md:grid grid-cols-3 lg:hidden">
              {event.upcomingEvents.slice(0, 3).map((card, index) => (
                <EventCard key={index} {...card} />
              ))}
            </div>
            <div className="hidden lg:grid grid-cols-4">
              {event.upcomingEvents.slice(0, 4).map((card, index) => (
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
