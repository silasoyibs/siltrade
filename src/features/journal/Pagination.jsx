import Button from "../../ui/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function Pagination({
  currentPage,
  totalCount,
  itemsPerPage,
  setSearchParams,
  totalNumTrades,
}) {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  // Handlers update the query param `page`
  function handleNextPage() {
    if (currentPage < totalPages) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("page", currentPage + 1);
        return params;
      });
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("page", currentPage - 1);
        return params;
      });
    }
  }

  // // How many trades are currently shown
  // const shownCount = Math.min(currentPage * itemsPerPage, totalCount);
  // const startCount = (currentPage - 1) * itemsPerPage + 1;

  return (
    <div className="mt-1">
      {/* Pagination controls */}
      <div className="flex items-center justify-between">
        <span className="text-sm">
          Showing
          <strong className="px-1">{totalNumTrades}</strong>
          of <strong>{totalCount}</strong> trades
        </span>
        <div className="flex gap-4">
          <Button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={
              "hover:bg-primary !gap-0 border-1 border-[rgba(0,0,0,0.2)] bg-transparent px-3 text-sm !text-gray-500 hover:!text-white"
            }
          >
            <IoIosArrowBack />
            Prev
          </Button>

          <Button
            className={
              "hover:bg-primary !gap-0 border-1 border-[rgba(0,0,0,0.2)] bg-transparent px-3 text-sm !text-gray-500 hover:!text-white"
            }
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
