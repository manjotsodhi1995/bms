import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="w-full   back  bg-cover ">
      <div className="bg-black bg-opacity-60 lg:px-[10%] px-[8vw] flex flex-col gap-4 md:py-[10vw] py-[16vw] text-white">
        <div className="grid md:grid-cols-3 gap-16 md:gap-4 xl:gap-8 lg:flex-row flex-col">
          <div className="md:text-left text-center flex flex-col gap-2">
            <div className="font-semibold text-center text-[1.7rem] 2xl:text-[2rem]">
              Join
            </div>
            <div className="text-[1.2rem] 2xl:text-[1.5rem] text-center">
              Join our representation program and start earning commissions by
              promoting exciting events to your network!
            </div>
          </div>
          <div className="md:text-left text-center flex flex-col gap-2">
            <div className="font-semibold text-center text-[1.7rem] 2xl:text-[2rem]">
              Promote
            </div>
            <div className="text-[1.2rem] 2xl:text-[1.5rem] text-center">
              Share events with friends and followers, and watch your earnings
              grow with every ticket sold
            </div>
          </div>
          <div className="md:text-left text-center flex flex-col gap-2">
            <div className="font-semibold text-center text-[1.7rem] 2xl:text-[2rem]">
              Sign Up
            </div>
            <div className="text-[1.2rem] 2xl:text-[1.5rem] text-center">
              Sign up today and become part of our thriving family of reps and earn with us today
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-white text-black font-semibold px-16 rounded-lg py-2">
            <Link to="/affiliate">Partner with us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
