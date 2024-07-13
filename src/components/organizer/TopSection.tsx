import tic from "../../assets/organizer/setupevent.png";
import bg from "../../assets/organizer/BG.png";

const TopSection = () => {
  return (
    <>
      <section
        className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center pb-14"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Create Memorable Events
          </h1>
          <p className="text-xs text-white mb-10">
            with our Advanced Customization Options
          </p>
          <p className="text-xl text-white leading-relaxed mt-8">
            Start planning your next successful event now and experience the
            benefits of our comprehensive platform.
          </p>
        </div>
      </section>
      <div className="flex items-center justify-center pt-10 p-4 my-6">
        <div className="max-w-screen-lg w-full">
          <h2 className="title text-3xl md:text-5xl font-semibold mb-4 text-center">
            Set Up Your Event
          </h2>
          <section className="p-8 md:px-32 mb-10 bg-white flex flex-col md:flex-row items-center rounded-lg ">
            <img
              src={tic}
              alt="ticketing"
              className="w-80 h-96 rounded-lg mb-8 md:mb-0"
            />
            <div className="md:ml-8 text-center md:text-left text-gray-500">
              <p className="font-semibold mb-6 text-lg text-black">
                Event Details
              </p>
              <p className="mb-8">
                Enter basic information such as event name, date, time, and
                location.
              </p>
              <p className="font-semibold mb-2 text-lg text-black">
                Check out Customization Options
              </p>
              <p className="mb-8">
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
