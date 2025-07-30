import { FaBook, FaChartPie, FaRobot } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiDashboard3Fill } from "react-icons/ri";
import SideBarItem from "./SideBarItem";

function SideBarMenu() {
  return (
    <nav className="flex flex-col gap-3 border-t-1 border-[rgba(0,0,0,0.1)] px-3 pt-10">
      {/* item 1 */}
      <SideBarItem
        text="Dashboard"
        link="dashboard"
        icon={<RiDashboard3Fill />}
      />
      {/* item 2 */}
      <SideBarItem
        text="Market Analysis"
        link="analysis"
        icon={<FaChartPie />}
      />
      {/* item 3 */}
      <SideBarItem text="Trade Journal" link="journal" icon={<FaBook />} />
      {/* item 4 */}
      <SideBarItem text="Settings" link="journal" icon={<IoMdSettings />} />
    </nav>
  );
}

export default SideBarMenu;
