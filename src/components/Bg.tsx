import { useLocation } from "react-router-dom";
export default function Bg() {
  const excludedRoutes = [
    "/login",
    "/register",
    "/forgot",
    "/help",
    "/helpdetail",
    "/settings",
    "/payment"
  ];
  const location = useLocation();
  const showNavbar = !excludedRoutes.includes(location.pathname);
  return (
    showNavbar && (
      <div className="overflow-x-hidden max-w-screen -z-20">
        <div className="overflow-x-hidden absolute rounded-full w-[70vw] h-[70vw] bg-gradient-to-br from-[#A87863] via-[#C68D55] to-[#C5C168] animate-float -z-30 top-[-50vw] left-[-25vw]"></div>
        <div className=" overflow-x-hidden absolute rounded-full w-[40vw] h-[40vw] bg-gradient-to-br from-[#63a878] via-[#5593c6] to-[#c5689d] animate-float -z-30 top-[80vh] left-[-20vw]"></div>{" "}
      </div>
    )
  );
}
