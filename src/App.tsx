import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStore } from "./hooks/useStore";
import { observer } from "mobx-react-lite";

import { lazy, Suspense} from "react";
const SearchPage = lazy(() => import("./pages/Search"));
import DashBoard from "./pages/dashboard/Dashboard";
import { useEffect } from "react";
import OrganizationProfile from "./pages/OrganizationDescription";
import load from "./assets/Ghost.gif";
import "@fontsource/inter";
import PayOutD from "./pages/dashboard/PayOutD";
const EventPage = lazy(() => import("./pages/eventPage"));
import MyTickets from "./pages/MyTickets";
import Bg from "./components/Bg";
import TermsAndConditions from "./pages/termsAndConditions";
import Privacy from "./pages/privacy";
import Forgot from "./pages/Forgot";
import Navbar from "./components/Navbar";
import Filter from "./pages/Filter";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AccountSettings from "./pages/AccountSettings";
const Home = lazy(() => import("./pages/Home"));
const OrganizerRegister = lazy(() => import("./pages/OrganizerRegister"));
const OrganizerLogin = lazy(() => import("./pages/OrganizerLogin"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Help = lazy(() => import("./pages/help"));
const HelpDetail = lazy(() => import("./pages/help/helpDetail"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
// const AccountSettings = lazy(() => import("./pages/AccountSettings"));
const App = observer(() => {
  const {
    root: { auth },
  } = useStore();
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
    <div>
      <BrowserRouter>
        <div className="home absolute -z-50">
          <Bg />
        </div>
        <div className="home min-h-full min-w-[100vw] -z-10 absolute"></div>
        <div className="home min-h-full min-w-[100vw] -z-10 absolute"></div>
        <div className="home min-h-full min-w-[100vw] -z-10 absolute"></div>

        {<Navbar />}
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

            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/mytickets" element={<MyTickets />} />
              <Route
                path="/organizer/register"
                element={<OrganizerRegister />}
              />
              <Route path="/organizer/login" element={<OrganizerLogin />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/dashboard/payout" element={<PayOutD />} />
            </Route>

            {/* Public Routes */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/settings" element={<AccountSettings defaultSettingState="acc"/>} />
            <Route path="/payment" element={<AccountSettings defaultSettingState="pay"/>} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/event/:eventId" element={<EventPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/helpdetails" element={<HelpDetail />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/dashboard/payout" element={<PayOutD />} />
          </Routes>{" "}
        </Suspense>
      </BrowserRouter>
    </div>
  );
});
export default App;
