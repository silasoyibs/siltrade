import AiInsight from "../features/dashboard/AiInsight";
import PerformanceTrends from "../features/dashboard/PerformanceTrends";
import RecentTrades from "../features/dashboard/RecentTrades";
import StatsOverview from "../features/dashboard/StatsOverview";

function Dashboard() {
  return (
    <div className="p-5">
      <div className="mb-5">
        <p className="mb-7 text-lg font-medium dark:text-white">
          Key Stats Overview
        </p>
        <StatsOverview />
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_20rem]">
        <div className="overflow-x-auto">
          <RecentTrades />
          <PerformanceTrends />
        </div>
        <AiInsight />
      </div>
    </div>
  );
}

export default Dashboard;
