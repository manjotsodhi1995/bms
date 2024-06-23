import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import { useNavigate } from "react-router-dom";
import pfp from "../assets/test/pfp.png";
import bell from "../assets/test/bell.png";
const Navbar = observer(() => {
  const navigate = useNavigate();
  const {
    root: { auth },
  } = useStore();
  const [search, setSearch] = useState("");
  const handleSubmit = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/search?query=${search}`);
    }
  };
  const isAuthenticated = auth.isAuthenticated;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const excludedRoutes = [
    "/login",
    "/register",
    "/forgot",
    "/help",
    "/helpdetail",
    "/contactus",
    "/dashboard",
    "/dashboard/payout",
    "/settings",
    "/payment"
  ];
  const location = useLocation();
  const showNavbar = !excludedRoutes.includes(location.pathname);
  return (
    showNavbar && (
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

          <div
            className={
              isNavOpen
                ? "showMenuNav transition-all duration-100"
                : "hideMenuNav"
            }
          >
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 w-full justify-between flex"
              onClick={() => setIsNavOpen(false)}
            >
              <div className="text-[2rem] font-bold items-center flex h-full">
                Kafsco
              </div>{" "}
              <div
                className="HAMBURGER-ICON space-y-2 flex flex-col justify-center cursor-pointer "
                onClick={() => setIsNavOpen((prev: boolean) => !prev)}
              >
                <span className="block h-1 w-8 bg-black"></span>
                <span className="block h-1 w-8 bg-black"></span>
                <span className="block h-1 w-8 bg-black"></span>
              </div>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-start min-h-[250px] font-medium  transition-all duration-300">
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
                        <div>My Tickets</div>
                      </Link>
                    </li>
                    <li className="my-6">
                      <Link
                        to="/"
                        className="flex justify-between"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                      >
                        <div>Following</div>
                      </Link>
                    </li>
                    <li className="my-6">
                      <Link
                        to="/"
                        className="flex justify-between"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                      >
                        <div>My Rep Portal</div>
                      </Link>
                    </li>
                    <li className="my-6">
                      <Link
                        to="/"
                        className="flex justify-between"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                      >
                        <div>Organizer Dashboard</div>
                      </Link>
                    </li>
                  </div>
                )}

                <li className="my-6">
                  <div className="flex justify-between items-center">
                    <button
                      className={`flex justify-between w-full transition-all duration-300 ${
                        isNavOpen ? "bg-white" : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      onClick={() => setIsDropOpen((prev) => !prev)}
                    >
                      Help & Support
                    </button>
                    <div
                      className={`${
                        isDropOpen
                          ? ""
                          : "-rotate-90 transition-all duration-200"
                      }`}
                    >
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.531 1.53062L9.03104 9.03062C8.96139 9.10036 8.87867 9.15567 8.78762 9.19342C8.69657 9.23116 8.59898 9.25059 8.50042 9.25059C8.40186 9.25059 8.30426 9.23116 8.21321 9.19342C8.12216 9.15567 8.03945 9.10036 7.96979 9.03062L0.469792 1.53062C0.329062 1.38989 0.25 1.19902 0.25 0.999997C0.25 0.800974 0.329062 0.610103 0.469792 0.469372C0.610523 0.328642 0.801394 0.24958 1.00042 0.24958C1.19944 0.24958 1.39031 0.328642 1.53104 0.469372L8.50042 7.43968L15.4698 0.469372C15.5395 0.399689 15.6222 0.344414 15.7132 0.306702C15.8043 0.26899 15.9019 0.24958 16.0004 0.24958C16.099 0.24958 16.1965 0.26899 16.2876 0.306702C16.3786 0.344414 16.4614 0.399689 16.531 0.469372C16.6007 0.539055 16.656 0.62178 16.6937 0.712825C16.7314 0.80387 16.7508 0.901451 16.7508 0.999997C16.7508 1.09854 16.7314 1.19612 16.6937 1.28717C16.656 1.37821 16.6007 1.46094 16.531 1.53062Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`w-full overflow-hidden transition-all duration-200 ${
                      isDropOpen ? "max-h-28" : "max-h-0"
                    }`}
                  >
                    <Link
                      to="/help"
                      className="block px-4 py-2 mt-4 hover:bg-gray-100 text-[1.1rem]"
                      onClick={() => setIsNavOpen(false)}
                    >
                      Help Center
                    </Link>
                    <Link
                      to="/contactus"
                      className="block px-4 py-2 hover:bg-gray-100 text-[1.1rem]"
                      onClick={() => setIsNavOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>

                <li className=" my-6">
                  <Link
                    to="/terms"
                    className="flex justify-between"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    <div>Terms & Conditions</div>
                  </Link>
                  <li className="my-6">
                    <Link
                      to="/privacy"
                      className="flex justify-between"
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      <div>Privacy Policy</div>
                    </Link>
                  </li>
                </li>
                {isAuthenticated && (
                  <button
                    className="block w-full text-left hover:bg-gray-100"
                    onClick={() => {
                      auth.logout();
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            </ul>
          </div>

          <Link to="/">
            <div className="text-[3rem] font-bold items-center flex h-full">
              Kafsco
            </div>
          </Link>
          {isAuthenticated && (
            <div className="flex justify-center items-center ml-10 md:hidden">
              <div>
                <ProfileDropdown />
              </div>
            </div>
          )}
        </nav>

        <div className="flex items-center text-center md:w-full relative">
          <input
            type="text"
            className="w-full px-4 py-3 pl-[20px] text-gray-700 bg-[#FBFBFF] shadow-lg bg-opacity-50 border-1 border-white outline-none rounded-3xl"
            onFocus={handleFocus}
            onKeyDown={handleSubmit}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {!isFocused && (
            <span className="absolute left-6  flex h-full items-center gap-2 pointer-events-none text-[#00000099]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1239 16.7413L12.4039 12.0213C13.5382 10.6596 14.1038 8.91303 13.9831 7.14495C13.8624 5.37687 13.0647 3.72338 11.7559 2.52846C10.4472 1.33354 8.72813 0.689183 6.95639 0.72944C5.18465 0.769697 3.49663 1.49147 2.2435 2.7446C0.990368 3.99773 0.268599 5.68574 0.228341 7.45748C0.188084 9.22922 0.832438 10.9483 2.02736 12.257C3.22228 13.5658 4.87577 14.3635 6.64385 14.4842C8.41193 14.6049 10.1585 14.0393 11.5202 12.905L16.2402 17.625L17.1239 16.7413ZM1.49891 7.62501C1.49891 6.51249 1.82881 5.42496 2.4469 4.49993C3.06498 3.5749 3.94348 2.85393 4.97132 2.42819C5.99915 2.00245 7.13015 1.89105 8.2213 2.10809C9.31244 2.32514 10.3147 2.86087 11.1014 3.64754C11.8881 4.43421 12.4238 5.43649 12.6408 6.52763C12.8579 7.61877 12.7465 8.74977 12.3207 9.77761C11.895 10.8054 11.174 11.6839 10.249 12.302C9.32397 12.9201 8.23643 13.25 7.12391 13.25C5.63258 13.2484 4.2028 12.6552 3.14826 11.6007C2.09373 10.5461 1.50057 9.11635 1.49891 7.62501Z"
                  fill="black"
                  fill-opacity="0.6"
                />
              </svg>
              {"         "}
              Search for event
            </span>
          )}
        </div>
        <ul className="DESKTOP-MENU hidden lg:flex font-medium justify-center gap-10 text-center">
          <div className="flex items-center text-center ">
            <Link
              to="/host"
              className="w-full whitespace-nowrap px-4 py-2 rounded-xl hover:bg-gray-100 bg-white shadow-md"
            >
              Host an Event
            </Link>
          </div>
          {!isAuthenticated && (
            <div className="flex items-center text-center">
              <Link
                to="/login"
                className="w-full whitespace-nowrap  px-4 py-2 rounded-xl hover:bg-gray-100 bg-white shadow-md"
              >
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
        width: 28%;
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
    )
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
      <button onClick={toggleDropdown}>
        <img src={pfp} alt="Profile" className="rounded-full w-8 h-8" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
          {/* Your profile/settings content here */}
          <a href="/payment" className="block px-4 py-2 hover:bg-gray-100">
            Payment Method
          </a>
          <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
            Account Settings
          </a>
          <button
            className="block px-4 py-2 w-full text-center hover:bg-gray-100"
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
export default Navbar;
