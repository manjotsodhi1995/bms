import CustomerReviews from "@/components/friends/CustomerReviews";
import FormSection from "@/components/welcome/FormSection";
import { lazy } from "react";
const TopSection = lazy(() => import("../components/welcome/TopSection"));
const SlideSection = lazy(() => import("../components/welcome/SlideSection"));
const MidSection = lazy(() => import("../components/welcome/MidSection"));

function Welcome() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen ">
      <TopSection />
      <SlideSection />
      <MidSection />
      <CustomerReviews />
      <FormSection />
    </div>
  );
}

export default Welcome;
