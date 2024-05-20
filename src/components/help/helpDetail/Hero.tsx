import i1 from "../../../assets/help/Vector (5).png";
import { Link } from "react-router-dom";
import right from "../../../assets/help/right.png";
function Hero() {
  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] py-[7vh] flex flex-col gap-8">
      <div className="text-[1.5rem]">Buying Tickets</div>
      <div className="p-8">
        <div className="flex flex-col gap-4">
          <div>
            <img src={i1} alt="" className="" />
          </div>
          <div>
            <div className="text-[1.5rem] font-medium">Buying Tickets</div>
            <div>Buying accessing and transferring your tickets.</div>
          </div>
          <div className="w-full mt-8 bg-white border-2 border-[#B8B8B8] flex flex-col p-8 gap-4 items-center text-left rounded-xl">
            <div className="text-left w-full font-medium text-[1.3rem]">
              Buying Tickets
            </div>
            <div className="w-full bg-[#B8B8B8] h-[2px]"></div>
            <div className="flex flex-col w-full">
              <Link to="/">
                <div className="w-full flex justify-between py-4">
                  <div className="text-[1.2rem]">How do I buy ticket?</div>
                  <div className="items-center flex justify-center">
                    <img src={right} alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="w-full flex justify-between py-4">
                  <div className="text-[1.2rem]">How do I buy ticket?</div>
                  <div className="items-center flex justify-center">
                    <img src={right} alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="w-full flex justify-between py-4">
                  <div className="text-[1.2rem]">How do I buy ticket?</div>
                  <div className="items-center flex justify-center">
                    <img src={right} alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="w-full flex justify-between py-4">
                  <div className="text-[1.2rem]">How do I buy ticket?</div>
                  <div className="items-center flex justify-center">
                    <img src={right} alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="w-full flex justify-between py-4">
                  <div className="text-[1.2rem]">How do I buy ticket?</div>
                  <div className="items-center flex justify-center">
                    <img src={right} alt="" />
                  </div>
                </div>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
