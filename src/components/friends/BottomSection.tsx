import ExpandableBox from "./Expandable";
import fb from "../../assets/organizer/Footer/ic_baseline-facebook.png";
import ig from "../../assets/organizer/Footer/mdi_instagram.png";
import tw from "../../assets/organizer/Footer/mdi_twitter.png";
import gp from "../../assets/organizer/Footer/gp.png";
import as from "../../assets/organizer/Footer/Appstore.png";
import styled from "styled-components";
const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 64px;
  padding: 15px 50px;
  font-size: 16px;
  color: white;
  background-color: rgba(96, 118, 157, 1);
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px 30px;
    margin-left: 20px;
  }
`;
const StyledSVG = styled.svg`
  margin-left: 8px;
  width: 20px;
  height: 20px;
`;
const BottomSection = () => {
  return (
    <>
      <div className="pl-[5vw] pt-[5vh] w-full pb-40 gap-10 md:my-20">
        <div className="flex flex-col items-center">
          <div className="bg-color title font-semibold mb-10 text-2xl md:text-5xl">
            Frequently asked questions
          </div>
          <div className="w-[90%] flex flex-col gap-4 md:py-8">
            <ExpandableBox
              title="How do I sign up for the referral program?"
              content="Simply visit Kafsco.com and click ‘Partner with Us’ (button) and follow the easy registration process."
            />
            <ExpandableBox
              title="How much can I earn?"
              content="Your earnings depend on the number of tickets sold through your referral link. With our competitive commission rates, you have the potential to earn significant rewards."
            />
            <ExpandableBox
              title="Can I refer any event?"
              content="Yes! You can refer any event listed on our platform as long as the event organizer has turned on representation."
            />
          </div>
        </div>
        <StyledButton href="/">
          See more questions
          <StyledSVG fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </StyledSVG>
        </StyledButton>
      </div>
      {/* Footer Section */}
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
              <div className="md:text-[2.5rem] 2xl:text-[3rem] text-[1.8rem] font-semibold ">
                JOIN US
              </div>
              <div className="flex justify-between md:flex-row flex-col gap-8 w-full">
                <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] w-full">
                  Don’t miss out on this incredible opportunity to earn while
                  helping your friends discover amazing events. Join our
                  referral program today and start turning your connections into
                  cash!
                </div>
              </div>
              <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] w-full">
                <div className="w-full">
                  Follow us on social media for exclusive updates and special
                  offers!
                </div>
                <div className="flex gap-4 mt-8 justify-center md:justify-start">
                  <img src={fb} alt="Facebook" loading="lazy" />
                  <img src={ig} alt="Instagram" loading="lazy" />
                  <img src={tw} alt="Twitter" loading="lazy" />
                </div>
              </div>
              <div className="md:py-9 flex flex-col gap-4 md:justify-start text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] md:flex-row items-center align-middle justify-center w-full">
                <img src={gp} alt="Google Play" loading="lazy" />
                <img src={as} alt="App Store" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8 w-full md:w-auto">
          <div className="text-gray-400 pr-13 md:pr-16">&copy; 2023 Wave </div>
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
};

export default BottomSection;
