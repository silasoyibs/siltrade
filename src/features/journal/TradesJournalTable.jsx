import { useSearchParams } from "react-router-dom";
import Card from "../../ui/Card";
import TradeJournalRow from "./TradeJournalRow";
import Button from "../../ui/Button";
import { IoMdAddCircle } from "react-icons/io";
import { useTrades } from "./useTrades";
import Modal from "../../ui/Modal";
import JournalForm from "./JournalForm";
import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import SkeletonLoader from "../../ui/skeletonLoader";
import Pagination from "./Pagination";
import { ITEMS_PER_PAGE } from "../../utils/constants";

function TradesJournalTable() {
  const [isOpen, setIsOpen] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const { trades, isPending, totalCount } = useTrades(
    currentPage,
    ITEMS_PER_PAGE,
  );

  const totalNumTrades = trades?.length;

  function handleCloseModal() {
    setIsOpen(false);
  }
  function handleOpenModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    console.log(totalCount, trades, currentPage, totalNumTrades);
  }, [totalCount, trades, currentPage, totalNumTrades]);

  // filtering trades based on status
  const filterTradeValue = searchParams.get("trade-status") || "All";
  let filteredTrades;
  if (filterTradeValue === "All") filteredTrades = trades;
  if (filterTradeValue === "Win")
    filteredTrades = trades.filter((trade) => trade.status === "Win");
  if (filterTradeValue === "Loss")
    filteredTrades = trades.filter((trade) => trade.status === "Loss");
  // filtering trades based on date
  const dateFilterValue = searchParams.get("date-range") || "All";
  const now = new Date();
  if (dateFilterValue === "This month") {
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    filteredTrades = filteredTrades.filter(
      (trade) => new Date(trade.date) >= startOfMonth,
    );
  }
  if (dateFilterValue === "Last 30 days") {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(now.getDate() - 30);
    filteredTrades = filteredTrades.filter(
      (trade) => new Date(trade.date) >= thirtyDaysAgo,
    );
  }
  if (dateFilterValue === "Last 90 days") {
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(now.getDate() - 90);
    filteredTrades = filteredTrades.filter(
      (trade) => new Date(trade.date) >= ninetyDaysAgo,
    );
  }

  return (
    <>
      <Card>
        <div
          role="table"
          className="flex min-w-[200px] justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5"
        >
          <span className="text-lg font-medium">All Trades</span>
          <Button className={"!my-0 max-w-35"} onClick={() => setIsOpen(true)}>
            <IoMdAddCircle />
            Add Trade
          </Button>
        </div>
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
          {isPending && <SkeletonLoader />}
          {filteredTrades?.map((trade) => (
            <TradeJournalRow
              trade={trade}
              key={trade.id}
              handleOpenModal={handleOpenModal}
            />
          ))}
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
