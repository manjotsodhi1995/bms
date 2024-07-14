import ticket from "../../assets/organizer/ticketing.png";
import pt from "../../assets/organizer/promote.png";
import em from "../../assets/organizer/engage_monitor.png";

const MidSection = () => {
  return (
    <>
      <div className="flex items-center justify-center p-4 mb-6">
        <div className="max-w-screen-lg w-full">
          <h2 className="title text-3xl md:text-5xl font-semibold mb-4 text-center">
            Ticketing
          </h2>
          <section className="p-8 mb-10 bg-white flex flex-col md:flex-row items-center rounded-lg ">
            <img
              src={ticket}
              alt="ticketing"
              className="w-80 h-80 rounded-lg mb-8 md:mb-0"
            />
            <div className="md:ml-8 text-center md:text-left text-gray-500">
              <p className="mb-8">
                Select between individual, group or Table options.
              </p>
              <p className="mb-8">
                Set up different ticket categories such as early bird, VIP, and
                general admission. Define pricing, availability, and any special
                offers or discounts under voucher section.
              </p>
              <p className="font-semibold mb-2 text-lg text-black">
                Automate Sales with Actions
              </p>
              <p className="mb-4">
                <strong className="text-black text-base">
                  Create & Adjust -{" "}
                </strong>
                Ticket releases and implement surge pricing to optimize sales as
                the event date approaches.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 mb-6">
        <div className="max-w-screen-lg w-full">
          <h2 className="title text-3xl md:text-5xl font-semibold mb-4 text-center">
            Promote Your Event
          </h2>
          <section className="p-8 mb-10 bg-white flex flex-col-reverse md:flex-row items-center rounded-lg ">
            <div className="md:mr-8 text-center md:text-left ">
              <p className="font-semibold text-lg mb-2">
                Run Effective Campaign Emails
              </p>
              <p className="mb-8 text-gray-500 ">
                Create and send targeted email campaigns to specific segments of
                your audience. Personalize messages based on attendee
                preferences, previous event participation, or geographic
                location.
              </p>
              <p className="font-semibold text-lg mb-2">
                Reach Your Audience with Text Blasts via Email and WhatsApp
              </p>
              <p className="mb-8 text-gray-500">
                Craft personalized email campaigns to engage your audience,
                share event details, and send reminders & Leverage the power of
                instant messaging.
              </p>
              <p className="font-semibold text-lg mb-2">
                Leverage Our Affiliate Program
              </p>
              <p className="mb-4 text-gray-500">
                By tapping into the networks of affiliates, you can reach a
                broader audience and boost ticket sales. Affiliates promote your
                event through social media, blogs, and other channels, bringing
                in more attendees.
              </p>
            </div>
            <img
              src={pt}
              alt="ticketing"
              className="w-80 h-80 rounded-lg mb-8 md:mb-0"
            />
          </section>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 mb-6">
        <div className="max-w-screen-lg w-full">
          <h2 className="title text-3xl md:text-5xl font-semibold mb-4 text-center">
            Engage and Monitor Analytics
          </h2>
          <section className="p-8 mb-10 bg-white flex flex-col md:flex-row items-center rounded-lg ">
            <img
              src={em}
              alt="ticketing"
              className="w-80 h-80 rounded-lg mb-8 md:mb-0"
            />
            <div className="md:ml-8 text-center md:text-left text-gray-500">
              <p className="font-semibold mb-2 text-lg text-black">
                Real Time ave Analytics
              </p>
              <p className="mb-8">
                Monitor registrations, ticket sales, and attendee engagement
                with our real-time analytics dashboard, making data-driven
                decisions easy.
              </p>
              <p className="font-semibold mb-2 text-lg text-black">
                Traffic Monitoring
              </p>
              <p className="mb-8">
                Keep an eye on your event page traffic with real-time analytics.
                See how many visitors your page receives and identify peak times
                of interest.
              </p>
              <p className="font-semibold mb-2 text-lg text-black">
                Source Tracking
              </p>
              <p className="mb-8">
                Determine where your traffic is coming from whether it’s social
                media, email campaigns, or affiliate links. Use this information
                to refine your promotional strategies and focus on the most
                effective channels.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MidSection;
