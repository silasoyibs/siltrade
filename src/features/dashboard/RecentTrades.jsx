import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import RecentTradeList from "./RecentTradeList";
import SkeletonLoader from "../../ui/skeletonLoader";
import { useRecentTrades } from "./useRecentTrades";
import EmptyStateRecentTrade from "./EmptyStateRecentTrade";

function RecentTrades() {
  const { recentTrades, isPending } = useRecentTrades();

  return (
    <Card className={"w-full"}>
      <div className="flex justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5">
        <span className="text-lg font-medium dark:text-white">
          Recent Trades
        </span>
        <NavLink to="/journal" className={"text-primary font-medium"}>
          View All
        </NavLink>
      </div>
      <div className="text-gray grid grid-cols-6 justify-items-center gap-x-1 overflow-x-auto border-b-1 border-[rgba(0,0,0,0.1)] bg-[#f7f7f7] px-5 py-3 text-sm dark:bg-[#2B3544]">
        <span>TYPE</span>
        <span>DATE</span>
        <span>PAIR</span>
        <span>ENTRY/EXIT</span>
        <span>R:R</span>
        <span>RESULT</span>
      </div>
      {/* Trade Loading State */}
      {isPending && <SkeletonLoader />}
      {/* Trade Empty State */}
      {!isPending && recentTrades?.length === 0 && <EmptyStateRecentTrade />}
      {/* Trade Full Data */}
      {recentTrades?.map((trade) => (
        <RecentTradeList key={trade.id} trade={trade} />
      ))}
    </Card>
  );
}

export default RecentTrades;
