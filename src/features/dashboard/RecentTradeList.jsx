function RecentTradeList({ type, date, pair, entry, rr, result, status }) {
  return (
    <div className="grid grid-cols-6 gap-x-1 border-b-1 border-[rgba(0,0,0,0.1)] px-5 py-3">
      <span
        className={` ${type === "Long" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"} flex max-w-15 items-center justify-center rounded-lg px-2 py-1 text-sm font-medium`}
      >
        {type}
      </span>
      <span className="text-gray">{date}</span>
      <span className="text-sm font-medium">{pair}</span>
      <span className="text-gray">{entry}</span>
      <span className="text-gray justify-self-center">{rr}</span>
      <span
        className={` ${status === "Win" ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"} flex max-w-15 items-center justify-center rounded-lg px-2 py-1 text-sm font-medium`}
      >
        {status === "Win" ? `+${result}%` : `-${result}%`}
      </span>
    </div>
  );
}

export default RecentTradeList;
