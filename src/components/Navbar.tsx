import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="lg:px-[10%] px-[8vw] flex flex-col md:flex-row items-left justify-between align-left py-[4vh] 2xl:text-[1.5rem] w-screen z-20 gap-8">
          <Link to="/">
            <div className="text-[3rem] font-bold">Logo.</div>
          </Link>
      <div className="flex items-center text-center md:w-[60%]">
        {" "}
        <input
          type="text"
          placeholder="Search for event..."
          className="w-full px-4 py-3 text-gray-700 bg-white bg-opacity-35 outline-none rounded-3xl"
        />
      </div>
      <nav className="flex ">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 absolute top-[6vh] right-[8vw]"
            onClick={() => setIsNavOpen((prev: boolean) => !prev)}
          >
            <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-1 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-start min-h-[250px] font-bold">
              <a href="/" className="top-0 left-0 absolute py-8 px-[10%]"></a>
              <div className="ml-[10%] mt-[25%] text-[25px]">
                <li className="my-4">
                  <Link to="/" onClick={() => setIsNavOpen((prev) => !prev)}>
                    Host an Event
                  </Link>
                </li>
                <li className=" my-4">
                  <Link
                    to="/services"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    Login
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-14 lg:flex font-medium justify-center text-center">
          <div className="flex items-center text-center">Host an Event</div>
          <div className="flex items-center text-center">Login</div>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
      }
    `}</style>
    </div>
  );
}

export default Navbar;
