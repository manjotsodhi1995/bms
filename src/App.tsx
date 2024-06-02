import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStore } from "./hooks/useStore";
import { observer } from "mobx-react-lite";
import { lazy, Suspense } from "react"; 
import { useEffect } from "react";
import OrganizationProfile from "./pages/OrganizationDescription";
import load from "./assets/Ghost.gif"
import "@fontsource/inter";
import EventPage from "./pages/eventPage";
import MyTickets from "./pages/MyTickets";
const Home = lazy(() => import("./pages/Home"));
const OrganizerRegister = lazy(() => import("./pages/OrganizerRegister"));
const OrganizerLogin = lazy(() => import("./pages/OrganizerLogin"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Help = lazy(() => import("./pages/help"));
const HelpDetail = lazy(() => import("./pages/help/helpDetail"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const App = observer(() => {

  const {root:{auth}} = useStore();
   useEffect(() => {
     const accessToken = localStorage.getItem("accessToken");
     const refreshToken = localStorage.getItem("refreshToken");
     if (accessToken && refreshToken) {
       auth.accessToken = accessToken;
       auth.refreshToken = refreshToken; 
       auth.setAuthenticated();
     }
   }, []);
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen w-screen flex justify-center items-center">
            <img src={load} alt="" className="w-[10vw] h-[10vw]" />
          </div>
        }
      >
          <div className="absolute rounded-full w-[70vw] h-[70vw] bg-gradient-to-br from-[#A87863] via-[#C68D55] to-[#C5C168] bg-opacity-20 backdrop-blur-[700px] animate-float -z-10 top-[-50vw] left-[-25vw]"></div>
          <div className="absolute rounded-full w-[25vw] h-[25vw] bg-gradient-to-br from-[#8C3E87] via-[#A76169] to-[#964B7D] bg-opacity-20 backdrop-blur-[700px] animate-float -z-10 top-[30vh] right-[-10vw]"></div>
          <div className="absolute rounded-full w-[60vw] h-[60vw] bg-[#79AEEC66] bg-opacity-20 backdrop-blur-[80px] animate-float -z-10 top-[50vh] left-[-20vw]"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/organization/:orgId"
              element={<OrganizationProfile />}
            />
            <Route path="/event/:eventId" element={<EventPage />} />
            <Route path="/mytickets" element={<MyTickets />} />
            <Route path="/organizer/register" element={<OrganizerRegister />} />
            <Route path="/organizer/login" element={<OrganizerLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/helpdetails" element={<HelpDetail />} />
            <Route path="/affiliate" element={<Affiliate />} />
          </Routes>
      </Suspense>
    </BrowserRouter>
  );
});
export default App;