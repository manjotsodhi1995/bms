import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import load from "./assets/Ghost.gif";
import { useStore } from "./hooks/useStore";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Navbar from "./components/Navbar";
import Bg from "./components/Bg";

const DashBoard = lazy(() => import("./pages/dashboard/Dashboard"));
const OrganizationProfile = lazy(
  () => import("./pages/OrganizationDescription")
);
const PayOutD = lazy(() => import("./pages/dashboard/payout/PayOutD"));
const MyTickets = lazy(() => import("./pages/MyTickets"));
const TermsAndConditions = lazy(() => import("./pages/termsAndConditions"));
const Privacy = lazy(() => import("./pages/privacy"));
const Forgot = lazy(() => import("./pages/Forgot"));
const Filter = lazy(() => import("./pages/Filter"));
const AccountSettings = lazy(() => import("./pages/AccountSettings"));
const EventPage = lazy(() => import("./pages/eventPage"));
const SearchPage = lazy(() => import("./pages/Search"));
const Home = lazy(() => import("./pages/Home"));
const OrganizerRegister = lazy(() => import("./pages/OrganizerRegister"));
const OrganizerLogin = lazy(() => import("./pages/OrganizerLogin"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Help = lazy(() => import("./pages/help"));
const HelpDetail = lazy(() => import("./pages/help/helpDetail"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const PaymentsMethodPage = lazy(
  () => import("./pages/dashboard/payout/payments-method")
);
const ProfilePage = lazy(() => import("./pages/dashboard/profile"));
const EventsPage = lazy(() => import("./pages/dashboard/events"));
const EventsInLocation = lazy(() => import("./pages/events/EventsInLocation"));
const UpComingEventsInLocation = lazy(
  () => import("./pages/events/UpcomingEventsInLocation")
);
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const EventDetailPage = lazy(
  () => import("./pages/dashboard/events/event-detail")
);
const EventAvailableToRepOrganizer = lazy(
  () => import("./pages/dashboard/events/available-to-organizer")
);
const OrganizerDetails = lazy(
  () => import("./pages/dashboard/organizer/details")
);
const OrganizerEventsHistory = lazy(
  () => import("./pages/dashboard/organizer/history")
);
const CurrentlyRepping = lazy(
  () => import("./pages/dashboard/events/currently-repping")
);
const ReppedInPast = lazy(
  () => import("./pages/dashboard/events/repped-in-past")
);
const ReppedInPastDetails = lazy(
  () => import("./pages/dashboard/events/repped-in-past-details")
);
const FollowingPage = lazy(() => import("./pages/dashboard/following"));

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
    <div className="relative">
      {/* <div className="relative overflow-hidden"> */}
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

              {/* Dashboard Routes */}
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/dashboard/payout" element={<PayOutD />} />
                <Route
                  path="/dashboard/payout/payments-method"
                  element={<PaymentsMethodPage />}
                />
                <Route path="/dashboard/profile" element={<ProfilePage />} />
                <Route path="/dashboard/events" element={<EventsPage />} />
                <Route
                  path="/dashboard/events/:eventId"
                  element={<EventDetailPage />}
                />
                <Route
                  path="/dashboard/events/available-to-organizer"
                  element={<EventAvailableToRepOrganizer />}
                />
                <Route
                  path="/dashboard/organizer/:id"
                  element={<OrganizerDetails />}
                />
                <Route
                  path="/dashboard/organizer/:id/events"
                  element={<OrganizerEventsHistory />}
                />
                <Route
                  path="/dashboard/events/currently-repping"
                  element={<CurrentlyRepping />}
                />

                <Route
                  path="/dashboard/events/repped-in-past"
                  element={<ReppedInPast />}
                />

                <Route
                  path="/dashboard/events/repped-in-past/:eventId"
                  element={<ReppedInPastDetails />}
                />

                <Route
                  path="/dashboard/following"
                  element={<FollowingPage />}
                />
              </Route>
              {/* Dashboard Routes */}
            </Route>

            {/* Public Routes */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route
              path="/settings"
              element={<AccountSettings defaultSettingState="acc" />}
            />
            <Route
              path="/payment"
              element={<AccountSettings defaultSettingState="pay" />}
            />
            <Route path="/filter" element={<Filter />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/event/:slug" element={<EventPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/helpdetails" element={<HelpDetail />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/forgot" element={<Forgot />} />

            <Route path="/events/:location" element={<EventsInLocation />} />
            <Route
              path="/upcoming-events/:location"
              element={<UpComingEventsInLocation />}
            />
          </Routes>{" "}
        </Suspense>
      </BrowserRouter>
    </div>
  );
});
export default App;
