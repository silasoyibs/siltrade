import { CgMenuLeftAlt } from "react-icons/cg";

function NavBar({ setIsExpanded }) {
  function handleToggleSideBar() {
    setIsExpanded((isExpanded) => !isExpanded);
  }
  return (
    <div className="flex h-16 items-center justify-between border-b-1 border-[rgba(0,0,0,0.1)] bg-white px-3 shadow-sm">
      <button
        onClick={handleToggleSideBar}
        className="rounded-lg bg-gray-100 p-1.5"
      >
        <CgMenuLeftAlt className="text-lg font-extrabold" />
      </button>
    </div>
  );
}

export default NavBar;
