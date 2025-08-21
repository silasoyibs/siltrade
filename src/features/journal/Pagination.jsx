import Button from "../../ui/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function Pagination() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Handlers
  function handleNextPage() {
    setCurrentPage((p) =>
      Math.min(p + 1, Math.ceil(totalCount / itemsPerPage)),
    );
  }
  function handlePrevPage() {
    setCurrentPage((p) => Math.max(p - 1, 1));
  }

  // How many trades are currently shown
  const shownCount = Math.min(currentPage * itemsPerPage, totalCount);

  return (
    <div className="mt-1">
      {/* Pagination controls */}
      <div className="flex items-center justify-between">
        <span className="text-sm">
          Showing <strong>{shownCount}</strong> out of{" "}
          <strong>{totalCount}</strong> trades
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
            disabled={shownCount >= totalCount}
          >
            Next <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
