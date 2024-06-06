import { Link } from "react-router-dom";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import pfp from "../assets/test/pfp.png"
import bell from "../assets/test/bell.png"
const Navbar = observer(() => {
  const {
    root: { auth },
  } = useStore();
  const isAuthenticated = auth.isAuthenticated;
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] flex flex-col md:flex-row items-left justify-between align-left py-[4vh] 2xl:text-[1.5rem] w-screen z-20 gap-8">
      <nav className="flex gap-8">
        <div
          className="HAMBURGER-ICON space-y-2 flex flex-col justify-center cursor-pointer"
          onClick={() => setIsNavOpen((prev: boolean) => !prev)}
        >
          <span className="block h-1 w-8 bg-black"></span>
          <span className="block h-1 w-8 bg-black"></span>
          <span className="block h-1 w-8 bg-black"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <div
              className="HAMBURGER-ICON space-y-2 flex flex-col justify-center cursor-pointer"
              onClick={() => setIsNavOpen((prev: boolean) => !prev)}
            >
              <span className="block h-1 w-8 bg-black"></span>
              <span className="block h-1 w-8 bg-black"></span>
              <span className="block h-1 w-8 bg-black"></span>
            </div>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-start min-h-[250px] font-medium">
            <a href="/" className="top-0 left-0 absolute py-8 px-[10%]"></a>
            <div className="px-[10%] mt-[35%] text-[20px] text-black ">
              {!isAuthenticated && (
                <li className="underline">
                  <Link to="/login">Sign up/Log in</Link>
                </li>
              )}
              {isAuthenticated && (
                <div>
                  <li className="">
                    <Link
                      to="/mytickets"
                      className="flex justify-between"
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      <div>My Tickets</div> <div>→</div>
                    </Link>
                  </li>
                  <li className="my-6">
                    <Link
                      to="/"
                      className="flex justify-between"
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      <div>Following</div> <div>→</div>
                    </Link>
                  </li>
                  <li className="my-6">
                    <Link
                      to="/"
                      className="flex justify-between"
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      <div>Organizer Dashboard</div> <div>→</div>
                    </Link>
                  </li>
                </div>
              )}
              <li className="my-6">
                <Link
                  to="/"
                  className="flex justify-between"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <div>Host an Event</div> <div>→</div>
                </Link>
              </li>
              <li className=" my-6">
                <Link
                  to="/help"
                  className="flex justify-between"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <div>Help & Support</div> <div>→</div>
                </Link>
              </li>
              <li className=" my-6">
                <Link
                  to="/terms"
                  className="flex justify-between"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <div>Terms & Conditions</div> <div>→</div>
                </Link>
                <li className="my-6">
                  <Link
                    to="/privacy"
                    className="flex justify-between"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    <div>Privacy Policy</div> <div>→</div>
                  </Link>
                </li>
              </li>
            </div>
          </ul>
        </div>
        <Link to="/">
          <div className="text-[3rem] font-bold items-center flex h-full">
            Kafsco
          </div>
        </Link>
      </nav>

      <div className="flex items-center text-center md:w-full">
        <input
          type="text"
          placeholder="Search for event..."
          className="w-full px-4 py-3 text-gray-700 bg-white bg-opacity-35 outline-none rounded-3xl"
        />
      </div>
      <ul className="DESKTOP-MENU hidden lg:flex font-medium justify-center gap-10 text-center">
        {/* <div className="flex items-center text-center hover:underline bg-white ">
          <Link to="/host" className="w-full whitespace-nowrap">
            Host an Event
          </Link>
        </div> */}
        {!isAuthenticated && (
          <div className="flex items-center text-center hover:underline">
            <Link to="/login" className="w-full whitespace-nowrap">
              Login
            </Link>
          </div>
        )}
        {isAuthenticated && (
          <div className="flex items-center text-center hover:underline">
            <Link
              to="/events"
              className="w-full flex justify-between items-center gap-2 whitespace-nowrap"
            >
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.25 1.5H12.375V0.875C12.375 0.70924 12.3092 0.550268 12.1919 0.433058C12.0747 0.315848 11.9158 0.25 11.75 0.25C11.5842 0.25 11.4253 0.315848 11.3081 0.433058C11.1908 0.550268 11.125 0.70924 11.125 0.875V1.5H4.875V0.875C4.875 0.70924 4.80915 0.550268 4.69194 0.433058C4.57473 0.315848 4.41576 0.25 4.25 0.25C4.08424 0.25 3.92527 0.315848 3.80806 0.433058C3.69085 0.550268 3.625 0.70924 3.625 0.875V1.5H1.75C1.41848 1.5 1.10054 1.6317 0.866116 1.86612C0.631696 2.10054 0.5 2.41848 0.5 2.75V15.25C0.5 15.5815 0.631696 15.8995 0.866116 16.1339C1.10054 16.3683 1.41848 16.5 1.75 16.5H14.25C14.5815 16.5 14.8995 16.3683 15.1339 16.1339C15.3683 15.8995 15.5 15.5815 15.5 15.25V2.75C15.5 2.41848 15.3683 2.10054 15.1339 1.86612C14.8995 1.6317 14.5815 1.5 14.25 1.5ZM3.625 2.75V3.375C3.625 3.54076 3.69085 3.69973 3.80806 3.81694C3.92527 3.93415 4.08424 4 4.25 4C4.41576 4 4.57473 3.93415 4.69194 3.81694C4.80915 3.69973 4.875 3.54076 4.875 3.375V2.75H11.125V3.375C11.125 3.54076 11.1908 3.69973 11.3081 3.81694C11.4253 3.93415 11.5842 4 11.75 4C11.9158 4 12.0747 3.93415 12.1919 3.81694C12.3092 3.69973 12.375 3.54076 12.375 3.375V2.75H14.25V5.25H1.75V2.75H3.625ZM14.25 15.25H1.75V6.5H14.25V15.25Z"
                  fill="black"
                />
              </svg>
              <div className="flex items-center">My Event</div>
            </Link>
          </div>
        )}
        {isAuthenticated && (
          <div className="flex justify-center gap-8 items-center min-w-[6vw]">
            <div className="cursor-pointer">
              <NotificationsDropdown />
            </div>
            <div>
              <ProfileDropdown />
            </div>
          </div>
        )}
      </ul>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 30%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 768px){
  .showMenuNav {
    width: 100%;
  }
}
    `}</style>
    </div>
  );
});
// import checkMarkIcon from "./checkmark.svg";
// import warningIcon from "./warning.svg";
// import infoIcon from "./info.svg"; // Add these icons

function NotificationsDropdown() {
  const [activeTab, setActiveTab] = useState("Unread");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
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

  return (
    <div className="relative">
      <button onClick={toggleDropdown}>
        <img src={bell} alt="Notifications" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20">
          <div className="py-2">Notifications</div>
          <div className="border-b p-2 flex">
            <button
              onClick={() => setActiveTab("Unread")}
              className={`px-4 py-2 rounded-t-md focus:outline-none ${activeTab === "Unread" ? "bg-gray-200" : ""
                }`}
            >
              Unread
            </button>
            <button
              onClick={() => setActiveTab("All")}
              className={`px-4 py-2 rounded-t-md focus:outline-none ${activeTab === "All" ? "bg-gray-200" : ""
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
      <button onClick={toggleDropdown}>
        <img src={pfp} alt="Profile" className="rounded-full w-8 h-8" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
          {/* Your profile/settings content here */}
          <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
            Payment Method
          </a>
          <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
            Account Settings
          </a>
          <button className="block px-4 py-2 w-full text-center hover:bg-gray-100" onClick={() => { auth.logout() }}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
export default Navbar;
