import p1 from "../../assets/home/partner/shopify.png";
import gp from "../../assets/home/gp.png";
import as from "../../assets/home/as.png";
import fb from "../../assets/socials/ic_baseline-facebook.png";
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
          <div className="text-[3rem] font-bold">Kafsco</div>
        </div>
      </div>
      <div className="w-full lg:px-[10%] px-[8vw] flex flex-col md:gap-16 gap-6 mb-16">
        <div className="font-semibold text-[2rem] text-[#A76169] flex justify-center">
          Our Partners
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 place-items-center">
          <img src={p1} alt="" />
          <img
            src="https://s3-alpha-sig.figma.com/img/0cf1/7b06/5071df447285b853626bef23194e290f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LRXtLH~s0JRYgZ79oxM7vyekkK5NHwcXMSk~brnvcLLzouSfPCRZ8A2X4AxzZxhQ0~yt-ILLybz2c~BjgJraVetT3mrb5fKguu00ubWTdB3daYzPijG702rtMAsOb3~cXCpi1~5olDeQjdR4VGh9AMifjvKNpmEQ2AvA8Fa6Yw5h761CBubEaysA535heh~Rf-Fg5yW4nA-vrCASW33rc5b8WrvITmGA66I8R2gdu4uWUMJEanI6YeAbnzqoUqxNlSJjsJVtNRDKV0wIZ0rlJiW-WR6jMq8VpsOuhiTlKoLRgb2NauN0luzTw8Irs5mD36bethM2X0b83GgNpcCQbA__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/b9f2/3ad2/1daa1f851d1c95e83eb9ca05d76487a4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AcjJHhKpX7VUWB9anbY7rQ34X1YljafrSll1YDfXqUAGrEltCXFxra48HLe7QZhiYoYMPtC-3saXmD7qiJCXZ6MzIcwgW0eMZBz8kFztkA1YXC--VEf5qWf9DHQ74teYX2Ew9UgTwCfQDpGWo-eaVhSlmqTchfkHVySjmqt2ermPJUOI-6mCfX0cdRtHA742avKQOibciiNmT7Fu6ibA6egp7adNvhFjmqY1MWsqepuS7Hbs3ZEwpIWjzWGJm7oMRUP29S2-iH-zjwMGFJ65AY5lXOuGkkK1utsv7uOdyjBYAKogfffZyp3xI2IdfbqdZrsassaF6iAt4HfC16d8VQ__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/9253/db38/6bcb936895e12d6b15ad4cb40ce97b97?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eqvAUdX0KQURtkRAK0pY6M0cxxcC~noYVXkYWply-W8wzaNmmXFZtLccJx49CmJNeY1USnq6t~S5GMQzSedoOb0ajbcsElRdQNsbbWCKfvfphnlcwasqJDaIzijx74uhuyT~PX8XyfpnXsunASiJjU3ATze785dF0bB1g~x8Q-OLUWos1QE7-Z4osw6EMAsKQQGQYnOizCsK4d~Gpyo56Bg4duD9De4UWWXXPXa8vq~4jszRIT09-5abXaj~NZBwFzkhi0hneD9PggL8-~OLrNTZRrvV6EFzwFBwpA60qBS6Q8cOIMbqR9zr2uMKm3mWm0zJskMDREQpVuqAgf3jHQ__"
            alt=""
          />
          <img src={p1} alt="" />
        </div>
      </div>
      <div className="w-full lg:px-[10%] px-[8vw] flex md:flex-row flex-col gap-4 justify-between align-middle py-20 bg-black text-white">
        <div className="flex md:gap-24 gap-8 md:flex-row flex-col md:text-left text-center md:w-[50%]">
          <div className="flex flex-col gap-4">
            <div className="text-[1.3rem] font-medium">Find Events</div>
            <div className="font-normal flex flex-col gap-2">
              <div>Events in Delhi</div>
              <div>Events in Gujrat</div>
              <div>Events in Mumbai</div>
              <div>Events in Ranchi</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[1.3rem] font-medium">Find Events</div>
            <div className="font-normal flex flex-col gap-2">
              <div>Events in Delhi</div>
              <div>Events in Gujrat</div>
              <div>Events in Mumbai</div>
              <div>Events in Ranchi</div>
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
                Join our growing community of event enthusiasts and let Wave be
                your ultimate ticketing companion. Your next unforgettable
                experience is just a tap away!
              </div>
            </div>

            <div className="text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] w-full">
              <div className="w-full">
                Follow us on social media for exclusive updates and special
                offers!
              </div>
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <img src={fb} alt="" />
                <img src={ig} alt="" />
                <img src={tw} alt="" />
              </div>
            </div>

            <div className="md:pt-12 flex gap-4 md:justify-start text-[0.9rem] md:text-[1rem] 2xl:text-[1.2rem] md:flex-row flex-col items-center align-middle justify-center w-full">
              <img src={gp} alt="" />
              <img src={as} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
