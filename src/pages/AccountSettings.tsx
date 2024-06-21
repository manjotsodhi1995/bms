import SideBar from "@/components/accountsettings/SideBar";
import AccSettings from "@/components/accountsettings/AccSettings";
import PaymentMethod from "@/components/accountsettings/PaymentMethod";
import { useState } from "react";

const AccountSettings = () => {
  const [sidebarState, setSidebarState] = useState<string>("acc");
  const handleStateChange = (newState: string) => {
    setSidebarState(newState);
  }

  return (
    <div className="flex flex-col sm:flex-row select-none w-screen">
        <SideBar onStateChange={handleStateChange}/>
        {sidebarState === "acc"? <AccSettings/>:sidebarState === "pay"? <PaymentMethod/>:"" }
        {/* <div className="h-full"></div> */}
    </div>
  )
}

export default AccountSettings