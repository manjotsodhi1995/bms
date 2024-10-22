import img from "../../assets/affiliate/affMob.jpg";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  return (
    <div className="mt-20 w-full">
      <div className="relative">
        <img
          src={"affiliation section 2-05.jpg"}
          alt=""
          className="w-full hidden md:flex"
          loading="lazy"
        />{" "}
        <img src={img} alt="" className="w-full md:hidden" loading="lazy" />
        <div className="absolute md:bottom-[1vw] lg:bottom-[2vw] 2xl:bottom-[4vw] md:left-1/4 transform -translate-x-1/2 mb-10 bottom-2 left-1/2">
          <button
            onClick={() => navigate("/organizer")}
            className="bg-white text-[#102e38] py-3 px-8 rounded-full font-medium lg:text-3xl text-md"
          >
            Partner with Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
