import DashboardNavBar from "@/components/dashboard/DashboardNavBar";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import { DialogBackgroundCircle } from "@/components/ui/dialog";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col backdrop-blur-sm font-wix-display">
      <BackgroundBlurEffect />
      <DashboardNavBar />
      <div className="flex flex-row mt-2 gap-6 px-2 md:px-6">
        <Sidebar className="hidden md:block h-fit sticky top-0 rounded-3xl bg-[#B1B1B152] drop-shadow-lg" />
        <div className="flex-1 w-full flex flex-col mt-12 gap-8">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const BackgroundBlurEffect = () => {
  // NOTE: backdrop-blur-sm is only for resetting blur from home css property
  return (
    <div className="absolute -z-20 w-full h-full overflow-hidden blur-[12px]">
      <DialogBackgroundCircle className="hidden md:block absolute top-0 translate-y-[-20%] -left-10 bg-gradient-red" />
      <DialogBackgroundCircle className="absolute top-0 translate-y-[-20%] left-1/2 transform -translate-x-1/2 bg-gradient-golden" />
      <DialogBackgroundCircle className="hidden md:block absolute top-0 translate-y-[-5%] -right-8 bg-gradient-blue" />

      <DialogBackgroundCircle className="absolute top-[50%] translate-y-[-90%] -left-0 bg-gradient-golden" />
      <DialogBackgroundCircle className="size-[580px] hidden md:block absolute top-[50%] translate-y-[-50%] left-1/2 transform -translate-x-1/2 bg-gradient-golden" />
      <DialogBackgroundCircle className="absolute top-[50%] translate-y-[-90%] -right-0 bg-gradient-golden" />

      <DialogBackgroundCircle className="hidden md:block absolute  bottom-0 -left-12 bg-gradient-golden" />
      <DialogBackgroundCircle className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-blue" />
      <DialogBackgroundCircle className="hidden md:block absolute bottom-0 -right-0 bg-gradient-red" />
    </div>
  );
};

export default DashboardLayout;
