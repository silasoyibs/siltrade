import Card from "../../ui/Card";
import { useTrades } from "../journal/useTrades";
import EmptyPerformanceChart from "./EmptyPerformanceChart";
import PerformanceChart from "./PerformanceChart";

function PerformanceTrends() {
  const { trades, isPending } = useTrades();

  return (
    <Card className={`mt-5 overflow-hidden`}>
      <div className="flex justify-between border-b-1 border-[rgba(0,0,0,0.1)] p-5">
        <span className="text-lg font-medium dark:text-white">
          Performance Trends
        </span>

        <div
          className={`${!isPending && trades?.length === 0 ? "hidden" : "flex items-center justify-center gap-5"} `}
        >
          <span className="text-primary-500 bg-primary-100 dark:bg-dark-red-shade flex max-w-15 items-center justify-center rounded-lg px-2 py-1 text-sm font-medium">
            Week
          </span>
          <span className="text-gray text-sm font-medium">Month</span>
          <span className="text-gray text-sm font-medium">Year</span>
        </div>
      </div>
      {/* Empty State */}
      {!isPending && trades?.length === 0 && <EmptyPerformanceChart />}
      {/* Full data */}
      {trades?.length > 0 && <PerformanceChart />}
    </Card>
  );
}

export default PerformanceTrends;
