import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import RecentTradeList from "./RecentTradeList";
import SkeletonLoader from "../../ui/skeletonLoader";
import { useRecentTrades } from "./useRecentTrades";

function RecentTrades() {
  const { recentTrades, isPending } = useRecentTrades();

  return (
    <Card className={"h-min"}>
      <div className="flex justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5">
        <span className="text-lg font-medium">Recent Trades</span>
        <NavLink to="/journal" className={"text-primary font-medium"}>
          View All
        </NavLink>
      </div>
      <div className="text-gray grid grid-cols-6 justify-items-center gap-x-1 border-b-1 border-[rgba(0,0,0,0.1)] bg-[#f7f7f7] px-5 py-3 text-sm">
        <span>TYPE</span>
        <span>DATE</span>
        <span>PAIR</span>
        <span>ENTRY/EXIT</span>
        <span>R:R</span>
        <span>RESULT</span>
      </div>
      {isPending && <SkeletonLoader />}
      {recentTrades?.map((trade) => (
        <RecentTradeList key={trade.id} trade={trade} />
      ))}
    </Card>
  );
}

export default RecentTrades;
