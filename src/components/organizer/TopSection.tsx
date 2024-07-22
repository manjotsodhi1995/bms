import tic from "../../assets/organizer/setupevent.png";
import bg from "../../assets/organizer/BG.png";

const TopSection = () => {
  return (
    <>
      <section
        className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center pb-14"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="text-center max-w-6xl md:pb-20">
          <h1 className="title text-4xl md:text-5xl font-medium text-white mb-4">
            Create Memorable Events
          </h1>
          <p className="md:text-sm text-xs text-white mb-4">
            with our Advanced Customization Options
          </p>
          <p className="text-xl md:text-2xl text-white leading-relaxed mt-8">
            Start planning your next successful event now and experience the
            benefits of our comprehensive platform.
          </p>
        </div>
      </section>
      <div className="flex items-center justify-center pt-14 md:p-4 my-6">
        <div className="max-w-screen-lg w-full">
          <h2 className="title text-3xl md:text-6xl font-semibold mb-4 text-center">
            Set Up Your Event
          </h2>
          <section className="p-8 md:px-32 mb-10 flex flex-col md:flex-row items-center rounded-lg ">
            <img
              src={tic}
              alt="ticketing"
              className="md:w-96 md:h-3/4 h-96 rounded-3xl mb-8 md:mb-0"
            />
            <div className="md:ml-20 text-center md:text-left text-gray-600">
              <p className="font-medium mb-4 text-2xl text-black">
                Event Details
              </p>
              <p className="mb-10 md:mb-20">
                Enter basic information such as event name, date, time, and
                location.
              </p>
              <p className="font-medium md:pt-5 mb-2 text-2xl text-black">
                Check out Customization Options
              </p>
              <p>
                Tailor your event with specific settings, including ticket
                types, pricing strategies, and attendee limits. You have full
                control to customize every aspect to fit your needs.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TopSection;
