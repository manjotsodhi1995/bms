// import SideBar from "../../components/dashboard/SideBar";
// import SideBar from "../../components/dashboard/SideBar";

import Sidebar from "../../components/dashboard/Sidebar";
import TopBar from "../../components/dashboard/TopBar";
import Home from "../../components/dashboard/Home";

export default function Dashboard() {
  return (
    <div className="flex w-full h-screen gap-8 justify-start">
      <Sidebar />
      <div className="flex flex-col mx-auto gap-8 max-h-screen overflow-auto">
        <TopBar />
        <Home />
      </div>
    </div>
  );
}
