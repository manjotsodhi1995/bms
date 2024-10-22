import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Toaster } from "react-hot-toast";
import { useStore } from "./hooks/useStore";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Navbar from "./components/Navbar";
import bg from "./assets/background2.png";
import { Loader2 } from "lucide-react";
import mbg from "./assets/mobileBg.png";
import ScrollToTop from "./utils/scroll";
import Payment from "./pages/payment";
const DashBoard = lazy(() => import("./pages/dashboard/Dashboard"));
const OrganizationProfile = lazy(
  () => import("./pages/OrganizationDescription")
);
const PayOutD = lazy(() => import("./pages/dashboard/payout/PayOutD"));
const MyTickets = lazy(() => import("./pages/MyTickets"));
const TermsAndConditions = lazy(() => import("./pages/termsAndConditions"));
const Privacy = lazy(() => import("./pages/privacy"));
const Forgot = lazy(() => import("./pages/Forgot"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
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
const Organizer = lazy(() => import("./pages/Organizer"));
const ReferFriends = lazy(() => import("./pages/ReferFriends"));
const ReferOrganizer = lazy(() => import("./pages/ReferOrganizer"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
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
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="relative">
      <Toaster />
      {/* <div className="relative overflow-hidden"> */}

      <BrowserRouter>
        {" "}
        <ScrollToTop />
        <div className="home -z-10 fixed min-h-screen md:flex hidden min-w-screen">
          <img
            src={bg}
            alt=""
            className="min-h-screen min-w-screen"
            loading="lazy"
          />
        </div>{" "}
        <div className="home -z-10 fixed min-h-screen md:hidden">
          <img src={mbg} alt="" className="min-h-screen" loading="lazy" />
        </div>
        {<Navbar />}
        <Suspense
          fallback={
            <div className="min-h-screen w-screen flex justify-center items-center">
              <Loader2 size={40} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />}>
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
            <Route
              path="/categories/:categoryId"
              element={<CategoriesPage />}
            />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route
              path="/settings"
              element={<AccountSettings defaultSettingState="acc" />}
            />
            <Route
              path="/payment"
              element={<AccountSettings defaultSettingState="pay" />}
            />{" "}
            <Route path="/mytickets" element={<MyTickets />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route
              path="/event/:slug"
              element={
                <EventPage
                  dialogOpen={dialogOpen}
                  setDialogOpen={setDialogOpen}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/helpdetails/:id" element={<HelpDetail />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset-password" element={<ResetPassword />} />{" "}
            <Route
              path="/3ds/payment"
              element={
                <Payment setDialogOpen={setDialogOpen} dialog={dialogOpen} />
              }
            />
            {/* Organizer Component */}
            <Route path="/organizer" element={<Organizer />} />
            <Route path="/events/:location" element={<EventsInLocation />} />
            <Route
              path="/upcoming-events/:location"
              element={<UpComingEventsInLocation />}
            />
            <Route path="/refer-friends" element={<ReferFriends />} />
            <Route path="/refer-organizer" element={<ReferOrganizer />} />{" "}
            <Route
              path="/organization/:orgId"
              element={<OrganizationProfile />}
            />
          </Routes>{" "}
        </Suspense>
      </BrowserRouter>
    </div>
  );
});
export default App;
