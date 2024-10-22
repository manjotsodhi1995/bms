import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/middleware";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Footer from "../components/Footer";
import { API } from "@/api";
import { Loader2 } from "lucide-react";
import { useFollowingQuery } from "@/api/query/useFollowingQuery";

const OrganizationProfile = observer(() => {
  const { orgId } = useParams();
  const [organizationData, setOrganizationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { data: isFollowing, mutation: followMutation } =
    useFollowingQuery(orgId);

  useEffect(() => {
    const fetchOrg = async () => {
      try {
        const response = await axios.get(`${API.organizers.getById}/${orgId}`);
        setOrganizationData(response.data.data);
        console.log(response.data.data);
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
                  loading="lazy"
                />
              </div>
              <div className="font-bold text-[1.5rem] md:text-[2rem]">
                {organizationData.name}
              </div>
            </div>
            <div className="lg:w-[60%]">{organizationData.slug}</div>
            <div className="flex justify-center items-center">
              {organizationData.instagramAccUrl ? (
                <div>
                  <a
                    href={organizationData.instagramAccUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 101.996 102"
                      id="instagram"
                    >
                      <defs>
                        <radialGradient
                          id="a"
                          cx="13.551"
                          cy="102.482"
                          r="133.147"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".09" stop-color="#fa8f21"></stop>
                          <stop offset=".78" stop-color="#d82d7e"></stop>
                        </radialGradient>
                        <radialGradient
                          id="b"
                          cx="61.859"
                          cy="107.051"
                          r="104.938"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset=".64"
                            stop-color="#8c3aaa"
                            stop-opacity="0"
                          ></stop>
                          <stop offset="1" stop-color="#8c3aaa"></stop>
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#a)"
                        d="M34,51A17,17,0,1,1,51,68,17,17,0,0,1,34,51m-9.191,0A26.188,26.188,0,1,0,51,24.812,26.187,26.187,0,0,0,24.812,51M72.1,23.774a6.12,6.12,0,1,0,6.122-6.118h0a6.123,6.123,0,0,0-6.12,6.118M30.4,92.513a28.187,28.187,0,0,1-9.471-1.754,15.85,15.85,0,0,1-5.866-3.815,15.735,15.735,0,0,1-3.815-5.862A28.161,28.161,0,0,1,9.49,71.611c-.247-5.376-.3-6.991-.3-20.61s.053-15.23.3-20.61a28.374,28.374,0,0,1,1.754-9.471,15.85,15.85,0,0,1,3.815-5.866,15.718,15.718,0,0,1,5.866-3.815A28.161,28.161,0,0,1,30.4,9.484c5.376-.247,6.991-.3,20.6-.3s15.23.053,20.61.3a28.373,28.373,0,0,1,9.471,1.754,15.8,15.8,0,0,1,5.866,3.815,15.8,15.8,0,0,1,3.815,5.866,28.162,28.162,0,0,1,1.754,9.471c.247,5.38.3,6.991.3,20.61s-.049,15.23-.3,20.61a28.294,28.294,0,0,1-1.754,9.471,16.886,16.886,0,0,1-9.681,9.677,28.161,28.161,0,0,1-9.471,1.754c-5.376.247-6.991.3-20.61.3s-15.23-.049-20.6-.3M29.974.309A37.4,37.4,0,0,0,17.595,2.678,25.015,25.015,0,0,0,8.56,8.56a24.918,24.918,0,0,0-5.883,9.034A37.407,37.407,0,0,0,.309,29.974C.058,35.412,0,37.15,0,51S.058,66.588.309,72.026A37.405,37.405,0,0,0,2.678,84.405,24.931,24.931,0,0,0,8.56,93.44a25.076,25.076,0,0,0,9.034,5.883,37.43,37.43,0,0,0,12.379,2.369c5.441.247,7.176.309,21.026.309s15.588-.058,21.026-.309a37.405,37.405,0,0,0,12.379-2.369A26.075,26.075,0,0,0,99.322,84.405a37.3,37.3,0,0,0,2.369-12.379c.247-5.442.3-7.176.3-21.026s-.058-15.588-.3-21.026a37.394,37.394,0,0,0-2.369-12.379A25.08,25.08,0,0,0,93.44,8.56a24.955,24.955,0,0,0-9.03-5.883A37.347,37.347,0,0,0,72.03.309C66.593.062,64.854,0,51,0s-15.59.058-21.03.309"
                      ></path>
                      <path
                        fill="url(#b)"
                        d="M34,51A17,17,0,1,1,51,68,17,17,0,0,1,34,51m-9.191,0A26.188,26.188,0,1,0,51,24.812,26.187,26.187,0,0,0,24.812,51M72.1,23.774a6.12,6.12,0,1,0,6.122-6.118h0a6.123,6.123,0,0,0-6.12,6.118M30.4,92.513a28.187,28.187,0,0,1-9.471-1.754,15.85,15.85,0,0,1-5.866-3.815,15.735,15.735,0,0,1-3.815-5.862A28.161,28.161,0,0,1,9.49,71.611c-.247-5.376-.3-6.991-.3-20.61s.053-15.23.3-20.61a28.374,28.374,0,0,1,1.754-9.471,15.85,15.85,0,0,1,3.815-5.866,15.718,15.718,0,0,1,5.866-3.815A28.161,28.161,0,0,1,30.4,9.484c5.376-.247,6.991-.3,20.6-.3s15.23.053,20.61.3a28.373,28.373,0,0,1,9.471,1.754,15.8,15.8,0,0,1,5.866,3.815,15.8,15.8,0,0,1,3.815,5.866,28.162,28.162,0,0,1,1.754,9.471c.247,5.38.3,6.991.3,20.61s-.049,15.23-.3,20.61a28.294,28.294,0,0,1-1.754,9.471,16.886,16.886,0,0,1-9.681,9.677,28.161,28.161,0,0,1-9.471,1.754c-5.376.247-6.991.3-20.61.3s-15.23-.049-20.6-.3M29.974.309A37.4,37.4,0,0,0,17.595,2.678,25.015,25.015,0,0,0,8.56,8.56a24.918,24.918,0,0,0-5.883,9.034A37.407,37.407,0,0,0,.309,29.974C.058,35.412,0,37.15,0,51S.058,66.588.309,72.026A37.405,37.405,0,0,0,2.678,84.405,24.931,24.931,0,0,0,8.56,93.44a25.076,25.076,0,0,0,9.034,5.883,37.43,37.43,0,0,0,12.379,2.369c5.441.247,7.176.309,21.026.309s15.588-.058,21.026-.309a37.405,37.405,0,0,0,12.379-2.369A26.075,26.075,0,0,0,99.322,84.405a37.3,37.3,0,0,0,2.369-12.379c.247-5.442.3-7.176.3-21.026s-.058-15.588-.3-21.026a37.394,37.394,0,0,0-2.369-12.379A25.08,25.08,0,0,0,93.44,8.56a24.955,24.955,0,0,0-9.03-5.883A37.347,37.347,0,0,0,72.03.309C66.593.062,64.854,0,51,0s-15.59.058-21.03.309"
                      ></path>
                    </svg>
                  </a>
                </div>
              ) : (
                <div></div>
              )}
              {organizationData.twitterAccUrl ? (
                <div className="ml-2">
                  <a
                    href={organizationData.twitterAccUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="38"
                      fill="none"
                      viewBox="0 0 512 512"
                      id="twitter"
                    >
                      <g clip-path="url(#clip0_84_15698)">
                        <rect width="40" height="40" fill="#fff" rx="60"></rect>
                        <path
                          fill="#000"
                          d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              ) : (
                <div></div>
              )}
              {organizationData.facebookAccUrl ? (
                <div>
                  <a
                    href={organizationData.facebookAccUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#3F51B5"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                    ></path>
                  </svg>
                  <a />
                </div>
              ) : (
                <div></div>
              )}
            </div>
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
            <div className="flex flex-wrap md:hidden gap-2">
              {organizationData?.upcomingEvents
                .slice(0, 1)
                .map((card: any, index: number) => (
                  <EventCard key={index} {...card} />
                ))}
            </div>
            <div className="hidden md:flex flex-wrap lg:hidden gap-4">
              {organizationData?.upcomingEvents
                .slice(0, 2)
                .map((card: any, index: number) => (
                  <EventCard key={index} {...card} />
                ))}
            </div>
            <div className="hidden lg:flex flex-wrap gap-4">
              {organizationData?.upcomingEvents
                .slice(0, 4)
                .map((card: any, index: number) => (
                  <EventCard key={index} {...card} />
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full py-8">
            <div className="flex justify-between mt-4">
              <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
                Past Events
              </div>
              <div className="hover:font-medium hover:underline ">
                <Link to="">See More</Link>
              </div>
            </div>
            <div className="flex flex-wrap md:hidden gap-2">
              {organizationData?.pastEvents
                .slice(0, 1)
                .map((card: any, index: number) => (
                  <EventCard key={index} {...card} />
                ))}
            </div>
            <div className="hidden md:flex flex-wrap lg:hidden gap-4">
              {organizationData?.pastEvents
                .slice(0, 2)
                .map((card: any, index: number) => (
                  <EventCard key={index} {...card} />
                ))}
            </div>
            <div className="hidden lg:flex flex-wrap gap-4">
              {organizationData?.pastEvents
                .slice(0, 3)
                .map((card: any, index: number) => (
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
