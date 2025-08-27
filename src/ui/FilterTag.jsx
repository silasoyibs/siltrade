import { IoMdCloseCircle } from "react-icons/io";

function FilterTag({ tagText, className, onClick }) {
  return (
    <span
      className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${className}`}
    >
      {tagText}
      <IoMdCloseCircle className="text-xl" onClick={onClick} />
    </span>
  );
}

export default FilterTag;
