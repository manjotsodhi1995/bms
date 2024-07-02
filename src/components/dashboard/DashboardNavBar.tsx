import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pfp from "@/assets/test/pfp.png";
import bell from "@/assets/test/bell.png";
import { Menu, Search } from "lucide-react";
import Sidebar from "./Sidebar";
import { cn } from "@/utils";

const DashboardNavBar = observer(() => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/search?query=${search}`);
    }
  };
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <header className="flex w-full px-2 md:px-6 py-[4vh] gap-6">
      <div className="hidden md:block w-[270px] text-[3rem] font-bold">
        <Link to="/">
          <img
            src="/logo-nobg.png"
            alt="logo"
            className="max-h-[10vh] max-w-[40vw]"
          />
        </Link>
      </div>

      <nav className="flex flex-grow items-center justify-end">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <h2 className="text-3xl font-medium">Dashboard</h2>

        <div className="flex w-full items-center justify-end gap-8">
          <search className="hidden md:flex items-center text-center relative w-2/4">
            <input
              type="text"
              className="w-full px-4 py-3 pl-[20px] text-gray-700 bg-[#FBFBFF] shadow-lg bg-opacity-50 border-1 border-white outline-none rounded-3xl"
              onKeyDown={handleSubmit}
              onFocus={handleFocus}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {!isFocused && (
              <span className="absolute left-6  flex h-full items-center gap-2 pointer-events-none text-[#00000099]">
                <Search className="size-5" />
                {"         "}
                Search
              </span>
            )}
          </search>

          <div className="flex gap-4 items-center">
            <NotificationsDropdown />
            <ProfileDropdown />
          </div>
        </div>
      </nav>
    </header>
  );
});

const notifications = [
  {
    title: "Payment Successful",
    message: "You have successfully made a payment at Bpraak Concert",
  },
  {
    title: "Order Canceled",
    message: "You have successfully made a payment at Bpraak Concert", // You'll likely want to change this message
  },
  {
    title: "New Features available",
    message: "You have successfully made a payment at Bpraak Concert", // You'll likely want to change this message
  },
];

function NotificationsDropdown() {
  const [activeTab, setActiveTab] = useState("Unread");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <button
        className="flex items-center justify-center size-12 bg-gray-200 rounded-full"
        onClick={toggleDropdown}
      >
        <img src={bell} alt="Notifications" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20">
          <div className="py-2">Notifications</div>
          <div className="border-b p-2 flex">
            <button
              onClick={() => setActiveTab("Unread")}
              className={`px-4 py-2 rounded-t-md focus:outline-none ${
                activeTab === "Unread" ? "bg-gray-200" : ""
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setActiveTab("All")}
              className={`px-4 py-2 rounded-t-md focus:outline-none ${
                activeTab === "All" ? "bg-gray-200" : ""
              }`}
            >
              All
            </button>
          </div>

          <div className="p-2">
            {notifications.map((notification, index) => (
              <div key={index} className="flex items-start space-x-2 mb-3">
                <div className="text-left">
                  <h6 className="font-semibold">{notification.title}</h6>
                  <p className="text-sm text-gray-600">
                    {notification.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    root: { auth },
  } = useStore();
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center size-12"
      >
        <img src={pfp} alt="Profile" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
          {/* Your profile/settings content here */}
          <a href="/payment" className="block px-4 py-2 hover:bg-gray-100">
            Payment Method
          </a>
          <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
            Account Settings
          </a>
          <button
            className="block px-4 py-2 w-full text-start hover:bg-gray-100"
            onClick={() => {
              auth.logout();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

const MobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <div
        className="space-y-2 flex flex-col justify-center cursor-pointer"
        onClick={() => setIsNavOpen((prev: boolean) => !prev)}
      >
        <Menu className="size-10 mr-2" />
      </div>

      <div
        className={cn("hidden", {
          block: isNavOpen,
        })}
      >
        <Sidebar
          className="absolute z-10 w-[96vw] border h-fit top-0 translate-y-[10%] rounded-3xl bg-[#B1B1B1]/65 backdrop-blur-lg"
          onRouteClicked={() => setIsNavOpen((p) => !p)}
        />
      </div>
    </nav>
  );
};

export default DashboardNavBar;
