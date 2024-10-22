import HeroImg from "../../assets/affiliate/Group 201.png";
import img from "../../assets/affiliate/Rectangle 5961.png";
import ExpandableBox from "../Expandable";
function Hero() {
  return (
    <div className="lg:px-[15%] xl:px-[15%] px-[10vw] md:py-[7vh] pb-16 flex flex-col gap-16">
      <div className="flex justify-around gap-8 md:flex-row flex-col">
        <div className="md:w-[40%] items-center md:flex hidden">
          <img src={HeroImg} alt="" loading="lazy" />
        </div>
        <div className="md:w-[50%] flex flex-col gap-10">
          <div className="lg:text-[2rem] 2xl:text-[2.8rem]  font-semibold leading-tight">
            How much money can you earn?
          </div>
          <div className="flex flex-col gap-4 lg:text-[1.1rem] text-[1rem] 2xl:text-[1.5rem]">
            <div>
              Lorem ipsum dolor sit amet consectetur. Eget in orci mi platea.
              Dictum ac accumsan ut quam. {"                  "}Lorem ipsum
              dolor sit amet consectetur. Eget in orci mi platea. Dictum ac
              accumsan ut quam.
            </div>
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Eget in orci mi platea.
              Dictum ac accumsan ut quam. {"                  "}Lorem ipsum
              dolor sit amet consectetur. Eget in orci mi platea. Dictum ac
              accumsan ut quam.
            </div>
            <div>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Eget in orci mi platea.
              Dictum ac accumsan ut quam. {"                  "}Lorem ipsum
              dolor sit amet consectetur. Eget in orci mi platea. Dictum ac
              accumsan ut quam.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around gap-16 items-center py-16 mt-8">
        <div className="font-semibold lg:text-[2rem] 2xl:text-[2.5rem] md:w-[60%] text-center text-[1.8rem] leading-tight">
          Why promote EventBookings to your audience?
        </div>
        <div className="flex justify-around gap-4 md:flex-row flex-col">
          <div className="md:w-[50%] items-center md:flex hidden">
            <img src={img} alt="" loading="lazy" />
          </div>
          <div className="md:w-[40%] flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="lg:text-[1.5rem] 2xl:text-[2rem] text-[1.5rem] font-semibold leading-tight">
                No commission cap
              </div>
              <div className="flex flex-col gap-4 lg:text-[0.9rem] text-[1rem] 2xl:text-[1.2rem]">
                <div>
                  Lorem ipsum dolor sit amet consectetur. Eget in orci mi
                  platea. Dictum ac accumsan ut quam.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="lg:text-[1.5rem] 2xl:text-[2rem] text-[1.5rem] font-semibold leading-tight">
                Recurring Income
              </div>
              <div className="flex flex-col gap-4 lg:text-[0.9rem] text-[1rem] 2xl:text-[1.2rem]">
                <div>
                  Lorem ipsum dolor sit amet consectetur. Eget in orci mi
                  platea. Dictum ac accumsan ut quam.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="lg:text-[1.5rem] 2xl:text-[2rem] text-[1.5rem] font-semibold leading-tight">
                Quality Promotional Asset
              </div>
              <div className="flex flex-col gap-4 lg:text-[0.9rem] text-[1rem] 2xl:text-[1.2rem]">
                <div>
                  Lorem ipsum dolor sit amet consectetur. Eget in orci mi
                  platea. Dictum ac accumsan ut quam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="font-bold text-4xl">Frequently Asked Questions</div>
        <div className="w-[90%] flex flex-col gap-3 py-8">
          <ExpandableBox
            title="What is the Yapsody Affiliate Program?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
          <ExpandableBox
            title="Who Can Join?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
          <ExpandableBox
            title="How do i qualify for the affiliate program?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
          <ExpandableBox
            title="I am Yapsody Event Presenter can i apply for the Affiliate Program?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
          <ExpandableBox
            title="How are affiliate commissions processed?"
            content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
