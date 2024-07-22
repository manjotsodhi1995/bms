import { lazy } from "react";
const TopSection = lazy(
  () => import("../components/referOrganizer/TopSection")
);
const VideoSection = lazy(() => import("@/components/friends/VideoSection"));
const EventSection = lazy(() => import("@/components/friends/EventSection"));
const ContactSection = lazy(
  () => import("@/components/referOrganizer/ContactSection")
);
const Features = lazy(() => import("@/components/friends/FeatureSection"));
const CustomerReviews = lazy(
  () => import("@/components/friends/CustomerReviews")
);
const BottomSection = lazy(() => import("../components/friends/BottomSection"));

function ReferOrganizer() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen ">
      <TopSection />
      <VideoSection />
      <EventSection />
      <ContactSection />
      <Features />
      <CustomerReviews />
      <BottomSection />
    </div>
  );
}

export default ReferOrganizer;
