import p1 from "../../assets/home/partner/shopify.png";
import gp from "../../assets/home/Google Play Store Button.png"
import as from "../../assets/home/App Store Button.png"
import fb from "../../assets/socials/ic_baseline-facebook.png"
import ig from "../../assets/socials/mdi_instagram.png";
import tw from "../../assets/socials/mdi_twitter.png";
function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full lg:px-[10%] px-[8vw] flex flex-col gap-4 md:py-[8vw] py-[16vw] items-center align-middle">
        <div className="flex justify-between md:flex-row flex-col md:text-left text-center w-full">
          <div>
            <div className="md:text-[2.5rem] 2xl:text-[3rem] text-[1.4rem]">
              Unlock the world of Events.
            </div>
            <div className="font-medium text-[1rem] md:text-[1.7rem] 2xl:text-[2rem]">
              Tickets Made Simple
            </div>
          </div>
          <div className="text-[3rem] font-bold">Logo.</div>
        </div>
      </div>
      <div className="w-full lg:px-[10%] px-[8vw] flex flex-col md:gap-16 gap-6 mb-16">
        <div className="font-semibold text-[2rem] text-[#A76169] flex justify-center">
          Our Partners
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 place-items-center">
          <img src={p1} alt="" />
          <img src={p1} alt="" />
          <img src={p1} alt="" />
          <img src={p1} alt="" />
          <img src={p1} alt="" />
        </div>
      </div>
      <div className="w-[80vw] bg-black h-[2px] mb-16"></div>
      <div className="w-full lg:px-[10%] px-[8vw] flex flex-col gap-4 items-center align-middle pb-20">
        <div className="flex justify-between md:flex-row flex-col md:text-left text-center w-full">
          <div className="flex flex-col gap-4">
            <div className="md:text-[2.5rem] 2xl:text-[3rem] text-[1.8rem] font-semibold">
              JOIN US
            </div>
            <div className="flex justify-between md:flex-row flex-col gap-8">
              <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] md:w-[40%]">
                Join our growing community of event enthusiasts and let Wave be
                your ultimate ticketing companion. Your next unforgettable
                experience is just a tap away!
              </div>

              <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] md:w-[50%]">
                Don’t miss out on the events that make life memorable! Download
                Wave now and embark on a hassle-free journey to discover and
                attend the events you love. Whether you’re a seasoned event-goer
                or a first-time attendance, our intuitive app will ensure that
                every ticket purchasing experience is a delightful one.
              </div>
            </div>
            <div className="flex justify-between md:flex-row flex-col gap-8 items-center">
              <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] md:w-[40%]">
                <div>
                  Follow us on social media for exclusive updates and special
                  offers!
                              </div>
                              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                                  <img src={fb} alt="" /><img src={ig} alt="" /><img src={tw} alt="" />
                              </div>
              </div>

              <div className="md:pt-12 flex gap-4 justify-around text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] md:w-[50%] md:flex-row flex-col">
                <img src={gp} alt="" />
                <img src={as} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
