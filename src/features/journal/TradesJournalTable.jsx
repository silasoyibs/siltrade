import { useSearchParams } from "react-router-dom";
import Card from "../../ui/Card";
import TradeJournalRow from "./TradeJournalRow";
import Button from "../../ui/Button";
import { IoMdAddCircle } from "react-icons/io";
import { usePaginatedTrades } from "./useTrades";
import Modal from "../../ui/Modal";
import JournalForm from "./JournalForm";
import { useState } from "react";
import TableHeader from "./TableHeader";

import Pagination from "./Pagination";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import EmptyJournalTrade from "./EmptyJournalTrade";
import SkeletonLoader from "../../ui/SkeletonLoader";

function TradesJournalTable() {
  const [isOpen, setIsOpen] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const filterTradeValue = searchParams.get("trade-status") || "All";
  const dateFilterValue = searchParams.get("date-range") || "All";
  const { trades, isPending, totalCount } = usePaginatedTrades(
    currentPage,
    ITEMS_PER_PAGE,
    { status: filterTradeValue, dateRange: dateFilterValue },
  );
  const totalNumTrades = trades?.length;
  function handleCloseModal() {
    setIsOpen(false);
  }
  function handleOpenModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Card>
        <div
          role="table"
          className="flex min-w-[200px] justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5"
        >
          <span className="text-lg font-medium dark:text-white">
            All Trades
          </span>
          <Button className={"!my-0 max-w-35"} onClick={() => setIsOpen(true)}>
            <IoMdAddCircle />
            Add Trade
          </Button>
        </div>
        <div className="custom-scrollbar overflow-x-auto">
          {/* 900px */}
          <div className="min-w-[1200px]">
            <TableHeader>
              <div>TYPE</div>
              <div>DATE</div>
              <div>PAIR</div>
              <div>ENTRY/EXIT</div>
              <div>STOPLOSS</div>
              <div>STATUS</div>
              <div> R:R</div>
              <div>RESULT</div>
              <div>NOTES</div>
              <div>ACTION</div>
            </TableHeader>

            <div>
              {/* Loading State */}
              {isPending && <SkeletonLoader />}
              {/* Empty State */}
              {!isPending && !trades?.length && <EmptyJournalTrade />}
              {/* All Trade Full Data */}
              {trades?.map((trade) => (
                <TradeJournalRow
                  trade={trade}
                  key={trade.id}
                  handleOpenModal={handleOpenModal}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Pagination
        totalNumTrades={totalNumTrades}
        totalCount={totalCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {isOpen && (
        <Modal>
          <JournalForm handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}

export default TradesJournalTable;
