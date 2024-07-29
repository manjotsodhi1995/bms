import tic from "../../assets/friends/how_it_works.png";
import bg from "../../assets/friends/BG.png";

const TopSection = () => {
  return (
    <>
      <section
        className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center pb-3 mb-28"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="text-center max-w-6xl px-4 md:px-0">
          <h1 className="text-2xl md:text-5xl font-medium text-white">
            Transform Connections into Cash with Kafsco!
          </h1>
          <p className="text-sm md:block md:text-2xl text-white space-y-1 leading-relaxed my-12 md:px-32">
            Are you well-connected in the event organizing world? If yes, we
            offer you the opportunity to earn commissions by bringing event
            organizers to our platform. Not only can you earn money, but you
            also have the flexibility to negotiate your commission rates
            directly with us.
          </p>
        </div>
      </section>
      <div className="flex flex-col md:flex-row p-4 md:p-8 px-4 md:px-20 mb-32 space-y-6 md:space-y-0">
        <div className="hidden md:block w-full md:w-1/2 p-4">
          <img
            src={tic}
            alt="How it works"
            className="rounded-2xl shadow-md w-full"
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
                  you're a member, select events with representation turned on
                  by host.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 card bg-gray-200 rounded-xl p-5 md:p-12">
              <div className="text-2xl md:text-4xl font-medium text-black">
                02
              </div>
              <div>
                <h3 className="font-medium text-lg">Refer Organizers</h3>
                <p className="text-gray-600 text-xs md:text-base">
                  Introduce event organizers with us. Share the benefits of our
                  platform, such as user-friendly event management tools,
                  extensive audience reach, and excellent support services.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 card bg-gray-200 rounded-xl p-5 md:p-12">
              <div className="text-2xl md:text-4xl font-medium text-black">
                03
              </div>
              <div>
                <h3 className="font-medium text-lg mb-3">
                  Negotiate Your Commission
                </h3>
                <p className="text-gray-600 text-xs md:text-base">
                  Get in touch with us to discuss and negotiate your commission
                  rates. We value our affiliates and are open to flexible
                  agreements that benefit both parties.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 card bg-gray-200 rounded-xl p-5 md:p-12">
              <div className="text-2xl md:text-4xl font-medium text-black">
                04
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">
                  Track Your Referrals
                </h3>
                <p className="text-gray-600 text-xs md:text-base">
                  Our user-friendly dashboard allows you to monitor your
                  referrals and see who has purchased tickets through your link
                  in real-time.
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
