function TableHeader({ children }) {
  return (
    <div
      role="row"
      className="text-gray grid grid-cols-10 justify-items-center gap-x-1 border-b-1 border-[rgba(0,0,0,0.1)] bg-[#f7f7f7] px-5 py-3 text-sm dark:bg-[#2B3544]"
    >
      {children}
    </div>
  );
}

export default TableHeader;
