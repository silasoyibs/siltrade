import Logo from "./Logo";
import SideBarMenu from "./SideBarMenu";
import { SiderBarContext } from "../contexts/SideBarContext";
import LogoMini from "./LogoMini";

function SideBar({ isExpanded, showMobileSideBar }) {
  return (
    <div
      className={`${isExpanded ? "w-60" : "w-20"} ${showMobileSideBar ? "block" : "hidden lg:block"} dark:bg-dark-shade overflow-hidden border-r-1 border-[rgba(0,0,0,0.1)] bg-white shadow-sm transition-all`}
    >
      <div className="flex h-16 items-center justify-between pr-4">
        {isExpanded ? (
          <Logo className="w-[170px] overflow-hidden px-3 transition-all" />
        ) : (
          <LogoMini className="ml-3 w-[50px]" />
        )}
      </div>
      <SiderBarContext.Provider value={isExpanded}>
        <SideBarMenu />
      </SiderBarContext.Provider>
    </div>
  );
}

export default SideBar;
