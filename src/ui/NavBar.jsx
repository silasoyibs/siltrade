import { CgMenuLeftAlt } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { IoIosSearch, IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import iconMoon from "../assets/moon.svg";
import iconSun from "../assets/sun.svg";
import { useSignOut } from "../features/authentication/useSignOut";
import { useCurrentUser } from "../features/authentication/useCurrentUser";

function NavBar({ onExpand, onToggle, isDark }) {
  const { signout, isSigningOut } = useSignOut();
  const { user } = useCurrentUser();

  return (
    <div className="dark:bg-dark-shade flex h-16 items-center justify-between border-b-1 border-[rgba(0,0,0,0.1)] bg-white px-3 shadow-sm">
      <button
        onClick={onExpand}
        className="dark:bg-dark-bg rounded-lg border-[1px] border-[rgba(0,0,0,0.2)] bg-gray-100 p-2"
      >
        <CgMenuLeftAlt className="text-lg font-extrabold dark:text-white" />
      </button>
      {/* search bar */}
      <div className="relative">
        <IoMdSearch className="absolute top-[11px] left-2 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="focus:ring-primary right-1 rounded-lg border-1 border-[rgba(0,0,0,0.2)] px-9 py-2 focus:ring-1 focus:outline-none dark:bg-[#374151] dark:placeholder:text-[rgba(255,255,255,0.5)]"
        />
      </div>

      <div className="flex items-center gap-5 pr-10">
        <button onClick={onToggle}>
          <img src={isDark ? iconSun : iconMoon} className="h-8" />
        </button>
        <div className="dark:bg-dark-bg relative rounded-md border-[1px] border-[rgba(0,0,0,0.2)] p-2 shadow">
          <IoNotificationsOutline className="text-xl dark:text-white" />
          <span className="absolute top-[-5px] right-[-8px] flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm text-white">
            1
          </span>
        </div>
        <figure className="flex items-center gap-2">
          <img
            className="h-10 w-10 rounded-full"
            src="src/assets/team-bg-img.jpg"
          />
          <span className="font-semibold dark:text-white">{user.email}</span>
        </figure>
        <button
          className="dark:bg-dark-bg rounded-md border-[1px] border-[rgba(0,0,0,0.2)] p-2 shadow"
          onClick={signout}
          disabled={isSigningOut}
        >
          {isSigningOut ? (
            "Logging out.."
          ) : (
            <GoSignOut className="text-xl dark:text-white" />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
