// import SideBar from "../../components/dashboard/SideBar";
// import SideBar from "../../components/dashboard/SideBar";

import Sidebar from "../../components/dashboard/Sidebar";
import TopBar from "../../components/dashboard/TopBar";
import Home from "../../components/dashboard/Home";

export default function Dashboard() {
  return (
    <div className="flex p-2 w-full  gap-8 justify-start">
      <Sidebar />
      <div className="flex max-h-[1200px] mx-auto gap-8 flex-col">
        <TopBar />
        <Home />
      </div>
    </div>
  );
}
