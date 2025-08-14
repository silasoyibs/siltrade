import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import TradeJournalRow from "./TradeJournalRow";
import Button from "../../ui/Button";
import { IoMdAddCircle } from "react-icons/io";
import { useTrades } from "./useTrades";
import Modal from "../../ui/Modal";
import JournalForm from "./JournalForm";
import { useState } from "react";
import TableHeader from "./TableHeader";
import SkeletonLoader from "../../ui/skeletonLoader";

function TradesJournalTable() {
  const [isOpen, setIsOpen] = useState();
  const { trades, isPending } = useTrades();
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
          <span className="text-lg font-medium">All Trades</span>

          <Button className={"!my-0 max-w-35"} onClick={() => setIsOpen(true)}>
            {" "}
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
          {trades?.map((trade) => (
            <TradeJournalRow
              trade={trade}
              key={trade.id}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </Card>
      {isOpen && (
        <Modal>
          <JournalForm handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}

export default TradesJournalTable;
