import PayoutHome from "@/components/dashboard/PayoutHome";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

function PayOutD() {
  return (
    <div className="flex p-2 w-full  gap-8 justify-start">
      <Sidebar />
      <div className="w-full max-w-[1300px] mx-auto flex gap-8 flex-col">
        <TopBar />
        {/* <Payouts /> */}
        <PayoutHome />
      </div>
    </div>
  );
}

export default PayOutD;
