import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ITEMS_PER_PAGE } from "../../utils/constants";

export function Pagination({
  currentPage,
  totalCount,
  totalNumTrades,
  setCurrentPage,
}) {
  const shownSoFar = (currentPage - 1) * ITEMS_PER_PAGE + totalNumTrades;

  // Handlers update the query param `page`
  function handleNextPage() {
    // setCount((currCount) => currCount + count);
    setCurrentPage((c) => c + 1);
  }

  function handlePrevPage() {
    setCurrentPage((c) => c - 1);
    // if (currentPage > 1) {
    //   setSearchParams((prev) => {
    //     const params = new URLSearchParams(prev);
    //     params.set("page", currentPage - 1);
    //     return params;
    //   });
    // }
  }

  // // How many trades are currently shown
  // const shownCount = Math.min(currentPage * itemsPerPage, totalCount);
  // const startCount = (currentPage - 1) * itemsPerPage + 1;

  return (
    <div className="mt-1">
      {/* Pagination controls */}
      <div className="flex items-center justify-between">
        <span className="text-sm dark:text-white">
          Showing
          <strong className="px-1">{shownSoFar}</strong>
          of <strong>{totalCount}</strong> trades
        </span>
        <div className="flex gap-4">
          <Button
            onClick={handlePrevPage}
            className={
              "hover:bg-primary !gap-0 border-1 border-[rgba(0,0,0,0.2)] bg-transparent px-3 text-sm !text-gray-500 hover:!text-white"
            }
            disabled={currentPage === 1}
          >
            <IoIosArrowBack />
            Prev
          </Button>

          <Button
            className={
              "hover:bg-primary !gap-0 border-1 border-[rgba(0,0,0,0.2)] bg-transparent px-3 text-sm !text-gray-500 hover:!text-white"
            }
            onClick={handleNextPage}
            disabled={shownSoFar === totalCount}
          >
            Next <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
