import SideBar from "@/components/accountsettings/SideBar";
import AccSettings from "@/components/accountsettings/AccSettings";
import PaymentCard from "@/components/accountsettings/PaymentCard";
import PaymentMethod from "@/components/accountsettings/PaymentMethod";
import { useEffect, useState } from "react";

interface AccountSettingsProps {
  defaultSettingState: string;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({
  defaultSettingState,
}) => {
  const [sidebarState, setSidebarState] = useState<string>(defaultSettingState);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isManuallyToggled, setIsManuallyToggled] = useState(false);

  const handleStateChange = (newState: string) => {
    setSidebarState(newState);
  };

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
    setIsManuallyToggled(true);
    console.log('Sidebar toggled:', !isSidebarVisible); // Debugging log
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setSidebarVisible(true);
      setIsManuallyToggled(true);
    } else if (!isManuallyToggled) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isManuallyToggled]);

  return (
    <div className="md:flex select-none w-screen items-center">
      <SideBar
        onStateChange={handleStateChange}
        initialState={sidebarState}
        isVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      {sidebarState === "acc" ? (
        <AccSettings toggleSidebar={toggleSidebar} Visible={setSidebarVisible}
        />
      ) : sidebarState === "pay" ? (
        <PaymentMethod />
      ) : sidebarState === "paycard" ? (
        <PaymentCard />
      ) : (
        ""
      )}
    </div>
  );
};

export default AccountSettings;
