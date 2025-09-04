import { FaBook, FaChartPie, FaRobot } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiDashboard3Fill } from "react-icons/ri";
import SideBarItem from "./SideBarItem";
import Profile from "./Profile";

function SideBarMenu() {
  return (
    <nav className="flex flex-col gap-3 border-t-1 border-[rgba(0,0,0,0.1)] px-3 pt-10 dark:text-white">
      {/* item 1 */}
      <SideBarItem
        text="Dashboard"
        link="dashboard"
        icon={<RiDashboard3Fill className="text-xl" />}
      />
      {/* item 2 */}
      <SideBarItem
        text="Market Analysis"
        link="analysis"
        icon={<FaChartPie className="text-xl" />}
      />
      {/* item 3 */}
      <SideBarItem
        text="Trade Journal"
        link="journal"
        icon={<FaBook className="text-xl" />}
      />
      {/* item 4 */}
      <SideBarItem
        text="Ai Insights"
        link="insights"
        icon={<FaRobot className="text-xl" />}
      />
      {/* item 5 */}
      <SideBarItem
        text="Settings"
        link="settings"
        icon={<IoMdSettings className="text-xl" />}
      />
      <Profile type="sidebar" />
    </nav>
  );
}

export default SideBarMenu;
