import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SiderBarContext } from "../contexts/SideBarContext";

function SideBarItem({ text, link, icon }) {
  const isExpanded = useContext(SiderBarContext);
  return (
    <li
      className={`hover:bg-primary-100 hover:dark:bg-dark-primary-shade hover:text-primary rounded-lg transition-all`}
    >
      <NavLink
        to={`/${link}`}
        className={({ isActive }) =>
          `${isActive ? "bg-primary-100 dark:bg-dark-primary-shade text-primary font-medium" : ""} ${!isExpanded ? "justify-center py-3 pl-2" : "p-3"} flex items-center gap-3 rounded-lg`
        }
      >
        {icon}
        <span>{isExpanded && text}</span>
      </NavLink>
    </li>
  );
}

export default SideBarItem;
