import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useState } from "react";

function AppLayout() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { isDark, onToggle } = useDarkMode();

  function handleToggleSideBar() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  return (
    <div
      className={`${isDark ? "dark" : "light"} grid h-screen w-screen grid-cols-[auto_1fr] overflow-hidden`}
    >
      <Sidebar isExpanded={isExpanded} />
      <div className="flex h-screen flex-col overflow-hidden">
        <NavBar
          onToggle={onToggle}
          onExpand={handleToggleSideBar}
          isDark={isDark}
        />
        <main className="dark:bg-dark-bg h-full flex-1 overflow-y-scroll bg-[#F7F7F7]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
