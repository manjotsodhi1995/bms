import tic from "../../assets/friends/how_it_works.png";
import bg from "../../assets/friends/BG.png";
import { Button } from "@mui/material";

const TopSection = () => {
  return (
    <>
      <section
        className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center pb-3 mb-28"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-center max-w-6xl px-4 md:px-0">
          <h1 className="text-2xl md:text-5xl font-medium text-white">
            Unlock Earnings with Event Representation!
          </h1>
          <p className="hidden md:block md:text-2xl text-white space-y-1 leading-relaxed my-12 px-8">
            With our exciting event referral program, you can earn commissions
            simply by recommending awesome events to your friends and family.
          </p>
          <p className="md:hidden text-sm text-white leading-relaxed my-10 px-3">
            With our exciting event referral program, you can earn commissions
            simply by recommending awesome events to your friends and family.
          </p>
          <Button
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              padding: "10px 40px",
              fontSize: "16px",
              color: "black",
              backgroundColor: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s",
            }}
          >
            Get Started
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ marginLeft: "8px", width: "20px", height: "20px" }}
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Button>
        </div>
      </section>
      <div className="flex flex-col md:flex-row p-4 md:p-8 px-4 md:px-20 mb-32 space-y-6 md:space-y-0">
        <div className="hidden md:block w-full md:w-1/2 p-4">
          <img
            src={tic}
            alt="How it works"
            className="rounded-2xl shadow-md w-full"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="bg-color text-5xl md:text-6xl text-center font-bold mb-8">
            How it works
          </h2>
          <div className="space-y-5">
            <div className="flex space-x-6 card bg-gray-200 rounded-xl p-5 md:p-12">
              <div className="text-2xl md:text-4xl font-medium text-black">
                01
              </div>
              <div>
                <h3 className="font-medium text-lg mb-5">
                  Join Our Referral Program
                </h3>
                <p className="text-gray-600 text-xs md:text-base">
                  Sign up for our referral program quickly and easily. Once
                  you’re a member, select events with representation turned on
                  by the host.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 card bg-gray-200 rounded-xl p-5 md:p-12">
              <div className="text-2xl md:text-4xl font-medium text-black">
                02
              </div>
              <div>
                <h3 className="font-medium text-lg">Share the Excitement</h3>
                <p className="text-gray-600 text-xs md:text-base">
                  Share your referral link with friends and family through
                  social media, email, or direct messages. You can promote a
                  wide range of events, ensuring there’s something that appeals
                  to everyone in your network.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 card bg-gray-200 rounded-xl p-5 md:p-12">
              <div className="text-2xl md:text-4xl font-medium text-black">
                03
              </div>
              <div>
                <h3 className="font-medium text-lg mb-3">
                  Track Your Referrals
                </h3>
                <p className="text-gray-600 text-xs md:text-base">
                  Our user-friendly dashboard allows you to monitor your
                  referrals and see who has purchased tickets through your link
                  in real-time.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 card bg-gray-200 rounded-xl p-5 md:p-12">
              <div className="text-2xl md:text-4xl font-medium text-black">
                04
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Earn Commissions</h3>
                <p className="text-gray-600 text-xs md:text-base">
                  For every ticket sold through your referral link, you'll earn
                  a generous commission. The more tickets your friends buy, the
                  more you earn!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
