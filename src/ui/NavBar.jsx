import { CgMenuLeftAlt } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { IoIosSearch, IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

function NavBar({ setIsExpanded }) {
  function handleToggleSideBar() {
    setIsExpanded((isExpanded) => !isExpanded);
  }
  return (
    <div className="flex h-16 items-center justify-between border-b-1 border-[rgba(0,0,0,0.1)] bg-white px-3 shadow-sm">
      <button
        onClick={handleToggleSideBar}
        className="rounded-lg border-[1px] border-[rgba(0,0,0,0.2)] bg-gray-100 p-2"
      >
        <CgMenuLeftAlt className="text-lg font-extrabold" />
      </button>
      {/* search bar */}
      <div className="relative">
        <IoMdSearch className="absolute top-[11px] left-2 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="focus:ring-primary right-1 rounded-md border-1 border-[rgba(0,0,0,0.2)] px-9 py-2 focus:ring-1 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-5 pr-10">
        <div className="relative rounded-md border-[1px] border-[rgba(0,0,0,0.2)] p-2 shadow">
          <IoNotificationsOutline className="text-xl" />
          <span className="absolute top-[-5px] right-[-8px] flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm text-white">
            1
          </span>
        </div>
        <figure className="flex items-center gap-2">
          <img
            className="h-10 w-10 rounded-full"
            src="src/assets/team-bg-img.jpg"
          />
          <span className="font-semibold"> Silas Oyibo</span>
        </figure>
        <button className="rounded-md border-[1px] border-[rgba(0,0,0,0.2)] p-2 shadow">
          <GoSignOut className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
