import bg from "../../assets/welcome/bg.svg";
import growth from "../../assets/welcome/growth.svg";
import gateway from "../../assets/welcome/weekend.svg";
import purchase from "../../assets/welcome/purchaseTick.svg";
import exchange from "../../assets/welcome/quick.svg";
import scan from "../../assets/welcome/scan.svg";

const TopSection = () => {
  return (
    <>
      <section
        className="flex justify-center items-center bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `url(${bg})`,
        }}>
        <div className="flex lg:flex-row flex-col items-center space-x-8 lg:space-x-20 max-w-7xl w-full px-2 lg:px-10">
          <div className="flex flex-col lg:pb-96 relative">
            <div className="flex flex-row items-center space-x-2 lg:space-x-10 ml-0 lg:ml-20">
              <img
                src={growth}
                alt="Growth"
                className="w-48 md:w-64 lg:w-full mt-28 h-auto object-cover"
              />
              <img
                src={gateway}
                alt="Weekend Getaway"
                className="w-40 md:w-64 lg:w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col items-center relative mt-4">
              <img
                src={exchange}
                alt="Quick Exchange"
                className="w-40 md:w-56 lg:w-auto ml-16 h-auto object-cover"
              />

              <div className="absolute top-[-100px] right-[20px] lg:right-[-20px]">
                <img
                  src={purchase}
                  alt="Purchase Tickets"
                  className="w-32 md:w-44 h-auto rounded-md"
                />
              </div>

              <div className="absolute top-12 left-[12px] md:left-[-60px]">
                <img src={scan} alt="Scan" className="w-32 md:w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:max-w-xl mt-20 lg:mt-8 mb-96 ">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-white leading-normal">
              Streamline your Event Planning!
            </h1>
            <p className="mt-4 text-lg text-white leading-relaxed">
              All-in-one solution for effortlessly hosting events of any scale.
            </p>
            <button className="bg-black rounded-lg py-3 px-16 mt-6 text-white">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSection;
