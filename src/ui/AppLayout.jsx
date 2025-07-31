import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import { useState } from "react";

function AppLayout() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="grid h-screen w-screen grid-cols-[auto_1fr] overflow-hidden">
      <Sidebar isExpanded={isExpanded} />
      <div className="flex h-screen flex-col overflow-hidden">
        <NavBar setIsExpanded={setIsExpanded} />
        <main className="h-full flex-1 overflow-y-scroll bg-[#F7F7F7]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
