import Navbar from "../components/Navbar";
import Footer from "../components/home/Footer";
import { lazy } from "react";
const Hero = lazy(() => import("../components/home/Hero"));
const Profile = lazy(() => import("../components/home/Profile"));
const Trending = lazy(() => import("../components/home/Trending"));

function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white bg-opacity-15 min-h-screen">
      <div className="absolute rounded-full w-[70vw] h-[70vw] bg-gradient-to-br from-[#A87863] via-[#C68D55] to-[#C5C168] bg-opacity-20 backdrop-blur-[700px] animate-float -z-10 top-[-50vw] left-[-25vw]"></div>
      <div className="absolute rounded-full w-[25vw] h-[25vw] bg-gradient-to-br from-[#8C3E87] via-[#A76169] to-[#964B7D] bg-opacity-20 backdrop-blur-[700px] animate-float -z-10 top-[30vh] right-[-10vw]"></div>
      <div className="absolute rounded-full w-[60vw] h-[60vw] bg-[#79AEEC66] bg-opacity-20 backdrop-blur-[80px] animate-float -z-10 top-[50vh] left-[-20vw]"></div>
      <Navbar />
        <Hero />
        <Trending />
        <Profile />
      <Footer />
    </div>
  );
}

export default Home;
