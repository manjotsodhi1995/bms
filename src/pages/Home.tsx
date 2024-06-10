import Footer from "../components/home/Footer";
import { lazy } from "react";
const Hero = lazy(() => import("../components/home/Hero"));
const Profile = lazy(() => import("../components/home/Profile"));
const Trending = lazy(() => import("../components/home/Trending"));

function Home() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">

          {/* <Navbar /> */}
          <Hero />
          <Trending />
          <Profile />
      <Footer />
    </div>
  );
}

export default Home;
