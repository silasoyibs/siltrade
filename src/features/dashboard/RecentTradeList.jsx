import {
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowUp,
} from "react-icons/hi";
import { formatJournalTradeDate } from "../../utils/helpers";

function RecentTradeList({ trade }) {
  const { type, date, entry, exit, pair, result, riskToReward, status } = trade;
  return (
    <div className="grid grid-cols-6 justify-items-center gap-x-1 border-b-1 border-[rgba(0,0,0,0.1)] px-5 py-3">
      <span
        className={` ${type === "Long" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"} flex max-w-18 items-center justify-center rounded-lg px-2 py-1 text-sm font-medium`}
      >
        {type === "Long" ? (
          <HiOutlineArrowNarrowUp />
        ) : (
          <HiOutlineArrowNarrowDown />
        )}
        {type}
      </span>
      <span className="text-gray">{formatJournalTradeDate(date)}</span>
      <span className="text-sm font-medium">{pair}</span>
      <span className="text-gray">{`${entry}/${exit}`}</span>
      <span className="text-gray justify-self-center">{riskToReward}</span>
      <span
        className={` ${status === "Win" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"} flex max-w-15 items-center justify-center rounded-lg px-2 py-1 text-sm font-medium`}
      >
        {status === "Win" ? `+${result}%` : `-${result}%`}
      </span>
    </div>
  );
}

export default RecentTradeList;
