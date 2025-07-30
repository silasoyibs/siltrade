import Logo from "./Logo";
import SideBarMenu from "./SideBarMenu";
import { SiderBarContext } from "../contexts/SideBarContext";

function SideBar({ isExpanded }) {
  return (
    <div
      className={`${isExpanded ? "w-70" : "w-20"} overflow-hidden border-r-1 border-[rgba(0,0,0,0.1)] bg-white shadow-sm transition-all`}
    >
      <div className="flex h-16 items-center justify-between pr-4">
        <Logo
          dark={isExpanded ? true : false}
          symbol={isExpanded ? false : true}
          className={`${isExpanded ? "w-[170px]" : "w-32"} overflow-hidden px-3 transition-all`}
        />
      </div>
      <SiderBarContext.Provider value={isExpanded}>
        <SideBarMenu />
      </SiderBarContext.Provider>
    </div>
  );
}

export default SideBar;
