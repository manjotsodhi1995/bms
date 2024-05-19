import i1 from "../../assets/help/Wrench.png"
import i2 from "../../assets/help/Vector (5).png"; import i3 from "../../assets/help/Vector (6).png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] py-[7vh]">
      <div className="text-[1.5rem]">How can we help?</div>
      <div className="grid lg:grid-rows-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  items-center justify-center place-items-center mt-8">
        <div className="text-center flex flex-col items-center p-2 gap-4 py-8 rounded-2xl hover:bg-black hover:text-white lg:w-[22vw] ">
          <img src={i1} alt="" className="" />
          <div className="text-[1.5rem] font-medium">Buying Tickets</div>
          <div>Buying accessing and transferring your tickets.</div>
          <div>
            <Link to="/" className="flex justify-between font-medium">
              <div>Learn More</div> <div>→</div>
            </Link>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-2 gap-4 py-8 rounded-2xl hover:bg-black hover:text-white lg:w-[22vw] ">
          <img src={i1} alt="" className="" />
          <div className="text-[1.5rem] font-medium">Selling Tickets</div>
          <div>Buying accessing and transferring your tickets.</div>
          <div>
            <Link to="/" className="flex justify-between font-medium">
              <div>Learn More</div> <div>→</div>
            </Link>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-2 gap-4 py-8 rounded-2xl hover:bg-black hover:text-white lg:w-[22vw] ">
          <img src={i2} alt="" className="" />
          <div className="text-[1.5rem] font-medium">Features</div>
          <div>Buying accessing and transferring your tickets.</div>
          <div>
            <Link to="/" className="flex justify-between font-medium">
              <div>Learn More</div> <div>→</div>
            </Link>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-2 gap-4 py-8 rounded-2xl hover:bg-black hover:text-white lg:w-[22vw] ">
          <img src={i3} alt="" className="" />
          <div className="text-[1.5rem] font-medium">Account</div>
          <div>Buying accessing and transferring your tickets.</div>
          <div>
            <Link to="/" className="flex justify-between font-medium">
              <div>Learn More</div> <div>→</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
