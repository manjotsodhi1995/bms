import Footer from "../components/home/Footer";
import { lazy } from "react";
import bg from "../assets/bg3.png";
const Hero = lazy(() => import("../components/home/Hero"));
const Profile = lazy(() => import("../components/home/Profile"));
const Trending = lazy(() => import("../components/home/Trending"));

function Home() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      {/* <Navbar /> */}
      <div className="home -z-10 fixed min-h-screen md:flex hidden top-0">
        <img src={bg} alt="" className="min-h-screen" loading="lazy" />
      </div>
      <Hero />
      <Trending />
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
