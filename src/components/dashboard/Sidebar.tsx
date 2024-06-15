import { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  const [isDropOpen, setIsDropOpen] = useState(false);
  return (
    <div className="w-[25%] max-w-[320px] rounded-xl p-12 bg-gray-400 text-xl text-black">
      <ul className="flex flex-col gap-y-10  ">
        <li>
          <h1>Overview</h1>
        </li>
        <li>
          <h2>Profile</h2>
        </li>
        <li>
          <div className="flex justify-between items-center">
            <button
              className={`flex justify-between w-full transition-all duration-300 `}
              onClick={() => setIsDropOpen((prev) => !prev)}
            >
              Help & Support
            </button>
            <div
              className={`${
                isDropOpen ? "" : "-rotate-90 transition-all duration-200"
              }`}
            >
              <svg
                width="14"
                height="8"
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
              // onClick={() => setIsNavOpen(false)}
            >
              Help Center
            </Link>
            <Link
              to="/contactus"
              className="block px-4 py-2 hover:bg-gray-100 text-[1.1rem]"
              // onClick={() => setIsNavOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </li>
        <li>
          <h2>Dashboard</h2>
        </li>
        <li>
          <h2>Payouts</h2>
        </li>
        <li>
          <h2>Followers</h2>
        </li>
        <li>
          <h2>Payouts</h2>
        </li>
        <li>
          <h2>Payouts</h2>
        </li>
      </ul>

      <button className="mt-16 font-medium">LOGOUT</button>
    </div>
  );
}

export default Sidebar;
