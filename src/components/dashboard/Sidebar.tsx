import { useStore } from "@/hooks/useStore";
import { cn } from "@/utils";
import { ChevronRight } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Link } from "react-router-dom";

const routes = [
  { name: "Overview", path: "/dashboard" },
  { name: "Profile", path: "/dashboard/profile" },
  {
    name: "Events",
    subRoutes: [
      { name: "Available to rep", path: "/dashboard/events" },
      {
        name: "Currently Repping",
        path: "/dashboard/events/currently-repping",
      },
      { name: "Repped in Past", path: "/dashboard/events/repped-in-past" },
    ],
  },
  { name: "Dashboard", path: "/dashboard" },
  {
    name: "Payouts",
    subRoutes: [
      { name: "My payouts", path: "/dashboard/payout" },
      {
        name: "Change payout method",
        path: "/dashboard/payout/payments-method",
      },
    ],
  },
  { name: "Following", path: "/dashboard/following" },
  { name: "Representing organizers", path: "#" },
  { name: "Help & Support", path: "/help" },
  { name: "FAQs", path: "#" },
];

type DropdownsState = {
  [index: number]: boolean;
};

const Sidebar = observer(
  ({
    className,
    onRouteClicked,
  }: {
    className?: string;
    onRouteClicked?: () => void;
  }) => {
    const {
      root: { auth },
    } = useStore();
    const [openDropdowns, setOpenDropdowns] = useState<DropdownsState>({});

    const toggleDropdown = (index: number) => {
      setOpenDropdowns((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    };
    return (
      <aside
        className={cn(
          "w-[280px] rounded-xl p-8 bg-gray-400 text-xl text-black",
          className
        )}
      >
        <ul className="flex flex-col gap-8 items-start">
          {routes.map((route, index) => (
            <li key={index}>
              {route.subRoutes ? (
                <>
                  <button
                    className={cn(
                      "flex px-4 py-2 w-full items-center gap-1 transition-all duration-300 hover:bg-[#647A9A] rounded-lg hover:text-white",
                      {
                        "bg-[#647A9A] text-white": openDropdowns[index],
                      }
                    )}
                    onClick={() => toggleDropdown(index)}
                  >
                    {route.name}
                    <ChevronRight
                      className={cn("size-5", {
                        "rotate-90": openDropdowns[index],
                      })}
                    />
                  </button>
                  <div
                    className={cn(
                      "w-full max-h-0 pt-2 overflow-hidden transition-all duration-200 space-y-2",
                      {
                        "max-h-28": openDropdowns[index],
                      }
                    )}
                  >
                    {route.subRoutes.map((subRoute, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subRoute.path}
                        className="block px-4 hover:text-[#647A9A] text-[1.1rem]"
                        onClick={onRouteClicked}
                      >
                        {subRoute.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={route.path}
                  className="block px-4 py-2 hover:text-[#647A9A] rounded-lg"
                  onClick={onRouteClicked}
                >
                  {route.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          className="px-4 mt-16 font-semibold"
          onClick={() => auth.logout()}
        >
          Logout
        </button>
      </aside>
    );
  }
);

export default Sidebar;
