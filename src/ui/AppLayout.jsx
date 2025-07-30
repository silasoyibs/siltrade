import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import { useState } from "react";

function AppLayout() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className="grid h-screen grid-cols-[auto_1fr]">
      <Sidebar isExpanded={isExpanded} />
      <div>
        <NavBar setIsExpanded={setIsExpanded} />
        <main className="h-screen bg-[#F7F7F7]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
