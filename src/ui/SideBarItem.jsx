import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SiderBarContext } from "../contexts/SideBarContext";

function SideBarItem({ text, link, icon }) {
  const isExpanded = useContext(SiderBarContext);
  return (
    <li
      className={`hover:bg-primary rounded-lg transition-all hover:text-white`}
    >
      <NavLink
        to={`/${link}`}
        className={({ isActive }) =>
          `${isActive ? "bg-primary font-medium text-white" : ""} ${!isExpanded ? "justify-center py-3 pl-2" : "p-3"} flex items-center gap-3 rounded-lg`
        }
      >
        {icon}
        <span>{isExpanded && text}</span>
      </NavLink>
    </li>
  );
}

export default SideBarItem;
