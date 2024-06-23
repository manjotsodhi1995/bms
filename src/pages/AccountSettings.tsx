import SideBar from "@/components/accountsettings/SideBar";
import AccSettings from "@/components/accountsettings/AccSettings";
import PaymentCard from "@/components/accountsettings/PaymentCard";
import PaymentMethod from "@/components/accountsettings/PaymentMethod";
import { useState } from "react";

interface AccountSettings {
  defaultSettingState: string;
}

const AccountSettings: React.FC<AccountSettings> = ({defaultSettingState}) => {
  const [sidebarState, setSidebarState] = useState<string>(defaultSettingState);
  const handleStateChange = (newState: string) => {
    setSidebarState(newState);
  }

  return (
    <div className="flex flex-col sm:flex-row select-none w-screen items-center h-fit">
        <SideBar onStateChange={handleStateChange} initialState={sidebarState}/>
        {sidebarState === "acc"? <AccSettings/>:sidebarState === "pay"? <PaymentMethod/>:sidebarState === "paycard"? <PaymentCard/>: "" }
    </div>
  )
}

export default AccountSettings