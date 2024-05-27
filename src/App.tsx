import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStore } from "./hooks/useStore";
import { observer } from "mobx-react-lite";
import { lazy, Suspense } from "react"; 
import { useEffect } from "react";
import OrganizationProfile from "./pages/OrganizationDescription";
import load from "./assets/Ghost.gif"
import "@fontsource/inter";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/organization/:orgId"
            element={<OrganizationProfile />}
          />
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