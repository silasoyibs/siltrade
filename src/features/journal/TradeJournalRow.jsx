import { FaEdit } from "react-icons/fa";
import {
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowUp,
} from "react-icons/hi";
import { MdCheck, MdDelete, MdOutlineClose } from "react-icons/md";
import { useDeleteTrade } from "./useDeleteTrade";
import { useJournal } from "../../contexts/JournalContext";
import { formatJournalTradeDate } from "../../utils/helpers";

function TradeJournalRow({ trade, handleOpenModal }) {
  const {
    id: tradeId,
    type,
    date,
    entry,
    exit,
    stopLoss,
    pair,
    result,
    riskToReward,
    status,
    notes,
  } = trade;
  const { setJournal } = useJournal();
  const { deleteTrade } = useDeleteTrade();
  return (
    <div
      role="row"
      className="grid grid-cols-10 justify-items-center gap-x-1 border-b-1 border-[rgba(0,0,0,0.1)] px-5 py-3"
    >
      <span
        className={` ${type === "Long" ? "dark:bg-dark-green-shade bg-green-100 text-green-500" : "dark:bg-dark-red-shade bg-red-100 text-red-500"} flex max-w-17 items-center justify-center rounded-lg px-2 py-1 text-sm font-medium`}
      >
        {type === "Long" ? (
          <HiOutlineArrowNarrowUp />
        ) : (
          <HiOutlineArrowNarrowDown />
        )}
        {type}
      </span>
      <span className="text-gray">{formatJournalTradeDate(date)}</span>
      <span className="text-sm font-medium dark:text-white">{pair}</span>
      <span className="text-gray">{`${entry}/${exit}`}</span>
      <span className="text-gray justify-self-center">{stopLoss}</span>
      <span
        className={` ${status === "Win" ? "dark:bg-dark-green-shade bg-green-100 text-green-500" : "dark:bg-dark-red-shade bg-red-100 text-red-500"} flex items-center justify-self-center rounded-lg px-2 pl-1 text-sm font-medium`}
      >
        {status === "Win" ? <MdCheck /> : <MdOutlineClose />}
        {status}
      </span>

      <span className="text-gray justify-self-center">{riskToReward}</span>
      <span
        className={`${status === "Win" ? "dark:bg-dark-green-shade bg-green-100 text-green-500" : "dark:bg-dark-red-shade bg-red-100 text-red-500"} flex max-w-15 items-center rounded-lg px-2 py-1 text-sm font-medium`}
      >
        {status === "Win" ? `+${result}%` : `-${result}%`}
      </span>
      <span className="w-full truncate dark:text-white">{notes}</span>
      <div className="flex gap-2">
        <button
          onClick={() => {
            handleOpenModal();
            setJournal(trade);
          }}
        >
          <FaEdit className="text-primary text-xl" />
        </button>
        <button onClick={() => deleteTrade(tradeId)}>
          <MdDelete className="text-xl text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default TradeJournalRow;
