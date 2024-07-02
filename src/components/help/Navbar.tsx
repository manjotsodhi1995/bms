import { Link } from "react-router-dom";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import pfp from "../../assets/test/pfp.png";
import bell from "../../assets/test/bell.png";
const Navbar = observer(() => {
  const {
    root: { auth },
  } = useStore();
  const isAuthenticated = auth.isAuthenticated;
  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log(isAuthenticated);
  return (
    <div className="bg-black bg-opacity-70 flex flex-col gap-4 items-center pb-16">
      <div className="lg:px-[5%] xl:px-[7%] px-[8vw] flex flex-col md:flex-row items-left justify-between align-left py-[4vh] 2xl:text-[1.5rem] w-screen z-20 gap-8 ">
        <nav className="flex gap-8">
          <div
            className="HAMBURGER-ICON space-y-2 flex flex-col justify-center cursor-pointer"
            onClick={() => setIsNavOpen((prev: boolean) => !prev)}
          >
            <span className="block h-1 w-8 bg-white"></span>
            <span className="block h-1 w-8 bg-white"></span>
            <span className="block h-1 w-8 bg-white"></span>
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
                        to="/"
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
                        <div>Organizer Dashboard</div>
                      </Link>
                    </li>
                    <li className="my-6">
                      <Link
                        to="/"
                        className="flex justify-between"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                      >
                        <div>Host an Event</div>
                      </Link>
                    </li>
                  </div>
                )}

                <li className=" my-6">
                  <Link
                    to="/"
                    className="flex justify-between"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    <div>Help & Support</div>
                  </Link>
                </li>
                <li className=" my-6">
                  <Link
                    to="/"
                    className="flex justify-between"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    <div>Terms & Conditions</div>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="max-h-[10vh] max-w-[40vw]"
            />
          </Link>
        </nav>

        <ul className="DESKTOP-MENU hidden lg:flex font-medium justify-center gap-10 text-center">
          <div className="flex items-center text-center hover:underline ">
            <Link
              to="/host"
              className="w-full whitespace-nowrap py-2 px-3 bg-white rounded-xl"
            >
              Host an Event
            </Link>
          </div>
          {!isAuthenticated && (
            <div className="flex items-center text-center hover:underline">
              <Link
                to="/login"
                className="w-full whitespace-nowrap py-2 px-3 bg-white rounded-xl"
              >
                Login
              </Link>
            </div>
          )}
          {isAuthenticated && (
            <div className="flex items-center text-center hover:underline">
              <Link
                to="/events"
                className="w-full flex justify-between items-center gap-2 whitespace-nowrap py-2 px-3 bg-white rounded-xl"
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
              <div className="cursor-pointer py-2 px-2 bg-white rounded-xl">
                <img src={bell} alt="" />
              </div>
              <div>
                <img src={pfp} alt="" />
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
      <div className="flex flex-col gap-4 w-[50%]">
        <div className="text-white text-[2.5rem] text-center flex justify-center">
          HELP CENTER
        </div>
        <div className="flex items-center text-center md:w-full">
          <input
            type="text"
            placeholder="Ask any question...."
            className="w-full px-4 py-3 text-gray-700 bg-white bg-opacity-35 outline-none rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
});

export default Navbar;
