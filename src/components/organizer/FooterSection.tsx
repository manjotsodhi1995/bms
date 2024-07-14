import fb from "../../assets/organizer/Footer/ic_baseline-facebook.png";
import ig from "../../assets/organizer/Footer/mdi_instagram.png";
import tw from "../../assets/organizer/Footer/mdi_twitter.png";
import gp from "../../assets/organizer/Footer/gp.png";
import as from "../../assets/organizer/Footer/Appstore.png";

function Footer() {
  return (
    <>
      <div className="w-full lg:px-[10%] px-[8vw]  flex-col gap-4 justify-between align-middle pt-20 pb-8 bg-black text-white">
        <div className="flex flex-col md:flex-row pb-4">
          <div className="flex md:gap-24 pb-3 gap-8 md:flex-row flex-col md:text-left text-center md:w-[50%]">
            <div className="flex flex-col gap-4">
              <div className="text-[1.3rem] font-medium">Find Events</div>
              <div className="font-normal flex flex-col gap-2">
                <div>Events near me</div>
                <div>Events in Mumbai</div>
                <div>Events in Delhi</div>
                <div>Events in Gujarat</div>
                <div>App</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[1.3rem] font-medium">Organize Events</div>
              <div className="font-normal flex flex-col gap-2">
                <div>Sell tickets</div>
                <div>Ticketing for venues</div>
                <div>Party mode</div>
                <div>Tickets for festivals</div>
                <div>FAQs</div>
                <div>Blog</div>
                <div>Legal</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between md:flex-row flex-col md:text-left text-center md:w-[50%]">
            <div className="flex flex-col gap-4 w-full items-center">
              <div className="md:text-[2.5rem] 2xl:text-[3rem] text-[1.8rem] font-semibold">
                JOIN US
              </div>
              <div className="flex justify-between md:flex-row flex-col gap-8 w-full">
                <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] w-full">
                  Join our growing community of event enthusiasts and let Wave
                  be your ultimate ticketing companion. Your next unforgettable
                  experience is just a tap away!
                </div>
              </div>

              <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] w-full">
                <div className="w-full">
                  Follow us on social media for exclusive updates and special
                  offers!
                </div>
                <div className="flex gap-4 mt-8 justify-center md:justify-start">
                  <img src={fb} alt="Facebook" />
                  <img src={ig} alt="Instagram" />
                  <img src={tw} alt="Twitter" />
                </div>
              </div>

              <div className="md:py-9 flex flex-col gap-4 md:justify-start text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] md:flex-row items-center align-middle justify-center w-full">
                <img src={gp} alt="Google Play" />
                <img src={as} alt="App Store" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8 w-full md:w-auto">
          <div className="text-gray-400 pr-13 md:pr-10">&copy; 2023 Wave </div>
          <div className="text-gray-400 space-x-4 flex flex-wrap justify-center">
            <a href="#" className="hover:underline">
              About
            </a>
            <strong className="align-middle justify-center">.</strong>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <strong className="justify-center">.</strong>

            <a href="#" className="hover:underline">
              Careers
            </a>
            <strong className="justify-center">.</strong>
            <a href="#" className="hover:underline">
              Press
            </a>
            <strong className="justify-center">.</strong>
            <a href="#" className="hover:underline">
              Security
            </a>
            <strong className="justify-center">.</strong>
            <a href="#" className="hover:underline">
              Developers
            </a>
            <strong className="justify-center">.</strong>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <strong className="justify-center">.</strong>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <strong className="justify-center">.</strong>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
